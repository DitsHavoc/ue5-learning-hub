
(() => {
'use strict';

const DATA = window.UE5_COURSE_DATA;
const PROJECT = window.UE5_PROJECT_DATA;
const BACKEND = window.UE5_BACKEND;

if (!DATA || !PROJECT || !BACKEND) {
  const e = document.querySelector('#bootError');
  if (e) e.hidden = false;
  return;
}

const STORE = 'ue5hub:v2:progress';
const PROJECT_STORE = 'ue5hub:v3:project';
const LEGACY = 'ue5LearningHubProgressV1';
const REVISION_STORE = 'ue5hub:v315:revision-results';

let state = loadState();
let projectState = loadProjectState();
let lessonMode = 'guided';
let authView = 'signin';
let revisionSession = null;

function $(s,root=document){return root.querySelector(s)}
function $$(s,root=document){return [...root.querySelectorAll(s)]}
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
function safeUrl(value){
  try{
    const u=new URL(String(value||''));
    return ['http:','https:'].includes(u.protocol)?u.href:'';
  }catch(e){return ''}
}

function loadState(){
  const clean={completed:[],quiz:{},lastLesson:null};
  try{
    const current=JSON.parse(localStorage.getItem(STORE)||'null');
    if(current) return {...clean,...current};
    const old=JSON.parse(localStorage.getItem(LEGACY)||'null');
    if(old){
      const migrated={...clean,...old};
      localStorage.setItem(STORE,JSON.stringify(migrated));
      return migrated;
    }
  }catch(e){}
  return clean;
}
function saveState(){
  localStorage.setItem(STORE,JSON.stringify(state));
  updateChrome();
}
function loadProjectState(){
  const clean={
    project_title:'Signal Lost',
    theme:'Abandoned research facility',
    pitch:'',
    mechanics:{}
  };
  try{
    const v=JSON.parse(localStorage.getItem(PROJECT_STORE)||'null');
    return v?{...clean,...v,mechanics:{...clean.mechanics,...(v.mechanics||{})}}:clean;
  }catch(e){return clean}
}
function saveProjectState(){
  localStorage.setItem(PROJECT_STORE,JSON.stringify(projectState));
}
function lesson(id){return DATA.lessons.find(x=>x.id===id)}
function path(id){return DATA.paths.find(x=>x.id===id)}
function mechanic(id){return PROJECT.mechanics[id]}
function completedLessons(){return DATA.lessons.filter(l=>state.completed.includes(l.id))}
function totalXp(){return completedLessons().reduce((n,l)=>n+l.xp,0)}
function level(){
  const xp=totalXp(),n=Math.floor(xp/500)+1,into=xp%500;
  return {n,xp,into,left:500-into,pct:into/5};
}
function pathProgress(id){
  const ls=DATA.lessons.filter(l=>l.path===id);
  const done=ls.filter(l=>state.completed.includes(l.id)).length;
  return {done,total:ls.length,pct:ls.length?Math.round(done/ls.length*100):0};
}
function projectStatus(id){
  return projectState.mechanics[id]?.status || 'not_started';
}
function projectNotes(id){
  return projectState.mechanics[id]?.notes || '';
}
function projectProgress(){
  const ids=Object.keys(PROJECT.mechanics);
  const complete=ids.filter(id=>projectStatus(id)==='complete').length;
  const building=ids.filter(id=>projectStatus(id)==='building').length;
  return {complete,building,total:ids.length,pct:Math.round(complete/ids.length*100)};
}
function milestoneProgress(m){
  const statuses=m.lessons.map(projectStatus);
  const complete=statuses.filter(x=>x==='complete').length;
  return {complete,total:m.lessons.length,pct:Math.round(complete/m.lessons.length*100)};
}
function nextLesson(){
  if(state.lastLesson){
    const l=lesson(state.lastLesson);
    if(l&&!state.completed.includes(l.id)) return l;
  }
  return DATA.lessons.find(l=>!state.completed.includes(l.id))||DATA.lessons[0];
}
function youtube(q){return `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`}
function tagClass(d){return d.toLowerCase().includes('inter')?'intermediate':'beginner'}
function toast(msg){
  const t=$('#toast'); if(!t)return;
  t.textContent=msg;t.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer=setTimeout(()=>t.classList.remove('show'),2200);
}

function updateChrome(){
  const i=level();
  $('#sideLevel').textContent=`LEVEL ${i.n}`;
  $('#sideXp').textContent=`${i.xp} XP`;
  $('#sideBar').style.width=`${i.pct}%`;
  $('#sideNext').textContent=`${i.left} XP to Level ${i.n+1}`;
  $('#topDone').textContent=state.completed.length;
  $('#topXp').textContent=i.xp;

  const btn=$('#accountButton');
  const txt=$('#accountText');
  const mode=$('#modeBadge');
  const teacher=$('#teacherNav');

  btn.classList.remove('cloud','teacher');
  if(BACKEND.user){
    const name=BACKEND.profile?.display_name || BACKEND.user.email?.split('@')[0] || 'Account';
    txt.textContent=name;
    btn.classList.add(BACKEND.profile?.role==='teacher'?'teacher':'cloud');
    mode.textContent=BACKEND.profile?.role==='teacher'?'• TEACHER CLOUD':'• CLOUD';
    teacher.hidden=BACKEND.profile?.role!=='teacher';
  }else{
    txt.textContent=BACKEND.mode==='cloud'?'SIGN IN':'LOCAL MODE';
    mode.textContent=BACKEND.mode==='cloud'?'• GUEST + CLOUD':'• LOCAL';
    if(BACKEND.mode==='cloud')btn.classList.add('cloud');
    teacher.hidden=true;
  }
}
async function syncCloudProgress(){
  if(!BACKEND.user)return;
  try{
    const rows=await BACKEND.getLessonProgress();
    const cloudCompleted=rows.filter(r=>r.completed).map(r=>r.lesson_id);
    state.completed=[...new Set([...state.completed,...cloudCompleted])];
    saveState();

    const pRows=await BACKEND.getProjectProgress();
    for(const r of pRows){
      projectState.mechanics[r.mechanic_id]={status:r.status,notes:r.notes||''};
    }
    const profile=await BACKEND.getProjectProfile();
    if(profile){
      projectState.project_title=profile.project_title||projectState.project_title;
      projectState.theme=profile.theme||projectState.theme;
      projectState.pitch=profile.pitch||projectState.pitch;
    }
    saveProjectState();
  }catch(e){console.warn('Cloud sync',e)}
}

function lessonRow(l,index){
  const done=state.completed.includes(l.id);
  const ps=projectStatus(l.id);
  return `<a class="lesson-row ${done?'done':''}" href="#/lesson/${l.id}">
    <span class="lesson-num">${done?'✓':String(index+1).padStart(2,'0')}</span>
    <span>
      <strong>${esc(l.title)}</strong>
      <p>${esc(l.short)}</p>
      <span class="tags">
        <span class="tag ${tagClass(l.difficulty)}">${esc(l.difficulty)}</span>
        <span class="tag">${esc(l.duration)}</span>
        ${ps==='complete'?'<span class="tag beginner">GAME ✓</span>':ps==='building'?'<span class="tag">GAME: BUILDING</span>':''}
      </span>
    </span>
    <span class="lesson-xp">+${l.xp} XP</span>
  </a>`;
}
function zoomableImage({src,alt,caption='',sourceUrl='',sourceTitle='',kind='local',eager=false}){
  const source=sourceUrl?`<a class="image-source-link" href="${esc(sourceUrl)}" target="_blank" rel="noopener">Source: ${esc(sourceTitle||'Epic Games — Unreal Engine Documentation')} ↗</a>`:'';
  return `<figure class="visual-flow-card ${kind}"><button class="visual-zoom" type="button" data-action="open-image" data-src="${esc(src)}" data-caption="${esc(caption)}" data-source="${esc(sourceUrl)}" aria-label="Open image larger"><span class="zoom-hint">⌕ Click to enlarge</span><img class="${kind==='epic'?'epic-doc-image':''}" src="${esc(src)}" alt="${esc(alt)}" loading="${eager?'eager':'lazy'}"></button><figcaption>${esc(caption)}${source}</figcaption><div class="remote-image-fallback"><strong>Official image unavailable.</strong><a href="${esc(sourceUrl)}" target="_blank" rel="noopener">Open the Epic documentation instead ↗</a></div></figure>`;
}
function currentVisuals(l){
  const xs=(l.visuals||[]).filter(v=>v.authenticUI===true||['ue5','screenshot','ue5-reference'].includes(v.type));
  if(!xs.length)return '';
  return `<div class="inline-visual-story current"><div class="visual-story-head"><span class="deep-label">REAL UNREAL EXAMPLE</span><h3>What it looks like in a real project</h3></div><div class="visual-story-grid">${xs.map((v,i)=>zoomableImage({src:v.src,alt:`${l.title} real Unreal example ${i+1}`,caption:v.caption||'',kind:'current',eager:i===0})).join('')}</div></div>`;
}
function conceptVisuals(l){
  const xs=(l.visuals||[]).filter(v=>!(v.authenticUI===true||['ue5','screenshot','ue5-reference','book'].includes(v.type)));
  if(!xs.length)return '';
  return `<div class="inline-visual-story concepts"><div class="visual-story-head"><span class="deep-label">SIMPLIFY THE IDEA</span><h3>Concept diagrams</h3><p>These explain the thinking. They are not screenshots of Unreal Engine.</p></div><div class="visual-story-grid">${xs.map((v,i)=>zoomableImage({src:v.src,alt:`${l.title} concept diagram ${i+1}`,caption:v.caption||'',kind:'concept'})).join('')}</div></div>`;
}
function docVisuals(l,slot){
  const xs=(l.docVisuals||[]).filter(v=>(v.slot||'concept')===slot);
  if(!xs.length)return '';
  return `<div class="inline-visual-story epic"><div class="visual-story-head"><span class="deep-label">OFFICIAL UE5.8 SCREENSHOT${xs.length>1?'S':''}</span><h3>See the real Unreal interface</h3><p>Official Epic documentation imagery placed beside the concept it explains.</p></div><div class="visual-story-grid">${xs.map((v,i)=>zoomableImage({src:v.src,alt:`${l.title} official Unreal Engine screenshot ${i+1}`,caption:v.caption||'',sourceUrl:v.sourceUrl||'',sourceTitle:v.sourceTitle||'',kind:'epic',eager:false})).join('')}</div></div>`;
}

function motionMedia(l,slot){
  const xs=(l.motionMedia||[]).filter(v=>(v.slot||'concept')===slot);
  if(!xs.length)return '';
  return `<div class="motion-media-story"><div class="visual-story-head"><span class="deep-label">WATCH IT HAPPEN</span><h3>See the system moving in Unreal</h3><p>Short official Epic clips are used where motion explains the idea better than another still image. Players load only when you press Play.</p></div><div class="motion-media-grid">${xs.map((v,i)=>`<article class="motion-media-card"><div class="motion-player-shell" data-video-shell><div class="motion-player-placeholder"><span class="motion-play-icon">▶</span><strong>${esc(v.title)}</strong><p>${esc(v.note||'')}</p><button class="button small primary" type="button" data-action="load-video" data-embed="${esc(v.embed)}" data-title="${esc(v.title)}">▶ Play official Epic clip</button></div></div><div class="motion-media-meta"><span>EPIC GAMES • UNREAL ENGINE 5.8</span><a href="${esc(v.sourceUrl)}" target="_blank" rel="noopener">Open source lesson ↗</a></div></article>`).join('')}</div></div>`;
}

function officialReferences(l){
  const refs=l.officialRefs||[];
  if(!refs.length)return '';
  return `<div class="official-ref-block">
    <div class="official-ref-head"><div><span class="deep-label">CURRENT SOURCE OF TRUTH</span><h3>Official Unreal Engine 5.8 reference</h3></div><span class="ue58-badge">UE 5.8</span></div>
    <p class="official-ref-intro">Use these Epic pages when Unreal's interface or behaviour differs from an older screenshot. They are the canonical current reference for this lesson.</p>
    <div class="official-ref-grid">${refs.map(r=>`<a class="official-ref-card" href="${esc(r.url)}" target="_blank" rel="noopener">
      <span class="official-ref-source">${esc(r.source||'Epic Games')} • ${esc(r.version||'UE5.8')}</span>
      <strong>${esc(r.title)}</strong>
      <p>${esc(r.note||'Open the current official Unreal Engine documentation.')}</p>
      <span class="official-ref-open">Open current Epic docs ↗</span>
    </a>`).join('')}</div>
  </div>`;
}


function inlineExercise(l,index){
  const x=l.inlineExercises?.[index];
  if(!x)return '';
  const label=x.kind==='try'?'TRY IT NOW':x.kind==='test'?'TEST IT IN PLAY':'MAKE IT YOURS';
  const icon=x.kind==='try'?'▶':x.kind==='test'?'◉':'✦';
  return `<section class="inline-exercise ${x.kind}"><div class="inline-exercise-head"><span class="inline-exercise-icon">${icon}</span><div><span class="deep-label">${label}</span><h3>${esc(x.title)}</h3></div></div><p class="inline-exercise-task">${esc(x.task)}</p><ol>${x.steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol><div class="inline-exercise-check"><b>Success check:</b> ${esc(x.check)}</div></section>`;
}

function deepDive(l){
  const d=l.deepDive;if(!d)return '';
  return `<div class="deep-dive">
    ${d.find?`<div class="tool-locate">
      <div><span class="deep-label">WHERE DO I FIND IT?</span><h3>${esc(d.find.title)}</h3></div>
      <ol>${d.find.steps.map(x=>`<li>${esc(x)}</li>`).join('')}</ol>
      ${d.find.note?`<div class="callout"><b>Shortcut thinking:</b> ${esc(d.find.note)}</div>`:''}
    </div>`:''}

    ${d.anatomy?.length?`<div class="deep-section"><span class="deep-label">READ THE NODE</span><h3>What each part actually does</h3>
      <div class="anatomy-grid">${d.anatomy.map((x,i)=>`<div class="anatomy-item"><span>${String(i+1).padStart(2,'0')}</span><div><strong>${esc(x[0])}</strong><p>${esc(x[1])}</p></div></div>`).join('')}</div>
    </div>`:''}

    ${d.process?.length?`<div class="deep-section"><span class="deep-label">WHAT HAPPENS AT RUNTIME?</span><h3>Follow the execution</h3>
      <div class="runtime-flow">${d.process.map((x,i)=>`<div class="runtime-step"><b>${i+1}</b><span>${esc(x)}</span></div>`).join('')}</div>
    </div>`:''}

    ${d.examples?.length?`<div class="deep-section"><span class="deep-label">CLEAR EXAMPLES</span><h3>See the same idea in real game logic</h3>
      <div class="example-grid">${d.examples.map(x=>`<article class="logic-example">
        <h4>${esc(x.title)}</h4>
        <p class="logic-question">${esc(x.question)}</p>
        <div class="logic-condition"><small>CONDITION</small><strong>${esc(x.condition)}</strong></div>
        <div class="logic-outcomes"><div class="logic-true"><small>TRUE</small><p>${esc(x.true)}</p></div><div class="logic-false"><small>FALSE</small><p>${esc(x.false)}</p></div></div>
        <p class="logic-why"><b>Why this works:</b> ${esc(x.why)}</p>
      </article>`).join('')}</div>
    </div>`:''}

    ${d.remember?.length?`<div class="remember-box"><span class="deep-label">REMEMBER THIS</span>${d.remember.map(x=>`<div class="remember-line">✓ ${esc(x)}</div>`).join('')}</div>`:''}
  </div>`;
}

function guidedBuild(l){
  if(!l.guidedDetailed?.length)return `<ol class="steps">${l.guided.map(s=>`<li>${esc(s)}</li>`).join('')}</ol>`;
  return `<div class="guided-detailed">${l.guidedDetailed.map((s,i)=>`<article class="guided-step">
    <div class="guided-step-num">${String(i+1).padStart(2,'0')}</div>
    <div class="guided-step-main">
      <h3>${esc(s.title)}</h3>
      <div class="guided-do"><span>DO THIS</span><p>${esc(s.do)}</p></div>
      <div class="guided-reason"><span>WHY</span><p>${esc(s.why)}</p></div>
      <div class="guided-check"><span>CHECK</span><p>${esc(s.check)}</p></div>
    </div>
  </article>`).join('')}</div>`;
}
function requirements(xs){
  return `<div class="requirements">${xs.map(x=>`<div class="requirement">${esc(x)}</div>`).join('')}</div>`;
}
function task(type,label,x){
  const hints=x.hints?.length
    ? `<button class="button small ghost" data-action="hint">💡 Reveal hint</button>${x.hints.map((h,i)=>`<div class="hint">Hint ${i+1}: ${esc(h)}</div>`).join('')}`
    : '';
  return `<div class="task ${type}"><span class="task-label">${label}</span><h3>${esc(x.title)}</h3><p>${esc(x.task)}</p>${requirements(x.requirements)}${hints}</div>`;
}
function statusControls(id){
  const current=projectStatus(id);
  return `<div class="status-controls">
    <button class="status-btn ${current==='not_started'?'active':''}" data-action="project-status" data-mechanic="${id}" data-status="not_started">Not started</button>
    <button class="status-btn ${current==='building'?'active':''}" data-action="project-status" data-mechanic="${id}" data-status="building">Building</button>
    <button class="status-btn ${current==='complete'?'active':''}" data-action="project-status" data-mechanic="${id}" data-status="complete">Complete</button>
  </div>`;
}
function projectTaskCard(l){
  const x=l.projectTask;
  if(!x)return '';
  return `<div class="game-task">
    <span class="task-label">◈ OPTIONAL PRACTICE BUILD</span>
    <h3>${esc(x.name)}</h3>
    <p><b>Mission:</b> ${esc(x.mission)}</p>
    <p>${esc(x.build)}</p>
    <div class="project-proof"><strong>Definition of done</strong>${requirements(x.proof)}</div>
    <div class="callout good"><b>Optional polish:</b> ${esc(x.polish)}</div>
    <div class="project-status-bar">
      <small>This tracks the optional <b>Signal Lost practice</b>. Assignment and group work belongs in <b>Projects</b>.</small>
      ${statusControls(l.id)}
    </div>
  </div>`;
}

function dashboard(){
  const i=level(),n=nextLesson(),np=pathProgress(n.path);
  const pathsComplete=DATA.paths.filter(p=>pathProgress(p.id).pct===100).length;
  return `<section class="hero learning-first-hero">
    <div class="hero-copy">
      <span class="eyebrow">Learn • Practise • Test • Apply</span>
      <h1>Learn Unreal.<br>Build better games.</h1>
      <p>The Learning Hub is first and foremost a UE5 course. Learn the idea, see it in Unreal, practise it immediately, then prove you can apply it independently.</p>
      <div class="hero-actions">
        <a class="button primary" href="#/lesson/${n.id}">▶ Continue learning</a>
        <a class="button ghost" href="#/revision">↻ Start revision quiz</a>
        <a class="button ghost" href="#/projects">▣ Projects</a>
      </div>
    </div>
    <div class="hero-art" aria-hidden="true">
      <div class="bp-node one"><div class="bp-head">Learn Skill</div><div class="bp-body">Understand WHY<br>See it in Unreal</div></div>
      <div class="bp-node two"><div class="bp-head">Practise Skill</div><div class="bp-body">Build → Test → Change</div></div>
    </div>
  </section>

  <div class="stat-grid">
    <div class="stat"><small>Current level</small><strong>${i.n}</strong></div>
    <div class="stat"><small>Total XP</small><strong>${i.xp}</strong></div>
    <div class="stat"><small>Lessons complete</small><strong>${state.completed.length}/${DATA.lessons.length}</strong></div>
    <div class="stat"><small>Learning paths complete</small><strong>${pathsComplete}/${DATA.paths.length}</strong></div>
  </div>

  <section class="section">
    <div class="section-head"><div><h2>Continue learning</h2><p>Pick up the next skill before worrying about project admin.</p></div></div>
    <a class="continue-card" href="#/lesson/${n.id}">
      <div class="continue-icon">${path(n.path).icon}</div>
      <div class="continue-main">
        <span class="eyebrow">${esc(path(n.path).title)}</span>
        <h3>${esc(n.title)}</h3><p>${esc(n.short)}</p>
        <div class="path-meta"><span>${n.duration} • ${n.xp} XP</span><span>${np.pct}% path complete</span></div>
        <div class="progress"><span style="width:${np.pct}%"></span></div>
      </div><span class="button small">Open →</span>
    </a>
  </section>

  <section class="section"><div class="section-head"><div><h2>Learning paths</h2><p>Follow them in order or jump to the exact UE5 skill you need.</p></div></div>
    <div class="path-grid">${DATA.paths.map(p=>{const x=pathProgress(p.id);return `<a class="path-card" href="#/path/${p.id}"><div class="path-icon">${p.icon}</div><h3>${esc(p.title)}</h3><p>${esc(p.description)}</p><div class="path-meta"><span>${x.done}/${x.total} lessons</span><span>${x.pct}%</span></div><div class="progress"><span style="width:${x.pct}%"></span></div></a>`}).join('')}</div>
  </section>

  <section class="section secondary-workspace-section">
    <div class="section-head"><div><h2>Projects & assessment</h2><p>Use this workspace when a lesson turns into real assignment, game-jam or team work.</p></div></div>
    <div class="workspace-cards">
      <a class="workspace-card" href="#/projects"><span>▣</span><div><strong>Projects</strong><p>Multiple solo or group projects, development logs, screenshots, milestones and individual contribution.</p></div></a>
      <a class="workspace-card" href="#/progress"><span>◎</span><div><strong>Evidence & progress</strong><p>Course evidence, teacher feedback and approved practical work.</p></div></a>
      <a class="workspace-card" href="#/requests"><span>✦</span><div><strong>Feature requests</strong><p>Suggest improvements, vote, and see teacher replies.</p></div></a>
    </div>
  </section>`;
}
function pathPage(id){
  const p=path(id);if(!p)return notFound();
  const ls=DATA.lessons.filter(l=>l.path===id).sort((a,b)=>a.order-b.order),x=pathProgress(id);
  return `<div class="page-head"><div class="breadcrumb"><a href="#/">Dashboard</a> / Learning path</div><span class="eyebrow">${x.done}/${x.total} complete • ${x.pct}%</span><h1>${p.icon} ${esc(p.title)}</h1><p class="muted">${esc(p.description)}</p><div class="progress"><span style="width:${x.pct}%"></span></div></div><div class="lesson-list">${ls.map(lessonRow).join('')}</div>`;
}
function quizHtml(l){
  return l.quiz.map((q,qi)=>`<div class="quiz" data-q="${qi}"><strong>${qi+1}. ${esc(q[0])}</strong><div class="quiz-options">${q[1].map((o,oi)=>`<button class="quiz-option" data-action="quiz" data-lesson="${l.id}" data-q="${qi}" data-o="${oi}">${esc(o)}</button>`).join('')}</div><div class="quiz-feedback">${esc(q[3])}</div></div>`).join('');
}


function evidenceStatusLabel(s){
  return ({draft:'Draft',submitted:'Waiting for review',changes_required:'Changes required',approved:'Approved'})[s]||'Not submitted';
}
function evidenceStatusClass(s){
  return ({draft:'draft',submitted:'submitted',changes_required:'changes',approved:'approved'})[s]||'none';
}
function evidenceSection(l){
  if(!BACKEND.user){
    return `<section class="content-card" id="evidence">
      <span class="eyebrow">10 • Evidence</span><h2>Prove you built it</h2>
      <p class="muted">A completion tick tells you that you visited the lesson. Evidence shows that the mechanic actually works in your game.</p>
      <div class="offline-note">Sign in with a free Learning Hub account to submit screenshots/PDF evidence, a build link and a short reflection for teacher review. Guest lesson and game progress still works locally on this browser.</div>
      ${BACKEND.mode==='cloud'?'<button class="button small" data-action="open-auth" style="margin-top:9px">Sign in / create account</button>':''}
    </section>`;
  }
  return `<section class="content-card" id="evidence">
    <span class="eyebrow">10 • Evidence</span><h2>Prove you built it</h2>
    <p class="muted">Show the mechanic working in your actual game and briefly explain what you built, what changed, and what you learned.</p>
    ${l.evidencePrompt?`<div class="evidence-brief">
      <div><span class="deep-label">SHOW</span>${l.evidencePrompt.show.map(x=>`<p>✓ ${esc(x)}</p>`).join('')}</div>
      <div><span class="deep-label">REFLECT</span>${l.evidencePrompt.reflection.map(x=>`<p>• ${esc(x)}</p>`).join('')}</div>
    </div>`:''}
    <div id="evidencePanel" data-lesson="${l.id}"><div class="muted">Loading your evidence…</div></div>
  </section>`;
}

function commentSection(l){
  if(!BACKEND.user){
    if(BACKEND.mode==='cloud'){
      return `<section class="content-card" id="comments"><span class="eyebrow">11 • Ask / reflect</span><h2>Teacher feedback</h2><div class="offline-note">Sign in with your Learning Hub account to leave a private question or reflection attached to this lesson.</div><button class="button small" data-action="open-auth" style="margin-top:9px">Sign in / create account</button></section>`;
    }
    return `<section class="content-card" id="comments"><span class="eyebrow">11 • Ask / reflect</span><h2>Teacher feedback</h2><div class="offline-note"><b>Local mode:</b> account-backed comments are ready in the V3 code but need the Supabase project connected. Lessons, XP and Signal Lost practice still work locally.</div></section>`;
  }
  return `<section class="content-card" id="comments"><span class="eyebrow">11 • Ask / reflect</span><h2>Question, reflection & teacher feedback</h2>
    <p class="muted">Keep this about the learning: what worked, what you changed, or where you are stuck.</p>
    <div class="comments-wrap" id="commentsList"><div class="muted">Loading comments…</div></div>
    <form class="comment-form" data-action-form="comment" data-lesson="${l.id}">
      <textarea name="body" maxlength="2000" placeholder="Ask a question or write a short reflection…" required></textarea>
      <button class="button small primary" type="submit">Post</button>
    </form>
  </section>`;
}

function lessonPage(id){
  const l=lesson(id);if(!l)return notFound();
  state.lastLesson=id;saveState();
  const p=path(l.path),done=state.completed.includes(id);
  return `<div class="breadcrumb"><a href="#/">Dashboard</a> / <a href="#/path/${p.id}">${esc(p.title)}</a> / ${esc(l.title)}</div>
  <section class="lesson-hero">
    <div><span class="eyebrow">${esc(p.title)} • Lesson ${l.order}</span><h1>${esc(l.title)}</h1><p>${esc(l.short)}</p>
      <div class="tags"><span class="tag ${tagClass(l.difficulty)}">${l.difficulty}</span><span class="tag">${l.duration}</span><span class="tag">+${l.xp} XP</span>${done?'<span class="tag beginner">Completed ✓</span>':''}${projectStatus(id)==='complete'?'<span class="tag beginner">Game mechanic ✓</span>':''}</div>
      <div class="mode-toggle"><button data-action="mode" data-mode="guided" class="${lessonMode==='guided'?'active':''}">Guided</button><button data-action="mode" data-mode="independent" class="${lessonMode==='independent'?'active':''}">Independent</button></div>
    </div>
    <div class="lesson-meta"><div class="meta-line"><small>Learning aim</small><strong>${esc(l.aim)}</strong></div><div class="meta-line"><small>Lesson model</small><strong>Learn → Practise → Prove</strong></div><div class="meta-line"><small>Practice mechanic</small><strong>${esc(l.projectTask?.name||'Practice build')}</strong></div></div>
  </section>

  <div class="lesson-layout ${lessonMode==='independent'?'independent':''}">
  <article>
    <section class="content-card" id="aims"><span class="eyebrow">01 • Goal</span><h2>What you should be able to do</h2><div class="goal-grid">${l.goals.map(g=>`<div class="goal">${esc(g)}</div>`).join('')}</div></section>

    <section class="content-card learn-card" id="learn"><span class="eyebrow">02 • Learn</span><h2>Understand the idea first</h2>
      ${l.explanation ? `<div class="explain-lead"><h3>What is it?</h3><p>${esc(l.explanation.what)}</p></div>
      ${currentVisuals(l)}
      ${docVisuals(l,'intro')}
      ${motionMedia(l,'intro')}
      <div class="explain-grid">
        <div class="explain-box why"><span>WHY IT MATTERS</span><p>${esc(l.explanation.why)}</p></div>
        <div class="explain-box mental"><span>HOW TO THINK ABOUT IT</span><p>${esc(l.explanation.mental)}</p></div>
        <div class="explain-box example"><span>GAME / BLUEPRINT EXAMPLE</span><p>${esc(l.explanation.example)}</p></div>
        <div class="explain-box use"><span>WHEN YOU'D USE IT</span><p>${esc(l.explanation.use)}</p></div>
      </div>` : ''}
      ${docVisuals(l,'concept')}
      ${motionMedia(l,'concept')}
      ${inlineExercise(l,0)}
      ${docVisuals(l,'practice')}
      ${motionMedia(l,'practice')}
      ${deepDive(l)}
      ${conceptVisuals(l)}
      ${docVisuals(l,'deeper')}
      ${motionMedia(l,'deeper')}
      ${inlineExercise(l,1)}
      <h3 class="concept-title">Key terms</h3>
      <div class="goal-grid">${l.concepts.map(c=>`<div class="concept"><strong>${esc(c[0])}</strong><br>${esc(c[1])}</div>`).join('')}</div>
      ${inlineExercise(l,2)}
      ${officialReferences(l)}
    </section>

    <section class="content-card guided-section" id="guided"><span class="eyebrow">03 • Full guided build</span><h2>Put the pieces together</h2><p>The short exercises above make you stop and prove each idea. This walkthrough now combines the lesson into one complete working build.</p>${guidedBuild(l)}</section>
    <section class="content-card guided-hidden-note"><span class="eyebrow">Independent mode</span><h2>Guided steps hidden</h2><p>Use the aim, explanation and challenges as your brief. Switch back only when the walkthrough is genuinely needed.</p></section>

    <section class="content-card" id="check"><span class="eyebrow">04 • Quick check</span><h2>Do you understand the idea?</h2>${quizHtml(l)}</section>
    <section class="content-card" id="apply"><span class="eyebrow">05 • Apply</span><h2>Stretch & Challenge</h2>${task('stretch','★ Stretch',l.stretch)}${task('challenge','🔥 Challenge',l.challenge)}</section>

    <section class="content-card" id="experience"><span class="eyebrow">06 • Experience it</span><h2>Play it or watch it</h2>
      <div class="task experience"><span class="task-label">🎮 ${esc(l.experience.focus)}</span><h3>${esc(l.experience.game)}</h3>
      <div class="analysis-grid"><div class="analysis-box"><small>Play it</small><strong>Use the real game</strong><p>${esc(l.experience.play)}</p></div><div class="analysis-box"><small>Watch it</small><strong>No game? No problem.</strong><p>${esc(l.experience.watch)}</p></div></div>
      <h3 style="margin-top:13px">What to look for</h3>${requirements(l.experience.observe)}
      <a class="button small ghost" target="_blank" rel="noopener" href="${youtube(l.experience.search)}">▶ Find gameplay on YouTube</a></div>
    </section>

    <section class="content-card" id="homework"><span class="eyebrow">07 • Homework</span><h2>Take the thinking outside Unreal</h2>
      <div class="task homework"><span class="task-label">⌂ Homework</span><h3>${esc(l.homework.title)}</h3><p>${esc(l.homework.task)}</p>
      <div class="callout"><b>Evidence:</b> ${esc(l.homework.evidence)}</div><div class="callout good"><b>Stretch:</b> ${esc(l.homework.stretch)}</div>
      <button class="button small" data-action="copy-homework" data-lesson="${l.id}">Copy for Teams</button></div>
    </section>

    <section class="content-card" id="debug"><span class="eyebrow">08 • Debug & improve</span><h2>Common problems</h2><ul>${l.common.map(x=>`<li>${esc(x)}</li>`).join('')}</ul><div class="callout good"><b>Good practice:</b> ${esc(l.goodPractice)}</div></section>

    <section class="content-card" id="game"><span class="eyebrow">09 • Practice build</span><h2>Apply it in a playable system</h2><p>Use Signal Lost as the shared practice spine, or adapt the same mechanic to a sandbox. Your assessed and group projects are logged separately in Projects.</p>${projectTaskCard(l)}</section>

    ${evidenceSection(l)}
    ${commentSection(l)}
  </article>

  <aside class="lesson-nav">
    <button class="section-button" data-action="scroll" data-target="aims">01 Learning aims</button>
    <button class="section-button" data-action="scroll" data-target="learn">02 Learn</button>
    <button class="section-button" data-action="scroll" data-target="guided">03 Guided build</button>
    <button class="section-button" data-action="scroll" data-target="check">04 Quick check</button>
    <button class="section-button" data-action="scroll" data-target="apply">05 Stretch & challenge</button>
    <button class="section-button" data-action="scroll" data-target="experience">06 Play / watch</button>
    <button class="section-button" data-action="scroll" data-target="homework">07 Homework</button>
    <button class="section-button" data-action="scroll" data-target="debug">08 Debug & improve</button>
    <button class="section-button" data-action="scroll" data-target="game">09 Practice build</button>
    <button class="section-button" data-action="scroll" data-target="evidence">10 Evidence</button>
    <button class="section-button" data-action="scroll" data-target="comments">11 Ask / reflect</button>
    <hr>
    <button class="button ${done?'success':'primary'}" data-action="complete" data-lesson="${l.id}">${done?'✓ Lesson completed':`Mark lesson complete • +${l.xp} XP`}</button>
  </aside>
  </div>`;
}

function myGame(){
  const pp=projectProgress();
  const loop=PROJECT.coreLoop.map((x,i)=>`${i?'<span class="loop-arrow">→</span>':''}<span class="loop-step">${esc(x)}</span>`).join('');
  return `<section class="project-hero">
    <span class="eyebrow">Main project • 6 milestones • 20 mechanics</span>
    <h1>${esc(projectState.project_title)}</h1>
    <p>${esc(PROJECT.premise)}</p>
    <div class="core-loop">${loop}</div>
  </section>

  <div class="project-summary-grid">
    <section class="project-panel">
      <span class="eyebrow">Make it yours</span><h3>Project identity</h3>
      <div class="project-form-row">
        <label class="muted">Game title<input class="project-input" id="projectTitle" value="${esc(projectState.project_title)}" maxlength="80"></label>
        <label class="muted">Theme<select class="project-input" id="projectTheme">${PROJECT.themes.map(x=>`<option ${x===projectState.theme?'selected':''}>${esc(x)}</option>`).join('')}</select></label>
      </div>
      <label class="muted">One-sentence pitch<textarea class="project-textarea" id="projectPitch" maxlength="300" placeholder="My game is about…">${esc(projectState.pitch)}</textarea></label>
      <button class="button small" data-action="save-project-profile">Save project identity</button>
    </section>
    <section class="project-panel">
      <span class="eyebrow">Overall build</span><h3>${pp.complete}/${pp.total} mechanics complete</h3>
      <p>${pp.building} currently marked as building.</p>
      <div class="progress"><span style="width:${pp.pct}%"></span></div>
      <p><b>${pp.pct}%</b> of the shared technical spine is complete.</p>
      <span class="sync-chip ${BACKEND.user?'cloud':''}">${BACKEND.user?'☁ Account progress synced':'● Saved on this browser'}</span>
    </section>
  </div>

  <section class="section">
    <div class="section-head"><div><h2>The game spine</h2><p>Every lesson feeds one real mechanic into the same project.</p></div></div>
    <div class="milestone-list">${PROJECT.milestones.map(m=>{
      const mp=milestoneProgress(m);
      return `<section class="milestone-card">
        <div class="milestone-head"><div><span class="eyebrow">${esc(m.short)}</span><h3>${esc(m.title)}</h3><p>${esc(m.goal)}</p></div><span class="milestone-pct">${mp.pct}%</span></div>
        <div class="mechanic-list">${m.lessons.map(id=>{
          const l=lesson(id),x=mechanic(id),s=projectStatus(id);
          return `<div class="mechanic-row ${s}">
            <span class="mechanic-state">${s==='complete'?'✓':s==='building'?'◐':'○'}</span>
            <span><strong>${esc(x.name)}</strong><small>${esc(l.title)} — ${esc(x.mission)}</small></span>
            ${statusControls(id)}
          </div>`;
        }).join('')}</div>
      </section>`;
    }).join('')}</div>
  </section>

  <section class="section">
    <div class="section-head"><div><h2>Project rules</h2><p>The freedom is visual and creative; the technical standards are shared.</p></div></div>
    <div class="content-card">${requirements(PROJECT.rules)}</div>
  </section>`;
}




function projectKindLabel(kind){return ({assignment:'Assignment',group_project:'Group project',game_jam:'Game jam',practice:'Practice',personal:'Personal',client:'Client project',other:'Other'})[kind]||'Project'}
function projectStatusLabelValue(status){return ({active:'Active',complete:'Complete',archived:'Archived'})[status]||status}
function projectTemplateWorkModeLabel(mode){return ({individual:'Individual',group:'Group',either:'Individual or group'})[mode]||mode}
function milestoneStatusLabel(status){return status==='complete'?'Complete':status==='in_progress'?'In progress':'Incomplete'}

function projectsPage(){
  if(!BACKEND.user){
    return `<div class="page-head"><div class="breadcrumb"><a href="#/">Dashboard</a> / Projects</div><span class="eyebrow">Projects & assessment</span><h1>▣ Projects</h1><p class="muted">A lightweight development logbook for assignment, game-jam and team work.</p></div><div class="project-login-gate"><h2>Learning stays open. Project work is private.</h2><p>Sign in to keep project logs, screenshots, milestones and team feedback together.</p><button class="button primary" data-action="open-auth">Sign in / create account</button></div>`;
  }
  const teacher=BACKEND.profile?.role==='teacher';
  if(teacher){
    return `<div class="page-head"><div class="breadcrumb"><a href="#/">Dashboard</a> / Projects</div><span class="eyebrow">Projects & assessment</span><h1>▣ Project Templates</h1><p class="muted">Create a simple brief and milestones for a class. Students then start an individual copy or form their own group.</p></div>
    <div class="project-create-grid teacher-template-create">
      <section class="project-panel"><span class="eyebrow">Teacher template</span><h2>Create class project</h2><form class="form-grid" data-action-form="create-project-template">
        <label>Project title<input name="title" maxlength="160" required placeholder="e.g. Unit 321 — 3D Environment"></label>
        <div class="form-two"><label>Class<select name="classId" id="templateClassSelect" required><option value="">Choose a class…</option></select></label><label>How students work<select name="workMode"><option value="either">Students choose individual or group</option><option value="individual">Individual only</option><option value="group">Group only</option></select></label></div><div id="templateClassHelp" class="template-class-help" hidden></div>
        <div class="form-two"><label>Type of work<select name="projectKind"><option value="assignment">Assignment</option><option value="group_project">Group project</option><option value="game_jam">Game jam</option><option value="client">Client project</option><option value="practice">Practice</option><option value="other">Other</option></select></label><label>Assessment / unit <small>optional</small><input name="assessmentUnit" maxlength="160" placeholder="e.g. Unit 321"></label></div>
        <label>Brief<textarea name="brief" maxlength="6000" placeholder="The simple project brief students need to see."></textarea></label>
        <button class="button primary" type="submit">Create template →</button>
      </form></section>
      <section class="project-panel"><span class="eyebrow">Deliberately lightweight</span><h2>What a template does</h2><p>It gives students the brief and milestone structure. It does <b>not</b> grade them, collect a final submission or replace your college assessment system.</p><div class="callout good"><b>Student flow:</b> Available Project → Start Individual / Start Group → development log → screenshots → feedback.</div></section>
    </div>
    <section class="section"><div class="section-head"><div><h2>Your class templates</h2><p>Draft templates stay hidden from students. Publish when the brief and milestones are ready.</p></div></div><div id="projectTemplatesList"><div class="empty">Loading templates…</div></div></section>
    <section class="section"><div class="section-head"><div><h2>Class project activity</h2><p>Student project copies linked to classes you teach.</p></div></div><div id="projectsList"><div class="empty">Loading projects…</div></div></section>`;
  }
  return `<div class="page-head"><div class="breadcrumb"><a href="#/">Dashboard</a> / Projects</div><span class="eyebrow">Development log • screenshots • feedback</span><h1>▣ Projects</h1><p class="muted">Use Projects when your learning turns into assignment, game-jam, personal or group work.</p></div>
  <section class="section available-projects-section"><div class="section-head"><div><h2>Available Projects</h2><p>Projects published by your teachers appear here. Choose how to start when the brief allows it.</p></div></div><div id="availableProjectsList"><div class="empty">Loading available projects…</div></div></section>
  <section class="section"><div class="section-head"><div><h2>Your Projects</h2><p>Your active, completed and group projects.</p></div></div><div id="projectsList"><div class="empty">Loading projects…</div></div></section>
  <details class="project-self-create"><summary>Create or join something else</summary><div class="project-create-grid">
    <section class="project-panel"><span class="eyebrow">Create your own</span><h2>New project</h2><form class="form-grid" data-action-form="create-project">
      <label>Project title<input name="title" maxlength="120" required placeholder="e.g. Horror Game Jam"></label>
      <div class="form-two"><label>Project type<select name="projectType"><option value="solo">Solo</option><option value="group">Group</option></select></label><label>Type of work<select name="projectKind"><option value="assignment">Assignment</option><option value="group_project">Group project</option><option value="game_jam">Game jam</option><option value="practice">Practice</option><option value="personal">Personal</option><option value="client">Client project</option><option value="other">Other</option></select></label></div>
      <div class="form-two"><label>Class <small>optional</small><select name="classId" id="projectClassSelect"><option value="">No class linked</option></select></label><label>Assessment / unit <small>optional</small><input name="assessmentUnit" maxlength="160" placeholder="e.g. Unit 321"></label></div>
      <label>Brief / description<textarea name="description" maxlength="4000" placeholder="What are you making?"></textarea></label>
      <button class="button primary" type="submit">Create project</button>
    </form></section>
    <section class="project-panel"><span class="eyebrow">Join a team</span><h2>Group project code</h2><p>The Project Lead shares the group code. If the project belongs to a class, only students in that class can join.</p><form class="form-grid" data-action-form="join-project"><label>Project code<input name="projectCode" maxlength="20" required placeholder="GRP-XXXXXXXX"></label><button class="button" type="submit">Join group project</button></form></section>
  </div></details>`;
}

function projectListCards(rows,emptyMessage='No projects yet.'){
  if(!rows.length)return `<div class="empty"><h3>${esc(emptyMessage)}</h3></div>`;
  return `<div class="multi-project-grid">${rows.map(p=>{
    const mine=p.members.find(m=>m.user_id===BACKEND.user?.id);
    const memberNames=p.members.slice(0,3).map(m=>esc(m.profile?.display_name||'Student')).join(', ');
    return `<article class="multi-project-card ${esc(p.status)}"><div class="project-card-top"><span class="project-type-pill ${p.project_type}">${p.project_type==='group'?'GROUP':'SOLO'}</span><span class="request-status ${p.status==='complete'?'shipped':p.status==='archived'?'declined':'building'}">${esc(projectStatusLabelValue(p.status))}</span></div><h3>${esc(p.title)}</h3><p>${esc(p.description||'No project description yet.')}</p><div class="project-card-meta"><span>${esc(projectKindLabel(p.project_kind))}</span>${p.class?`<span>${esc(p.class.name)}</span>`:''}${p.assessment_unit?`<span>${esc(p.assessment_unit)}</span>`:''}</div><div class="project-team-summary"><b>${p.members.length}</b> member${p.members.length===1?'':'s'}${memberNames?` • ${memberNames}`:''}${mine?.role_label?` • You: ${esc(mine.role_label)}`:''}</div><a class="button primary small" href="#/projects/${p.id}">Open project →</a></article>`;
  }).join('')}</div>`;
}

async function renderProjects(){
  const box=$('#projectsList');if(!box||!BACKEND.user)return;
  try{
    if(BACKEND.profile?.role==='teacher'){
      const [rows,templates,classes]=await Promise.all([BACKEND.getProjects(),BACKEND.getProjectTemplates(),BACKEND.getTeachingClasses()]);
      const select=$('#templateClassSelect'),classHelp=$('#templateClassHelp'),templateForm=document.querySelector('[data-action-form="create-project-template"]'),templateSubmit=templateForm?.querySelector('button[type="submit"]');
      if(select)select.innerHTML='<option value="">Choose a class…</option>'+classes.map(c=>`<option value="${esc(c.id)}">${esc(c.name)}${c.academic_year?` • ${esc(c.academic_year)}`:''}</option>`).join('');
      if(classHelp){classHelp.hidden=classes.length>0;classHelp.innerHTML=classes.length?'':`<b>Create a class first.</b> Project templates belong to a class so only the right students can see them. <a href="#/teacher">Open Teacher Dashboard →</a>`;}
      if(select)select.disabled=!classes.length;if(templateSubmit)templateSubmit.disabled=!classes.length;
      const tbox=$('#projectTemplatesList');if(tbox)tbox.innerHTML=templates.length?`<div class="multi-project-grid">${templates.map(t=>`<article class="multi-project-card template-card"><div class="project-card-top"><span class="project-type-pill solo">${esc(projectTemplateWorkModeLabel(t.work_mode).toUpperCase())}</span><span class="request-status ${t.status==='published'?'shipped':t.status==='archived'?'declined':'new'}">${esc(t.status==='published'?'Published':t.status==='archived'?'Archived':'Draft')}</span></div><h3>${esc(t.title)}</h3><p>${esc(t.brief||'No brief yet.')}</p><div class="project-card-meta"><span>${esc(t.class?.name||'Class')}</span><span>${t.milestones.length} milestone${t.milestones.length===1?'':'s'}</span>${t.assessment_unit?`<span>${esc(t.assessment_unit)}</span>`:''}</div><a class="button primary small" href="#/projects/template/${t.id}">Manage template →</a></article>`).join('')}</div>`:'<div class="empty"><h3>No templates yet.</h3><p>Create the first class project above.</p></div>';
      box.innerHTML=projectListCards(rows,'No student project copies yet.');
      return;
    }
    const [rows,templates,classes]=await Promise.all([BACKEND.getProjects(),BACKEND.getProjectTemplates(),BACKEND.getMyClasses()]);
    const select=$('#projectClassSelect');if(select)select.innerHTML='<option value="">No class linked</option>'+classes.map(c=>`<option value="${esc(c.id)}">${esc(c.name)}${c.academic_year?` • ${esc(c.academic_year)}`:''}</option>`).join('');
    const started=new Set(rows.filter(p=>p.template_id).map(p=>p.template_id));
    const available=$('#availableProjectsList');
    if(available)available.innerHTML=templates.length?`<div class="available-template-grid">${templates.map(t=>{
      const already=started.has(t.id);
      const solo=t.work_mode==='individual'||t.work_mode==='either',group=t.work_mode==='group'||t.work_mode==='either';
      return `<article class="available-template-card ${already?'started':''}"><div><span class="eyebrow">${esc(t.class?.name||'Class')} • ${esc(projectKindLabel(t.project_kind))}</span><h3>${esc(t.title)}</h3><p>${esc(t.brief||'Open the project to read the brief.')}</p><div class="project-card-meta"><span>${esc(projectTemplateWorkModeLabel(t.work_mode))}</span><span>${t.milestones.length} milestone${t.milestones.length===1?'':'s'}</span>${t.assessment_unit?`<span>${esc(t.assessment_unit)}</span>`:''}</div></div>${already?`<div class="callout good"><b>Started ✓</b><br>This class project is already in Your Projects.</div>`:`<div class="button-row">${solo?`<button class="button primary" data-action="start-template-project" data-template="${t.id}" data-mode="solo">Start Individual</button>`:''}${group?`<button class="button ${solo?'ghost':'primary'}" data-action="start-template-project" data-template="${t.id}" data-mode="group">Start Group</button>`:''}</div>`}</article>`;
    }).join('')}</div>`:'<div class="empty"><h3>No class projects available right now.</h3><p>Published teacher projects will appear here.</p></div>';
    box.innerHTML=projectListCards(rows,'No projects yet.');
  }catch(err){box.innerHTML=`<div class="offline-note">${esc(err.message)}</div>`}
}

function projectTemplatePage(id){
  if(!BACKEND.user||BACKEND.profile?.role!=='teacher')return projectsPage();
  return `<div class="breadcrumb"><a href="#/">Dashboard</a> / <a href="#/projects">Projects</a> / Template</div><div id="projectTemplateDetail" data-template="${esc(id)}"><div class="empty">Loading template…</div></div>`;
}

async function renderProjectTemplate(id){
  const box=$('#projectTemplateDetail');if(!box||BACKEND.profile?.role!=='teacher')return;
  try{
    const b=await BACKEND.getProjectTemplate(id),t=b.template;
    box.innerHTML=`<section class="project-detail-hero template-detail-hero"><div><span class="eyebrow">Teacher project template • ${esc(t.class?.name||'Class')}</span><h1>${esc(t.title)}</h1><p>${esc(t.brief||'No brief yet.')}</p><div class="project-card-meta"><span>${esc(projectTemplateWorkModeLabel(t.work_mode))}</span><span>${esc(projectKindLabel(t.project_kind))}</span>${t.assessment_unit?`<span>${esc(t.assessment_unit)}</span>`:''}</div></div><div class="template-publish-state"><span class="request-status ${t.status==='published'?'shipped':t.status==='archived'?'declined':'new'}">${esc(t.status==='published'?'Published to students':t.status==='archived'?'Archived':'Draft')}</span></div></section>
    <div class="project-detail-grid">
      <section class="project-panel"><span class="eyebrow">Brief</span><h2>Template settings</h2><form class="form-grid" data-action-form="project-template-settings" data-template="${t.id}"><label>Title<input name="title" maxlength="160" required value="${esc(t.title)}"></label><div class="form-two"><label>How students work<select name="workMode"><option value="either" ${t.work_mode==='either'?'selected':''}>Students choose individual or group</option><option value="individual" ${t.work_mode==='individual'?'selected':''}>Individual only</option><option value="group" ${t.work_mode==='group'?'selected':''}>Group only</option></select></label><label>Type of work<select name="projectKind"><option value="assignment" ${t.project_kind==='assignment'?'selected':''}>Assignment</option><option value="group_project" ${t.project_kind==='group_project'?'selected':''}>Group project</option><option value="game_jam" ${t.project_kind==='game_jam'?'selected':''}>Game jam</option><option value="client" ${t.project_kind==='client'?'selected':''}>Client project</option><option value="practice" ${t.project_kind==='practice'?'selected':''}>Practice</option><option value="other" ${t.project_kind==='other'?'selected':''}>Other</option></select></label></div><label>Assessment / unit <small>optional</small><input name="assessmentUnit" maxlength="160" value="${esc(t.assessment_unit||'')}"></label><label>Brief<textarea name="brief" maxlength="6000">${esc(t.brief||'')}</textarea></label><label>Visibility<select name="status"><option value="draft" ${t.status==='draft'?'selected':''}>Draft — hidden from students</option><option value="published" ${t.status==='published'?'selected':''}>Published — available to class</option></select></label><button class="button primary" type="submit">Save template</button></form></section>
      <section class="project-panel"><span class="eyebrow">Milestones</span><h2>Simple project stages</h2>${b.milestones.length?`<div class="template-milestone-list">${b.milestones.map(m=>`<div class="template-milestone"><div><strong>${esc(m.title)}</strong><p>${esc(m.description||'')}</p></div><details><summary>Edit</summary><form class="form-grid compact-form" data-action-form="edit-template-milestone" data-template="${t.id}" data-milestone="${m.id}"><label>Title<input name="title" maxlength="160" value="${esc(m.title)}" required></label><label>Description<textarea name="description" maxlength="2000">${esc(m.description||'')}</textarea></label><div class="button-row"><button class="button small" type="submit">Save</button><button class="link-button danger-link" type="button" data-action="delete-template-milestone" data-template="${t.id}" data-milestone="${m.id}">Delete</button></div></form></details></div>`).join('')}</div>`:'<div class="muted">No milestones yet.</div>'}<form class="form-grid compact-form" data-action-form="template-milestone" data-template="${t.id}"><label>Milestone title<input name="title" maxlength="160" required placeholder="e.g. Greybox complete"></label><label>Short description<textarea name="description" maxlength="2000" placeholder="What does complete look like?"></textarea></label><button class="button small" type="submit">Add milestone</button></form></section>
    </div><section class="section"><div class="danger-zone"><div><strong>Delete template</strong><p>Student projects already created from it are kept. This only removes the teacher template.</p></div><button class="button danger" data-action="delete-project-template" data-template="${t.id}" data-name="${esc(t.title)}">Delete template</button></div></section>`;
  }catch(err){box.innerHTML=`<div class="offline-note">${esc(err.message)}</div>`}
}

function projectDetailPage(id){
  if(!BACKEND.user)return projectsPage();
  return `<div class="breadcrumb"><a href="#/">Dashboard</a> / <a href="#/projects">Projects</a> / Project</div><div id="projectDetail" data-project="${esc(id)}"><div class="empty">Loading project…</div></div>`;
}

function projectMediaHtml(media){
  if(!media?.length)return '';
  return `<div class="project-media-grid">${media.map(f=>`<figure class="project-media-figure"><button class="project-media-thumb" data-action="open-project-image" data-path="${esc(f.storage_path)}" data-caption="${esc(f.caption||'')}" data-name="${esc(f.original_name)}" title="Open ${esc(f.original_name)}"><span data-project-preview data-path="${esc(f.storage_path)}">Loading image…</span></button>${f.caption?`<figcaption>${esc(f.caption)}</figcaption>`:`<figcaption class="muted">${esc(f.original_name)}</figcaption>`}</figure>`).join('')}</div>`;
}
function updateField(label,value){return value?`<div class="project-update-field"><strong>${esc(label)}</strong><p>${esc(value)}</p></div>`:''}
function projectUpdateBody(u){
  const what=u.what_did||u.body||'';
  const legacyContribution=(!u.what_did&&u.contribution)?u.contribution:'';
  return `<div class="project-update-structured">${updateField('What I did',what)}${updateField('Why I did it',u.why||'')}${updateField('Problems / changes',u.problems||'')}${updateField('Next steps',u.next_steps||'')}${legacyContribution?updateField('My contribution',legacyContribution):''}</div>`;
}
function projectUpdateHtml(u,project,bundle){
  const mine=u.author_id===BACKEND.user?.id,active=project.status==='active';
  const milestone=bundle.milestones.find(m=>m.id===u.milestone_id),member=bundle.members.find(m=>m.user_id===u.author_id);
  const edited=u.updated_at&&u.created_at&&(new Date(u.updated_at)-new Date(u.created_at)>1500);
  const canComment=active&&(bundle.members.some(m=>m.user_id===BACKEND.user?.id)||BACKEND.profile?.role==='teacher');
  const remaining=Math.max(0,6-(u.media?.length||0));
  return `<article class="project-log-entry ${mine?'mine':''}"><div class="project-log-head"><div><span class="entry-type">Development update</span><strong>${esc(u.author?.display_name||'Student')}</strong>${member?.role_label?`<small class="author-role">${esc(member.role_label)}</small>`:''}${u.title?`<h3>${esc(u.title)}</h3>`:''}</div><time>${new Date(u.created_at).toLocaleString()}${edited?' • edited':''}</time></div>${milestone?`<div class="log-milestone">Milestone: ${esc(milestone.title)}</div>`:''}${projectUpdateBody(u)}${projectMediaHtml(u.media)}<div class="project-comments">${u.comments.map(c=>`<div class="project-comment"><b>${esc(c.author?.display_name||'User')}</b><span>${new Date(c.created_at).toLocaleString()}</span><p>${esc(c.body)}</p></div>`).join('')}${canComment?`<form class="project-comment-form" data-action-form="project-comment" data-project="${project.id}" data-update="${u.id}"><input name="body" maxlength="3000" required placeholder="Reply to this update…"><button class="button tiny" type="submit">Reply</button></form>`:''}</div>${mine&&active?`<details class="project-entry-edit"><summary>Edit my entry</summary><form class="project-update-form compact-form" data-action-form="edit-project-update" data-project="${project.id}" data-update="${u.id}" data-existing-media="${u.media?.length||0}"><div class="form-two"><label>Short heading <small>optional</small><input name="title" maxlength="180" value="${esc(u.title||'')}"></label><label>Milestone <small>optional</small><select name="milestoneId"><option value="">Not linked</option>${bundle.milestones.map(m=>`<option value="${m.id}" ${m.id===u.milestone_id?'selected':''}>${esc(m.title)}</option>`).join('')}</select></label></div><label><span>What I did <small>optional</small></span><textarea name="whatDid" maxlength="4000">${esc(u.what_did||u.body||'')}</textarea></label><label><span>Why I did it <small>optional</small></span><textarea name="why" maxlength="3000">${esc(u.why||'')}</textarea></label><label><span>Problems / changes <small>optional</small></span><textarea name="problems" maxlength="3000">${esc(u.problems||'')}</textarea></label><label><span>Next steps <small>optional</small></span><textarea name="nextSteps" maxlength="3000">${esc(u.next_steps||'')}</textarea></label>${u.media?.length?`<div class="existing-caption-editor"><strong>Screenshot captions</strong>${u.media.map(f=>`<label>${esc(f.original_name)}<input name="caption_${f.id}" maxlength="500" value="${esc(f.caption||'')}" placeholder="What should the assessor notice?"></label>`).join('')}</div>`:''}${remaining?`<label>Add screenshots <small>optional • ${remaining} remaining</small><input type="file" name="files" multiple accept="image/png,image/jpeg,image/webp" data-project-files></label><div class="file-caption-list" data-file-captions></div>`:''}<div class="button-row"><button class="button small primary" type="submit">Save changes</button><button class="link-button danger-link" type="button" data-action="delete-project-update" data-project="${project.id}" data-update="${u.id}">Delete entry</button></div></form></details>`:''}</article>`;
}

function contributionEntryHtml(u,bundle){
  const milestone=bundle.milestones.find(m=>m.id===u.milestone_id);
  return `<article class="assessment-entry"><div class="assessment-entry-head"><time>${new Date(u.created_at).toLocaleDateString()}</time>${milestone?`<span>${esc(milestone.title)}</span>`:''}</div><h3>${esc(u.title||'Development update')}</h3>${projectUpdateBody(u)}${projectMediaHtml(u.media)}</article>`;
}

async function renderProjectDetail(id){
  const box=$('#projectDetail');if(!box||!BACKEND.user)return;
  try{
    const b=await BACKEND.getProject(id),p=b.project;
    const me=b.members.find(m=>m.user_id===BACKEND.user.id),owner=p.owner_id===BACKEND.user.id,teacher=BACKEND.profile?.role==='teacher',active=p.status==='active';
    const canStructure=active&&(owner||teacher),canLog=active&&Boolean(me);
    const myUpdates=b.updates.filter(u=>u.author_id===BACKEND.user.id),myMedia=myUpdates.reduce((n,u)=>n+(u.media?.length||0),0);
    const completed=b.milestones.filter(m=>m.status==='complete').length,progress=b.milestones.length?Math.round(completed/b.milestones.length*100):0;
    box.innerHTML=`<section class="project-detail-hero"><div><span class="eyebrow">${esc(projectKindLabel(p.project_kind))} • ${p.project_type==='group'?'Group':'Solo'} project</span><h1>${esc(p.title)}</h1><p>${esc(p.description||'No project description yet.')}</p><div class="project-card-meta">${p.class?`<span>Class: ${esc(p.class.name)}</span>`:''}${p.assessment_unit?`<span>${esc(p.assessment_unit)}</span>`:''}<span>${esc(projectStatusLabelValue(p.status))}</span></div>${owner?`<div class="button-row project-completion-actions">${active?`<button class="button primary" data-action="complete-project" data-project="${p.id}">✓ Mark Project Complete</button>`:`<button class="button" data-action="reopen-project" data-project="${p.id}">↺ Reopen Project</button>`}</div>`:''}</div><div class="project-detail-stat"><strong>${progress}%</strong><small>${completed}/${b.milestones.length} milestones complete</small><div class="progress"><span style="width:${progress}%"></span></div></div></section>
    ${!active?`<div class="project-readonly-banner"><b>PROJECT COMPLETE</b><span>This project is read-only. The Project Lead can reopen it if more work is needed.</span></div>`:''}
    <div class="project-detail-grid">
      <section class="project-panel"><span class="eyebrow">Team</span><h2>${p.project_type==='group'?'Shared project':'Project owner'}</h2><div class="project-member-list">${b.members.map(m=>`<div class="project-member"><div class="project-member-avatar">${esc((m.profile?.display_name||'?').slice(0,1).toUpperCase())}</div><div><strong>${esc(m.profile?.display_name||'Student')}</strong><small>${m.role==='owner'?'Project Lead':esc(m.role_label||'Team member')}</small></div>${owner&&active&&m.role!=='owner'?`<button class="link-button danger-link" data-action="remove-project-member" data-project="${p.id}" data-user="${m.user_id}">Remove</button>`:''}</div>`).join('')}</div>${me&&active?`<form class="inline-role-form" data-action-form="project-role" data-project="${p.id}"><label>My role in this project<input name="roleLabel" maxlength="100" value="${esc(me.role_label||'')}" placeholder="e.g. Level Designer"></label><button class="button small" type="submit">Save role</button></form>`:''}${p.project_type==='group'&&owner&&active?`<div class="project-code-box"><small>GROUP JOIN CODE</small><code>${esc(p.join_code||'')}</code><div class="button-row"><button class="button small" data-action="copy-project-code" data-code="${esc(p.join_code||'')}">Copy code</button><button class="button small ghost" data-action="regenerate-project-code" data-project="${p.id}">New code</button></div></div>`:''}${me&&me.role!=='owner'&&active?`<button class="button small danger" data-action="leave-project" data-project="${p.id}" data-user="${BACKEND.user.id}">Leave project</button>`:''}</section>
      <section class="project-panel"><span class="eyebrow">Milestones</span><h2>Project progress</h2>${b.milestones.length?`<div class="project-milestone-list">${b.milestones.map(m=>`<div class="project-milestone ${m.status}"><div><strong>${esc(m.title)}</strong><p>${esc(m.description||'')}</p></div><div class="milestone-actions"><span>${esc(milestoneStatusLabel(m.status))}</span>${active&&(me||teacher)?`<button class="milestone-check ${m.status==='complete'?'complete':''}" data-action="milestone-toggle" data-milestone="${m.id}" data-status="${m.status==='complete'?'not_started':'complete'}" data-project="${p.id}" aria-label="${m.status==='complete'?'Mark incomplete':'Mark complete'}">${m.status==='complete'?'✓':'○'}</button>`:''}${canStructure?`<details class="milestone-edit"><summary>Edit</summary><form class="form-grid compact-form" data-action-form="edit-project-milestone" data-project="${p.id}" data-milestone="${m.id}"><label>Title<input name="title" maxlength="160" value="${esc(m.title)}" required></label><label>Description<textarea name="description" maxlength="2000">${esc(m.description||'')}</textarea></label><div class="button-row"><button class="button tiny" type="submit">Save</button><button class="link-button danger-link" type="button" data-action="delete-milestone" data-milestone="${m.id}" data-project="${p.id}">Delete</button></div></form></details>`:''}</div></div>`).join('')}</div>`:'<div class="muted">No milestones yet.</div>'}${canStructure?`<form class="form-grid compact-form" data-action-form="project-milestone" data-project="${p.id}"><label>New milestone<input name="title" maxlength="160" required placeholder="e.g. Greybox complete"></label><label>Short description<textarea name="description" maxlength="2000" placeholder="What does complete look like?"></textarea></label><button class="button small" type="submit">Add milestone</button></form>`:''}</section>
    </div>
    ${canLog?`<section class="section project-log-create"><div class="section-head"><div><h2>Add development log entry</h2><p>The prompts are optional — use the ones that help explain your development.</p></div></div><form class="project-update-form" data-action-form="project-update" data-project="${p.id}" data-existing-media="0"><div class="form-two"><label>Short heading <small>optional</small><input name="title" maxlength="180" placeholder="e.g. Rebuilt the corridor greybox"></label><label>Milestone <small>optional</small><select name="milestoneId"><option value="">Not linked to a milestone</option>${b.milestones.map(m=>`<option value="${m.id}">${esc(m.title)}</option>`).join('')}</select></label></div><div class="structured-log-grid"><label><span>What I did <small>optional</small></span><textarea name="whatDid" maxlength="4000" placeholder="What did you make, test or change?"></textarea></label><label><span>Why I did it <small>optional</small></span><textarea name="why" maxlength="3000" placeholder="Why was this the right decision?"></textarea></label><label><span>Problems / changes <small>optional</small></span><textarea name="problems" maxlength="3000" placeholder="What went wrong or changed after testing?"></textarea></label><label><span>Next steps <small>optional</small></span><textarea name="nextSteps" maxlength="3000" placeholder="What will you do next?"></textarea></label></div><label>Screenshots <small>optional • up to 6 • 10 MB each</small><input type="file" name="files" multiple accept="image/png,image/jpeg,image/webp" data-project-files></label><div class="file-caption-list" data-file-captions></div><button class="button primary" type="submit">Add to development log</button></form></section>`:''}
    <section class="section"><div class="section-head"><div><h2>Team development log</h2><p>Every entry stays attached to its author. Teacher and teammate feedback sits directly underneath the relevant update.</p></div></div><div class="project-log-list">${b.updates.length?b.updates.map(u=>projectUpdateHtml(u,p,b)).join(''):'<div class="empty">No development-log entries yet.</div>'}</div></section>
    ${me?`<section class="section"><div class="section-head"><div><h2>My Contributions</h2><p>Only the development evidence attributed to you, ready to refer back to when you submit assessment work elsewhere.</p></div></div><div class="contribution-summary"><div><small>My log entries</small><strong>${myUpdates.length}</strong></div><div><small>My screenshots</small><strong>${myMedia}</strong></div><div><small>Role</small><strong>${esc(me.role_label||(me.role==='owner'?'Project Lead':'Team member'))}</strong></div></div><div class="my-contribution-list">${myUpdates.length?myUpdates.slice().reverse().map(u=>contributionEntryHtml(u,b)).join(''):'<div class="muted">Your own entries will appear here.</div>'}</div></section>`:''}
    ${owner&&active?`<section class="section"><details class="project-settings"><summary>Project settings</summary><form class="form-grid" data-action-form="project-settings" data-project="${p.id}"><label>Title<input name="title" maxlength="120" value="${esc(p.title)}" required></label><label>Brief / description<textarea name="description" maxlength="4000">${esc(p.description||'')}</textarea></label><label>Assessment / unit <small>optional</small><input name="assessmentUnit" maxlength="160" value="${esc(p.assessment_unit||'')}"></label><button class="button" type="submit">Save project settings</button><button class="button danger" type="button" data-action="delete-project" data-project="${p.id}" data-name="${esc(p.title)}">Permanently delete project</button></form></details></section>`:''}`;
    await hydrateProjectMedia();bindProjectFileInputs(box);
  }catch(err){box.innerHTML=`<div class="offline-note">${esc(err.message)}</div>`}
}

function bindProjectFileInputs(root=document){
  root.querySelectorAll?.('[data-project-files]').forEach(input=>{
    if(input.dataset.captionBound)return;input.dataset.captionBound='1';
    input.addEventListener('change',()=>{
      const form=input.closest('form'),target=form?.querySelector('[data-file-captions]');if(!target)return;
      const existing=Number(form?.dataset.existingMedia||0),files=Array.from(input.files||[]),limit=Math.max(0,6-existing);
      if(files.length>limit){toast(`This entry can contain up to 6 screenshots. You can add ${limit} more.`);input.value='';target.innerHTML='';return}
      target.innerHTML=files.map((f,i)=>`<label class="file-caption-row"><span>${esc(f.name)}</span><input name="newCaption${i}" maxlength="500" placeholder="Caption — what should the viewer notice?"></label>`).join('');
    });
  });
}

async function hydrateProjectMedia(){
  await Promise.all($$('[data-project-preview]').map(async node=>{try{const url=await BACKEND.openProjectFile(node.dataset.path);if(!url)return;const img=document.createElement('img');img.src=url;img.alt='Project screenshot';img.loading='lazy';node.replaceChildren(img);}catch(e){node.textContent='Preview unavailable';}}));
}

async function loadEvidence(id){
  const box=$('#evidencePanel');if(!box||!BACKEND.user)return;
  const l=lesson(id),s=await BACKEND.getSubmission(id);
  if(!s){
    box.innerHTML=evidenceForm(l,null);
    return;
  }
  const status=evidenceStatusLabel(s.status);
  const files=s.submission_files||[];
  const link=safeUrl(s.evidence_url);
  const locked=['submitted','approved'].includes(s.status);
  box.innerHTML=`<div class="evidence-summary ${evidenceStatusClass(s.status)}">
    <div class="evidence-head"><div><span class="request-status ${evidenceStatusClass(s.status)}">${esc(status)}</span><h3>${esc(l.projectTask?.name||l.title)}</h3></div><small>${s.updated_at?new Date(s.updated_at).toLocaleString():''}</small></div>
    ${s.reflection?`<div class="reflection-box"><strong>Your reflection</strong><p>${esc(s.reflection)}</p></div>`:''}
    ${link?`<a class="button small ghost" href="${esc(link)}" target="_blank" rel="noopener">↗ Open evidence link</a>`:''}
    ${files.length?`<div class="evidence-files"><strong>Uploaded evidence</strong>${files.map(f=>`<button class="evidence-file" data-action="open-evidence-file" data-path="${esc(f.storage_path)}">📎 ${esc(f.original_name)}</button>`).join('')}</div>`:''}
    ${s.teacher_feedback?`<div class="teacher-feedback ${s.status==='approved'?'good':''}"><strong>Teacher feedback</strong><p>${esc(s.teacher_feedback)}</p></div>`:''}
    ${locked
      ?`<div class="offline-note">${s.status==='submitted'?'This submission is locked while it waits for teacher review.':'Approved evidence is kept as part of your course/project record.'}</div>`
      :evidenceForm(l,s)}
  </div>`;
}
function evidenceForm(l,s){
  return `<form class="evidence-form" data-action-form="evidence" data-lesson="${l.id}">
    <label><span>Short reflection</span><textarea name="reflection" maxlength="4000" required placeholder="What did you build? What problem did you solve? What did you change after testing?">${esc(s?.reflection||'')}</textarea></label>
    <label><span>Evidence link <small>optional</small></span><input name="evidenceUrl" type="url" maxlength="1000" value="${esc(s?.evidence_url||'')}" placeholder="Unlisted video, OneDrive/SharePoint link later, build link…"></label>
    <label><span>Upload screenshots / PDF <small>optional • up to 6 files • max 10 MB each</small></span><input name="file" type="file" multiple accept="image/png,image/jpeg,image/webp,application/pdf"><small class="evidence-upload-help">PNG, JPG, WebP or PDF. For gameplay video, paste an external video/Stream/OneDrive link above rather than uploading the video file.</small></label>
    <div class="button-row">
      <button class="button small ghost" type="submit" data-intent="draft">Save draft</button>
      <button class="button small primary" type="submit" data-intent="submit">Submit for review</button>
    </div>
  </form>`;
}
function achievementData(approvedCount=0,requestCount=0){
  const done=state.completed.length,game=projectProgress().complete;
  const ids=new Set(state.completed);
  return [
    ['first-step','First Steps','Complete your first lesson.',done>=1,'◉'],
    ['blueprint-core','Blueprint Builder','Complete Variables, Branches and Functions.',['variables','branches','functions'].every(x=>ids.has(x)),'◇'],
    ['game-builder','Practice Systems Builder','Complete 10 mechanics in Signal Lost practice.',game>=10,'⚙'],
    ['halfway','Halfway There','Complete 10 lessons.',done>=10,'½'],
    ['evidence','Proof, Not Promises','Get 3 pieces of evidence approved.',approvedCount>=3,'✓'],
    ['community','Community Voice','Submit an idea to the Requests Board.',requestCount>=1,'✦'],
    ['final-game','Practice Build Complete','Complete all 20 practice mechanics.',game>=Object.keys(PROJECT.mechanics).length,'◈'],
    ['course','UE5 Pathfinder','Complete every lesson.',done>=DATA.lessons.length,'★']
  ];
}
function progressPage(){
  const pp=projectProgress(),i=level();
  return `<div class="page-head">
    <div class="breadcrumb"><a href="#/">Dashboard</a> / My Progress</div>
    <span class="eyebrow">Evidence • feedback • achievements</span>
    <h1>◎ My Progress</h1>
    <p class="muted">Completion shows where you've been. Evidence and feedback show what you can actually do.</p>
  </div>
  <div class="stat-grid">
    <div class="stat"><small>Lessons</small><strong>${state.completed.length}/${DATA.lessons.length}</strong></div>
    <div class="stat"><small>Practice mechanics</small><strong>${pp.complete}/${pp.total}</strong></div>
    <div class="stat"><small>XP</small><strong>${i.xp}</strong></div>
    <div class="stat"><small>Cloud evidence</small><strong id="progressEvidenceStat">${BACKEND.user?'…':'Locked'}</strong></div>
  </div>
  <section class="section"><div class="section-head"><div><h2>Achievements</h2><p>Small milestones for meaningful course progress.</p></div></div><div class="achievement-grid" id="achievementGrid">${renderAchievements(0,0)}</div></section>
  <section class="section"><div class="section-head"><div><h2>Evidence tracker</h2><p>See what has been submitted, approved or sent back for improvement.</p></div></div><div id="progressEvidence">${BACKEND.user?'<div class="empty">Loading evidence…</div>':'<div class="offline-note">Evidence tracking unlocks when you sign in. Lesson completion and optional Signal Lost practice status still work locally as a guest.</div>'}</div></section>
  <section class="section"><div class="section-head"><div><h2>My class</h2><p>Your teaching group once account sign-in is enabled.</p></div></div><div id="progressClasses">${BACKEND.user?'<div class="empty">Loading classes…</div>':'<div class="offline-note">Create or sign in to a Learning Hub account, then join using the class code from your teacher.</div>'}</div></section>
  <section class="section" id="notifications"><div class="section-head"><div><h2>Notifications</h2><p>Teacher feedback and roadmap updates.</p></div></div><div id="progressNotifications">${BACKEND.user?'<div class="empty">Loading notifications…</div>':'<div class="offline-note">Notifications unlock when you sign in to a Learning Hub account.</div>'}</div></section>`;
}
function renderAchievements(approvedCount,requestCount){
  return achievementData(approvedCount,requestCount).map(a=>`<div class="achievement ${a[3]?'unlocked':'locked'}"><div class="achievement-icon">${a[4]}</div><div><strong>${esc(a[1])}</strong><p>${esc(a[2])}</p></div><span>${a[3]?'UNLOCKED':'LOCKED'}</span></div>`).join('');
}
async function renderProgressCloud(){
  if(!BACKEND.user)return;
  const [subs,classes,notes,requests]=await Promise.all([
    BACKEND.getMySubmissions(),BACKEND.getMyClasses(),BACKEND.getNotifications(),BACKEND.getRequests()
  ]);
  const approved=subs.filter(s=>s.status==='approved').length;
  const submitted=subs.filter(s=>s.status==='submitted').length;
  const changes=subs.filter(s=>s.status==='changes_required').length;
  const mine=requests.filter(r=>r.author_id===BACKEND.user.id).length;
  const stat=$('#progressEvidenceStat');if(stat)stat.textContent=`${approved} approved`;
  const ag=$('#achievementGrid');if(ag)ag.innerHTML=renderAchievements(approved,mine);

  const evidence=$('#progressEvidence');
  if(evidence){
    const byMechanic=Object.fromEntries(subs.map(s=>[s.mechanic_id,s]));
    evidence.innerHTML=`<div class="evidence-overview"><span><b>${approved}</b> approved</span><span><b>${submitted}</b> waiting</span><span><b>${changes}</b> changes required</span></div>
    <div class="progress-list">${DATA.lessons.map(l=>{
      const s=byMechanic[l.id],status=s?.status||'none';
      return `<a class="progress-evidence-row ${evidenceStatusClass(status)}" href="#/lesson/${l.id}">
        <span class="mechanic-state">${status==='approved'?'✓':status==='submitted'?'◷':status==='changes_required'?'!':'○'}</span>
        <span><strong>${esc(l.projectTask?.name||l.title)}</strong><small>${esc(l.title)}</small></span>
        <span class="request-status ${evidenceStatusClass(status)}">${esc(s?evidenceStatusLabel(status):'No evidence')}</span>
      </a>`;
    }).join('')}</div>`;
  }

  const classBox=$('#progressClasses');
  if(classBox)classBox.innerHTML=`
    ${classes.length?classes.map(c=>`<div class="class-chip"><strong>${esc(c.name)}</strong><span>${esc(c.academic_year||'')}</span></div>`).join(''):'<div class="offline-note">You are not assigned to a class yet.</div>'}
    ${BACKEND.profile?.role!=='teacher'?`<form class="join-class-inline" data-action-form="join-class">
      <label>Join another class with a teacher code
        <div><input name="classCode" autocomplete="off" maxlength="20" placeholder="e.g. ABCD1234EF" required><button class="button small" type="submit">Join class</button></div>
      </label>
    </form>`:''}`;

  const noteBox=$('#progressNotifications');
  if(noteBox)noteBox.innerHTML=notes.length?notes.map(n=>`<div class="notification-row ${n.read_at?'read':'unread'}">
    <div><span class="eyebrow">${esc(n.kind)}</span><strong>${esc(n.title)}</strong><p>${esc(n.body)}</p><small>${new Date(n.created_at).toLocaleString()}</small></div>
    <button class="button small ghost" data-action="notification-open" data-id="${n.id}" data-link="${esc(n.link||'#/progress')}">${n.read_at?'Open':'Read'}</button>
  </div>`).join(''):'<div class="empty">No notifications yet.</div>';
  refreshNotificationCount(notes);
}
function refreshNotificationCount(notes=null){
  const badge=$('#notificationCount');
  if(!badge)return;
  if(!BACKEND.user){badge.hidden=true;badge.textContent='0';return}
  const apply=rows=>{
    const count=(rows||[]).filter(x=>!x.read_at).length;
    badge.textContent=count;badge.hidden=count===0;
  };
  if(notes)apply(notes);
  else BACKEND.getNotifications().then(apply).catch(()=>{badge.hidden=true});
}

function requestCategoryLabel(c){
  return ({
    feature:'Feature',
    tutorial:'Tutorial',
    lesson:'Lesson / topic',
    game_mechanic:'Game mechanic',
    bug:'Bug / problem',
    other:'Other'
  })[c]||c;
}
function requestStatusLabel(s){
  return ({new:'New',planned:'Planned',building:'Building',shipped:'Shipped',declined:'Not planned'})[s]||s;
}
function requestBoard(){
  if(!BACKEND.user){
    return `<section class="project-hero">
      <span class="eyebrow">Student-powered roadmap</span>
      <h1>✦ Requests Board</h1>
      <p>Ask for a tutorial. Suggest a mechanic. Request a feature. Report something annoying. The best ideas can move from student request to the live Learning Hub.</p>
    </section>
    <section class="section"><div class="content-card">
      <h2>${BACKEND.mode==='cloud'?'Sign in to shape the Learning Hub':'Cloud account features are unavailable in this copy'}</h2>
      <p class="muted">${BACKEND.mode==='cloud'
        ?'Requests are account-backed so votes remain one-per-student and ideas can be tracked across devices. Create a Learning Hub account with your class code or sign in.'
        :'Lessons, XP and Signal Lost practice still work locally, but shared requests need the Supabase backend.'}</p>
      ${BACKEND.mode==='cloud'?'<button class="button primary" data-action="open-auth">Sign in / create account</button>':'<div class="offline-note">Guest learning remains fully available on this browser.</div>'}
    </div></section>`;
  }
  return `<section class="project-hero">
    <span class="eyebrow">Student-powered roadmap</span>
    <h1>✦ Requests Board</h1>
    <p>Request tutorials, lessons, mechanics and features. Vote for the ideas you want most. When something is accepted, you can watch it move through Planned → Building → Shipped.</p>
  </section>
  <div class="project-summary-grid">
    <section class="project-panel">
      <span class="eyebrow">Send an idea</span><h3>What should we build next?</h3>
      <form class="form-grid" data-action-form="request">
        <label>Type<select name="category" required>
          <option value="feature">Feature</option>
          <option value="tutorial">Tutorial</option>
          <option value="lesson">Lesson / topic</option>
          <option value="game_mechanic">Game mechanic</option>
          <option value="bug">Bug / problem</option>
          <option value="other">Other</option>
        </select></label>
        <label>Short title<input name="title" minlength="3" maxlength="120" required placeholder="e.g. Tutorial for an inventory system"></label>
        <label>Tell us what you want and why<textarea name="body" minlength="3" maxlength="2000" required placeholder="What would make the learning, project workspace or site better?"></textarea></label>
        <button class="button primary" type="submit">Submit request</button>
      </form>
    </section>
    <section class="project-panel">
      <span class="eyebrow">How it works</span><h3>The site has a living roadmap</h3>
      <p>Votes help show demand, but they are not the only factor. Useful curriculum ideas, quick wins and good teaching opportunities can still jump the queue.</p>
      <div class="request-roadmap">
        <span class="request-status new">New</span><b>→</b>
        <span class="request-status planned">Planned</span><b>→</b>
        <span class="request-status building">Building</span><b>→</b>
        <span class="request-status shipped">Shipped</span>
      </div>
      <div class="callout good"><b>Keep it useful:</b> requests should improve learning, projects, tutorials or the site itself.</div>
    </section>
  </div>
  <section class="section">
    <div class="section-head"><div><h2>Student roadmap</h2><p>Highest-interest ideas are easy to spot, and shipped requests stay visible as proof the board matters.</p></div></div>
    <div id="requestList"><div class="empty">Loading requests…</div></div>
  </section>`;
}

async function renderRequests(){
  const box=$('#requestList');if(!box||!BACKEND.user)return;
  try{
    const rows=await BACKEND.getRequests();
    if(!rows.length){box.innerHTML='<div class="empty"><h3>No requests yet.</h3><p>Someone gets to be first. Ask for the tutorial or feature you actually want.</p></div>';return}
    const rank={building:0,planned:1,new:2,shipped:3,declined:4};
    rows.sort((a,b)=>(rank[a.status]-rank[b.status]) || (b.votes-a.votes) || new Date(b.created_at)-new Date(a.created_at));
    box.innerHTML=`<div class="request-grid">${rows.map(r=>`
      <article class="request-card ${esc(r.status)}">
        <div class="request-card-head">
          <span class="request-kind">${esc(requestCategoryLabel(r.category))}</span>
          <span class="request-status ${esc(r.status)}">${esc(requestStatusLabel(r.status))}</span>
        </div>
        <h3>${esc(r.title)}</h3>
        <p>${esc(r.body)}</p>
        <div class="request-card-foot">
          <button class="vote-button ${r.my_vote?'active':''}" data-action="request-vote" data-request="${r.id}" data-voted="${r.my_vote?'1':'0'}">▲ <b>${r.votes}</b> vote${r.votes===1?'':'s'}</button>
          <span>${new Date(r.created_at).toLocaleDateString()}</span>
        </div>
        ${r.replies?.length?`<div class="request-replies"><strong>Teacher replies</strong>${r.replies.map(x=>`<div class="request-reply"><div><b>${esc(x.author?.display_name||'Teacher')}</b><span>${new Date(x.created_at).toLocaleString()}</span></div><p>${esc(x.body)}</p></div>`).join('')}</div>`:''}
        ${BACKEND.profile?.role==='teacher'?`<div class="teacher-request-controls">
          ${['new','planned','building','shipped','declined'].map(s=>`<button class="status-btn ${r.status===s?'active':''}" data-action="request-status" data-request="${r.id}" data-status="${s}">${esc(requestStatusLabel(s))}</button>`).join('')}
          <button class="status-btn danger" data-action="request-delete" data-request="${r.id}">Delete</button>
        </div><form class="request-reply-form" data-action-form="request-reply" data-request="${r.id}"><textarea name="body" maxlength="3000" required placeholder="Reply to this request…"></textarea><button class="button small primary" type="submit">Reply as teacher</button></form>`:''}
      </article>`).join('')}</div>`;
  }catch(err){box.innerHTML=`<div class="offline-note">${esc(err.message)}</div>`}
}

function challengeBoard(){
  return `<div class="page-head"><div class="breadcrumb"><a href="#/">Dashboard</a> / Challenges</div><span class="eyebrow">Independent practice</span><h1>🔥 Challenge Board</h1><p class="muted">No complete walkthroughs. Transfer each skill to a fresh problem, then put the main mechanic into your game.</p></div><div class="board-grid">${DATA.lessons.map(l=>`<div class="board-card"><span class="eyebrow">${esc(path(l.path).title)}</span><h3>${esc(l.challenge.title)}</h3><p>${esc(l.challenge.task)}</p>${requirements(l.challenge.requirements)}<div class="button-row"><a class="button small" href="#/lesson/${l.id}">Open lesson →</a><span class="sync-chip">${esc(l.projectTask?.name||'Game mechanic')}</span></div></div>`).join('')}</div>`;
}
function homeworkBoard(){
  return `<div class="page-head"><div class="breadcrumb"><a href="#/">Dashboard</a> / Homework</div><span class="eyebrow">Play • Watch • Analyse • Design</span><h1>⌂ Homework Board</h1><p class="muted">Homework broadens the thinking around the mechanic rather than simply adding more node-copying.</p></div><div class="board-grid">${DATA.lessons.map(l=>`<div class="board-card"><span class="eyebrow">${esc(l.title)}</span><h3>${esc(l.homework.title)}</h3><p>${esc(l.homework.task)}</p><div class="button-row"><button class="button small" data-action="copy-homework" data-lesson="${l.id}">Copy for Teams</button><a class="button small ghost" href="#/lesson/${l.id}">View lesson</a></div></div>`).join('')}</div>`;
}
function glossary(){
  return `<div class="page-head"><div class="breadcrumb"><a href="#/">Dashboard</a> / Glossary</div><span class="eyebrow">${DATA.glossary.length} starter terms</span><h1>? UE5 Glossary</h1><p class="muted">Short definitions for terms students meet while building.</p></div><input id="glossarySearch" type="search" placeholder="Filter glossary…" style="width:min(430px,100%);background:#0b121b;border:1px solid var(--line);color:#fff;border-radius:9px;padding:10px;margin-bottom:12px"><div class="glossary-grid" id="glossaryGrid">${DATA.glossary.map(([t,d])=>`<div class="glossary-item" data-search="${esc((t+' '+d).toLowerCase())}"><strong>${esc(t)}</strong><p>${esc(d)}</p></div>`).join('')}</div>`;
}
function revisionQuestionBank(lessonIds=null){
  const selected=Array.isArray(lessonIds)&&lessonIds.length?new Set(lessonIds):null;
  return DATA.lessons.filter(l=>!selected||selected.has(l.id)).flatMap(l=>l.quiz.map((q,qi)=>({lessonId:l.id,lessonTitle:l.title,pathId:l.path,question:q[0],options:q[1],correct:Array.isArray(q[2])?q[2]:[q[2]],feedback:q[3],key:`${l.id}-${qi}`})));
}
function shuffled(list){const a=[...list];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function loadRevisionResults(){try{return JSON.parse(localStorage.getItem(REVISION_STORE)||'[]')}catch(e){return []}}
function saveRevisionResult(result){const rows=[result,...loadRevisionResults()].slice(0,12);localStorage.setItem(REVISION_STORE,JSON.stringify(rows))}
function revisionSelectionLabel(lessonIds){
  if(!lessonIds?.length)return 'Random mixed';
  if(lessonIds.length===1)return lesson(lessonIds[0])?.title||'Focused topic';
  const pathIds=[...new Set(lessonIds.map(id=>lesson(id)?.path).filter(Boolean))];
  for(const pid of pathIds){const ids=DATA.lessons.filter(l=>l.path===pid).map(l=>l.id);if(ids.length===lessonIds.length&&ids.every(id=>lessonIds.includes(id)))return path(pid)?.title||'Learning path'}
  return `${lessonIds.length} selected topics`;
}
function startRevisionQuiz(lessonIds=null,count=10,label=null){
  const bank=shuffled(revisionQuestionBank(lessonIds));
  if(!bank.length){toast('Choose at least one topic with revision questions.');return}
  const wanted=[10,20,30].includes(Number(count))?Number(count):10,used=Math.min(wanted,bank.length);
  revisionSession={lessonIds:Array.isArray(lessonIds)?[...lessonIds]:null,topicLabel:label||revisionSelectionLabel(lessonIds),requestedCount:wanted,questions:bank.slice(0,used),index:0,answers:[],finished:false};
  route();if(used<wanted)toast(`This selection has ${used} question${used===1?'':'s'}, so the quiz uses all of them.`);
}
function revisionScore(session){
  let correct=0;session.answers.forEach((ans,i)=>{const expected=session.questions[i].correct.slice().sort().join(','),got=[...ans].sort().join(',');if(expected===got)correct++});
  return {correct,total:session.questions.length,pct:session.questions.length?Math.round(correct/session.questions.length*100):0};
}
function revision(){
  if(revisionSession?.finished){
    const score=revisionScore(revisionSession);
    return `<div class="page-head"><div class="breadcrumb"><a href="#/">Dashboard</a> / Revision</div><span class="eyebrow">Quiz complete • ${esc(revisionSession.topicLabel)}</span><h1>↻ ${score.pct}%</h1><p class="muted">${score.correct} correct out of ${score.total}. Use the misses to choose what to revisit.</p></div><div class="revision-result-hero"><div class="revision-score-ring"><strong>${score.pct}%</strong><span>${score.correct}/${score.total}</span></div><div><h2>${score.pct>=80?'Strong work.':score.pct>=60?'Getting there.':'Use the review below to target the gaps.'}</h2><div class="button-row"><button class="button primary" data-action="revision-restart">Choose another quiz</button><button class="button ghost" data-action="revision-repeat">Repeat same topics</button></div></div></div><section class="section"><div class="section-head"><div><h2>Answer review</h2><p>Your answer, the correct answer and the reason.</p></div></div><div class="revision-review-list">${revisionSession.questions.map((q,i)=>{const selected=revisionSession.answers[i]||[],ok=q.correct.slice().sort().join(',')===[...selected].sort().join(',');return `<article class="revision-review ${ok?'correct':'wrong'}"><span>${ok?'✓ Correct':'× Review'}</span><h3>${esc(q.question)}</h3><p><b>Your answer:</b> ${esc(selected.map(x=>q.options[x]).join(', ')||'No answer')}</p><p><b>Correct answer:</b> ${esc(q.correct.map(x=>q.options[x]).join(', '))}</p><div class="callout ${ok?'good':''}">${esc(q.feedback)}</div><a class="link-button" href="#/lesson/${q.lessonId}">Open ${esc(q.lessonTitle)} →</a></article>`}).join('')}</div></section>`;
  }
  if(revisionSession){
    const q=revisionSession.questions[revisionSession.index],n=revisionSession.index+1,multiple=q.correct.length>1;
    return `<div class="page-head"><div class="breadcrumb"><a href="#/">Dashboard</a> / Revision</div><span class="eyebrow">${esc(revisionSession.topicLabel)}</span><h1>Question ${n} of ${revisionSession.questions.length}</h1><div class="revision-progress"><span style="width:${Math.round((revisionSession.index/revisionSession.questions.length)*100)}%"></span></div></div><section class="revision-quiz-card"><span class="eyebrow">${esc(path(q.pathId)?.title||'UE5')} • ${esc(q.lessonTitle)}</span><h2>${esc(q.question)}</h2><p class="muted">${multiple?'Select every answer that applies.':'Choose the best answer.'}</p><form data-action-form="revision-answer" class="revision-answer-form">${q.options.map((o,i)=>`<label class="revision-choice"><input type="${multiple?'checkbox':'radio'}" name="answer" value="${i}" ${multiple?'':'required'}><span>${esc(o)}</span></label>`).join('')}<div class="button-row"><button class="button primary" type="submit">${n===revisionSession.questions.length?'Finish quiz':'Next question →'}</button><button class="button ghost" type="button" data-action="revision-abandon">Quit quiz</button></div></form></section>`;
  }
  const results=loadRevisionResults(),total=revisionQuestionBank().length;
  return `<div class="page-head"><div class="breadcrumb"><a href="#/">Dashboard</a> / Revision</div><span class="eyebrow">Scored retrieval practice</span><h1>↻ Revision Quizzes</h1><p class="muted">Choose 10, 20 or 30 questions. Mix the whole course or build a focused quiz from one lesson, a full learning path or several topics.</p></div>
  <div class="revision-start-grid">
    <section class="project-panel revision-random"><span class="eyebrow">Random quiz</span><h2>Mix everything</h2><p>${total} course questions are shuffled each time.</p><form data-action-form="revision-random-start"><label>Number of questions<select name="count"><option value="10" selected>10 — quick revision</option><option value="20">20 — solid session</option><option value="30">30 — full workout</option></select></label><button class="button primary" type="submit">Start random quiz →</button></form></section>
    <section class="project-panel revision-focus-intro"><span class="eyebrow">Focused quiz</span><h2>Choose your topics</h2><p>Select one lesson, tick a whole learning path, or mix several lessons together. If your selection contains fewer questions than the size you choose, the quiz simply uses all available questions.</p><div class="callout good"><b>Useful for:</b> revising tomorrow's lesson, fixing a weak area, or mixing related Blueprint topics before an assessment.</div></section>
  </div>
  <section class="section revision-builder"><div class="section-head"><div><h2>Build a focused quiz</h2><p id="revisionSelectionSummary">Choose at least one topic.</p></div></div><form data-action-form="revision-focused-start" id="revisionFocusedForm"><div class="revision-path-picker-grid">${DATA.paths.map(p=>{const lessons=DATA.lessons.filter(l=>l.path===p.id);return `<fieldset class="revision-path-picker" data-revision-path="${p.id}"><legend><span>${p.icon}</span>${esc(p.title)}</legend><label class="revision-select-path"><input type="checkbox" data-revision-path-toggle="${p.id}"> Select whole path</label><div class="revision-lesson-options">${lessons.map(l=>`<label><input type="checkbox" name="lessonIds" value="${l.id}" data-revision-lesson data-path="${p.id}"><span><strong>${esc(l.title)}</strong><small>${l.quiz.length} question${l.quiz.length===1?'':'s'}</small></span></label>`).join('')}</div></fieldset>`}).join('')}</div><div class="revision-builder-footer"><label>Number of questions<select name="count"><option value="10" selected>10</option><option value="20">20</option><option value="30">30</option></select></label><button class="button primary" type="submit">Start focused quiz →</button></div></form></section>
  ${results.length?`<section class="section"><div class="section-head"><div><h2>Recent scores</h2><p>Stored on this browser for quick progress checks.</p></div></div><div class="recent-quiz-results">${results.slice(0,6).map(r=>`<div><strong>${r.pct}%</strong><span>${esc(r.topicLabel)} • ${r.correct}/${r.total}</span><small>${new Date(r.at).toLocaleString()}</small></div>`).join('')}</div></section>`:''}`;
}
function teacherPage(){
  if(!BACKEND.user || BACKEND.profile?.role!=='teacher'){
    return `<div class="page-head"><span class="eyebrow">Teacher dashboard</span><h1>Teacher access</h1><p class="muted">This page becomes available to a profile with the teacher role when the cloud backend is connected.</p></div><div class="offline-note">Student learning remains fully usable in local mode. Teacher overview needs Supabase because it is aggregating progress across different accounts/devices.</div>`;
  }
  return `<div class="page-head"><span class="eyebrow">Teacher dashboard</span><h1>Teaching overview</h1><p class="muted">Class groups, evidence waiting for review, project progress, student questions and the student roadmap.</p></div><div id="teacherContent"><div class="empty">Loading teaching data…</div></div>`;
}
function notFound(){return `<div class="empty"><h2>That page fell out of the level.</h2><p>Return to the dashboard.</p><a class="button" href="#/">Dashboard</a></div>`}

function humanFileSize(bytes){
  const n=Number(bytes)||0;if(n<1024)return `${n} B`;if(n<1048576)return `${(n/1024).toFixed(1)} KB`;return `${(n/1048576).toFixed(1)} MB`;
}
function evidenceFileCard(f){
  const image=String(f.mime_type||'').startsWith('image/');
  return `<div class="teacher-evidence-file ${image?'image':'document'}">${image?`<button class="evidence-thumb" data-action="open-evidence-file" data-path="${esc(f.storage_path)}" aria-label="Open ${esc(f.original_name)}"><span class="evidence-thumb-loading" data-evidence-preview data-path="${esc(f.storage_path)}">Loading preview…</span></button>`:`<button class="evidence-doc-icon" data-action="open-evidence-file" data-path="${esc(f.storage_path)}">PDF</button>`}<div class="teacher-evidence-meta"><strong>${esc(f.original_name)}</strong><small>${esc(f.mime_type||'file')} • ${humanFileSize(f.size_bytes)}</small><button class="link-button" data-action="open-evidence-file" data-path="${esc(f.storage_path)}">Open file</button></div></div>`;
}
async function hydrateEvidencePreviews(){
  const nodes=$$('[data-evidence-preview]');
  await Promise.all(nodes.map(async node=>{try{const url=await BACKEND.openEvidenceFile(node.dataset.path);if(!url)return;const img=document.createElement('img');img.src=url;img.alt='Student evidence preview';img.loading='lazy';node.replaceChildren(img);}catch(err){node.textContent='Preview unavailable — open file';}}));
}

async function renderTeacher(){
  const box=$('#teacherContent');if(!box)return;
  try{
    const o=await BACKEND.teacherOverview();
    if(!o){box.innerHTML='<div class="empty">Teacher data unavailable.</div>';return}
    const byStudent=id=>o.progress.filter(x=>x.user_id===id).length;
    const projBy=id=>o.projects.filter(x=>x.user_id===id&&x.status==='complete').length;
    const commentsBy=id=>o.comments.filter(x=>x.student_id===id).length;
    const approvedBy=id=>o.submissions.filter(x=>x.user_id===id&&x.status==='approved').length;
    const names=Object.fromEntries(o.profiles.map(p=>[p.id,p.display_name]));
    const teacherNames=Object.fromEntries((o.teachers||[]).map(p=>[p.id,p.display_name]));
    const recent=o.comments.slice(0,12);
    const pending=o.submissions.filter(s=>s.status==='submitted');
    const reviewed=o.submissions.filter(s=>s.status==='approved'||s.status==='changes_required').slice(0,12);
    const approved=o.submissions.filter(s=>s.status==='approved').length;
    const activeClasses=o.classes.filter(c=>!c.archived);
    const archivedClasses=o.classes.filter(c=>c.archived);

    box.innerHTML=`<div class="teacher-grid">
      <div class="teacher-stat"><small>Students</small><strong>${o.profiles.length}</strong></div>
      <div class="teacher-stat"><small>Active classes</small><strong>${activeClasses.length}</strong><span>${archivedClasses.length} archived</span></div>
      <div class="teacher-stat"><small>Evidence waiting</small><strong>${pending.length}</strong></div>
      <div class="teacher-stat"><small>Evidence approved</small><strong>${approved}</strong></div>
      <div class="teacher-stat"><small>Lesson completions</small><strong>${o.progress.length}</strong></div>
      <div class="teacher-stat"><small>Practice mechanics complete</small><strong>${o.projects.filter(x=>x.status==='complete').length}</strong></div>
      <div class="teacher-stat"><small>Comments / questions</small><strong>${o.comments.length}</strong></div>
      <div class="teacher-stat"><small>Student requests</small><strong>${o.requests.length}</strong></div>
    </div>

    <div class="teacher-security-banner"><b>CLASS-SCOPED PRIVACY ACTIVE</b><span>You only see student progress, evidence and comments from classes you own or co-teach. Permanent class deletion remains owner-only.</span></div>

    <section class="section">
      <div class="section-head"><div><h2>Teacher team</h2><p>Invite colleagues without sharing a permanent master code. Each invite is unique, expires and can only be used once.</p></div><span class="sync-chip">${o.teachers?.length||1} teacher${(o.teachers?.length||1)===1?'':'s'}</span></div>
      <div class="teacher-split">
        <form class="project-panel form-grid" data-action-form="create-teacher-invite">
          <span class="eyebrow">Invite a teacher</span>
          <label>Who is it for? <span class="muted">(optional)</span><input name="label" maxlength="120" placeholder="e.g. Leah / Games teacher"></label>
          <label>Expires after
            <select name="days"><option value="1">1 day</option><option value="3">3 days</option><option value="7" selected>7 days</option><option value="14">14 days</option><option value="30">30 days</option></select>
          </label>
          <button class="button small primary" type="submit">Generate teacher invite</button>
          <div id="teacherInviteResult"></div>
        </form>
        <div class="teacher-team-panel">
          <div class="teacher-list">${(o.teachers||[]).map(t=>`<div class="teacher-person"><span class="teacher-person-icon">T</span><div><strong>${esc(t.display_name)}</strong><small>${t.id===BACKEND.user.id?'You • Teacher':'Teacher'}</small></div></div>`).join('')||'<div class="muted">Teacher account active.</div>'}</div>
          <div class="teacher-invite-list">
            ${(o.teacherInvites||[]).length?(o.teacherInvites||[]).map(inv=>{
              const expired=new Date(inv.expires_at)<=new Date();
              const state=inv.used_at?'Used':inv.revoked_at?'Revoked':expired?'Expired':'Active';
              return `<div class="teacher-invite-row ${state.toLowerCase()}">
                <div><strong>${esc(inv.label||'Teacher invite')}</strong><small>Code ending ${esc(inv.code_hint)} • ${state} • expires ${new Date(inv.expires_at).toLocaleDateString()}</small></div>
                ${state==='Active'?`<button class="button tiny ghost" data-action="revoke-teacher-invite" data-invite="${inv.id}">Revoke</button>`:''}
              </div>`;
            }).join(''):'<div class="muted">No teacher invites created yet.</div>'}
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-head"><div><h2>Classes</h2><p>Classes you own or co-teach. Assigned teachers share student/progress/evidence access; only the class owner can add/remove co-teachers or permanently delete the class.</p></div><span class="sync-chip">${activeClasses.length} active</span></div>
      <div class="teacher-split">
        <form class="project-panel form-grid" data-action-form="create-class">
          <span class="eyebrow">New class</span>
          <label>Class name<input name="name" required maxlength="100" placeholder="Games Y1 A"></label>
          <label>Academic year<input name="academicYear" maxlength="40" placeholder="2026/27"></label>
          <button class="button small primary" type="submit">Create class</button>
        </form>
        <div class="class-manager">
          ${activeClasses.length?activeClasses.map(c=>{
            const memberIds=(c.class_members||[]).map(m=>m.user_id);
            const available=o.profiles.filter(p=>!memberIds.includes(p.id));
            const teacherIds=(c.class_teachers||[]).map(t=>t.teacher_id);
            const availableTeachers=(o.teachers||[]).filter(t=>!teacherIds.includes(t.id));
            const isOwner=c.teacher_id===BACKEND.user.id;
            return `<div class="class-card ${isOwner?'owned':'co-taught'}">
              <div class="class-card-head"><div><strong>${esc(c.name)}</strong><small>${esc(c.academic_year||'No academic year set')} • ${isOwner?'You own this class':'You co-teach this class'}</small></div><span>${memberIds.length} student${memberIds.length===1?'':'s'}</span></div>

              <div class="class-teaching-team"><div class="class-team-head"><small>TEACHING TEAM</small><span>${teacherIds.length} teacher${teacherIds.length===1?'':'s'}</span></div><div class="class-teacher-chips">${teacherIds.map(id=>`<div class="class-teacher-chip ${id===c.teacher_id?'owner':''}"><span>${esc(teacherNames[id]||'Teacher')}</span><small>${id===c.teacher_id?'Owner':id===BACKEND.user.id?'You • Co-teacher':'Co-teacher'}</small>${isOwner&&id!==c.teacher_id?`<button data-action="remove-class-teacher" data-class="${c.id}" data-teacher="${id}" data-name="${esc(teacherNames[id]||'Teacher')}" title="Remove co-teacher">×</button>`:''}</div>`).join('')}</div>
              ${isOwner&&availableTeachers.length?`<form class="class-add-teacher" data-action-form="add-class-teacher" data-class="${c.id}"><select name="teacher" required><option value="">Add co-teacher…</option>${availableTeachers.map(t=>`<option value="${t.id}">${esc(t.display_name)}</option>`).join('')}</select><button class="button small" type="submit">Add teacher</button></form>`:''}</div>

              <details class="class-edit-panel"><summary>Edit class details</summary><form class="class-edit-form" data-action-form="edit-class" data-class="${c.id}"><label>Class name<input name="name" maxlength="100" value="${esc(c.name)}" required></label><label>Academic year<input name="academicYear" maxlength="40" value="${esc(c.academic_year||'')}"></label><button class="button small primary" type="submit">Save changes</button></form></details>
              <div class="class-code-panel ${c.join_enabled?'enabled':'paused'}"><div><small>STUDENT JOIN CODE</small><code>${esc(c.join_code||'—')}</code><span>${c.join_enabled?'Accepting joins':'Paused'}</span></div><div class="class-code-actions"><button class="button small ghost" data-action="copy-class-code" data-code="${esc(c.join_code||'')}">Copy</button><button class="button small ghost" data-action="toggle-class-join" data-class="${c.id}" data-enabled="${c.join_enabled?'1':'0'}">${c.join_enabled?'Pause':'Enable'}</button><button class="button small ghost" data-action="regenerate-class-code" data-class="${c.id}">New code</button></div></div>
              <div class="class-members">${memberIds.length?memberIds.map(id=>`<div class="class-member"><span>${esc(names[id]||'Student')}</span><button data-action="remove-class-member" data-class="${c.id}" data-student="${id}" title="Remove">×</button></div>`).join(''):'<div class="muted">No students in this class yet. Give students the join code above.</div>'}</div>
              ${available.length?`<form class="class-add" data-action-form="add-class-member" data-class="${c.id}"><select name="student" required><option value="">Add student already visible to you…</option>${available.map(s=>`<option value="${s.id}">${esc(s.display_name)}</option>`).join('')}</select><button class="button small" type="submit">Add</button></form>`:'<div class="muted">New students should normally join with the class code. Manual add only lists students already visible through one of your classes.</div>'}
              <div class="class-danger-row"><button class="button small ghost" data-action="archive-class" data-class="${c.id}" data-name="${esc(c.name)}">Archive class</button>${isOwner?`<button class="button small danger" data-action="delete-class" data-class="${c.id}" data-name="${esc(c.name)}">Delete permanently</button>`:`<button class="button small ghost" data-action="leave-class-teacher" data-class="${c.id}" data-name="${esc(c.name)}">Leave teaching team</button>`}</div>
            </div>`;
          }).join(''):'<div class="offline-note">No active classes yet. Create your first teaching group here.</div>'}
          ${archivedClasses.length?`<details class="archived-classes"><summary>${archivedClasses.length} archived class${archivedClasses.length===1?'':'es'}</summary><div class="archived-class-list">${archivedClasses.map(c=>{const isOwner=c.teacher_id===BACKEND.user.id;return `<div class="class-card archived"><div class="class-card-head"><div><strong>${esc(c.name)}</strong><small>${esc(c.academic_year||'')} • ${isOwner?'Owner':'Co-teacher'}</small></div><span>Archived</span></div><p class="muted">Students, progress and evidence remain in the Hub; this class no longer accepts joins.</p><div class="class-danger-row"><button class="button small ghost" data-action="unarchive-class" data-class="${c.id}" data-name="${esc(c.name)}">Restore class</button>${isOwner?`<button class="button small danger" data-action="delete-class" data-class="${c.id}" data-name="${esc(c.name)}">Delete permanently</button>`:`<button class="button small ghost" data-action="leave-class-teacher" data-class="${c.id}" data-name="${esc(c.name)}">Leave teaching team</button>`}</div></div>`}).join('')}</div></details>`:''}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-head"><div><h2>Evidence waiting for review</h2><p>Approve genuine working evidence or send it back with a clear improvement target.</p></div><span class="sync-chip">${pending.length} waiting</span></div>
      <div class="submission-grid">${pending.length?pending.map(s=>{
        const l=lesson(s.lesson_id),link=safeUrl(s.evidence_url),files=s.submission_files||[];
        return `<article class="submission-card pending">
          <div class="submission-head"><div><span class="eyebrow">${esc(names[s.user_id]||'Student')} • ${esc(l?.title||s.lesson_id)}</span><h3>${esc(l?.projectTask?.name||s.mechanic_id)}</h3></div><span class="request-status submitted">Waiting</span></div>
          <div class="reflection-box"><strong>Student reflection</strong><p>${esc(s.reflection||'No reflection supplied.')}</p></div>
          <div class="teacher-evidence-received"><div class="teacher-evidence-received-head"><strong>Evidence received</strong><span>${files.length} uploaded file${files.length===1?'':'s'}${link?' + link':''}</span></div>${files.length?`<div class="teacher-evidence-files">${files.map(evidenceFileCard).join('')}</div>`:'<div class="muted">No uploaded file — review the external evidence link/reflection.</div>'}${link?`<a class="button small ghost" target="_blank" rel="noopener" href="${esc(link)}">↗ Open external evidence / video link</a>`:''}</div>
          <form class="review-form" data-action-form="review-evidence" data-submission="${s.id}">
            <textarea name="feedback" maxlength="4000" placeholder="Short useful feedback. What is working? What should they improve?"></textarea>
            <div class="button-row">
              <button class="button small primary" type="submit" data-status="approved">✓ Approve evidence</button>
              <button class="button small ghost" type="submit" data-status="changes_required">↺ Needs changes</button>
            </div>
          </form>
        </article>`;
      }).join(''):'<div class="empty"><h3>Nothing waiting.</h3><p>Submitted student evidence will appear here.</p></div>'}</div>
    </section>

    <section class="section">
      <div class="section-head"><div><h2>Student overview</h2><p>Completion is useful, but approved evidence is the stronger signal.</p></div></div>
      <table class="teacher-table"><thead><tr><th>Student</th><th>Lessons</th><th>Game</th><th>Approved evidence</th><th>Comments</th></tr></thead><tbody>
      ${o.profiles.map(p=>`<tr><td>${esc(p.display_name)}</td><td>${byStudent(p.id)}/${DATA.lessons.length}</td><td>${projBy(p.id)}/${Object.keys(PROJECT.mechanics).length}</td><td>${approvedBy(p.id)}/${DATA.lessons.length}</td><td>${commentsBy(p.id)}</td></tr>`).join('')}
      </tbody></table>
    </section>

    ${reviewed.length?`<section class="section"><div class="section-head"><div><h2>Recent evidence decisions</h2><p>A quick record of what was approved or sent back.</p></div></div><div class="board-grid">${reviewed.map(s=>`<div class="board-card"><span class="eyebrow">${esc(names[s.user_id]||'Student')} • ${esc(lesson(s.lesson_id)?.title||s.lesson_id)}</span><h3>${esc(evidenceStatusLabel(s.status))}</h3><p>${esc(s.teacher_feedback||'No written feedback.')}</p><span class="request-status ${evidenceStatusClass(s.status)}">${esc(evidenceStatusLabel(s.status))}</span></div>`).join('')}</div></section>`:''}

    <section class="section"><div class="section-head"><div><h2>Student roadmap</h2><p>Top requests and current build status.</p></div><a class="button small" href="#/requests">Open full Requests Board</a></div>
    <div class="board-grid">${o.requests.slice().sort((a,b)=>(b.request_votes?.length||0)-(a.request_votes?.length||0)).slice(0,6).map(r=>`<div class="board-card"><span class="eyebrow">${esc(requestCategoryLabel(r.category))} • ${r.request_votes?.length||0} votes</span><h3>${esc(r.title)}</h3><p>${esc(r.body)}</p><span class="request-status ${esc(r.status)}">${esc(requestStatusLabel(r.status))}</span></div>`).join('')||'<div class="empty">No requests yet.</div>'}</div></section>

    <section class="section"><div class="section-head"><div><h2>Recent questions & reflections</h2><p>Reply directly to the student. Replies remain inside that student's private lesson thread.</p></div></div>
    <div class="board-grid">${recent.length?recent.map(c=>{
      const l=lesson(c.lesson_id);
      return `<div class="board-card"><span class="eyebrow">${esc(names[c.student_id]||'Student')} • ${esc(l?.title||c.lesson_id)}</span><p>${esc(c.body)}</p>
      <form class="comment-form" data-action-form="teacher-reply" data-lesson="${esc(c.lesson_id)}" data-student="${esc(c.student_id)}"><textarea name="body" maxlength="2000" placeholder="Teacher reply…" required></textarea><button class="button small primary" type="submit">Reply</button></form></div>`;
    }).join(''):'<div class="empty">No student comments yet.</div>'}</div></section>`;
    await hydrateEvidencePreviews();
  }catch(e){box.innerHTML=`<div class="offline-note">${esc(e.message)}</div>`}
}

async function loadComments(id){
  const box=$('#commentsList');if(!box||!BACKEND.user)return;
  const rows=await BACKEND.getComments(id);
  if(!rows.length){box.innerHTML='<div class="muted">No comments yet. Use this space for a question or a short learning reflection.</div>';return}
  box.innerHTML=rows.map(c=>{
    const name=c.author?.display_name||'User',role=c.author?.role||'student';
    return `<div class="comment"><div class="comment-avatar">${esc(name.slice(0,1).toUpperCase())}</div><div><div class="comment-head"><strong>${esc(name)}</strong><span>${esc(role)} • ${new Date(c.created_at).toLocaleString()}</span></div><p>${esc(c.body)}</p></div></div>`;
  }).join('');
}

function route(){
  const parts=(location.hash||'#/').replace(/^#\//,'').split('/').filter(Boolean),app=$('#app');
  $$('.nav a').forEach(a=>a.classList.remove('active'));
  if(!parts.length){app.innerHTML=dashboard();activate('home')}
  else if(parts[0]==='path'){app.innerHTML=pathPage(parts[1]);activate(parts[1])}
  else if(parts[0]==='lesson'){app.innerHTML=lessonPage(parts[1]);const l=lesson(parts[1]);if(l)activate(l.path)}
  else if(parts[0]==='my-game'){location.replace('#/projects');return}
  else if(parts[0]==='projects'&&parts[1]==='template'&&parts[2]){app.innerHTML=projectTemplatePage(parts[2]);activate('projects')}
  else if(parts[0]==='projects'&&parts[1]){app.innerHTML=projectDetailPage(parts[1]);activate('projects')}
  else if(parts[0]==='projects'){app.innerHTML=projectsPage();activate('projects')}
  else if(parts[0]==='progress'){app.innerHTML=progressPage();activate('progress')}
  else if(parts[0]==='requests'){app.innerHTML=requestBoard();activate('requests')}
  else if(parts[0]==='challenges'){app.innerHTML=challengeBoard();activate('challenges')}
  else if(parts[0]==='homework'){app.innerHTML=homeworkBoard();activate('homework')}
  else if(parts[0]==='revision'){app.innerHTML=revision();activate('revision')}
  else if(parts[0]==='glossary'){app.innerHTML=glossary();activate('glossary')}
  else if(parts[0]==='teacher'){app.innerHTML=teacherPage();activate('teacher')}
  else app.innerHTML=notFound();

  bindPageInputs();
  updateChrome();
  refreshNotificationCount();
  window.scrollTo(0,0);
  app.focus({preventScroll:true});
  $('#sidebar').classList.remove('open');

  if(parts[0]==='lesson'&&BACKEND.user){loadComments(parts[1]);loadEvidence(parts[1]);}
  if(parts[0]==='progress'&&BACKEND.user) renderProgressCloud();
  if(parts[0]==='projects'&&!parts[1]&&BACKEND.user) renderProjects();
  if(parts[0]==='projects'&&parts[1]==='template'&&parts[2]&&BACKEND.user) renderProjectTemplate(parts[2]);
  else if(parts[0]==='projects'&&parts[1]&&BACKEND.user) renderProjectDetail(parts[1]);
  if(parts[0]==='requests'&&BACKEND.user) renderRequests();
  if(parts[0]==='teacher') renderTeacher();
}
function activate(key){
  const a=$(`[data-route="${key}"]`);if(a)a.classList.add('active');
}
function bindRevisionBuilder(){
  const form=$('#revisionFocusedForm');if(!form)return;
  const lessons=()=>Array.from(form.querySelectorAll('[data-revision-lesson]'));
  const update=()=>{
    const checked=lessons().filter(x=>x.checked),ids=checked.map(x=>x.value),available=revisionQuestionBank(ids).length;
    const summary=$('#revisionSelectionSummary');if(summary)summary.textContent=ids.length?`${ids.length} topic${ids.length===1?'':'s'} selected • ${available} question${available===1?'':'s'} available`:'Choose at least one topic.';
    form.querySelectorAll('[data-revision-path-toggle]').forEach(toggle=>{const items=lessons().filter(x=>x.dataset.path===toggle.dataset.revisionPathToggle),n=items.filter(x=>x.checked).length;toggle.checked=n===items.length&&items.length>0;toggle.indeterminate=n>0&&n<items.length;});
  };
  form.querySelectorAll('[data-revision-path-toggle]').forEach(toggle=>toggle.addEventListener('change',()=>{lessons().filter(x=>x.dataset.path===toggle.dataset.revisionPathToggle).forEach(x=>x.checked=toggle.checked);update();}));
  lessons().forEach(x=>x.addEventListener('change',update));update();
}
function bindPageInputs(){
  const gs=$('#glossarySearch');
  if(gs)gs.addEventListener('input',()=>{
    const q=gs.value.toLowerCase().trim();
    $$('.glossary-item').forEach(x=>x.style.display=x.dataset.search.includes(q)?'':'none');
  });
  bindRevisionBuilder();
}
async function copyHomework(id){
  const l=lesson(id);if(!l)return;
  const text=`${l.homework.title}\n\nTask:\n${l.homework.task}\n\nEvidence:\n${l.homework.evidence}\n\nStretch:\n${l.homework.stretch}\n\nRelated UE5 lesson: ${l.title}\nMain game mechanic: ${l.projectTask?.name||''}`;
  try{await navigator.clipboard.writeText(text);toast('Homework copied — ready for Teams.')}catch(e){toast('Clipboard blocked by browser.')}
}
async function setLessonComplete(id){
  const l=lesson(id),was=state.completed.includes(id);
  if(was) state.completed=state.completed.filter(x=>x!==id);
  else state.completed.push(id);
  saveState();
  if(BACKEND.user){
    try{await BACKEND.setLessonComplete(id,!was)}catch(e){toast('Saved locally; cloud sync failed.')}
  }
  toast(was?'Marked incomplete.':`Lesson complete! +${l.xp} XP`);
  route();
}
async function setMechanicStatus(id,status){
  const old=projectState.mechanics[id]||{};
  projectState.mechanics[id]={...old,status};
  saveProjectState();
  if(BACKEND.user){
    try{await BACKEND.setProjectMechanic(id,status,old.notes||'')}catch(e){toast('Saved locally; cloud sync failed.')}
  }
  toast(status==='complete'?'Game mechanic complete ✓':status==='building'?'Marked as building.':'Reset to not started.');
  route();
}
async function saveProjectProfile(){
  projectState.project_title=$('#projectTitle')?.value.trim()||'Signal Lost';
  projectState.theme=$('#projectTheme')?.value||PROJECT.themes[0];
  projectState.pitch=$('#projectPitch')?.value.trim()||'';
  saveProjectState();
  if(BACKEND.user){
    try{await BACKEND.saveProjectProfile({
      project_title:projectState.project_title,
      theme:projectState.theme,
      pitch:projectState.pitch
    })}catch(e){toast('Saved locally; cloud sync failed.');return}
  }
  toast('Project identity saved.');
  route();
}

function authTabs(){
  return `<div class="auth-tabs">
    <button class="${authView==='signin'?'active':''}" data-action="auth-view" data-view="signin">Sign in</button>
    <button class="${authView==='signup'?'active':''}" data-action="auth-view" data-view="signup">Create account</button>
  </div>`;
}
function renderAuth(){
  const body=$('#authBody');if(!body)return;
  const cfg=window.UE5_SUPABASE_CONFIG||{};
  if(BACKEND.user){
    if(BACKEND.recoveryMode){
      body.innerHTML=`<div class="cloud-callout"><b>Choose a new password</b><br><br>This reset session is valid because you opened the recovery link sent to your email.</div>
      <form class="auth-form" data-action-form="auth-new-password">
        <label>New password<input name="password" type="password" minlength="8" autocomplete="new-password" required></label>
        <label>Confirm password<input name="confirm" type="password" minlength="8" autocomplete="new-password" required></label>
        <button class="button primary" type="submit">Save new password</button>
      </form>`;
      return;
    }
    body.innerHTML=`<div class="account-summary">
      <span class="account-summary-icon">${BACKEND.profile?.role==='teacher'?'T':'U'}</span>
      <div><b>${esc(BACKEND.profile?.display_name||BACKEND.user.email?.split('@')[0]||'Learning Hub account')}</b><span>${esc(BACKEND.user.email||'')}</span></div>
    </div>
    <div class="cloud-callout">
      Your lesson progress, projects, development logs, evidence, feedback, classes, notifications and requests sync to this Learning Hub account.
      ${BACKEND.profile?.role==='teacher'?'<br><br><b>Teacher role active.</b>':''}
    </div>
    <form class="auth-form compact" data-action-form="profile-name">
      <label>Display name<div class="inline-auth-field"><input name="displayName" maxlength="100" value="${esc(BACKEND.profile?.display_name||'')}" required><button class="button small" type="submit">Update</button></div></label>
    </form>
    ${BACKEND.profile?.role!=='teacher'?`<form class="auth-form compact" data-action-form="join-class">
      <label>Class code<div class="inline-auth-field"><input name="classCode" maxlength="20" autocomplete="off" placeholder="Student class code" required><button class="button small" type="submit">Join</button></div></label>
    </form>
    <form class="auth-form compact teacher-claim-form" data-action-form="claim-teacher-invite">
      <label>Teacher invite<div class="inline-auth-field"><input name="inviteCode" maxlength="45" autocomplete="off" placeholder="TEACH-…" required><button class="button small" type="submit">Claim teacher access</button></div></label>
      <small>Only use this if another Learning Hub teacher has invited you.</small>
    </form>`:''}
    <div class="button-row"><button class="button ghost" data-action="signout">Sign out</button></div>`;
    return;
  }
  if(BACKEND.mode!=='cloud'){
    body.innerHTML=`<div class="cloud-callout"><b>Guest mode is active.</b><br><br>This copy has no cloud backend configured. Lessons, XP and Signal Lost practice still save locally on this browser.</div>`;
    return;
  }
  if(!BACKEND.emailAuthEnabled){
    body.innerHTML=`<div class="cloud-callout"><b>Learning Hub accounts are currently disabled.</b><br><br>Guest learning remains available.</div>`;
    return;
  }

  if(authView==='reset'){
    body.innerHTML=`<button class="auth-back" data-action="auth-view" data-view="signin">← Back to sign in</button>
      <span class="auth-section-label">PASSWORD RESET</span><h3>Reset your password</h3>
      <p class="auth-message">Enter the email attached to your Learning Hub account. A reset link will be sent there.</p>
      <form class="auth-form" data-action-form="auth-reset">
        <label>Email<input name="email" type="email" autocomplete="email" required></label>
        <button class="button primary" type="submit">Send reset link</button>
      </form>`;
    return;
  }

  if(authView==='signup'){
    body.innerHTML=`${authTabs()}
      <div class="auth-intro"><strong>Create your Learning Hub account</strong><p>Your teacher gives you a class code. Your account then carries progress, evidence and feedback between devices.</p></div>
      <form class="auth-form" data-action-form="auth-signup">
        <label>Your name<input name="displayName" maxlength="100" autocomplete="name" placeholder="Name shown to your teacher" required></label>
        <label>Email<input name="email" type="email" autocomplete="email" placeholder="Use an email you can access" required></label>
        <label>Class code<input name="classCode" maxlength="20" autocomplete="off" placeholder="From your teacher" required></label>
        <div class="auth-two">
          <label>Password<input name="password" type="password" minlength="8" autocomplete="new-password" required></label>
          <label>Confirm<input name="confirm" type="password" minlength="8" autocomplete="new-password" required></label>
        </div>
        <button class="button primary" type="submit">Create account</button>
      </form>
      <p class="auth-message"><b>Guest mode remains available:</b> close this window and the whole learning course still works. An account is needed for cloud sync, Projects/group collaboration, classes, evidence, feedback, requests and notifications.</p>
      <div class="teacher-account-links">
        <button class="link-button" data-action="auth-view" data-view="teacher-invite">I have a teacher invite</button>
        <button class="link-button teacher-setup-link" data-action="auth-view" data-view="teacher-setup">First installation only: create the first teacher</button>
      </div>`;
    return;
  }

  if(authView==='teacher-invite'){
    body.innerHTML=`<button class="auth-back" data-action="auth-view" data-view="signup">← Back</button>
      <span class="auth-section-label">TEACHER INVITE</span><h3>Create a teacher account</h3>
      <p class="auth-message">Use the unique invite code another Learning Hub teacher generated for you. No student class code is required.</p>
      <div id="authInlineStatus" class="auth-inline-status" hidden></div>
      <form class="auth-form" data-action-form="auth-invited-teacher" novalidate>
        <label>Your name<input name="displayName" maxlength="100" autocomplete="name" placeholder="Name shown in the Hub"></label>
        <label>Email<input name="email" type="email" autocomplete="email" placeholder="Email you can access"></label>
        <label>Teacher invite code<input name="inviteCode" maxlength="45" autocomplete="off" spellcheck="false" placeholder="TEACH-…"></label>
        <div class="auth-two">
          <label>Password<input name="password" type="password" minlength="8" autocomplete="new-password" placeholder="At least 8 characters"></label>
          <label>Confirm<input name="confirm" type="password" minlength="8" autocomplete="new-password" placeholder="Repeat password"></label>
        </div>
        <button class="button primary" type="submit">Create teacher account</button>
      </form>`;
    return;
  }
  if(authView==='teacher-setup'){
    body.innerHTML=`<button class="auth-back" data-action="auth-view" data-view="signin">← Back</button>
      <span class="auth-section-label">ONE-TIME TEACHER SETUP</span><h3>Create the first teacher account</h3>
      <p class="auth-message">Fill in <b>all five fields</b>. The setup code grants the first account Teacher access; it is not a password by itself. After the Teacher role is claimed, the code cannot be reused.</p>
      <div id="authInlineStatus" class="auth-inline-status" hidden></div>
      <form class="auth-form" data-action-form="auth-teacher-signup" novalidate>
        <label>Your name<input name="displayName" maxlength="100" autocomplete="name" placeholder="Name shown in the Hub"></label>
        <label>Email<input name="email" type="email" autocomplete="email" placeholder="Email you can access"></label>
        <label>Teacher setup code<input name="teacherCode" maxlength="45" autocomplete="off" spellcheck="false" placeholder="TEACH-…"></label>
        <div class="auth-two"><label>Password<input name="password" type="password" minlength="8" autocomplete="new-password" placeholder="At least 8 characters"></label><label>Confirm<input name="confirm" type="password" minlength="8" autocomplete="new-password" placeholder="Repeat password"></label></div>
        <button class="button primary" type="submit">Create teacher account</button>
      </form>`;
    return;
  }

  body.innerHTML=`${authTabs()}
    <div class="auth-intro"><strong>Welcome back</strong><p>Sign in to sync your progress and continue your classroom work.</p></div>
    <form class="auth-form" data-action-form="auth-signin">
      <label>Email<input name="email" type="email" autocomplete="email" required></label>
      <label>Password<input name="password" type="password" autocomplete="current-password" required></label>
      <button class="button primary" type="submit">Sign in</button>
    </form>
    <div class="auth-footer-row"><button class="link-button" data-action="auth-view" data-view="reset">Forgot password?</button><button class="link-button" data-action="close-auth">Continue as guest</button></div>
    ${BACKEND.microsoftEnabled?`<div class="auth-divider"><span>or</span></div><button class="button microsoft-button" data-action="microsoft-login">${esc(cfg.loginLabel||'Sign in with Microsoft')}</button>`:''}`;
}
function openAuth(){
  $('#authModal').hidden=false;renderAuth();
}
function closeAuth(){$('#authModal').hidden=true}
function authStatus(message,type='error'){
  const box=$('#authInlineStatus');
  if(!box)return;
  box.hidden=!message;
  box.className=`auth-inline-status ${type}`;
  box.textContent=message||'';
}
function setAuthBusy(form,busy,label='Working…'){
  if(!form)return;
  const btn=form.querySelector('button[type="submit"]');
  if(!btn)return;
  if(busy){
    btn.dataset.originalLabel=btn.textContent;
    btn.textContent=label;
    btn.disabled=true;
  }else{
    btn.textContent=btn.dataset.originalLabel||btn.textContent;
    btn.disabled=false;
  }
}


function openImageLightbox(button){
  const modal=$('#imageLightbox'),img=$('#lightboxImage'),cap=$('#lightboxCaption'),source=$('#lightboxSource');
  if(!modal||!img)return;
  img.src=button.dataset.src||button.querySelector('img')?.src||'';
  img.alt=button.querySelector('img')?.alt||'Expanded lesson image';
  cap.textContent=button.dataset.caption||'';
  const url=button.dataset.source||'';
  if(url){source.href=url;source.hidden=false}else{source.hidden=true;source.removeAttribute('href')}
  modal.hidden=false;
  document.body.classList.add('lightbox-open');
  $('#closeImageLightbox')?.focus();
}
function closeImageLightbox(){
  const modal=$('#imageLightbox');if(!modal||modal.hidden)return;
  modal.hidden=true;document.body.classList.remove('lightbox-open');
  const img=$('#lightboxImage');if(img)img.removeAttribute('src');
}
document.addEventListener('click',async e=>{
  const b=e.target.closest('[data-action]');if(!b)return;
  const a=b.dataset.action;
  if(a==='open-image'){openImageLightbox(b);}
  else if(a==='load-video'){
    const shell=b.closest('[data-video-shell]');
    if(!shell)return;
    const src=b.dataset.embed||'';
    if(!src.startsWith('https://dev.epicgames.com/')){toast('Video source was blocked for safety.');return}
    const iframe=document.createElement('iframe');
    iframe.className='epic-motion-iframe';
    iframe.src=src;
    iframe.title=b.dataset.title||'Unreal Engine video';
    iframe.loading='lazy';
    iframe.allow='autoplay; fullscreen; picture-in-picture; encrypted-media';
    iframe.setAttribute('allowfullscreen','');
    iframe.referrerPolicy='strict-origin-when-cross-origin';
    shell.replaceChildren(iframe);
  }
  else if(a==='close-image'){closeImageLightbox();}
  else if(a==='scroll'){document.getElementById(b.dataset.target)?.scrollIntoView({behavior:'smooth',block:'start'});}
  else if(a==='complete') await setLessonComplete(b.dataset.lesson);
  else if(a==='quiz'){
    const l=lesson(b.dataset.lesson),qi=+b.dataset.q,oi=+b.dataset.o,q=l.quiz[qi],wrap=b.closest('.quiz');
    $$('.quiz-option',wrap).forEach(x=>x.disabled=true);
    $$('.quiz-option',wrap).forEach((x,i)=>{if(i===q[2])x.classList.add('correct');else if(i===oi)x.classList.add('wrong')});
    $('.quiz-feedback',wrap).classList.add('show');
  }
  else if(a==='hint'){
    const wrap=b.closest('.task'),h=$$('.hint',wrap).find(x=>!x.classList.contains('show'));
    if(h)h.classList.add('show');
    if(!$$('.hint',wrap).some(x=>!x.classList.contains('show')))b.textContent='All hints revealed';
  }
  else if(a==='copy-homework') await copyHomework(b.dataset.lesson);
  else if(a==='mode'){lessonMode=b.dataset.mode;route();}
  else if(a==='reveal-revision')$('#revisionAnswer')?.classList.add('show');
  else if(a==='new-revision')route();
  else if(a==='project-status') await setMechanicStatus(b.dataset.mechanic,b.dataset.status);
  else if(a==='save-project-profile') await saveProjectProfile();
  else if(a==='open-auth'){authView='signin';openAuth();}
  else if(a==='close-auth')closeAuth();
  else if(a==='auth-view'){authView=b.dataset.view||'signin';renderAuth();}
  else if(a==='copy-class-code'){
    try{await navigator.clipboard.writeText(b.dataset.code||'');toast('Class code copied.')}catch(err){toast('Copy failed — select the code manually.')}
  }
  else if(a==='copy-teacher-code'){
    try{await navigator.clipboard.writeText(b.dataset.code||'');toast('Teacher invite copied.')}catch(err){toast('Copy failed — select the code manually.')}
  }
  else if(a==='revoke-teacher-invite'){
    if(confirm('Revoke this teacher invite? It will stop working immediately.')){
      try{await BACKEND.revokeTeacherInvite(b.dataset.invite);await renderTeacher();toast('Teacher invite revoked.')}catch(err){toast(err.message)}
    }
  }
  else if(a==='remove-class-teacher'){
    if(confirm(`Remove ${b.dataset.name||'this teacher'} from this class? They will immediately lose access to its students and evidence.`)){
      try{await BACKEND.removeClassTeacher(b.dataset.class,b.dataset.teacher);await renderTeacher();toast('Co-teacher removed.')}catch(err){toast(err.message)}
    }
  }
  else if(a==='leave-class-teacher'){
    if(confirm(`Leave the teaching team for "${b.dataset.name||'this class'}"? You will lose access to its students and evidence.`)){
      try{await BACKEND.removeClassTeacher(b.dataset.class,BACKEND.user.id);await renderTeacher();toast('You left the teaching team.')}catch(err){toast(err.message)}
    }
  }
  else if(a==='toggle-class-join'){
    try{await BACKEND.setClassJoinEnabled(b.dataset.class,b.dataset.enabled!=='1');await renderTeacher();toast(b.dataset.enabled==='1'?'Class code paused.':'Class code enabled.')}catch(err){toast(err.message)}
  }
  else if(a==='regenerate-class-code'){
    if(confirm('Generate a new code? The old class code will stop working immediately.')){
      try{await BACKEND.regenerateClassCode(b.dataset.class);await renderTeacher();toast('New class code generated.')}catch(err){toast(err.message)}
    }
  }
  else if(a==='archive-class'){
    if(confirm(`Archive "${b.dataset.name}"? Students keep their work and the class can be restored later.`)){
      try{await BACKEND.setClassArchived(b.dataset.class,true);await renderTeacher();toast('Class archived.')}catch(err){toast(err.message)}
    }
  }
  else if(a==='unarchive-class'){
    try{await BACKEND.setClassArchived(b.dataset.class,false);await renderTeacher();toast('Class restored.')}catch(err){toast(err.message)}
  }
  else if(a==='delete-class'){
    const name=b.dataset.name||'this class';
    const typed=prompt(`PERMANENTLY DELETE "${name}"?\n\nThis removes the class and membership links, but does NOT delete student accounts, progress or evidence.\n\nType the class name exactly to confirm:`, '');
    if(typed===null)return;
    if(typed!==name){toast('Class was not deleted — the name did not match.');return}
    try{await BACKEND.deleteClass(b.dataset.class);await renderTeacher();toast('Class permanently deleted.')}catch(err){toast(err.message)}
  }
  else if(a==='microsoft-login'){
    try{await BACKEND.signInMicrosoft()}catch(err){toast(err.message)}
  }
  else if(a==='request-vote'){
    try{
      const voted=b.dataset.voted==='1';
      await BACKEND.setRequestVote(b.dataset.request,!voted);
      await renderRequests();
    }catch(err){toast(err.message)}
  }
  else if(a==='request-status'){
    try{await BACKEND.setRequestStatus(b.dataset.request,b.dataset.status);await renderRequests();toast('Request status updated.')}catch(err){toast(err.message)}
  }
  else if(a==='request-delete'){
    if(confirm('Delete this request?')){
      try{await BACKEND.deleteRequest(b.dataset.request);await renderRequests();toast('Request deleted.')}catch(err){toast(err.message)}
    }
  }
  else if(a==='revision-restart'){revisionSession=null;route()}
  else if(a==='revision-repeat'){const ids=revisionSession?.lessonIds?[...revisionSession.lessonIds]:null,label=revisionSession?.topicLabel||'Random mixed',count=revisionSession?.requestedCount||10;revisionSession=null;startRevisionQuiz(ids,count,label)}
  else if(a==='revision-abandon'){revisionSession=null;route()}
  else if(a==='start-template-project'){try{const row=await BACKEND.startProjectFromTemplate(b.dataset.template,b.dataset.mode);location.hash=`#/projects/${row.project_id}`;toast(b.dataset.mode==='group'?'Group project started — share the join code with your teammates.':'Individual project started.')}catch(err){toast(err.message)}}
  else if(a==='delete-template-milestone'){if(confirm('Delete this template milestone? Student projects already started will not be changed.')){try{await BACKEND.deleteTemplateMilestone(b.dataset.milestone);await renderProjectTemplate(b.dataset.template);toast('Template milestone deleted.')}catch(err){toast(err.message)}}}
  else if(a==='delete-project-template'){const name=b.dataset.name||'this template';if(confirm(`Delete teacher template "${name}"?\n\nStudent projects already created from it will be kept.`)){try{await BACKEND.deleteProjectTemplate(b.dataset.template);location.hash='#/projects';toast('Template deleted.')}catch(err){toast(err.message)}}}
  else if(a==='copy-project-code'){try{await navigator.clipboard.writeText(b.dataset.code||'');toast('Project code copied.')}catch(e){toast('Copy failed.')}}
  else if(a==='regenerate-project-code'){if(confirm('Generate a new group code? The old code will stop working.')){try{await BACKEND.regenerateProjectCode(b.dataset.project);await renderProjectDetail(b.dataset.project);toast('New project code generated.')}catch(err){toast(err.message)}}}
  else if(a==='remove-project-member'){if(confirm('Remove this student from the project? Their existing authored log entries stay in the project record.')){try{await BACKEND.removeProjectMember(b.dataset.project,b.dataset.user);await renderProjectDetail(b.dataset.project);toast('Team member removed.')}catch(err){toast(err.message)}}}
  else if(a==='leave-project'){if(confirm('Leave this group project? Your existing authored development-log entries stay attributed to you.')){try{await BACKEND.removeProjectMember(b.dataset.project,b.dataset.user);location.hash='#/projects';toast('You left the project.')}catch(err){toast(err.message)}}}
  else if(a==='milestone-toggle'){try{await BACKEND.setProjectMilestoneStatus(b.dataset.milestone,b.dataset.status);await renderProjectDetail(b.dataset.project)}catch(err){toast(err.message)}}
  else if(a==='delete-milestone'){if(confirm('Delete this milestone? Development-log entries will remain.')){try{await BACKEND.deleteProjectMilestone(b.dataset.milestone);await renderProjectDetail(b.dataset.project)}catch(err){toast(err.message)}}}
  else if(a==='complete-project'){if(confirm('Mark this project complete?\n\nThe project becomes read-only until you reopen it.')){try{await BACKEND.setProjectStatus(b.dataset.project,'complete');await renderProjectDetail(b.dataset.project);toast('Project marked complete.')}catch(err){toast(err.message)}}}
  else if(a==='reopen-project'){try{await BACKEND.setProjectStatus(b.dataset.project,'active');await renderProjectDetail(b.dataset.project);toast('Project reopened.')}catch(err){toast(err.message)}}
  else if(a==='delete-project-update'){if(confirm('Delete this development-log entry?\n\nIts screenshots and comments will also be removed. This cannot be undone.')){try{await BACKEND.deleteProjectUpdate(b.dataset.project,b.dataset.update);await renderProjectDetail(b.dataset.project);toast('Log entry deleted.')}catch(err){toast(err.message)}}}
  else if(a==='open-project-image'){try{const url=await BACKEND.openProjectFile(b.dataset.path);if(url)openImageLightbox({dataset:{src:url,caption:b.dataset.caption||'',source:''},querySelector:()=>({alt:b.dataset.name||'Project screenshot'})})}catch(err){toast(err.message)}}
  else if(a==='delete-project'){const name=b.dataset.name||'this project';const typed=prompt(`PERMANENTLY DELETE "${name}"?\n\nThis deletes the shared project, milestones, logs and screenshots. Type the project name exactly to confirm:`, '');if(typed===name){try{await BACKEND.deleteProject(b.dataset.project);location.hash='#/projects';toast('Project deleted.')}catch(err){toast(err.message)}}else if(typed!==null)toast('Project was not deleted — the name did not match.')}
  else if(a==='open-progress'){location.hash='#/progress'}
  else if(a==='open-evidence-file'){
    try{
      const url=await BACKEND.openEvidenceFile(b.dataset.path);
      if(url)window.open(url,'_blank','noopener');
    }catch(err){toast(err.message)}
  }
  else if(a==='notification-open'){
    try{await BACKEND.markNotificationRead(b.dataset.id)}catch(err){}
    location.hash=b.dataset.link||'#/progress';
    refreshNotificationCount();
  }
  else if(a==='remove-class-member'){
    if(confirm('Remove this student from the class?')){
      try{await BACKEND.removeClassMember(b.dataset.class,b.dataset.student);await renderTeacher();toast('Student removed from class.')}catch(err){toast(err.message)}
    }
  }
  else if(a==='signout'){await BACKEND.signOut();closeAuth();toast('Signed out. Local progress remains on this browser.');route();}
});

document.addEventListener('submit',async e=>{
  if(e.target.dataset.actionForm==='revision-random-start'){
    e.preventDefault();const fd=new FormData(e.target);startRevisionQuiz(null,Number(fd.get('count')||10),'Random mixed');return;
  }
  if(e.target.dataset.actionForm==='revision-focused-start'){
    e.preventDefault();const fd=new FormData(e.target),ids=fd.getAll('lessonIds').map(String);if(!ids.length){toast('Choose at least one revision topic.');return}startRevisionQuiz(ids,Number(fd.get('count')||10),revisionSelectionLabel(ids));return;
  }
  if(e.target.dataset.actionForm==='revision-answer'){
    e.preventDefault();if(!revisionSession)return;
    const selected=Array.from(new FormData(e.target).getAll('answer')).map(Number);
    if(!selected.length){toast('Choose an answer first.');return}
    revisionSession.answers.push(selected);revisionSession.index++;
    if(revisionSession.index>=revisionSession.questions.length){revisionSession.finished=true;const score=revisionScore(revisionSession);saveRevisionResult({at:new Date().toISOString(),topicLabel:revisionSession.topicLabel,...score});}
    route();return;
  }
  if(e.target.dataset.actionForm==='create-project'){
    e.preventDefault();const fd=new FormData(e.target);
    try{const row=await BACKEND.createProject({title:fd.get('title'),projectType:fd.get('projectType'),projectKind:fd.get('projectKind'),classId:fd.get('classId'),assessmentUnit:fd.get('assessmentUnit'),description:fd.get('description')});location.hash=`#/projects/${row.id}`;toast('Project created.');}catch(err){toast(err.message)}return;
  }
  if(e.target.dataset.actionForm==='create-project-template'){
    e.preventDefault();const fd=new FormData(e.target);try{const row=await BACKEND.createProjectTemplate({title:fd.get('title'),classId:fd.get('classId'),workMode:fd.get('workMode'),projectKind:fd.get('projectKind'),assessmentUnit:fd.get('assessmentUnit'),brief:fd.get('brief')});location.hash=`#/projects/template/${row.id}`;toast('Template created — add milestones, then publish it.')}catch(err){toast(err.message)}return;
  }
  if(e.target.dataset.actionForm==='project-template-settings'){
    e.preventDefault();const fd=new FormData(e.target);try{await BACKEND.updateProjectTemplate(e.target.dataset.template,{title:fd.get('title'),brief:fd.get('brief'),assessment_unit:fd.get('assessmentUnit'),project_kind:fd.get('projectKind'),work_mode:fd.get('workMode'),status:fd.get('status')});await renderProjectTemplate(e.target.dataset.template);toast(fd.get('status')==='published'?'Template published to the class.':'Template saved as draft.')}catch(err){toast(err.message)}return;
  }
  if(e.target.dataset.actionForm==='template-milestone'){
    e.preventDefault();const fd=new FormData(e.target);try{await BACKEND.createTemplateMilestone(e.target.dataset.template,{title:fd.get('title'),description:fd.get('description')});await renderProjectTemplate(e.target.dataset.template);toast('Template milestone added.')}catch(err){toast(err.message)}return;
  }
  if(e.target.dataset.actionForm==='edit-template-milestone'){
    e.preventDefault();const fd=new FormData(e.target);try{await BACKEND.updateTemplateMilestone(e.target.dataset.milestone,{title:fd.get('title'),description:fd.get('description')});await renderProjectTemplate(e.target.dataset.template);toast('Template milestone updated.')}catch(err){toast(err.message)}return;
  }
  if(e.target.dataset.actionForm==='join-project'){
    e.preventDefault();const fd=new FormData(e.target);
    try{const row=await BACKEND.joinProject(fd.get('projectCode'));location.hash=`#/projects/${row.project_id}`;toast(`Joined ${row.project_title}.`)}catch(err){toast(err.message)}return;
  }
  if(e.target.dataset.actionForm==='project-role'){
    e.preventDefault();const fd=new FormData(e.target);try{await BACKEND.updateProjectRole(e.target.dataset.project,fd.get('roleLabel'));await renderProjectDetail(e.target.dataset.project);toast('Project role updated.')}catch(err){toast(err.message)}return;
  }
  if(e.target.dataset.actionForm==='project-milestone'){
    e.preventDefault();const fd=new FormData(e.target);try{await BACKEND.createProjectMilestone(e.target.dataset.project,{title:fd.get('title'),description:fd.get('description')});await renderProjectDetail(e.target.dataset.project);toast('Milestone added.')}catch(err){toast(err.message)}return;
  }
  if(e.target.dataset.actionForm==='edit-project-milestone'){
    e.preventDefault();const fd=new FormData(e.target);try{await BACKEND.updateProjectMilestone(e.target.dataset.milestone,{title:fd.get('title'),description:fd.get('description')});await renderProjectDetail(e.target.dataset.project);toast('Milestone updated.')}catch(err){toast(err.message)}return;
  }
  if(e.target.dataset.actionForm==='project-update'){
    e.preventDefault();const fd=new FormData(e.target),files=Array.from(e.target.elements.files?.files||[]),text=[fd.get('title'),fd.get('whatDid'),fd.get('why'),fd.get('problems'),fd.get('nextSteps')].some(x=>String(x||'').trim());if(!text&&!files.length){toast('Add a note or at least one screenshot.');return}if(files.length>6){toast('Upload up to 6 screenshots per log entry.');return}
    const captions=files.map((_,i)=>String(fd.get(`newCaption${i}`)||''));
    try{const row=await BACKEND.createProjectUpdate(e.target.dataset.project,{title:fd.get('title'),whatDid:fd.get('whatDid'),why:fd.get('why'),problems:fd.get('problems'),nextSteps:fd.get('nextSteps'),milestoneId:fd.get('milestoneId')});if(files.length)await BACKEND.uploadProjectFiles(e.target.dataset.project,row.id,files,captions);await renderProjectDetail(e.target.dataset.project);toast('Development log updated.')}catch(err){toast(err.message)}return;
  }
  if(e.target.dataset.actionForm==='edit-project-update'){
    e.preventDefault();const fd=new FormData(e.target),files=Array.from(e.target.elements.files?.files||[]),existing=Number(e.target.dataset.existingMedia||0);if(existing+files.length>6){toast('A development-log entry can contain up to 6 screenshots.');return}const text=[fd.get('title'),fd.get('whatDid'),fd.get('why'),fd.get('problems'),fd.get('nextSteps')].some(x=>String(x||'').trim());if(!text&&!existing&&!files.length){toast('Keep a note or at least one screenshot in the entry.');return}
    try{await BACKEND.updateProjectUpdate(e.target.dataset.update,{title:fd.get('title'),whatDid:fd.get('whatDid'),why:fd.get('why'),problems:fd.get('problems'),nextSteps:fd.get('nextSteps'),milestoneId:fd.get('milestoneId')});const captionInputs=Array.from(e.target.querySelectorAll('input[name^="caption_"]'));await Promise.all(captionInputs.map(input=>BACKEND.updateProjectMediaCaption(input.name.slice(8),input.value)));if(files.length){const captions=files.map((_,i)=>String(fd.get(`newCaption${i}`)||''));await BACKEND.uploadProjectFiles(e.target.dataset.project,e.target.dataset.update,files,captions)}await renderProjectDetail(e.target.dataset.project);toast('Development-log entry updated.')}catch(err){toast(err.message)}return;
  }
  if(e.target.dataset.actionForm==='project-comment'){
    e.preventDefault();const fd=new FormData(e.target);try{await BACKEND.postProjectComment(e.target.dataset.project,e.target.dataset.update,fd.get('body'));await renderProjectDetail(e.target.dataset.project)}catch(err){toast(err.message)}return;
  }
  if(e.target.dataset.actionForm==='project-settings'){
    e.preventDefault();const fd=new FormData(e.target);try{await BACKEND.updateProject(e.target.dataset.project,{title:fd.get('title'),description:fd.get('description'),assessment_unit:fd.get('assessmentUnit')});await renderProjectDetail(e.target.dataset.project);toast('Project settings saved.')}catch(err){toast(err.message)}return;
  }
  if(e.target.dataset.actionForm==='request-reply'){
    e.preventDefault();const fd=new FormData(e.target);try{await BACKEND.replyToRequest(e.target.dataset.request,fd.get('body'));await renderRequests();toast('Reply sent to student.')}catch(err){toast(err.message)}return;
  }
  if(e.target.dataset.actionForm==='request'){
    e.preventDefault();
    const fd=new FormData(e.target);
    try{
      await BACKEND.submitRequest({
        category:fd.get('category'),
        title:fd.get('title')?.trim(),
        body:fd.get('body')?.trim()
      });
      e.target.reset();
      toast('Request submitted. Nice one.');
      await renderRequests();
    }catch(err){toast(err.message)}
  }
  if(e.target.dataset.actionForm==='evidence'){
    e.preventDefault();
    const l=lesson(e.target.dataset.lesson),fd=new FormData(e.target);
    const reflection=String(fd.get('reflection')||'').trim();
    const evidenceUrl=String(fd.get('evidenceUrl')||'').trim();
    const files=Array.from(e.target.elements.file?.files||[]);
    const intent=e.submitter?.dataset.intent||'draft';
    if(!reflection){toast('Add a short reflection first.');return}
    if(files.length>6){toast('Upload up to 6 evidence files at a time.');return}
    try{
      let saved=await BACKEND.saveSubmission({
        lessonId:l.id,mechanicId:l.id,reflection,evidenceUrl,status:'draft'
      });
      if(files.length)await BACKEND.uploadEvidenceFiles(saved.id,files);
      if(intent==='submit'){
        saved=await BACKEND.saveSubmission({
          lessonId:l.id,mechanicId:l.id,reflection,evidenceUrl,status:'submitted'
        });
        toast('Evidence submitted for teacher review.');
      }else toast('Evidence draft saved.');
      await loadEvidence(l.id);
      refreshNotificationCount();
    }catch(err){toast(err.message)}
  }
  if(e.target.dataset.actionForm==='auth-signin'){
    e.preventDefault();
    const fd=new FormData(e.target);
    try{
      await BACKEND.signInEmail({email:fd.get('email'),password:fd.get('password')});
      closeAuth();toast('Signed in — cloud progress is syncing.');
    }catch(err){toast(err.message)}
  }
  if(e.target.dataset.actionForm==='auth-signup'){
    e.preventDefault();
    const fd=new FormData(e.target);
    const password=String(fd.get('password')||''),confirmPassword=String(fd.get('confirm')||'');
    if(password.length<8){toast('Use a password of at least 8 characters.');return}
    if(password!==confirmPassword){toast('The two passwords do not match.');return}
    try{
      const result=await BACKEND.signUpEmail({
        displayName:fd.get('displayName'),email:fd.get('email'),password,classCode:fd.get('classCode')
      });
      if(result.needsConfirmation){
        authView='signin';renderAuth();
        const body=$('#authBody');
        body.insertAdjacentHTML('afterbegin',`<div class="auth-success"><b>Account created.</b> Check your email to confirm the account, then sign in. Your class code is saved and will be applied automatically.</div>`);
      }else{
        closeAuth();toast(`Account created — joined ${result.classInfo?.class_name||'your class'}.`);
      }
    }catch(err){toast(err.message)}
  }
  if(e.target.dataset.actionForm==='auth-teacher-signup'){
    e.preventDefault();
    const form=e.target,fd=new FormData(form);
    const displayName=String(fd.get('displayName')||'').trim();
    const email=String(fd.get('email')||'').trim();
    const teacherCode=String(fd.get('teacherCode')||'').trim();
    const password=String(fd.get('password')||'');
    const confirmPassword=String(fd.get('confirm')||'');

    authStatus('');
    if(displayName.length<2){authStatus('Enter your name as well as the setup code.');form.elements.displayName?.focus();return}
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){authStatus('Enter an email address you can access.');form.elements.email?.focus();return}
    if(!teacherCode){authStatus('Enter the one-time teacher setup code.');form.elements.teacherCode?.focus();return}
    if(password.length<8){authStatus('Choose a password of at least 8 characters.');form.elements.password?.focus();return}
    if(password!==confirmPassword){authStatus('The two passwords do not match.');form.elements.confirm?.focus();return}

    setAuthBusy(form,true,'Checking setup code…');
    authStatus('Checking the setup code with the Learning Hub…','working');
    try{
      const result=await BACKEND.signUpTeacher({displayName,email,password,teacherCode});
      if(result.needsConfirmation){
        authView='signin';renderAuth();
        $('#authBody')?.insertAdjacentHTML('afterbegin','<div class="auth-success"><b>Teacher account created.</b> Check your email and confirm the account, then sign in. Teacher access will be claimed automatically.</div>');
      }else{
        authStatus('Teacher account created successfully.','success');
        setTimeout(()=>{closeAuth();toast('Teacher account created — Teacher access active.');},450);
      }
    }catch(err){
      authStatus(err?.message||'Teacher account creation failed. Please try again.');
      setAuthBusy(form,false);
    }
  }
  if(e.target.dataset.actionForm==='auth-reset'){
    e.preventDefault();
    const fd=new FormData(e.target);
    try{
      await BACKEND.sendPasswordReset(fd.get('email'));
      authView='signin';renderAuth();
      const body=$('#authBody');
      body.insertAdjacentHTML('afterbegin','<div class="auth-success"><b>Reset link sent.</b> Check that email account and open the link to choose a new password.</div>');
    }catch(err){toast(err.message)}
  }
  if(e.target.dataset.actionForm==='auth-new-password'){
    e.preventDefault();
    const fd=new FormData(e.target);
    const password=String(fd.get('password')||''),confirmPassword=String(fd.get('confirm')||'');
    if(password.length<8){toast('Use a password of at least 8 characters.');return}
    if(password!==confirmPassword){toast('The two passwords do not match.');return}
    try{await BACKEND.updatePassword(password);closeAuth();toast('Password updated.')}catch(err){toast(err.message)}
  }
  if(e.target.dataset.actionForm==='profile-name'){
    e.preventDefault();
    const fd=new FormData(e.target);
    try{await BACKEND.updateDisplayName(fd.get('displayName'));toast('Display name updated.');renderAuth();}catch(err){toast(err.message)}
  }
  if(e.target.dataset.actionForm==='join-class'){
    e.preventDefault();
    const fd=new FormData(e.target);
    try{
      const joined=await BACKEND.joinClassByCode(fd.get('classCode'));
      e.target.reset();toast(`Joined ${joined.class_name}.`);
      if($('#authModal')&&!$('#authModal').hidden)renderAuth();
      if(location.hash==='#/progress')await renderProgressCloud();
    }catch(err){toast(err.message)}
  }
  if(e.target.dataset.actionForm==='auth-invited-teacher'){
    e.preventDefault();
    const form=e.target,fd=new FormData(form);
    const displayName=String(fd.get('displayName')||'').trim();
    const email=String(fd.get('email')||'').trim();
    const inviteCode=String(fd.get('inviteCode')||'').trim();
    const password=String(fd.get('password')||''),confirmPassword=String(fd.get('confirm')||'');
    authStatus('');
    if(displayName.length<2){authStatus('Enter your name.');form.elements.displayName?.focus();return}
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){authStatus('Enter an email address you can access.');form.elements.email?.focus();return}
    if(!inviteCode){authStatus('Enter the teacher invite code.');form.elements.inviteCode?.focus();return}
    if(password.length<8){authStatus('Choose a password of at least 8 characters.');form.elements.password?.focus();return}
    if(password!==confirmPassword){authStatus('The two passwords do not match.');form.elements.confirm?.focus();return}
    setAuthBusy(form,true,'Checking teacher invite…');
    authStatus('Checking your teacher invite…','working');
    try{
      const result=await BACKEND.signUpInvitedTeacher({displayName,email,password,inviteCode});
      if(result.needsConfirmation){
        authView='signin';renderAuth();
        $('#authBody')?.insertAdjacentHTML('afterbegin','<div class="auth-success"><b>Teacher account created.</b> Confirm your email, then sign in. The invite will be claimed automatically.</div>');
      }else{
        closeAuth();toast('Teacher account created — Teacher access active.');
      }
    }catch(err){authStatus(err?.message||'Teacher account creation failed.');setAuthBusy(form,false)}
  }
  if(e.target.dataset.actionForm==='claim-teacher-invite'){
    e.preventDefault();
    const fd=new FormData(e.target);
    try{
      await BACKEND.claimTeacherInvite(fd.get('inviteCode'));
      closeAuth();toast('Teacher access active.');
      location.hash='#/teacher';
    }catch(err){toast(err.message)}
  }
  if(e.target.dataset.actionForm==='create-teacher-invite'){
    e.preventDefault();
    const form=e.target,fd=new FormData(form);
    const resultBox=$('#teacherInviteResult');
    try{
      const inv=await BACKEND.createTeacherInvite(fd.get('label'),fd.get('days'));
      const code=inv.invite_code||'';
      resultBox.innerHTML=`<div class="teacher-invite-created">
        <small>ONE-TIME TEACHER CODE — COPY IT NOW</small>
        <code>${esc(code)}</code>
        <p>This full code is only shown now. It expires ${new Date(inv.expires_at).toLocaleString()} and can be used once.</p>
        <button class="button small" type="button" data-action="copy-teacher-code" data-code="${esc(code)}">Copy teacher code</button>
      </div>`;
      form.elements.label.value='';
      toast('Teacher invite generated.');
    }catch(err){if(resultBox)resultBox.innerHTML=`<div class="auth-inline-status">${esc(err.message)}</div>`}
  }
  if(e.target.dataset.actionForm==='add-class-teacher'){
    e.preventDefault();
    const fd=new FormData(e.target);
    try{await BACKEND.addClassTeacher(e.target.dataset.class,fd.get('teacher'));toast('Co-teacher added.');await renderTeacher()}catch(err){toast(err.message)}
  }
  if(e.target.dataset.actionForm==='edit-class'){
    e.preventDefault();const fd=new FormData(e.target);
    try{await BACKEND.updateClass({classId:e.target.dataset.class,name:fd.get('name'),academicYear:fd.get('academicYear')});await renderTeacher();toast('Class details updated.')}catch(err){toast(err.message)}
  }
  if(e.target.dataset.actionForm==='create-class'){
    e.preventDefault();
    const fd=new FormData(e.target);
    try{
      await BACKEND.createClass({name:String(fd.get('name')||'').trim(),academicYear:String(fd.get('academicYear')||'').trim()});
      e.target.reset();toast('Class created.');await renderTeacher();
    }catch(err){toast(err.message)}
  }
  if(e.target.dataset.actionForm==='add-class-member'){
    e.preventDefault();
    const fd=new FormData(e.target);
    try{await BACKEND.addClassMember(e.target.dataset.class,fd.get('student'));toast('Student added to class.');await renderTeacher()}catch(err){toast(err.message)}
  }
  if(e.target.dataset.actionForm==='review-evidence'){
    e.preventDefault();
    const fd=new FormData(e.target),status=e.submitter?.dataset.status;
    try{
      await BACKEND.reviewSubmission({submissionId:e.target.dataset.submission,status,feedback:String(fd.get('feedback')||'').trim()});
      toast(status==='approved'?'Evidence approved.':'Feedback sent for changes.');
      await renderTeacher();
    }catch(err){toast(err.message)}
  }
  if(e.target.dataset.actionForm==='comment'){
    e.preventDefault();
    const id=e.target.dataset.lesson,body=new FormData(e.target).get('body')?.trim();
    if(!body)return;
    try{
      await BACKEND.postComment({lessonId:id,body});
      e.target.reset();toast('Comment posted.');loadComments(id);
    }catch(err){toast(err.message)}
  }
  if(e.target.dataset.actionForm==='teacher-reply'){
    e.preventDefault();
    const lessonId=e.target.dataset.lesson,studentId=e.target.dataset.student,body=new FormData(e.target).get('body')?.trim();
    if(!body)return;
    try{
      await BACKEND.postComment({lessonId,body,studentId});
      e.target.reset();toast('Teacher reply posted.');renderTeacher();
    }catch(err){toast(err.message)}
  }
});


function showKonamiEgg(){
  const egg=$('#konamiEgg');if(!egg)return;egg.hidden=false;document.body.classList.add('konami-open');
  clearTimeout(showKonamiEgg.timer);showKonamiEgg.timer=setTimeout(()=>{egg.hidden=true;document.body.classList.remove('konami-open')},6500);
}
function setupKonamiCode(){
  const code=['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];let pos=0;
  document.addEventListener('keydown',e=>{
    if(e.target?.matches?.('input,textarea,select,[contenteditable="true"]'))return;
    const key=e.key.length===1?e.key.toLowerCase():e.key;
    if(key===code[pos]){pos++;if(pos===code.length){pos=0;showKonamiEgg();}}else pos=key===code[0]?1:0;
  });
  $('#konamiEgg')?.addEventListener('click',()=>{$('#konamiEgg').hidden=true;document.body.classList.remove('konami-open')});
}

function setupSearch(){
  const input=$('#globalSearch'),panel=$('#searchPanel');
  input.addEventListener('input',()=>{
    const q=input.value.toLowerCase().trim();
    if(!q){panel.hidden=true;panel.innerHTML='';return}
    const ls=DATA.lessons.filter(l=>[
      l.title,l.short,l.aim,...l.goals,...l.concepts.flat(),
      l.projectTask?.name,l.projectTask?.mission,l.projectTask?.build
    ].join(' ').toLowerCase().includes(q)).slice(0,7);
    const gs=DATA.glossary.filter(x=>x.join(' ').toLowerCase().includes(q)).slice(0,4);
    panel.innerHTML=[
      ...ls.map(l=>`<a class="search-result" href="#/lesson/${l.id}"><strong>${esc(l.title)}</strong><small>Lesson • ${esc(l.projectTask?.name||path(l.path).title)}</small></a>`),
      ...gs.map(g=>`<a class="search-result" href="#/glossary"><strong>${esc(g[0])}</strong><small>${esc(g[1])}</small></a>`)
    ].join('')||'<div class="search-result"><strong>No results</strong><small>Try a broader UE5 term.</small></div>';
    panel.hidden=false;
  });
  document.addEventListener('click',e=>{if(!e.target.closest('.global-search'))panel.hidden=true});
  document.addEventListener('keydown',e=>{
    if(e.key==='/'&&document.activeElement!==input){e.preventDefault();input.focus()}
    if(e.key==='Escape'){input.blur();panel.hidden=true;closeAuth();closeImageLightbox()}
  });
}

$('#menuButton').addEventListener('click',()=>$('#sidebar').classList.toggle('open'));
$('#resetProgress').addEventListener('click',()=>{
  if(confirm('Reset all locally saved lesson progress, XP and game-project status on this browser?')){
    state={completed:[],quiz:{},lastLesson:null};
    projectState={project_title:'Signal Lost',theme:PROJECT.themes[0],pitch:'',mechanics:{}};
    saveState();saveProjectState();route();toast('Local progress reset.');
  }
});
$('#authModal').addEventListener('click',e=>{if(e.target===$('#authModal'))closeAuth()});
document.addEventListener('error',e=>{
  const img=e.target;
  if(img?.classList?.contains('epic-doc-image'))img.closest('.visual-flow-card')?.classList.add('image-failed');
},true);
$('#imageLightbox')?.addEventListener('click',e=>{if(e.target===$('#imageLightbox'))closeImageLightbox()});
window.addEventListener('hashchange',route);

BACKEND.onChange(async ()=>{
  updateChrome();
  if(BACKEND.user){await syncCloudProgress()}
  route();
  if(BACKEND.recoveryMode){
    authView='recovery';
    openAuth();
  }
});

(async function boot(){
  setupSearch();
  setupKonamiCode();
  updateChrome();
  route();
  await BACKEND.init();
})();
})();
