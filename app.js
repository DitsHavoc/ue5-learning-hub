
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

let state = loadState();
let projectState = loadProjectState();
let lessonMode = 'guided';
let authView = 'signin';

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
function visual(l){
  const visuals=l.visuals?.length?l.visuals:(l.visual?[l.visual]:[]);
  if(!visuals.length)return `<div class="callout">This lesson is text-first for now; the main visual is the system you build in Unreal.</div>`;
  return `<div class="lesson-visual-grid ${visuals.length===1?'single':''}">${visuals.map((v,i)=>`<figure class="visual ${v.type==='motion'?'motion-visual':''}">
    <div class="visual-kicker">${v.type==='motion'?'MOTION DEMO':'VISUAL '+String(i+1).padStart(2,'0')}</div>
    <img src="${esc(v.src)}" alt="${esc(l.title)} visual ${i+1}" loading="${i?'lazy':'eager'}">
    <figcaption>${esc(v.caption||'')}</figcaption>
  </figure>`).join('')}</div>`;
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
    <span class="task-label">◈ BUILD IT INTO YOUR GAME</span>
    <h3>${esc(x.name)}</h3>
    <p><b>Mission:</b> ${esc(x.mission)}</p>
    <p>${esc(x.build)}</p>
    <div class="project-proof"><strong>Definition of done</strong>${requirements(x.proof)}</div>
    <div class="callout good"><b>Optional polish:</b> ${esc(x.polish)}</div>
    <div class="project-status-bar">
      <small>This status feeds your <b>My Game</b> milestone tracker.</small>
      ${statusControls(l.id)}
    </div>
  </div>`;
}

function dashboard(){
  const i=level(),n=nextLesson(),np=pathProgress(n.path),pp=projectProgress();
  const nextProject=DATA.lessons.find(l=>projectStatus(l.id)!=='complete')||DATA.lessons[0];
  return `<section class="hero">
    <div class="hero-copy">
      <span class="eyebrow">Learn • Build • Analyse • Apply</span>
      <h1>Learn Unreal by<br>building a game.</h1>
      <p>Every lesson teaches a transferable UE5 idea, then adds a mechanic to one growing game project. Theory becomes a playable system instead of a disconnected tutorial.</p>
      <div class="hero-actions">
        <a class="button primary" href="#/lesson/${n.id}">▶ Continue learning</a>
        <a class="button ghost" href="#/my-game">◈ Open My Game</a>
        <a class="button ghost" href="#/progress">◎ My Progress</a>
      </div>
    </div>
    <div class="hero-art" aria-hidden="true">
      <div class="bp-node one"><div class="bp-head">Learn Skill</div><div class="bp-body">Understand WHY → prove HOW</div></div>
      <div class="bp-node two"><div class="bp-head">Add to Game</div><div class="bp-body">Mechanic complete<br>Project grows</div></div>
    </div>
  </section>

  <div class="stat-grid">
    <div class="stat"><small>Current level</small><strong>${i.n}</strong></div>
    <div class="stat"><small>Total XP</small><strong>${i.xp}</strong></div>
    <div class="stat"><small>Lessons complete</small><strong>${state.completed.length}/${DATA.lessons.length}</strong></div>
    <div class="stat"><small>Game mechanics complete</small><strong>${pp.complete}/${pp.total}</strong></div>
  </div>

  <section class="section">
    <div class="section-head"><div><h2>Your game project</h2><p>Signal Lost is the technical spine. Theme it your way.</p></div><span class="sync-chip ${BACKEND.user?'cloud':''}">${BACKEND.user?'☁ synced':'● local browser'}</span></div>
    <div class="dashboard-project">
      <div>
        <span class="eyebrow">${esc(projectState.project_title)} • ${esc(projectState.theme)}</span>
        <h3>${pp.pct}% of the mechanical spine complete</h3>
        <p>Next project mechanic: <b>${esc(nextProject.projectTask?.name||nextProject.title)}</b></p>
        <div class="progress"><span style="width:${pp.pct}%"></span></div>
      </div>
      <a class="button primary" href="#/my-game">Open project →</a>
    </div>
  </section>

  <section class="section">
    <div class="section-head"><div><h2>Continue learning</h2><p>Resume your current skill.</p></div></div>
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

  <section class="section"><div class="section-head"><div><h2>Learning paths</h2><p>Follow them in order or jump to a skill your game needs.</p></div></div>
    <div class="path-grid">${DATA.paths.map(p=>{const x=pathProgress(p.id);return `<a class="path-card" href="#/path/${p.id}"><div class="path-icon">${p.icon}</div><h3>${esc(p.title)}</h3><p>${esc(p.description)}</p><div class="path-meta"><span>${x.done}/${x.total} lessons</span><span>${x.pct}%</span></div><div class="progress"><span style="width:${x.pct}%"></span></div></a>`}).join('')}</div>
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
    return `<section class="content-card" id="comments"><span class="eyebrow">11 • Ask / reflect</span><h2>Teacher feedback</h2><div class="offline-note"><b>Local mode:</b> account-backed comments are ready in the V3 code but need the Supabase project connected. Lessons, XP and My Game still work locally.</div></section>`;
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
    <div class="lesson-meta"><div class="meta-line"><small>Learning aim</small><strong>${esc(l.aim)}</strong></div><div class="meta-line"><small>Lesson model</small><strong>Learn → Prove → Add to game</strong></div><div class="meta-line"><small>Project mechanic</small><strong>${esc(l.projectTask?.name||'Project practice')}</strong></div></div>
  </section>

  <div class="lesson-layout ${lessonMode==='independent'?'independent':''}">
  <article>
    <section class="content-card" id="aims"><span class="eyebrow">01 • Goal</span><h2>What you should be able to do</h2><div class="goal-grid">${l.goals.map(g=>`<div class="goal">${esc(g)}</div>`).join('')}</div></section>

    <section class="content-card learn-card" id="learn"><span class="eyebrow">02 • Learn</span><h2>Understand the idea first</h2>
      ${l.explanation ? `<div class="explain-lead"><h3>What is it?</h3><p>${esc(l.explanation.what)}</p></div>
      <div class="explain-grid">
        <div class="explain-box why"><span>WHY IT MATTERS</span><p>${esc(l.explanation.why)}</p></div>
        <div class="explain-box mental"><span>HOW TO THINK ABOUT IT</span><p>${esc(l.explanation.mental)}</p></div>
        <div class="explain-box example"><span>GAME / BLUEPRINT EXAMPLE</span><p>${esc(l.explanation.example)}</p></div>
        <div class="explain-box use"><span>WHEN YOU'D USE IT</span><p>${esc(l.explanation.use)}</p></div>
      </div>` : ''}
      ${deepDive(l)}
      <h3 class="concept-title">Key terms</h3>
      <div class="goal-grid">${l.concepts.map(c=>`<div class="concept"><strong>${esc(c[0])}</strong><br>${esc(c[1])}</div>`).join('')}</div>${visual(l)}
    </section>

    <section class="content-card guided-section" id="guided"><span class="eyebrow">03 • Guided build</span><h2>Follow it once</h2><p>Predict the result before pressing Play. Understand the system rather than racing the steps.</p>${guidedBuild(l)}</section>
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

    <section class="content-card" id="game"><span class="eyebrow">09 • Main game project</span><h2>Cement it by building it for real</h2><p>This is not another throwaway exercise. Add the mechanic to your main game so it has to work with systems you built earlier.</p>${projectTaskCard(l)}</section>

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
    <button class="section-button" data-action="scroll" data-target="game">09 Build your game</button>
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
    <label><span>Upload screenshot or PDF <small>optional • max 10 MB</small></span><input name="file" type="file" accept="image/png,image/jpeg,image/webp,application/pdf"></label>
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
    ['game-builder','Systems Builder','Complete 10 mechanics in My Game.',game>=10,'⚙'],
    ['halfway','Halfway There','Complete 10 lessons.',done>=10,'½'],
    ['evidence','Proof, Not Promises','Get 3 pieces of evidence approved.',approvedCount>=3,'✓'],
    ['community','Community Voice','Submit an idea to the Requests Board.',requestCount>=1,'✦'],
    ['final-game','Final Build','Complete all 20 game mechanics.',game>=Object.keys(PROJECT.mechanics).length,'◈'],
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
    <div class="stat"><small>Game mechanics</small><strong>${pp.complete}/${pp.total}</strong></div>
    <div class="stat"><small>XP</small><strong>${i.xp}</strong></div>
    <div class="stat"><small>Cloud evidence</small><strong id="progressEvidenceStat">${BACKEND.user?'…':'Locked'}</strong></div>
  </div>
  <section class="section"><div class="section-head"><div><h2>Achievements</h2><p>Small milestones for meaningful course progress.</p></div></div><div class="achievement-grid" id="achievementGrid">${renderAchievements(0,0)}</div></section>
  <section class="section"><div class="section-head"><div><h2>Evidence tracker</h2><p>See what has been submitted, approved or sent back for improvement.</p></div></div><div id="progressEvidence">${BACKEND.user?'<div class="empty">Loading evidence…</div>':'<div class="offline-note">Evidence tracking unlocks when you sign in. Lesson completion and My Game status still work locally as a guest.</div>'}</div></section>
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
        :'Lessons, XP and My Game still work locally, but shared requests need the Supabase backend.'}</p>
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
        <label>Tell us what you want and why<textarea name="body" minlength="3" maxlength="2000" required placeholder="What would make the site or your game project better?"></textarea></label>
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
      <div class="callout good"><b>Keep it useful:</b> requests should improve learning, the game project, tutorials or the site itself.</div>
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
        ${BACKEND.profile?.role==='teacher'?`<div class="teacher-request-controls">
          ${['new','planned','building','shipped','declined'].map(s=>`<button class="status-btn ${r.status===s?'active':''}" data-action="request-status" data-request="${r.id}" data-status="${s}">${esc(requestStatusLabel(s))}</button>`).join('')}
          <button class="status-btn danger" data-action="request-delete" data-request="${r.id}">Delete</button>
        </div>`:''}
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
function revision(){
  const cards=DATA.lessons.flatMap(l=>l.quiz.map(q=>({lesson:l,q:q[0],answer:q[1][q[2]],feedback:q[3]})));
  const card=cards[Math.floor(Math.random()*cards.length)];
  return `<div class="page-head"><div class="breadcrumb"><a href="#/">Dashboard</a> / Revision</div><span class="eyebrow">Random retrieval practice</span><h1>↻ Revision</h1><p class="muted">A quick question pulled from the learning content.</p></div><div class="revision-card"><span class="eyebrow">${esc(card.lesson.title)}</span><h2 style="margin-top:8px">${esc(card.q)}</h2><div class="button-row"><button class="button primary" data-action="reveal-revision">Reveal answer</button><button class="button ghost" data-action="new-revision">New question</button></div><div class="revision-answer" id="revisionAnswer"><div class="callout good"><b>Answer:</b> ${esc(card.answer)}</div><p class="muted">${esc(card.feedback)}</p><a class="button small" href="#/lesson/${card.lesson.id}">Open related lesson</a></div></div>`;
}
function teacherPage(){
  if(!BACKEND.user || BACKEND.profile?.role!=='teacher'){
    return `<div class="page-head"><span class="eyebrow">Teacher dashboard</span><h1>Teacher access</h1><p class="muted">This page becomes available to a profile with the teacher role when the cloud backend is connected.</p></div><div class="offline-note">Student learning remains fully usable in local mode. Teacher overview needs Supabase because it is aggregating progress across different accounts/devices.</div>`;
  }
  return `<div class="page-head"><span class="eyebrow">Teacher dashboard</span><h1>Teaching overview</h1><p class="muted">Class groups, evidence waiting for review, project progress, student questions and the student roadmap.</p></div><div id="teacherContent"><div class="empty">Loading teaching data…</div></div>`;
}
function notFound(){return `<div class="empty"><h2>That page fell out of the level.</h2><p>Return to the dashboard.</p><a class="button" href="#/">Dashboard</a></div>`}

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
    const recent=o.comments.slice(0,12);
    const pending=o.submissions.filter(s=>s.status==='submitted');
    const reviewed=o.submissions.filter(s=>s.status==='approved'||s.status==='changes_required').slice(0,12);
    const approved=o.submissions.filter(s=>s.status==='approved').length;

    box.innerHTML=`<div class="teacher-grid">
      <div class="teacher-stat"><small>Students</small><strong>${o.profiles.length}</strong></div>
      <div class="teacher-stat"><small>Classes</small><strong>${o.classes.length}</strong></div>
      <div class="teacher-stat"><small>Evidence waiting</small><strong>${pending.length}</strong></div>
      <div class="teacher-stat"><small>Evidence approved</small><strong>${approved}</strong></div>
      <div class="teacher-stat"><small>Lesson completions</small><strong>${o.progress.length}</strong></div>
      <div class="teacher-stat"><small>Game mechanics complete</small><strong>${o.projects.filter(x=>x.status==='complete').length}</strong></div>
      <div class="teacher-stat"><small>Comments / questions</small><strong>${o.comments.length}</strong></div>
      <div class="teacher-stat"><small>Student requests</small><strong>${o.requests.length}</strong></div>
    </div>

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
      <div class="section-head"><div><h2>Classes</h2><p>Create teaching groups and assign signed-in students.</p></div></div>
      <div class="teacher-split">
        <form class="project-panel form-grid" data-action-form="create-class">
          <span class="eyebrow">New class</span>
          <label>Class name<input name="name" required maxlength="100" placeholder="Games Y1 A"></label>
          <label>Academic year<input name="academicYear" maxlength="40" placeholder="2026/27"></label>
          <button class="button small primary" type="submit">Create class</button>
        </form>
        <div class="class-manager">
          ${o.classes.length?o.classes.map(c=>{
            const memberIds=(c.class_members||[]).map(m=>m.user_id);
            const available=o.profiles.filter(p=>!memberIds.includes(p.id));
            return `<div class="class-card">
              <div class="class-card-head"><div><strong>${esc(c.name)}</strong><small>${esc(c.academic_year||'')}</small></div><span>${memberIds.length} student${memberIds.length===1?'':'s'}</span></div>
              <div class="class-code-panel ${c.join_enabled?'enabled':'paused'}">
                <div><small>STUDENT JOIN CODE</small><code>${esc(c.join_code||'—')}</code><span>${c.join_enabled?'Accepting joins':'Paused'}</span></div>
                <div class="class-code-actions">
                  <button class="button small ghost" data-action="copy-class-code" data-code="${esc(c.join_code||'')}">Copy</button>
                  <button class="button small ghost" data-action="toggle-class-join" data-class="${c.id}" data-enabled="${c.join_enabled?'1':'0'}">${c.join_enabled?'Pause':'Enable'}</button>
                  <button class="button small ghost" data-action="regenerate-class-code" data-class="${c.id}">New code</button>
                </div>
              </div>
              <div class="class-members">${memberIds.length?memberIds.map(id=>`<div class="class-member"><span>${esc(names[id]||'Student')}</span><button data-action="remove-class-member" data-class="${c.id}" data-student="${id}" title="Remove">×</button></div>`).join(''):'<div class="muted">No students assigned yet.</div>'}</div>
              ${available.length?`<form class="class-add" data-action-form="add-class-member" data-class="${c.id}">
                <select name="student" required><option value="">Add student…</option>${available.map(s=>`<option value="${s.id}">${esc(s.display_name)}</option>`).join('')}</select>
                <button class="button small" type="submit">Add</button>
              </form>`:'<div class="muted">All signed-in students are already in this class.</div>'}
            </div>`;
          }).join(''):'<div class="offline-note">No classes yet. Create your first teaching group here.</div>'}
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
          <div class="evidence-actions">
            ${link?`<a class="button small ghost" target="_blank" rel="noopener" href="${esc(link)}">↗ Evidence link</a>`:''}
            ${files.map(f=>`<button class="button small ghost" data-action="open-evidence-file" data-path="${esc(f.storage_path)}">📎 ${esc(f.original_name)}</button>`).join('')}
          </div>
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
  else if(parts[0]==='my-game'){app.innerHTML=myGame();activate('my-game')}
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
  if(parts[0]==='requests'&&BACKEND.user) renderRequests();
  if(parts[0]==='teacher') renderTeacher();
}
function activate(key){
  const a=$(`[data-route="${key}"]`);if(a)a.classList.add('active');
}
function bindPageInputs(){
  const gs=$('#glossarySearch');
  if(gs)gs.addEventListener('input',()=>{
    const q=gs.value.toLowerCase().trim();
    $$('.glossary-item').forEach(x=>x.style.display=x.dataset.search.includes(q)?'':'none');
  });
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
      Your lesson progress, game project, evidence, feedback, classes, notifications and requests sync to this Learning Hub account.
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
    body.innerHTML=`<div class="cloud-callout"><b>Guest mode is active.</b><br><br>This copy has no cloud backend configured. Lessons, XP and My Game still save locally on this browser.</div>`;
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
      <p class="auth-message"><b>Guest mode remains available:</b> close this window and the whole learning course still works. An account is only needed for cloud sync, classes, evidence, feedback, requests and notifications.</p>
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

document.addEventListener('click',async e=>{
  const b=e.target.closest('[data-action]');if(!b)return;
  const a=b.dataset.action;
  if(a==='scroll'){document.getElementById(b.dataset.target)?.scrollIntoView({behavior:'smooth',block:'start'});}
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
  else if(a==='toggle-class-join'){
    try{await BACKEND.setClassJoinEnabled(b.dataset.class,b.dataset.enabled!=='1');await renderTeacher();toast(b.dataset.enabled==='1'?'Class code paused.':'Class code enabled.')}catch(err){toast(err.message)}
  }
  else if(a==='regenerate-class-code'){
    if(confirm('Generate a new code? The old class code will stop working immediately.')){
      try{await BACKEND.regenerateClassCode(b.dataset.class);await renderTeacher();toast('New class code generated.')}catch(err){toast(err.message)}
    }
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
    const file=fd.get('file');
    const intent=e.submitter?.dataset.intent||'draft';
    if(!reflection){toast('Add a short reflection first.');return}
    try{
      let saved=await BACKEND.saveSubmission({
        lessonId:l.id,mechanicId:l.id,reflection,evidenceUrl,status:'draft'
      });
      if(file && file.size)await BACKEND.uploadEvidenceFile(saved.id,file);
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
    if(e.key==='Escape'){input.blur();panel.hidden=true;closeAuth()}
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
  updateChrome();
  route();
  await BACKEND.init();
})();
})();
