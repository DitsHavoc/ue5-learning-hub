
(() => {
'use strict';
const cfg = window.UE5_SUPABASE_CONFIG || {};
const configured = Boolean(cfg.url && cfg.publishableKey && window.supabase?.createClient);
const microsoftEnabled = configured && cfg.microsoftEnabled === true;
const emailAuthEnabled = configured && cfg.emailAuthEnabled !== false;
const PENDING_CLASS_KEY = 'ue5hub:v3:pending-class-code';
const PENDING_TEACHER_KEY = 'ue5hub:v3:pending-teacher-code';
const PENDING_TEACHER_INVITE_KEY = 'ue5hub:v3:pending-teacher-invite';
const client = configured ? window.supabase.createClient(cfg.url, cfg.publishableKey) : null;

const api = {
  mode: configured ? 'cloud' : 'local',
  microsoftEnabled,
  emailAuthEnabled,
  recoveryMode: false,
  client,
  user: null,
  profile: null,
  listeners: [],
  async init(){
    if(!client){ this.emit(); return; }
    const {data:{session}} = await client.auth.getSession();
    this.user = session?.user || null;
    if(this.user) await this.loadProfile();
    client.auth.onAuthStateChange(async (event,session)=>{
      this.user = session?.user || null;
      this.profile = null;
      this.recoveryMode = event === 'PASSWORD_RECOVERY';
      if(this.user) {
        await this.loadProfile();
        await this.migrateLocalProgress();
        await this.completePendingTeacherBootstrap();
        await this.completePendingTeacherInvite();
        await this.completePendingClassJoin();
      }
      this.emit();
    });
    if(this.user) {
      await this.migrateLocalProgress();
      await this.completePendingTeacherBootstrap();
      await this.completePendingTeacherInvite();
      await this.completePendingClassJoin();
    }
    this.emit();
  },
  onChange(fn){this.listeners.push(fn)},
  emit(){this.listeners.forEach(fn=>{try{fn(this)}catch(e){console.error(e)}})},
  async loadProfile(){
    if(!client||!this.user)return null;
    const {data,error}=await client.from('profiles').select('*').eq('id',this.user.id).maybeSingle();
    if(error){console.warn('Profile load',error.message);return null}
    this.profile=data;return data;
  },

  normalizeClassCode(value){
    return String(value||'').toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,16);
  },
  normalizeTeacherCode(value){
    // Teacher bootstrap codes are deliberately longer than student class codes.
    return String(value||'').toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,40);
  },
  async validateClassCode(code){
    if(!client)throw new Error('Cloud backend is not configured yet.');
    const clean=this.normalizeClassCode(code);
    if(!clean)throw new Error('Enter the class code from your teacher.');
    const {data,error}=await client.rpc('validate_class_join_code',{p_code:clean});
    if(error)throw error;
    const row=Array.isArray(data)?data[0]:data;
    if(!row)throw new Error('That class code is invalid or is not accepting new students.');
    return row;
  },
  async signUpEmail({displayName,email,password,classCode}){
    if(!client||!emailAuthEnabled)throw new Error('Learning Hub accounts are not enabled.');
    const cleanCode=this.normalizeClassCode(classCode);
    const classInfo=await this.validateClassCode(cleanCode);
    localStorage.setItem(PENDING_CLASS_KEY,cleanCode);
    const redirectTo=`${window.location.origin}${window.location.pathname}`;
    const {data,error}=await client.auth.signUp({
      email:String(email||'').trim(),
      password:String(password||''),
      options:{
        emailRedirectTo:redirectTo,
        data:{display_name:String(displayName||'').trim(),class_code:cleanCode}
      }
    });
    if(error){
      localStorage.removeItem(PENDING_CLASS_KEY);
      throw error;
    }
    if(data?.session){
      this.user=data.user||data.session.user;
      await this.loadProfile();
      await this.completePendingClassJoin();
    }
    return {data,classInfo,needsConfirmation:!data?.session};
  },
  async validateTeacherBootstrap(code){
    if(!client)throw new Error('Cloud backend is not configured yet.');
    const clean=this.normalizeTeacherCode(code);
    if(!clean)throw new Error('Enter the one-time teacher setup code.');
    const {data,error}=await client.rpc('validate_teacher_bootstrap',{p_code:clean});
    if(error)throw error;
    if(data!==true)throw new Error('Teacher setup code is invalid, already used, or teacher setup is complete.');
    return true;
  },
  async signUpTeacher({displayName,email,password,teacherCode}){
    if(!client||!emailAuthEnabled)throw new Error('Learning Hub accounts are not enabled.');
    const clean=this.normalizeTeacherCode(teacherCode);
    await this.validateTeacherBootstrap(clean);
    localStorage.setItem(PENDING_TEACHER_KEY,clean);
    const redirectTo=`${window.location.origin}${window.location.pathname}`;
    const {data,error}=await client.auth.signUp({
      email:String(email||'').trim(),password:String(password||''),
      options:{emailRedirectTo:redirectTo,data:{display_name:String(displayName||'').trim(),account_kind:'teacher_bootstrap'}}
    });
    if(error){localStorage.removeItem(PENDING_TEACHER_KEY);throw error;}
    if(data?.session){this.user=data.user||data.session.user;await this.loadProfile();await this.completePendingTeacherBootstrap();}
    return {data,needsConfirmation:!data?.session};
  },
  async completePendingTeacherBootstrap(){
    if(!client||!this.user)return false;
    const pending=localStorage.getItem(PENDING_TEACHER_KEY);
    if(!pending)return false;
    try{
      const {data,error}=await client.rpc('claim_teacher_bootstrap',{p_code:pending});
      if(error)throw error;
      localStorage.removeItem(PENDING_TEACHER_KEY);
      await this.loadProfile();
      return data===true;
    }catch(err){console.warn('Teacher bootstrap',err.message);return false;}
  },
  normalizeTeacherInviteCode(value){
    return String(value||'').toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,40);
  },
  async validateTeacherInvite(code){
    if(!client)throw new Error('Cloud backend is not configured yet.');
    const clean=this.normalizeTeacherInviteCode(code);
    if(!clean)throw new Error('Enter the teacher invite code.');
    const {data,error}=await client.rpc('validate_teacher_invite',{p_code:clean});
    if(error)throw error;
    const row=Array.isArray(data)?data[0]:data;
    if(!row)throw new Error('Teacher invite is invalid, expired, revoked or already used.');
    return row;
  },
  async signUpInvitedTeacher({displayName,email,password,inviteCode}){
    if(!client||!emailAuthEnabled)throw new Error('Learning Hub accounts are not enabled.');
    const clean=this.normalizeTeacherInviteCode(inviteCode);
    const invite=await this.validateTeacherInvite(clean);
    localStorage.setItem(PENDING_TEACHER_INVITE_KEY,clean);
    const redirectTo=`${window.location.origin}${window.location.pathname}`;
    const {data,error}=await client.auth.signUp({
      email:String(email||'').trim(),
      password:String(password||''),
      options:{
        emailRedirectTo:redirectTo,
        data:{display_name:String(displayName||'').trim(),account_kind:'teacher_invite'}
      }
    });
    if(error){
      localStorage.removeItem(PENDING_TEACHER_INVITE_KEY);
      throw error;
    }
    if(data?.session){
      this.user=data.user||data.session.user;
      await this.loadProfile();
      await this.completePendingTeacherInvite();
    }
    return {data,invite,needsConfirmation:!data?.session};
  },
  async claimTeacherInvite(code){
    if(!client||!this.user)throw new Error('Sign in before claiming a teacher invite.');
    const clean=this.normalizeTeacherInviteCode(code);
    if(!clean)throw new Error('Enter the teacher invite code.');
    const {data,error}=await client.rpc('claim_teacher_invite',{p_code:clean});
    if(error)throw error;
    if(data!==true)throw new Error('Teacher invite could not be claimed.');
    await this.loadProfile();
    this.emit();
    return true;
  },
  async completePendingTeacherInvite(){
    if(!client||!this.user)return false;
    const pending=localStorage.getItem(PENDING_TEACHER_INVITE_KEY);
    if(!pending)return false;
    try{
      const ok=await this.claimTeacherInvite(pending);
      localStorage.removeItem(PENDING_TEACHER_INVITE_KEY);
      return ok;
    }catch(err){
      console.warn('Teacher invite',err.message);
      return false;
    }
  },
  async createTeacherInvite(label='',days=7){
    if(!client||!this.user||this.profile?.role!=='teacher')throw new Error('Teacher access required.');
    const {data,error}=await client.rpc('create_teacher_invite',{
      p_label:String(label||'').trim().slice(0,120),
      p_days:Math.max(1,Math.min(Number(days)||7,30))
    });
    if(error)throw error;
    const row=Array.isArray(data)?data[0]:data;
    if(!row)throw new Error('Teacher invite could not be created.');
    return row;
  },
  async getTeacherInvites(){
    if(!client||!this.user||this.profile?.role!=='teacher')return [];
    const {data,error}=await client.from('teacher_invites')
      .select('id,code_hint,label,created_by,expires_at,used_by,used_at,revoked_at,created_at')
      .eq('created_by',this.user.id)
      .order('created_at',{ascending:false});
    if(error)throw error;
    return data||[];
  },
  async revokeTeacherInvite(inviteId){
    if(!client||!this.user||this.profile?.role!=='teacher')throw new Error('Teacher access required.');
    const {data,error}=await client.rpc('revoke_teacher_invite',{p_invite_id:inviteId});
    if(error)throw error;
    if(data!==true)throw new Error('Invite could not be revoked. It may already be used or revoked.');
    return true;
  },
  async signInEmail({email,password}){
    if(!client||!emailAuthEnabled)throw new Error('Learning Hub accounts are not enabled.');
    const {data,error}=await client.auth.signInWithPassword({
      email:String(email||'').trim(),
      password:String(password||'')
    });
    if(error)throw error;
    return data;
  },
  async sendPasswordReset(email){
    if(!client||!emailAuthEnabled)throw new Error('Learning Hub accounts are not enabled.');
    const redirectTo=`${window.location.origin}${window.location.pathname}`;
    const {data,error}=await client.auth.resetPasswordForEmail(String(email||'').trim(),{redirectTo});
    if(error)throw error;
    return data;
  },
  async updatePassword(password){
    if(!client||!this.user)throw new Error('Open the password-reset link from your email first.');
    const {data,error}=await client.auth.updateUser({password:String(password||'')});
    if(error)throw error;
    this.recoveryMode=false;
    this.emit();
    return data;
  },
  async updateDisplayName(displayName){
    if(!client||!this.user)throw new Error('Sign in first.');
    const clean=String(displayName||'').trim().slice(0,100);
    if(clean.length<2)throw new Error('Use a display name of at least 2 characters.');
    const {data,error}=await client.from('profiles').update({display_name:clean}).eq('id',this.user.id).select().single();
    if(error)throw error;
    this.profile=data;
    this.emit();
    return data;
  },
  async joinClassByCode(code){
    if(!client||!this.user)throw new Error('Sign in before joining a class.');
    const clean=this.normalizeClassCode(code);
    if(!clean)throw new Error('Enter a class code.');
    const {data,error}=await client.rpc('join_class_by_code',{p_code:clean});
    if(error)throw error;
    const row=Array.isArray(data)?data[0]:data;
    if(!row)throw new Error('That class code is invalid or unavailable.');
    return row;
  },
  async completePendingClassJoin(){
    if(!client||!this.user)return null;
    const pending=localStorage.getItem(PENDING_CLASS_KEY);
    if(!pending)return null;
    try{
      const joined=await this.joinClassByCode(pending);
      localStorage.removeItem(PENDING_CLASS_KEY);
      return joined;
    }catch(err){
      console.warn('Pending class join',err.message);
      return null;
    }
  },
  async signInMicrosoft(){
    if(!client) throw new Error('Cloud backend is not configured yet.');
    if(!microsoftEnabled) throw new Error('Microsoft sign-in is intentionally disabled pending college approval.');
    const redirectTo = `${window.location.origin}${window.location.pathname}`;
    const {data,error}=await client.auth.signInWithOAuth({
      provider: cfg.authProvider || 'azure',
      options: {
        scopes: 'email',
        redirectTo
      }
    });
    if(error) throw error;
    return data;
  },
  async signOut(){ if(client) await client.auth.signOut(); },
  async migrateLocalProgress(){
    if(!client||!this.user)return;
    let local=null;
    try{local=JSON.parse(localStorage.getItem('ue5hub:v2:progress')||'null')}catch(e){}
    if(!local?.completed?.length)return;
    const rows=local.completed.map(id=>({user_id:this.user.id,lesson_id:id,completed:true,completed_at:new Date().toISOString()}));
    const {error}=await client.from('lesson_progress').upsert(rows,{onConflict:'user_id,lesson_id'});
    if(error)console.warn('Progress migration',error.message);
  },
  async getLessonProgress(){
    if(!client||!this.user)return [];
    const {data,error}=await client.from('lesson_progress').select('*').eq('user_id',this.user.id);
    if(error){console.warn(error.message);return []} return data||[];
  },
  async setLessonComplete(lessonId,completed){
    if(!client||!this.user)return false;
    const row={user_id:this.user.id,lesson_id:lessonId,completed,completed_at:completed?new Date().toISOString():null};
    const {error}=await client.from('lesson_progress').upsert(row,{onConflict:'user_id,lesson_id'});
    if(error)throw error;return true;
  },
  async getProjectProgress(){
    if(!client||!this.user)return [];
    const {data,error}=await client.from('project_progress').select('*').eq('user_id',this.user.id);
    if(error){console.warn(error.message);return []} return data||[];
  },
  async setProjectMechanic(mechanicId,status,notes=''){
    if(!client||!this.user)return false;
    const {error}=await client.from('project_progress').upsert({
      user_id:this.user.id,mechanic_id:mechanicId,status,notes,updated_at:new Date().toISOString()
    },{onConflict:'user_id,mechanic_id'});
    if(error)throw error;return true;
  },
  async getProjectProfile(){
    if(!client||!this.user)return null;
    const {data,error}=await client.from('student_projects').select('*').eq('user_id',this.user.id).maybeSingle();
    if(error){console.warn(error.message);return null}return data;
  },
  async saveProjectProfile(values){
    if(!client||!this.user)return false;
    const {error}=await client.from('student_projects').upsert({user_id:this.user.id,...values,updated_at:new Date().toISOString()},{onConflict:'user_id'});
    if(error)throw error;return true;
  },

  // v3.15 multi-project / group-project workspace
  async getProjects(){
    if(!client||!this.user)return [];
    const {data:projects,error}=await client.from('projects').select('*').order('updated_at',{ascending:false});
    if(error)throw error;
    const rows=projects||[];
    if(!rows.length)return [];
    const ids=rows.map(x=>x.id);
    const classIds=[...new Set(rows.map(x=>x.class_id).filter(Boolean))];
    const [{data:members,error:mErr},{data:classes,error:cErr}]=await Promise.all([
      client.from('project_members').select('*').in('project_id',ids),
      classIds.length?client.from('classes').select('id,name,academic_year').in('id',classIds):Promise.resolve({data:[],error:null})
    ]);
    if(mErr)throw mErr;if(cErr)throw cErr;
    const userIds=[...new Set((members||[]).map(x=>x.user_id))];
    let profiles=[];
    if(userIds.length){
      const {data,error:pErr}=await client.from('profiles').select('id,display_name,role').in('id',userIds);
      if(pErr)throw pErr;profiles=data||[];
    }
    const names=Object.fromEntries(profiles.map(x=>[x.id,x]));
    const classMap=Object.fromEntries((classes||[]).map(x=>[x.id,x]));
    return rows.map(project=>({
      ...project,
      members:(members||[]).filter(m=>m.project_id===project.id).map(m=>({...m,profile:names[m.user_id]||null})),
      class:project.class_id?classMap[project.class_id]||null:null
    }));
  },
  async getProject(projectId){
    if(!client||!this.user)throw new Error('Sign in to view projects.');
    const {data:project,error}=await client.from('projects').select('*').eq('id',projectId).single();
    if(error)throw error;
    const [{data:members,error:mErr},{data:milestones,error:msErr},{data:updates,error:uErr},{data:media,error:medErr},{data:comments,error:cErr}]=await Promise.all([
      client.from('project_members').select('*').eq('project_id',projectId).order('joined_at'),
      client.from('project_milestones').select('*').eq('project_id',projectId).order('sort_order').order('created_at'),
      client.from('project_updates').select('*').eq('project_id',projectId).order('created_at',{ascending:false}),
      client.from('project_media').select('*').eq('project_id',projectId).order('created_at'),
      client.from('project_comments').select('*').eq('project_id',projectId).order('created_at')
    ]);
    if(mErr)throw mErr;if(msErr)throw msErr;if(uErr)throw uErr;if(medErr)throw medErr;if(cErr)throw cErr;
    const userIds=[...new Set([...(members||[]).map(x=>x.user_id),...(updates||[]).map(x=>x.author_id),...(comments||[]).map(x=>x.author_id)])];
    let profiles=[];
    if(userIds.length){
      const {data,error:pErr}=await client.from('profiles').select('id,display_name,role').in('id',userIds);
      if(pErr)throw pErr;profiles=data||[];
    }
    let classInfo=null;
    if(project.class_id){
      const {data}=await client.from('classes').select('id,name,academic_year').eq('id',project.class_id).maybeSingle();
      classInfo=data||null;
    }
    const profileMap=Object.fromEntries(profiles.map(x=>[x.id,x]));
    return {
      project:{...project,class:classInfo},
      members:(members||[]).map(x=>({...x,profile:profileMap[x.user_id]||null})),
      milestones:milestones||[],
      updates:(updates||[]).map(x=>({...x,author:profileMap[x.author_id]||null,media:(media||[]).filter(m=>m.update_id===x.id),comments:(comments||[]).filter(c=>c.update_id===x.id).map(c=>({...c,author:profileMap[c.author_id]||null}))})),
      unlinkedMedia:(media||[]).filter(x=>!x.update_id),
      comments:(comments||[]).filter(x=>!x.update_id).map(c=>({...c,author:profileMap[c.author_id]||null}))
    };
  },
  async createProject(values){
    if(!client||!this.user)throw new Error('Sign in to create a project.');
    const row={
      owner_id:this.user.id,
      title:String(values.title||'').trim().slice(0,120),
      project_type:values.projectType==='group'?'group':'solo',
      project_kind:String(values.projectKind||'assignment'),
      description:String(values.description||'').trim().slice(0,4000),
      class_id:values.classId||null,
      assessment_unit:String(values.assessmentUnit||'').trim().slice(0,160),
      due_date:values.dueDate||null,
      status:'active'
    };
    if(!row.title)throw new Error('Give the project a title.');
    const {data,error}=await client.from('projects').insert(row).select().single();
    if(error)throw error;return data;
  },
  async updateProject(projectId,values){
    if(!client||!this.user)throw new Error('Sign in first.');
    const changes={updated_at:new Date().toISOString()};
    for(const [key,max] of [['title',120],['description',4000],['assessment_unit',160]]){
      if(values[key]!==undefined)changes[key]=String(values[key]||'').trim().slice(0,max);
    }
    if(values.status!==undefined)changes.status=values.status;
    if(values.due_date!==undefined)changes.due_date=values.due_date||null;
    if(values.class_id!==undefined)changes.class_id=values.class_id||null;
    const {data,error}=await client.from('projects').update(changes).eq('id',projectId).select().single();
    if(error)throw error;return data;
  },
  async deleteProject(projectId){
    if(!client||!this.user)throw new Error('Sign in first.');
    const {data:media}=await client.from('project_media').select('storage_path').eq('project_id',projectId);
    const paths=(media||[]).map(x=>x.storage_path);
    if(paths.length)await client.storage.from('project-media').remove(paths);
    const {error}=await client.from('projects').delete().eq('id',projectId);
    if(error)throw error;return true;
  },
  async joinProject(code){
    if(!client||!this.user)throw new Error('Sign in before joining a group project.');
    const clean=String(code||'').toUpperCase().trim().slice(0,20);
    const {data,error}=await client.rpc('join_project_by_code',{p_code:clean});
    if(error)throw error;
    const row=Array.isArray(data)?data[0]:data;
    if(!row)throw new Error('That project code could not be used.');
    return row;
  },
  async regenerateProjectCode(projectId){
    if(!client||!this.user)throw new Error('Sign in first.');
    const {data,error}=await client.rpc('regenerate_project_join_code',{p_project_id:projectId});
    if(error)throw error;return data;
  },
  async updateProjectRole(projectId,roleLabel){
    if(!client||!this.user)throw new Error('Sign in first.');
    const {error}=await client.from('project_members').update({role_label:String(roleLabel||'').trim().slice(0,100)}).eq('project_id',projectId).eq('user_id',this.user.id);
    if(error)throw error;return true;
  },
  async removeProjectMember(projectId,userId){
    if(!client||!this.user)throw new Error('Sign in first.');
    const {error}=await client.from('project_members').delete().eq('project_id',projectId).eq('user_id',userId);
    if(error)throw error;return true;
  },
  async createProjectMilestone(projectId,{title,description='',dueDate=null}){
    if(!client||!this.user)throw new Error('Sign in first.');
    const {data,error}=await client.from('project_milestones').insert({project_id:projectId,title:String(title||'').trim().slice(0,160),description:String(description||'').trim().slice(0,2000),due_date:dueDate||null,created_by:this.user.id}).select().single();
    if(error)throw error;return data;
  },
  async setProjectMilestoneStatus(milestoneId,status){
    if(!client||!this.user)throw new Error('Sign in first.');
    const {data,error}=await client.from('project_milestones').update({status,updated_at:new Date().toISOString()}).eq('id',milestoneId).select().single();
    if(error)throw error;return data;
  },
  async deleteProjectMilestone(milestoneId){
    if(!client||!this.user)throw new Error('Sign in first.');
    const {error}=await client.from('project_milestones').delete().eq('id',milestoneId);
    if(error)throw error;return true;
  },
  async createProjectUpdate(projectId,{entryType='progress',title='',body,contribution='',milestoneId=null}){
    if(!client||!this.user)throw new Error('Sign in first.');
    const {data,error}=await client.from('project_updates').insert({project_id:projectId,author_id:this.user.id,milestone_id:milestoneId||null,entry_type:entryType,title:String(title||'').trim().slice(0,180),body:String(body||'').trim().slice(0,5000),contribution:String(contribution||'').trim().slice(0,3000)}).select().single();
    if(error)throw error;return data;
  },
  async deleteProjectUpdate(projectId,updateId){
    if(!client||!this.user)throw new Error('Sign in first.');
    const {data:media}=await client.from('project_media').select('storage_path').eq('project_id',projectId).eq('update_id',updateId);
    const paths=(media||[]).map(x=>x.storage_path);
    if(paths.length)await client.storage.from('project-media').remove(paths);
    const {error}=await client.from('project_updates').delete().eq('id',updateId);
    if(error)throw error;return true;
  },
  async uploadProjectFiles(projectId,updateId,files){
    if(!client||!this.user)throw new Error('Sign in to upload project evidence.');
    const list=Array.from(files||[]).filter(f=>f&&f.size);
    if(list.length>6)throw new Error('Upload up to 6 files per development-log entry.');
    const allowed=['image/png','image/jpeg','image/webp','application/pdf'];
    const uploaded=[];
    for(const file of list){
      if(file.size>10485760)throw new Error(`${file.name} is larger than 10 MB.`);
      if(!allowed.includes(file.type))throw new Error('Use PNG, JPG, WebP or PDF project files.');
      const safe=(file.name||'project-file').replace(/[^a-zA-Z0-9._-]+/g,'-').slice(-100);
      const path=`${projectId}/${this.user.id}/${updateId}/${Date.now()}-${safe}`;
      const {error:uploadError}=await client.storage.from('project-media').upload(path,file,{upsert:false,contentType:file.type});
      if(uploadError)throw uploadError;
      const {data:record,error:recordError}=await client.from('project_media').insert({project_id:projectId,update_id:updateId,uploader_id:this.user.id,storage_path:path,original_name:file.name||safe,mime_type:file.type||'',size_bytes:file.size||0}).select().single();
      if(recordError){await client.storage.from('project-media').remove([path]);throw recordError;}
      uploaded.push(record);
    }
    return uploaded;
  },
  async openProjectFile(path){
    if(!client||!this.user)throw new Error('Sign in to view project files.');
    const {data,error}=await client.storage.from('project-media').createSignedUrl(path,300);
    if(error)throw error;return data?.signedUrl||null;
  },
  async postProjectComment(projectId,updateId,body){
    if(!client||!this.user)throw new Error('Sign in first.');
    const {data,error}=await client.from('project_comments').insert({project_id:projectId,update_id:updateId||null,author_id:this.user.id,body:String(body||'').trim().slice(0,3000)}).select().single();
    if(error)throw error;return data;
  },
  async getComments(lessonId){
    if(!client||!this.user)return [];
    let q=client.from('lesson_comments').select('*,author:profiles!lesson_comments_author_id_fkey(display_name,role)').eq('lesson_id',lessonId).order('created_at');
    const {data,error}=await q;
    if(error){console.warn(error.message);return []}return data||[];
  },
  async postComment({lessonId,body,studentId=null}){
    if(!client||!this.user)throw new Error('Sign in to post comments.');
    const sid = this.profile?.role==='teacher' ? studentId : this.user.id;
    if(!sid)throw new Error('Choose a student first.');
    const {error}=await client.from('lesson_comments').insert({lesson_id:lessonId,student_id:sid,author_id:this.user.id,body});
    if(error)throw error;return true;
  },
  async getMyClasses(){
    if(!client||!this.user)return [];
    const {data,error}=await client
      .from('class_members')
      .select('joined_at,class:classes(id,name,academic_year,teacher_id,archived)')
      .eq('user_id',this.user.id);
    if(error){console.warn('Classes',error.message);return []}
    return (data||[]).map(x=>x.class).filter(c=>c && !c.archived);
  },
  async getMySubmissions(){
    if(!client||!this.user)return [];
    const {data,error}=await client
      .from('evidence_submissions')
      .select('*,submission_files(*)')
      .eq('user_id',this.user.id)
      .order('updated_at',{ascending:false});
    if(error){console.warn('Submissions',error.message);return []}
    return data||[];
  },
  async getSubmission(mechanicId){
    if(!client||!this.user)return null;
    const {data,error}=await client
      .from('evidence_submissions')
      .select('*,submission_files(*)')
      .eq('user_id',this.user.id)
      .eq('mechanic_id',mechanicId)
      .maybeSingle();
    if(error){console.warn('Submission',error.message);return null}
    return data;
  },
  async saveSubmission({lessonId,mechanicId,reflection,evidenceUrl,status}){
    if(!client||!this.user)throw new Error('Sign in to save evidence.');
    const now=new Date().toISOString();
    const row={
      user_id:this.user.id,
      lesson_id:lessonId,
      mechanic_id:mechanicId,
      reflection:reflection||'',
      evidence_url:evidenceUrl||'',
      status,
      submitted_at:status==='submitted'?now:null,
      updated_at:now
    };
    const {data,error}=await client
      .from('evidence_submissions')
      .upsert(row,{onConflict:'user_id,mechanic_id'})
      .select()
      .single();
    if(error)throw error;
    return data;
  },
  async uploadEvidenceFile(submissionId,file){
    if(!client||!this.user)throw new Error('Sign in to upload evidence.');
    if(!file)return null;
    if(file.size>10485760)throw new Error('Evidence file must be 10 MB or smaller.');
    const allowed=['image/png','image/jpeg','image/webp','application/pdf'];
    if(!allowed.includes(file.type))throw new Error('Use PNG, JPG, WebP or PDF evidence.');
    const safe=(file.name||'evidence').replace(/[^a-zA-Z0-9._-]+/g,'-').slice(-100);
    const path=`${this.user.id}/${submissionId}/${Date.now()}-${safe}`;
    const {error:uploadError}=await client.storage.from('student-evidence').upload(path,file,{upsert:false,contentType:file.type});
    if(uploadError)throw uploadError;
    const {error:recordError}=await client.from('submission_files').insert({
      submission_id:submissionId,
      storage_path:path,
      original_name:file.name||safe,
      mime_type:file.type||'',
      size_bytes:file.size||0
    });
    if(recordError){
      await client.storage.from('student-evidence').remove([path]);
      throw recordError;
    }
    return path;
  },
  async uploadEvidenceFiles(submissionId,files){
    const list=Array.from(files||[]).filter(f=>f&&f.size);
    if(list.length>6)throw new Error('Upload up to 6 evidence files at a time.');
    const uploaded=[];
    for(const file of list)uploaded.push(await this.uploadEvidenceFile(submissionId,file));
    return uploaded;
  },
  async openEvidenceFile(path){
    if(!client||!this.user)throw new Error('Sign in to view evidence.');
    const {data,error}=await client.storage.from('student-evidence').createSignedUrl(path,300);
    if(error)throw error;
    return data?.signedUrl||null;
  },
  async getNotifications(){
    if(!client||!this.user)return [];
    const {data,error}=await client
      .from('notifications')
      .select('*')
      .eq('user_id',this.user.id)
      .order('created_at',{ascending:false})
      .limit(50);
    if(error){console.warn('Notifications',error.message);return []}
    return data||[];
  },
  async markNotificationRead(id){
    if(!client||!this.user)return false;
    const {error}=await client.from('notifications').update({read_at:new Date().toISOString()}).eq('id',id).eq('user_id',this.user.id);
    if(error)throw error;return true;
  },
  async createClass({name,academicYear}){
    if(!client||!this.user||this.profile?.role!=='teacher')throw new Error('Teacher access required.');
    const {data,error}=await client.from('classes').insert({
      teacher_id:this.user.id,name,academic_year:academicYear||''
    }).select().single();
    if(error)throw error;return data;
  },
  async updateClass({classId,name,academicYear}){
    if(!client||!this.user||this.profile?.role!=='teacher')throw new Error('Teacher access required.');
    const cleanName=String(name||'').trim().slice(0,100);
    const cleanYear=String(academicYear||'').trim().slice(0,40);
    if(cleanName.length<2)throw new Error('Class name must be at least 2 characters.');
    const {data,error}=await client.from('classes')
      .update({name:cleanName,academic_year:cleanYear})
      .eq('id',classId).select().single();
    if(error)throw error;return data;
  },
  async setClassArchived(classId,archived){
    if(!client||!this.user||this.profile?.role!=='teacher')throw new Error('Teacher access required.');
    const changes=archived?{archived:true,join_enabled:false}:{archived:false};
    const {data,error}=await client.from('classes').update(changes)
      .eq('id',classId).select().single();
    if(error)throw error;return data;
  },
  async deleteClass(classId){
    if(!client||!this.user||this.profile?.role!=='teacher')throw new Error('Teacher access required.');
    const {error}=await client.from('classes').delete().eq('id',classId).eq('teacher_id',this.user.id);
    if(error)throw error;return true;
  },
  async setClassJoinEnabled(classId,enabled){
    if(!client||!this.user||this.profile?.role!=='teacher')throw new Error('Teacher access required.');
    const {data,error}=await client.from('classes').update({join_enabled:Boolean(enabled)}).eq('id',classId).select().single();
    if(error)throw error;return data;
  },
  async regenerateClassCode(classId){
    if(!client||!this.user||this.profile?.role!=='teacher')throw new Error('Teacher access required.');
    const alphabet='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    const bytes=new Uint8Array(10);
    crypto.getRandomValues(bytes);
    const code=[...bytes].map(b=>alphabet[b%alphabet.length]).join('');
    const {data,error}=await client.from('classes').update({join_code:code}).eq('id',classId).select().single();
    if(error)throw error;return data;
  },
  async addClassMember(classId,userId){
    if(!client||!this.user||this.profile?.role!=='teacher')throw new Error('Teacher access required.');
    const {error}=await client.from('class_members').upsert({class_id:classId,user_id:userId},{onConflict:'class_id,user_id'});
    if(error)throw error;return true;
  },
  async removeClassMember(classId,userId){
    if(!client||!this.user||this.profile?.role!=='teacher')throw new Error('Teacher access required.');
    const {error}=await client.from('class_members').delete().eq('class_id',classId).eq('user_id',userId);
    if(error)throw error;return true;
  },
  async addClassTeacher(classId,teacherId){
    if(!client||!this.user||this.profile?.role!=='teacher')throw new Error('Teacher access required.');
    if(!teacherId)throw new Error('Choose a teacher first.');
    const {error}=await client.from('class_teachers').insert({
      class_id:classId,teacher_id:teacherId,added_by:this.user.id
    });
    if(error)throw error;return true;
  },
  async removeClassTeacher(classId,teacherId){
    if(!client||!this.user||this.profile?.role!=='teacher')throw new Error('Teacher access required.');
    const {error}=await client.from('class_teachers').delete().eq('class_id',classId).eq('teacher_id',teacherId);
    if(error)throw error;return true;
  },
  async reviewSubmission({submissionId,status,feedback}){
    if(!client||!this.user||this.profile?.role!=='teacher')throw new Error('Teacher access required.');
    if(!['changes_required','approved'].includes(status))throw new Error('Invalid review status.');
    const now=new Date().toISOString();
    const {data,error}=await client.from('evidence_submissions').update({
      status,
      teacher_feedback:feedback||'',
      reviewed_by:this.user.id,
      reviewed_at:now,
      updated_at:now
    }).eq('id',submissionId).select('id,user_id,lesson_id,mechanic_id').single();
    if(error)throw error;
    const title=status==='approved'?'Evidence approved ✓':'Evidence needs changes';
    const body=status==='approved'
      ?'Your teacher approved this piece of project evidence.'
      :'Your teacher has left feedback and asked you to improve/resubmit this evidence.';
    const {error:nErr}=await client.from('notifications').insert({
      user_id:data.user_id,kind:'feedback',title,body:feedback?`${body} ${feedback}`:body,link:`#/lesson/${data.lesson_id}`
    });
    if(nErr)console.warn('Notification',nErr.message);
    return data;
  },
  async getRequests(){
    if(!client||!this.user)return [];
    const [{data,error},{data:replies,error:rErr}]=await Promise.all([
      client.from('student_requests').select('id,category,title,body,status,created_at,updated_at,author_id,request_votes(user_id)').order('created_at',{ascending:false}),
      client.from('request_replies').select('id,request_id,author_id,body,created_at,updated_at').order('created_at')
    ]);
    if(error){console.warn('Requests',error.message);return []}
    if(rErr){console.warn('Request replies',rErr.message);}
    const authorIds=[...new Set((replies||[]).map(x=>x.author_id))];
    let profiles=[];
    if(authorIds.length){
      const {data:pData}=await client.from('profiles').select('id,display_name,role').in('id',authorIds);
      profiles=pData||[];
    }
    const names=Object.fromEntries(profiles.map(x=>[x.id,x]));
    return (data||[]).map(r=>({
      ...r,
      votes:(r.request_votes||[]).length,
      my_vote:(r.request_votes||[]).some(v=>v.user_id===this.user.id),
      replies:(replies||[]).filter(x=>x.request_id===r.id).map(x=>({...x,author:names[x.author_id]||null}))
    }));
  },
  async submitRequest({category,title,body}){
    if(!client||!this.user)throw new Error('Sign in to a Learning Hub account first.');
    const {error}=await client.from('student_requests').insert({
      author_id:this.user.id,category,title,body
    });
    if(error)throw error;return true;
  },
  async setRequestVote(requestId,voted){
    if(!client||!this.user)throw new Error('Sign in first.');
    if(voted){
      const {error}=await client.from('request_votes').insert({request_id:requestId,user_id:this.user.id});
      if(error && error.code!=='23505')throw error;
    }else{
      const {error}=await client.from('request_votes').delete().eq('request_id',requestId).eq('user_id',this.user.id);
      if(error)throw error;
    }
    return true;
  },
  async replyToRequest(requestId,body){
    if(!client||!this.user||this.profile?.role!=='teacher')throw new Error('Teacher access required.');
    const clean=String(body||'').trim().slice(0,3000);
    if(!clean)throw new Error('Write a reply first.');
    const {data:reply,error}=await client.from('request_replies').insert({request_id:requestId,author_id:this.user.id,body:clean}).select().single();
    if(error)throw error;
    const {data:req}=await client.from('student_requests').select('author_id,title').eq('id',requestId).maybeSingle();
    if(req?.author_id){
      const {error:nErr}=await client.from('notifications').insert({user_id:req.author_id,kind:'request_reply',title:`Teacher replied: ${req.title}`,body:clean,link:'#/requests'});
      if(nErr)console.warn('Request reply notification',nErr.message);
    }
    return reply;
  },
  async setRequestStatus(requestId,status){
    if(!client||!this.user||this.profile?.role!=='teacher')throw new Error('Teacher access required.');
    const {data,error}=await client.from('student_requests')
      .update({status,updated_at:new Date().toISOString()})
      .eq('id',requestId).select('id,author_id,title').single();
    if(error)throw error;
    const labels={new:'New',planned:'Planned',building:'Building',shipped:'Shipped',declined:'Not planned'};
    const {error:nErr}=await client.from('notifications').insert({
      user_id:data.author_id,kind:'request',
      title:`Request updated: ${data.title}`,
      body:`Your request is now marked ${labels[status]||status}.`,
      link:'#/requests'
    });
    if(nErr)console.warn('Notification',nErr.message);
    return true;
  },
  async deleteRequest(requestId){
    if(!client||!this.user||this.profile?.role!=='teacher')throw new Error('Teacher access required.');
    const {error}=await client.from('student_requests').delete().eq('id',requestId);
    if(error)throw error;return true;
  },
  async teacherOverview(){
    if(!client||!this.user||this.profile?.role!=='teacher')return null;
    const [{data:profiles},{data:teachers},{data:progress},{data:projects},{data:comments},{data:requests},{data:submissions},{data:classes},{data:teacherInvites},{data:collabProjects}] = await Promise.all([
      client.from('profiles').select('id,display_name,role,created_at').eq('role','student').order('display_name'),
      client.from('profiles').select('id,display_name,role,created_at').eq('role','teacher').order('display_name'),
      client.from('lesson_progress').select('*').eq('completed',true),
      client.from('project_progress').select('*'),
      client.from('lesson_comments').select('*').order('created_at',{ascending:false}),
      client.from('student_requests').select('id,author_id,category,title,body,status,created_at,request_votes(user_id)').order('created_at',{ascending:false}),
      client.from('evidence_submissions').select('*,submission_files(*)').order('updated_at',{ascending:false}),
      client.from('classes').select('*,class_members(user_id),class_teachers(teacher_id,added_by,created_at)').order('created_at',{ascending:false}),
      client.from('teacher_invites').select('id,code_hint,label,created_by,expires_at,used_by,used_at,revoked_at,created_at').eq('created_by',this.user.id).order('created_at',{ascending:false}),
      client.from('projects').select('id,owner_id,title,project_type,project_kind,class_id,status,updated_at').order('updated_at',{ascending:false})
    ]);
    return {
      profiles:profiles||[],teachers:teachers||[],progress:progress||[],projects:projects||[],comments:comments||[],
      requests:requests||[],submissions:submissions||[],classes:classes||[],teacherInvites:teacherInvites||[],collabProjects:collabProjects||[]
    };
  }
};
window.UE5_BACKEND = api;
})();
