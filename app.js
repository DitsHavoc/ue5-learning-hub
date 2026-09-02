
(() => {
'use strict';

const DATA = window.UE5_COURSE_DATA;
const BLOCKS = window.UE5_BUILDING_BLOCK_DATA;
const PROJECT = window.UE5_PROJECT_DATA;
const TOOLS = window.UE5_TUTORIAL_DATA;
const SNIPPETS = window.UE5_SNIPPET_DATA;
const DESIGN = window.UE5_DESIGN_DATA;
const NEWS = window.UE5_NEWS_DATA;
const MODEL = window.UE5_MODELING_DATA;
const MODEL_FOUNDATIONS = window.UE5_MODELING_FOUNDATIONS;
const MODEL_VIDEOS = window.UE5_MODELING_VIDEOS;
const SCULPT = window.UE5_SCULPT_DATA;
const STUDY = window.UE5_STUDY_DATA;
const BACKEND = window.UE5_BACKEND;

// V3.19 deepens Designer Studio using the same Quick Tutorial recipe system so students can
// search programming and design help from one place while still having a dedicated design curriculum.
const designCategories = DESIGN.modules.map(m=>({id:`design-${m.id}`,title:m.title,icon:m.icon,description:m.description,designer:true}));
const knownCats=new Set(TOOLS.categories.map(c=>c.id));
designCategories.forEach(c=>{if(!knownCats.has(c.id))TOOLS.categories.push(c)});
const knownTutorials=new Set(TOOLS.tutorials.map(t=>t.id));
DESIGN.tutorials.forEach(t=>{if(!knownTutorials.has(t.id))TOOLS.tutorials.push(t)});
// A Designer module can deliberately reuse an existing recipe (for example Silent Hill-style Fog).
// Give reused recipes a Designer home without duplicating their content in the global library.
DESIGN.modules.forEach(m=>m.tutorials.forEach(id=>{const t=TOOLS.tutorials.find(x=>x.id===id);if(t&&!t.designModule)t.designModule=m.id}));


if (!DATA || !BLOCKS || !PROJECT || !TOOLS || !SNIPPETS || !DESIGN || !NEWS || !MODEL || !MODEL_FOUNDATIONS || !MODEL_VIDEOS || !SCULPT || !STUDY || !BACKEND) {
  const e = document.querySelector('#bootError');
  if (e) e.hidden = false;
  return;
}

const STORE = 'ue5hub:v2:progress';
const PROJECT_STORE = 'ue5hub:v3:project';
const LEGACY = 'ue5LearningHubProgressV1';
const REVISION_STORE = 'ue5hub:v315:revision-results';
const PROFILE_STORE = 'ue5hub:v326:profile';
const AVATAR_GLYPHS=['⌘','✦','◉','▣','⚙','◇','★','☄'];

const BADGE_META={
  'first-step':{rarity:'Common',tone:'common',hint:'Finish one core lesson.'},
  'recipe':{rarity:'Common',tone:'common',hint:'Complete 5 practical builds.'},
  'blueprint-core':{rarity:'Uncommon',tone:'uncommon',hint:'Complete Variables, Branches and Functions.'},
  'halfway':{rarity:'Uncommon',tone:'uncommon',hint:'Complete 10 core lessons.'},
  'community':{rarity:'Uncommon',tone:'uncommon',hint:'Submit an idea to the Requests Board.'},
  'chapter-build':{rarity:'Rare',tone:'rare',hint:'Complete your first Chapter Build.'},
  'game-builder':{rarity:'Rare',tone:'rare',hint:'Complete 10 Signal Lost practice mechanics.'},
  'final-game':{rarity:'Epic',tone:'epic',hint:'Complete all Signal Lost practice mechanics.'},
  'course':{rarity:'Legendary',tone:'legendary',hint:'Complete every core lesson.'},
  'first-mesh':{rarity:'Common',tone:'common',hint:'Complete your first 3D Modelling lesson.'},
  'mesh-doctor':{rarity:'Rare',tone:'rare',hint:'Complete the Topology Clinic lesson and one Fix This Model clinic.'},
  'asset-pipeline':{rarity:'Epic',tone:'epic',hint:'Complete all 12 3D Modelling lessons and export a Build X asset.'},
  'foundations-ready':{rarity:'Rare',tone:'rare',hint:'Pass Module 0 and Model Doctor.'},
  'max-apprentice':{rarity:'Uncommon',tone:'uncommon',hint:"Complete all 14 videos in Dits' Max series."},
  'industry-eye':{rarity:'Rare',tone:'rare',hint:'Complete at least one industry deep dive in every Designer discipline.'},
  'design-thinker':{rarity:'Epic',tone:'epic',hint:'Complete all eight Designer Studio builds.'},
  'digital-clay':{rarity:'Uncommon',tone:'uncommon',hint:'Complete all six Sculpt Playground exercises.'},
  'teacher':{rarity:'Staff',tone:'staff',hint:'Exclusive to verified Learning Hub teacher accounts.'}
};

const AVATAR_THEMES={
  violet:{name:'Void Magenta',bg:'linear-gradient(135deg,#ff4ef6,#7a1cff)',ring:'#ff8dfa',shadow:'rgba(214,55,255,.45)'},
  cyan:{name:'Signal Cyan',bg:'linear-gradient(135deg,#67f4ff,#1aa0ff)',ring:'#94fbff',shadow:'rgba(67,221,255,.4)'},
  gold:{name:'Relic Gold',bg:'linear-gradient(135deg,#ffd86b,#ff8a00)',ring:'#ffe19a',shadow:'rgba(255,191,74,.4)'},
  green:{name:'Bio Green',bg:'linear-gradient(135deg,#86ffb4,#1eb980)',ring:'#a3ffca',shadow:'rgba(78,232,153,.4)'},
  crimson:{name:'Boss Red',bg:'linear-gradient(135deg,#ff8d8d,#d11d50)',ring:'#ffb3c2',shadow:'rgba(232,78,113,.4)'},
  slate:{name:'Steel Slate',bg:'linear-gradient(135deg,#95a8c6,#51627c)',ring:'#c2d2eb',shadow:'rgba(149,168,198,.35)'}
};

let state = loadState();
let projectState = loadProjectState();
let profilePrefs = loadProfilePrefs();
let lessonMode = 'guided';
let authView = 'signin';
let revisionSession = null;
let blocksTier = 'core';
let leaderboardPeriod = 'week';
let leaderboardClassId = '';
let critiqueClassId = '';
let critiqueFilter = 'all';
let critiquePostsCache = [];

function $(s,root=document){return root.querySelector(s)}
function $$(s,root=document){return [...root.querySelectorAll(s)]}
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
function safeUrl(value){
  try{
    const u=new URL(String(value||''));
    return ['http:','https:'].includes(u.protocol)?u.href:'';
  }catch(e){return ''}
}
function safeVideoEmbed(value){
  try{
    const u=new URL(String(value||''));
    if(u.origin==='https://dev.epicgames.com')return u.href;
    if(u.origin==='https://www.youtube-nocookie.com'&&/^\/embed\/[A-Za-z0-9_-]{6,}/.test(u.pathname))return u.href;
    if(u.origin==='https://drive.google.com'&&/^\/file\/d\/[A-Za-z0-9_-]+\/preview$/.test(u.pathname))return u.href;
    return '';
  }catch(e){return ''}
}

// Project briefs are teacher/student-authored rich text. Keep the format deliberately small,
// sanitise again every time it is rendered, and leave legacy plain-text briefs readable.
const PROJECT_RICH_TAGS=new Set(['P','BR','STRONG','B','EM','I','UL','OL','LI','H2','H3','BLOCKQUOTE','A']);
const PROJECT_RICH_DROP=new Set(['SCRIPT','STYLE','IFRAME','OBJECT','EMBED','FORM','INPUT','BUTTON','TEXTAREA','SELECT','OPTION','SVG','MATH','LINK','META']);
function projectRichHtml(value){
  const raw=String(value||'').trim();
  if(!raw)return '';
  if(!/<[a-z][\s\S]*>/i.test(raw)){
    const text=esc(raw.replace(/\r\n?/g,'\n'));
    return '<p>'+text.replace(/\n{2,}/g,'</p><p>').replace(/\n/g,'<br>')+'</p>';
  }
  const doc=new DOMParser().parseFromString('<div id="projectRichRoot">'+raw+'</div>','text/html');
  const root=doc.querySelector('#projectRichRoot');
  if(!root)return '<p>'+esc(raw)+'</p>';
  const clean=node=>{
    if(node.nodeType===Node.TEXT_NODE)return esc(node.nodeValue||'');
    if(node.nodeType!==Node.ELEMENT_NODE)return '';
    const tag=node.tagName.toUpperCase();
    if(PROJECT_RICH_DROP.has(tag))return '';
    const inner=[...node.childNodes].map(clean).join('');
    if(tag==='DIV')return inner?'<p>'+inner+'</p>':'';
    if(!PROJECT_RICH_TAGS.has(tag))return inner;
    if(tag==='BR')return '<br>';
    if(tag==='B')return '<strong>'+inner+'</strong>';
    if(tag==='I')return '<em>'+inner+'</em>';
    if(tag==='A'){
      const href=safeUrl(node.getAttribute('href')||'');
      return href?'<a href="'+esc(href)+'" target="_blank" rel="noopener noreferrer">'+inner+'</a>':inner;
    }
    return '<'+tag.toLowerCase()+'>'+inner+'</'+tag.toLowerCase()+'>';
  };
  return [...root.childNodes].map(clean).join('').trim();
}
function projectRichText(value){
  const div=document.createElement('div');
  div.innerHTML=projectRichHtml(value);
  return (div.textContent||'').replace(/\s+/g,' ').trim();
}
function projectRichExcerpt(value,max=220){
  const text=projectRichText(value);
  return text.length>max?text.slice(0,max-1).trimEnd()+'…':text;
}
function projectRichEditor(name,value='',placeholder='Write the brief…',maxLength=6000){
  const html=projectRichHtml(value);
  const count=projectRichText(html).length;
  return `<div class="project-rich-editor" data-rich-editor data-maxlength="${maxLength}">
    <div class="project-rich-toolbar" role="toolbar" aria-label="Rich text formatting">
      <button type="button" data-action="rich-command" data-command="formatBlock" data-value="p" title="Paragraph">P</button>
      <button type="button" data-action="rich-command" data-command="formatBlock" data-value="h2" title="Large heading">H2</button>
      <button type="button" data-action="rich-command" data-command="formatBlock" data-value="h3" title="Small heading">H3</button>
      <span class="rich-toolbar-divider"></span>
      <button type="button" data-action="rich-command" data-command="bold" title="Bold"><strong>B</strong></button>
      <button type="button" data-action="rich-command" data-command="italic" title="Italic"><em>I</em></button>
      <span class="rich-toolbar-divider"></span>
      <button type="button" data-action="rich-command" data-command="insertUnorderedList" title="Bulleted list">• List</button>
      <button type="button" data-action="rich-command" data-command="insertOrderedList" title="Numbered list">1. List</button>
      <span class="rich-toolbar-divider"></span>
      <button type="button" data-action="rich-command" data-command="createLink" title="Add link">Link</button>
      <button type="button" data-action="rich-command" data-command="unlink" title="Remove link">Unlink</button>
      <button type="button" data-action="rich-command" data-command="removeFormat" title="Remove bold/italic formatting">Clear</button>
    </div>
    <div class="project-rich-surface" contenteditable="true" role="textbox" aria-multiline="true" data-rich-surface data-placeholder="${esc(placeholder)}">${html}</div>
    <textarea name="${esc(name)}" data-rich-value hidden>${esc(html)}</textarea>
    <div class="project-rich-editor-foot"><span>Headings, emphasis, lists and links only — pasted styling is cleaned when you save.</span><span data-rich-count class="${count>maxLength?'over':''}">${count}/${maxLength}</span></div>
  </div>`;
}
function syncProjectRichEditor(editor){
  if(!editor)return false;
  const surface=editor.querySelector('[data-rich-surface]'),value=editor.querySelector('[data-rich-value]'),count=editor.querySelector('[data-rich-count]');
  if(!surface||!value)return false;
  const html=projectRichHtml(surface.innerHTML);
  value.value=html;
  const max=Number(editor.dataset.maxlength||6000),length=(surface.textContent||'').trim().length;
  if(count){count.textContent=length+'/'+max;count.classList.toggle('over',length>max)}
  editor.classList.toggle('over-limit',length>max);
  return length>max;
}
function syncProjectRichEditors(root=document){
  return $$('[data-rich-editor]',root).some(syncProjectRichEditor);
}

function loadState(){
  const clean={completed:[],quiz:{},lastLesson:null,tutorialCompleted:[],chapterBuildCompleted:[],designBuildCompleted:[],designSourceCompleted:[],modelVideoCompleted:[],modelTheoryCompleted:[],modelTheoryScores:{},modelFoundationFinal:false,modelLessonCompleted:[],modelBuildCompleted:[],modelFixCompleted:[],sculptCompleted:[],blockCompleted:[]};
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
function loadProfilePrefs(){
  const clean={glyph:'⌘',theme:'violet',badge:''};
  try{
    const v=JSON.parse(localStorage.getItem(PROFILE_STORE)||localStorage.getItem('ue5hub:v323:profile')||'null');
    return v?{...clean,...v}:clean;
  }catch(e){return clean}
}
function saveProfilePrefs(){
  localStorage.setItem(PROFILE_STORE,JSON.stringify(profilePrefs));
  updateChrome();
  route();
}
function avatarTheme(id){return AVATAR_THEMES[id]||AVATAR_THEMES.violet}
function userDisplayName(){
  return BACKEND.profile?.display_name || BACKEND.user?.email?.split('@')[0] || 'Guest learner';
}
function isTeacher(){return BACKEND.profile?.role==='teacher'}
function userRankTitle(){
  if(isTeacher())return 'Unreal Instructor';
  const n=level().n;
  if(n>=10)return 'Engine Architect';
  if(n>=8)return 'Systems Director';
  if(n>=6)return 'Prototype Ranger';
  if(n>=4)return 'Blueprint Adept';
  if(n>=2)return 'UE Explorer';
  return 'New Recruit';
}
function avatarMarkup(size='medium',label=userDisplayName()){
  const t=avatarTheme(profilePrefs.theme),glyph=profilePrefs.glyph||'⌘';
  return `<span class="hub-avatar ${size}" aria-label="${esc(label)}" style="--avatar-bg:${t.bg};--avatar-ring:${t.ring};--avatar-shadow:${t.shadow}">${esc(glyph)}</span>`;
}
function recentUnlockedBadges(limit=4){
  const rows=achievementData(0,0).filter(a=>a[3]);
  if(isTeacher()){
    const staff=rows.find(a=>a[0]==='teacher'),others=rows.filter(a=>a[0]!=='teacher');
    return [staff,...others.slice(Math.max(0,others.length-Math.max(0,limit-1))).reverse()].filter(Boolean).slice(0,limit);
  }
  return rows.slice(Math.max(0,rows.length-limit)).reverse();
}
function profileBadgeStrip(limit=4){
  const items=recentUnlockedBadges(limit);
  if(!items.length)return '<p class="muted">Complete your first lesson to unlock your first badge.</p>';
  return `<div class="mini-badge-strip">${items.map(a=>{const m=BADGE_META[a[0]]||{rarity:'Common',tone:'common'};return `<div class="mini-badge ${m.tone}"><span>${a[4]}</span><div><b>${esc(a[1])}</b><small>${esc(m.rarity)}</small></div></div>`}).join('')}</div>`;
}
function badgeById(id,approvedCount=0,requestCount=0){return achievementData(approvedCount,requestCount).find(a=>a[0]===id)||null}
function equippedBadge(){
  if(isTeacher())return badgeById('teacher')||['teacher','Unreal Instructor','Verified Learning Hub teacher account.',true,'🎓'];
  const chosen=badgeById(profilePrefs.badge||'');
  if(profilePrefs.badge&&chosen)return chosen;
  return recentUnlockedBadges(1)[0]||null;
}
function nextBadgeTarget(){
  const done=completedLessons().length,tuts=completedTutorialCount(),game=projectProgress().complete,builds=state.chapterBuildCompleted.length;
  const ids=new Set(state.completed);
  const candidates=[
    {id:'first-step',current:Math.min(done,1),target:1},
    {id:'recipe',current:Math.min(tuts,5),target:5},
    {id:'blueprint-core',current:['variables','branches','functions'].filter(x=>ids.has(x)).length,target:3},
    {id:'halfway',current:Math.min(done,10),target:10},
    {id:'chapter-build',current:Math.min(builds,1),target:1},
    {id:'game-builder',current:Math.min(game,10),target:10},
    {id:'final-game',current:Math.min(game,Object.keys(PROJECT.mechanics).length),target:Object.keys(PROJECT.mechanics).length},
    {id:'course',current:Math.min(done,DATA.lessons.length),target:DATA.lessons.length}
  ];
  const c=candidates.find(x=>x.current<x.target)||candidates[candidates.length-1];
  const badge=badgeById(c.id)||[c.id,c.id,'',false,'★'];
  return {...c,badge,pct:Math.round(c.current/c.target*100)};
}
function levelRingMarkup(){
  if(isTeacher())return `<div class="level-ring teacher-max"><div><strong>MAX</strong><span>LEVEL</span></div></div>`;
  const i=level();
  return `<div class="level-ring" style="--level-pct:${i.pct*3.6}deg"><div><strong>${i.n}</strong><span>LEVEL</span></div></div>`;
}
function continueMissionCard(){
  const n=nextLesson(),np=pathProgress(n.path),b=nextBadgeTarget();
  return `<section class="portal-mission-card"><div class="mission-card-top"><div><span class="eyebrow">NEXT MISSION</span><h2>${esc(n.title)}</h2><p>${esc(n.short)}</p></div><span class="mission-xp">+${n.xp} XP</span></div><div class="mission-path-line"><span>${esc(path(n.path).title)}</span><b>${np.pct}% path</b></div><div class="progress"><span style="width:${np.pct}%"></span></div><div class="next-unlock"><div class="next-unlock-icon ${BADGE_META[b.id]?.tone||'common'}">${b.badge[4]}</div><div><span class="deep-label">NEXT BADGE</span><strong>${esc(b.badge[1])}</strong><small>${b.current}/${b.target} • ${esc(BADGE_META[b.id]?.rarity||'Common')}</small></div><div class="next-unlock-progress"><span style="width:${b.pct}%"></span></div></div><div class="mission-actions"><a class="button primary" href="#/lesson/${n.id}">▶ Continue lesson</a><a class="button ghost" href="#/tutorials">🛠 Find a recipe</a></div></section>`;
}

function featuredStudentCard(){
  const i=level(),name=userDisplayName(),eq=equippedBadge(),theme=avatarTheme(profilePrefs.theme),teacher=isTeacher();
  const badgeMeta=eq?BADGE_META[eq[0]]:null;
  return `<section class="portal-player-card compact-player-card ${teacher?'teacher-player-card':''}" style="--player-glow:${teacher?'rgba(86,215,255,.34)':theme.shadow}"><div class="player-card-identity"><div class="player-avatar-stack">${avatarMarkup('xl',name)}<span class="player-level-chip ${teacher?'teacher-max-chip':''}">${teacher?'MAX':`L${i.n}`}</span></div><div class="player-name-block"><span class="eyebrow">${teacher?'STAFF PLAYER CARD':'PLAYER CARD'}</span><h2>${esc(name)}</h2><p>${esc(userRankTitle())}${teacher?' • 🎓 Teacher':''}</p></div>${levelRingMarkup()}</div>${teacher?`<div class="teacher-max-line"><span>🎓 VERIFIED TEACHER</span><strong>LEVEL MAX</strong></div>`:`<div class="player-xp-line"><span><b>${i.xp}</b> XP</span><span>${i.left} XP to Level ${i.n+1}</span></div><div class="progress player-xp-progress"><span style="width:${i.pct}%"></span></div>`}<div class="equipped-badge ${badgeMeta?.tone||'locked'}"><span class="equipped-badge-icon">${eq?eq[4]:'?'}</span><div><small>${teacher?'STAFF BADGE':eq?'PINNED BADGE':'BADGE SLOT'}</small><strong>${eq?esc(eq[1]):'Unlock your first badge'}</strong><span>${teacher?'Teacher-only • automatically equipped':eq?esc(badgeMeta?.rarity||'Common'):'Complete a lesson to begin'}</span></div></div><div class="player-card-mini-stats"><span><b>${completedLessons().length}</b> lessons</span><span><b>${completedTutorialCount()}</b> tutorials</span><span><b>${state.chapterBuildCompleted.length}</b> chapter builds</span></div><div class="portal-player-actions"><a class="button ghost" href="#/leaderboard">🏆 Leaderboard</a><a class="button ghost" href="#/progress">★ Badges & progress</a><button class="button ghost" data-action="open-auth">✎ Customise</button></div></section>`;
}
function lesson(id){return DATA.lessons.find(x=>x.id===id)}
function path(id){return DATA.paths.find(x=>x.id===id)}
function mechanic(id){return PROJECT.mechanics[id]}
function completedLessons(){return DATA.lessons.filter(l=>state.completed.includes(l.id))}
function totalXp(){
  if(BACKEND.user&&!isTeacher()&&BACKEND.xpSummary&&Number.isFinite(Number(BACKEND.xpSummary.all_time_xp)))return Number(BACKEND.xpSummary.all_time_xp);
  return (state.blockCompleted||[]).length*25+(state.tutorialCompleted||[]).length*25+completedLessons().reduce((n,l)=>n+l.xp,0)+TOOLS.chapterBuilds.filter(b=>state.chapterBuildCompleted.includes(b.path)).reduce((n,b)=>n+(b.xp||0),0)+(state.designBuildCompleted||[]).length*300+(state.designSourceCompleted||[]).length*20+(state.modelVideoCompleted||[]).length*(MODEL_VIDEOS.xp||20)+(state.modelTheoryCompleted||[]).length*(MODEL_FOUNDATIONS.chapterXp||20)+(state.modelFoundationFinal?(MODEL_FOUNDATIONS.finalXp||100):0)+(state.modelLessonCompleted||[]).length*100+(state.modelBuildCompleted||[]).length*250+(state.modelFixCompleted||[]).length*75+(state.sculptCompleted||[]).reduce((n,id)=>n+(SCULPT.practices.find(x=>x.id===id)?.xp||0),0)
}
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
function toast(msg,kind=''){
  const t=$('#toast'); if(!t)return;
  t.textContent=msg;
  t.classList.remove('badge-toast');
  if(kind==='badge')t.classList.add('badge-toast');
  t.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer=setTimeout(()=>{t.classList.remove('show','badge-toast')},kind==='badge'?3600:2200);
}


let completionBurstPoint=null;
function completionConfetti(){
  const w=Math.max(1,window.innerWidth||document.documentElement.clientWidth||1);
  const h=Math.max(1,window.innerHeight||document.documentElement.clientHeight||1);
  const origin=completionBurstPoint||{x:w/2,y:Math.min(h*.42,360)};
  completionBurstPoint=null;
  const canvas=document.createElement('canvas');
  canvas.setAttribute('aria-hidden','true');
  Object.assign(canvas.style,{position:'fixed',inset:'0',width:'100vw',height:'100vh',pointerEvents:'none',zIndex:'2147483646'});
  const dpr=Math.min(window.devicePixelRatio||1,2);
  canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);
  document.body.appendChild(canvas);
  const ctx=canvas.getContext('2d');
  if(!ctx){canvas.remove();return}
  ctx.scale(dpr,dpr);
  const colours=['#57d7ff','#9b7cff','#68e39a','#ffd166','#ff6fae','#ffffff'];
  const reduced=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const drawPiece=(p,alpha=1)=>{
    ctx.save();ctx.globalAlpha=Math.max(0,alpha);ctx.translate(p.x,p.y);ctx.rotate(p.r);ctx.fillStyle=p.c;
    if(p.round){ctx.beginPath();ctx.arc(0,0,p.s*.55,0,Math.PI*2);ctx.fill()}else ctx.fillRect(-p.s/2,-p.s*.75/2,p.s,p.s*.75);
    ctx.restore();
  };
  if(reduced){
    for(let i=0;i<52;i++){
      const a=Math.PI*2*(i/52)+(Math.random()-.5)*.18,d=35+Math.random()*150;
      drawPiece({x:origin.x+Math.cos(a)*d,y:origin.y+Math.sin(a)*d,r:Math.random()*Math.PI,c:colours[i%colours.length],s:5+Math.random()*7,round:i%4===0});
    }
    window.setTimeout(()=>canvas.remove(),850);
    return;
  }
  const pieces=Array.from({length:76},(_,i)=>({
    x:origin.x+(Math.random()-.5)*18,y:origin.y+(Math.random()-.5)*10,
    vx:(Math.random()-.5)*11.5,vy:-(6.5+Math.random()*9.5),
    g:.22+Math.random()*.11,r:Math.random()*Math.PI,vr:(Math.random()-.5)*.34,
    c:colours[i%colours.length],s:5+Math.random()*7,round:i%5===0
  }));
  const started=performance.now(),duration=1250;let last=started;
  const frame=now=>{
    const dt=Math.min(2.2,(now-last)/16.667||1);last=now;ctx.clearRect(0,0,w,h);
    const life=(now-started)/duration;
    for(const p of pieces){p.vy+=p.g*dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.r+=p.vr*dt;drawPiece(p,life<.72?1:1-(life-.72)/.28)}
    if(life<1)requestAnimationFrame(frame);else canvas.remove();
  };
  requestAnimationFrame(frame);
}
function finishInlineUpdate(becameComplete=false){
  route({preserveScroll:true});
  if(becameComplete)requestAnimationFrame(()=>requestAnimationFrame(completionConfetti));
  else completionBurstPoint=null;
}

function updateChrome(){
  const i=level(),teacherRole=isTeacher();
  $('#sideLevel').textContent=teacherRole?'LEVEL MAX':`LEVEL ${i.n}`;
  $('#sideXp').textContent=teacherRole?'🎓 TEACHER':`${i.xp} XP`;
  $('#sideBar').style.width=teacherRole?'100%':`${i.pct}%`;
  $('#sideNext').textContent=teacherRole?'Staff account • max level':`${i.left} XP to Level ${i.n+1}`;
  $('#topDone').textContent=completedLessons().length;
  $('#topXp').textContent=teacherRole?'MAX':i.xp;
  const topXpUnit=$('#topXpUnit');if(topXpUnit)topXpUnit.textContent=teacherRole?'LEVEL':'XP';

  const btn=$('#accountButton');
  const txt=$('#accountText');
  const mode=$('#modeBadge');
  const teacher=$('#teacherNav');
  const classesNav=$('#classesNav');
  const classesNavLabel=$('#classesNavLabel');
  const classesNavSub=$('#classesNavSub');
  const dot=$('#accountButton .account-dot');
  const theme=avatarTheme(profilePrefs.theme);

  btn.classList.remove('cloud','teacher');
  if(dot){
    dot.textContent=profilePrefs.glyph||'⌘';
    dot.style.background=theme.bg;
    dot.style.borderColor=theme.ring;
    dot.style.boxShadow=`0 0 12px ${theme.shadow}`;
  }
  if(BACKEND.user){
    const name=BACKEND.profile?.display_name || BACKEND.user.email?.split('@')[0] || 'Account';
    txt.textContent=name;
    btn.classList.add(BACKEND.profile?.role==='teacher'?'teacher':'cloud');
    mode.textContent=BACKEND.profile?.role==='teacher'?'• TEACHER CLOUD':'• CLOUD';
    teacher.hidden=BACKEND.profile?.role!=='teacher';
    if(classesNav){
      classesNav.hidden=false;
      const staff=BACKEND.profile?.role==='teacher';
      if(classesNavLabel)classesNavLabel.textContent=staff?'Classes':'My Class';
      if(classesNavSub)classesNavSub.textContent=staff?'Students • codes • progress':'Teaching group • progress';
    }
  }else{
    txt.textContent=BACKEND.mode==='cloud'?'SIGN IN':'LOCAL MODE';
    mode.textContent=BACKEND.mode==='cloud'?'• GUEST + CLOUD':'• LOCAL';
    if(BACKEND.mode==='cloud')btn.classList.add('cloud');
    teacher.hidden=true;
    if(classesNav)classesNav.hidden=true;
  }
}
let cloudSyncPromise=null,cloudSyncLastAt=0;
async function syncCloudProgress(){
  if(!BACKEND.user)return;
  const now=Date.now();
  if(cloudSyncPromise)return cloudSyncPromise;
  if(now-cloudSyncLastAt<2000)return;
  cloudSyncPromise=(async()=>{try{
    const rows=await BACKEND.getLessonProgress();
    const cloudCompleted=rows.filter(r=>r.completed).map(r=>r.lesson_id);
    const lessonIds=new Set(DATA.lessons.map(l=>l.id));
    state.completed=[...new Set([...state.completed,...cloudCompleted.filter(id=>lessonIds.has(id))])];
    state.tutorialCompleted=[...new Set([...(state.tutorialCompleted||[]),...cloudCompleted.filter(id=>id.startsWith('tutorial:')).map(id=>id.slice(9))])];
    state.blockCompleted=[...new Set([...(state.blockCompleted||[]),...cloudCompleted.filter(id=>id.startsWith('block:')).map(id=>id.slice(6))])];
    state.chapterBuildCompleted=[...new Set([...(state.chapterBuildCompleted||[]),...cloudCompleted.filter(id=>id.startsWith('chapter:')).map(id=>id.slice(8))])];
    state.designBuildCompleted=[...new Set([...(state.designBuildCompleted||[]),...cloudCompleted.filter(id=>id.startsWith('designbuild:')).map(id=>id.slice(12))])];
    state.designSourceCompleted=[...new Set([...(state.designSourceCompleted||[]),...cloudCompleted.filter(id=>id.startsWith('designsource:')).map(id=>id.slice(13))])];
    state.modelVideoCompleted=[...new Set([...(state.modelVideoCompleted||[]),...cloudCompleted.filter(id=>id.startsWith('modelvideo:')).map(id=>id.slice(11))])];
    state.modelTheoryCompleted=[...new Set([...(state.modelTheoryCompleted||[]),...cloudCompleted.filter(id=>id.startsWith('modeltheory:')).map(id=>id.slice(12))])];
    state.modelFoundationFinal=state.modelFoundationFinal||cloudCompleted.includes('modelfoundation:final');
    state.modelLessonCompleted=[...new Set([...(state.modelLessonCompleted||[]),...cloudCompleted.filter(id=>id.startsWith('model:')).map(id=>id.slice(6))])];
    state.modelBuildCompleted=[...new Set([...(state.modelBuildCompleted||[]),...cloudCompleted.filter(id=>id.startsWith('modelbuild:')).map(id=>id.slice(11))])];
    state.modelFixCompleted=[...new Set([...(state.modelFixCompleted||[]),...cloudCompleted.filter(id=>id.startsWith('modelfix:')).map(id=>id.slice(9))])];
    state.sculptCompleted=[...new Set([...(state.sculptCompleted||[]),...cloudCompleted.filter(id=>id.startsWith('sculpt:')).map(id=>id.slice(7))])];
    await BACKEND.refreshXpSummary();
    saveState();
    // Projects are Teams-first from v3.39.3. The old Signal Lost practice state remains local-only
    // so signing in no longer reads legacy project_progress/student_projects on every boot.
    cloudSyncLastAt=Date.now();
  }catch(e){console.warn('Cloud sync',e)}finally{cloudSyncPromise=null}})();
  return cloudSyncPromise;
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
  const linkedSource=sourceUrl?`<a class="image-source-link" href="${esc(sourceUrl)}" target="_blank" rel="noopener">Source: ${esc(sourceTitle||'Epic Games — Unreal Engine Documentation')} ↗</a>`:'';
  const bookSource=!sourceUrl&&kind==='book'&&sourceTitle?`<span class="image-source-note">Source: ${esc(sourceTitle)}</span>`:'';
  const remoteClass=sourceUrl?'remote-reference-image':'';
  const badge=kind==='book'?'<span class="visual-kind-badge">BOOK FIGURE</span>':kind==='epic'?'<span class="visual-kind-badge epic-source-badge">OFFICIAL EPIC DOCS</span>':'';
  return `<figure class="visual-flow-card ${kind}"><button class="visual-zoom" type="button" data-action="open-image" data-src="${esc(src)}" data-caption="${esc(caption)}" data-source="${esc(sourceUrl)}" aria-label="Open image larger"><span class="zoom-hint">⌕ Click to enlarge</span>${badge}<img class="${kind==='epic'?'epic-doc-image ':''}${remoteClass}" src="${esc(src)}" alt="${esc(alt)}" loading="${eager?'eager':'lazy'}"></button><figcaption>${esc(caption)}${linkedSource}${bookSource}</figcaption><div class="remote-image-fallback"><strong>Reference image unavailable.</strong>${sourceUrl?`<a href="${esc(sourceUrl)}" target="_blank" rel="noopener">Open the source page instead ↗</a>`:''}</div></figure>`;
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
  return `<div class="inline-visual-story epic"><div class="visual-story-head"><span class="deep-label">OFFICIAL UE5.6–5.8 SCREENSHOT${xs.length>1?'S':''}</span><h3>See the real Unreal interface</h3><p>Official Epic documentation imagery placed beside the concept it explains.</p></div><div class="visual-story-grid">${xs.map((v,i)=>zoomableImage({src:v.src,alt:`${l.title} official Unreal Engine screenshot ${i+1}`,caption:v.caption||'',sourceUrl:v.sourceUrl||'',sourceTitle:v.sourceTitle||'',kind:'epic',eager:false})).join('')}</div></div>`;
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


function renderRichText(value, ordered=false){
  if(Array.isArray(value)){
    const tag=ordered?'ol':'ul';
    const cls=ordered?'guided-numbered':'guided-bullets';
    return '<'+tag+' class="'+cls+'">'+value.map(x=>'<li>'+esc(x)+'</li>').join('')+'</'+tag+'>';
  }
  return '<p>'+esc(value||'')+'</p>';
}
function renderStepVisual(visual, altPrefix='Step visual'){
  const visuals=(Array.isArray(visual)?visual:[visual]).filter(v=>v?.src);
  if(!visuals.length)return '';
  const galleryClass=visuals.length>1?' step-visual-gallery':'';
  return '<div class="step-visual-wrap'+galleryClass+'">'+visuals.map((v,i)=>zoomableImage({src:v.src,alt:`${altPrefix}${visuals.length>1?` — view ${i+1}`:''}`,caption:v.caption||'',sourceUrl:v.sourceUrl||'',sourceTitle:v.sourceTitle||'',kind:v.kind||'local',eager:false})).join('')+'</div>';
}
function guideSupportShape(step){
  if(!step)return {};
  if(Array.isArray(step))return {title:step[0]||'',do:step[1]||'',why:step[2]||'',check:step[3]||''};
  return step;
}
function guideTokens(value){
  const stop=new Set(['the','and','for','with','this','that','from','into','your','then','only','once','after','before','first','use','using','set','add','create','open','play','test','step','should','will','when','where','make','keep']);
  return new Set(String(value||'').toLowerCase().match(/[a-z0-9_.+-]+/g)?.filter(x=>x.length>2&&!stop.has(x))||[]);
}
function guideSupportScore(instruction,raw){
  const target=guideTokens(instruction),shape=guideSupportShape(raw),hay=guideTokens(JSON.stringify(shape));
  let score=0;
  const strong=new Set(['instance','editable','tooltip','started','completed','canceled','beginplay','overlap','collision','timeline','widget','trace','branch','function','pivot','symmetry','chamfer','inset','extrude','unwrap','checker','export','forward','location','rotation']);
  target.forEach(t=>{if(hay.has(t))score+=/^[-+]?\d/.test(t)?1:(strong.has(t)?4:(t.includes('_')?3:1))});
  const a=String(instruction||'').toLowerCase(),b=JSON.stringify(shape).toLowerCase();
  ['compile','save','rename','variable','collision','light','mesh','input action','mapping context','event graph','started','completed','canceled','instance editable','tooltip','speed','branch','function','timeline','widget','line trace','forward vector','world location','hit result','ai','animation','uv','checker','chamfer','inset','extrude','symmetry','pivot','export'].forEach(k=>{if(a.includes(k)&&b.includes(k))score+=3});
  return score;
}
function guideSupportFor(instruction,index,total,supportSteps=[]){
  if(!supportSteps?.length)return {};
  const text=String(instruction||'').trim().toLowerCase();
  if(/^(if\b|play\b|press play\b|compile\b|save\b)/.test(text))return {};
  let best=-1,bestScore=-1;
  supportSteps.forEach((raw,idx)=>{
    const score=guideSupportScore(instruction,raw);
    if(score>bestScore){best=idx;bestScore=score;}
  });
  if(bestScore<4)return {};
  return guideSupportShape(supportSteps[best]);
}
function guideFixes(s){
  const out=[];
  if(s.warning)out.push(s.warning);
  const xs=s.troubleshoot||s.stuck||[];
  if(Array.isArray(xs))out.push(...xs);
  else if(xs)out.push(xs);
  return [...new Set(out.filter(Boolean))];
}
function guideFallbackWhy(instruction){
  const s=String(instruction||'').toLowerCase();
  if(/^if\b/.test(s))return 'This is a fault check. Fix this behaviour now so you do not build the next step on top of a broken one.';
  if(s.includes('default value'))return 'The default value is the starting state new instances use unless you deliberately override it.';
  if(s.includes('world location'))return 'World Location gives the trace an exact starting position in the level rather than a local offset inside the camera or Actor.';
  if(s.includes('forward vector'))return 'The Forward Vector gives a direction; multiplying it by a distance turns that direction into the end point for the trace.';
  if(s.includes('compile'))return 'Compiling catches Blueprint errors now, before you mistake them for a gameplay problem later.';
  if(s.includes('press play')||s.includes(' play.')||s.startsWith('play '))return 'Testing immediately proves the last change works before the build becomes more complicated.';
  if(s.includes('save'))return 'Saving here gives you a known-good version to return to if a later edit goes wrong.';
  if(s.includes('rename'))return 'Clear names stop you editing the wrong asset or object when the project becomes busier.';
  if(s.includes('input action')||s.includes('ia_'))return 'Enhanced Input keeps the control separate from the gameplay logic, so the key can change without rebuilding the mechanic.';
  if(s.includes('mapping context')||s.includes('imc_'))return 'The Mapping Context is what connects the Input Action to an actual keyboard or controller button.';
  if(s.includes('event graph'))return 'The Event Graph is where this runtime behaviour will execute while the game is playing.';
  if(s.includes('variable'))return 'The variable gives the system a named value it can read, change and reuse instead of hiding the value inside one node.';
  if(s.includes('branch'))return 'A Branch makes the next action depend on a clear true/false condition.';
  if(s.includes('function'))return 'Putting repeated logic in a Function gives it one clear job and one place to update later.';
  if(s.includes('collision')||s.includes('overlap'))return 'Collision gives the Actor a controlled way to detect when something enters, leaves or touches the gameplay area.';
  if(s.includes('trace'))return 'The trace checks a precise line through the world, which is useful for aiming and interaction without needing a large trigger volume.';
  if(s.includes('max walk speed'))return 'Max Walk Speed is the Character Movement setting that directly controls how fast the Character is allowed to move.';
  if(s.includes('timeline'))return 'A Timeline gives you a predictable value over time, which is easier to tune than moving something manually every frame.';
  if(s.includes('widget'))return 'The Widget contains the on-screen UI; keeping it separate from world Actors makes the interface easier to manage.';
  if(s.includes('inset'))return 'Inset creates a controlled border around the selected face without adding detail everywhere else.';
  if(s.includes('extrude'))return 'Extrude moves the selected face while creating the side faces needed to keep the mesh connected.';
  if(s.includes('chamfer'))return 'Chamfer removes the mathematically sharp edge so light can create a believable highlight without adding unnecessary detail elsewhere.';
  if(s.includes('connect'))return 'Connect adds deliberate supporting edges exactly where the form needs them.';
  if(s.includes('symmetry'))return 'Symmetry lets you model one clean half and guarantees the repeated half matches it.';
  if(s.includes('pivot'))return 'The pivot controls where the object rotates, moves and snaps from, so it needs to match how the asset will be used.';
  if(s.includes('uv')||s.includes('unwrap')||s.includes('checker'))return 'The checker test reveals stretching and scale problems before you spend time painting textures.';
  if(s.includes('export')||s.includes('fbx')||s.includes('import to ue'))return 'This proves the asset survives the real Max-to-Unreal pipeline at the correct scale, pivot and orientation.';
  if(s.includes('create')||s.includes('add'))return 'This creates the exact piece the next steps need, so make it now rather than preparing a separate checklist first.';
  if(s.includes('set ')||s.includes('enter ')||s.includes('location')||s.includes('rotation')||s.includes('scale'))return 'A known working value gives you a reliable first result. Tune it only after the system or model works correctly.';
  if(s.includes('connect'))return 'The connection controls how data or execution reaches the next part of the system.';
  if(s.includes('select'))return 'The next edit only works correctly if the intended object, component or sub-object is selected.';
  return 'This puts the project into the exact state the next step expects.';
}
function guideFallbackCheck(instruction,index,total){
  const s=String(instruction||'').toLowerCase();
  if(s.includes('input action')||s.includes('ia_'))return 'The named Input Action exists, and if this step maps it, the Mapping Context shows the intended key beside it.';
  if(s.includes('mapping context')||s.includes('imc_'))return 'The active Mapping Context shows the new action/key row and has been saved.';
  if(s.includes('compile'))return 'Compile finishes with no errors. Do not continue while the Blueprint shows a compile error.';
  if(s.includes('press play')||s.startsWith('play ')||s.includes(' play.'))return 'Run the exact behaviour described in the step and confirm it happens every time you repeat the test.';
  if(s.includes('variable'))return 'The variable appears in My Blueprint with the exact name, type and value requested in this step.';
  if(s.includes('default value'))return 'The variable Details/Class Defaults shows the exact starting value requested.';
  if(s.includes('instance editable'))return 'Select a placed instance and confirm the exposed variable appears in its Details panel.';
  if(s.includes('world location'))return 'The graph has a World Location value feeding the Start side of the trace setup.';
  if(s.includes('forward vector'))return 'The direction is multiplied by the stated distance and combined with Start to produce End.';
  if(s.includes('line trace'))return 'The trace node has the intended Start, End and channel. With debug drawing enabled you should see the line in Play mode.';
  if(s.includes('branch'))return 'The Branch has a Boolean condition connected and only the intended True/False path continues.';
  if(s.includes('overlap')||s.includes('collision'))return 'The collision shape covers the intended area and the event fires only when something actually enters/leaves it.';
  if(s.includes('inset'))return 'The selected face now has an even border and no neighbouring face has been changed by mistake.';
  if(s.includes('extrude'))return 'The selected face has moved by the requested amount and the new side faces remain connected.';
  if(s.includes('chamfer'))return 'F4/edged view shows the expected new support edges and shaded view shows a controlled highlight, not a melted edge.';
  if(s.includes('symmetry'))return 'Both halves meet cleanly on the centre seam with no gap or doubled strip of geometry.';
  if(s.includes('uv')||s.includes('unwrap')||s.includes('checker'))return 'The checker pattern is readable and reasonably even; obvious stretching is fixed before packing/export.';
  if(s.includes('pivot'))return 'Rotate or move the object once and confirm it transforms from the intended hinge/base/snap point.';
  if(s.includes('export')||s.includes('import to ue')||s.includes('fbx'))return 'The asset appears in Unreal at the intended scale and orientation, with the expected pivot.';
  if(s.includes('location')||s.includes('rotation')||s.includes('scale'))return 'The Details/Transform fields show the exact values from the step and the object visibly matches them.';
  if(s.includes('save'))return 'The file/asset is saved at the requested name/version before you continue.';
  return index===total-1?'Run the completed result once from the start and prove it works.':`The result of this step is correct before you move to Step ${index+2}.`;
}
function guideStepTitle(instruction,sup,i){
  if(sup?.title)return sup.title;
  const text=String(instruction||'').replace(/→/g,' ').replace(/\s+/g,' ').trim();
  const first=text.split(/[.!?]/)[0];
  return first.length<=68?first:`Step ${i+1}`;
}
function renderSingleClearGuide(values=[],steps=[],supportSteps=[],opts={}){
  if(!steps?.length)return '';
  const title=opts.title||'Follow the guide';
  const intro=opts.intro||'Start at Step 1 and work straight down. The guide introduces every asset, variable, value and test when you actually need it.';
  const articles=steps.map((instruction,i)=>{
    const sup=guideSupportFor(instruction,i,steps.length,supportSteps);
    const fixes=guideFixes(sup);
    const titleText=guideStepTitle(instruction,sup,i);
    const why=sup.why||guideFallbackWhy(instruction);
    const see=String(sup.see||'').trim();
    const rawCheck=String(sup.check||'').trim();
    const fallbackCheck=guideFallbackCheck(instruction,i,steps.length);
    const check=[see,rawCheck].filter(Boolean).join(' ' )||fallbackCheck;
    const directVisuals=Array.isArray(opts.recipeVisuals)?opts.recipeVisuals:null;
    const visualSpec=directVisuals?directVisuals[i]:sup.visual;
    const visual=visualSpec?(typeof visualSpec==='string'?modelDiagram(visualSpec,`${title} step ${i+1}`):renderStepVisual(visualSpec,`${title} step ${i+1}`)):'';
    const fix=fixes.length?`<details class="flow-fix"><summary>Something went wrong?</summary><ul>${fixes.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></details>`:'';
    const where=String(sup.where||'').trim();
    const whereHtml=where?`<p class="flow-where"><b>Go to:</b> ${renderRichText(where,false)}</p>`:'';
    return `<article class="flow-guide-step"><div class="flow-step-number">${String(i+1).padStart(2,'0')}</div><div class="flow-step-body"><span class="flow-step-kicker">STEP ${i+1}</span><h3>${esc(titleText)}</h3>${whereHtml}<p class="flow-instruction">${esc(instruction)}</p><p class="flow-why"><b>Why:</b> ${esc(why)}</p><p class="flow-check"><b>Check:</b> ${esc(check)}</p>${visual}${fix}</div></article>`;
  }).join('');
  return `<section class="straight-through-guide"><div class="flow-guide-head"><p>${esc(intro)}</p><div class="flow-guide-rule">Start with Step 1. Do not prepare a separate list of files, variables, components or settings first — each one appears when you need it.</div></div><div class="flow-guide-steps">${articles}</div></section>`;
}
function buildGuideSupports(phases=[]){
  return phases.map(ph=>({title:ph.name||'',why:ph.brief||'',see:ph.proof||'',check:ph.stop||'',stuck:ph.stop?[ph.stop]:[]}));
}
function guidedBuild(l){
  if(l.studentRecipe?.length)return renderSingleClearGuide(l.starterValues,l.studentRecipe,l.guidedDetailed||[],{title:'Build it from Step 1',intro:'Start at Step 1 and work straight down. Create each asset, variable, component and value only when the step asks for it.',recipeVisuals:l.recipeVisuals||null});
  if(l.guidedDetailed?.length)return `<div class="guided-detailed">${l.guidedDetailed.map((s,i)=>`<article class="guided-step"><div class="guided-step-num">${String(i+1).padStart(2,'0')}</div><div class="guided-step-main"><h3>${esc(s.title)}</h3>${s.where?`<div class="guided-where"><span>WHERE TO CLICK</span><div>${renderRichText(s.where,false)}</div></div>`:''}<div class="guided-do"><span>DO THIS</span><div>${renderRichText(s.do,false)}${s.doList?renderRichText(s.doList,true):''}</div></div>${s.see?`<div class="guided-see"><span>YOU SHOULD SEE</span><div>${renderRichText(s.see,false)}</div></div>`:''}<div class="guided-check"><span>CHECK</span><div>${renderRichText(s.check,false)}</div></div>${s.why?`<div class="guided-reason"><span>WHY</span><p>${esc(s.why)}</p></div>`:''}${renderStepVisual(s.visual,`${l.title} step ${i+1}`)}</div></article>`).join('')}</div>`;
  return `<ol class="steps">${(l.guided||[]).map(s=>`<li>${esc(s)}</li>`).join('')}</ol>`;
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
      <small>This only tracks the optional <b>Signal Lost practice mechanic</b>. Formal briefs, submissions and assessment stay in <b>Microsoft Teams</b>.</small>
      ${statusControls(l.id)}
    </div>
  </div>`;
}


function buildingBlock(id){return BLOCKS.blocks.find(x=>x.id===id)}
function buildingTrack(id){return BLOCKS.tracks.find(x=>x.id===id)}
function blockDone(id){return (state.blockCompleted||[]).includes(id)}
function blockTierRank(tier){return tier==='core'?0:tier==='common'?1:2}
function normaliseBlockTerm(v){return String(v||'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim()}
function blockMatchesTutorial(b,t){
  if(Array.isArray(t?.buildingBlocks))return t.buildingBlocks.includes(b.id);
  if((b.tutorials||[]).includes(t.id))return true;
  if((b.lessons||[]).includes(t.referenceLesson))return true;
  const uses=(t.uses||[]).map(normaliseBlockTerm);
  const terms=[b.title,...(b.aliases||[])].map(normaliseBlockTerm).filter(x=>x.length>2);
  return uses.some(u=>terms.some(term=>{
    if(u===term)return true;
    const words=u.split(' ');
    if(!term.includes(' '))return words.includes(term);
    return (` ${u} `).includes(` ${term} `);
  }));
}
function blocksForTutorial(t){
  if(!t||t.designModule)return [];
  if(Array.isArray(t.buildingBlocks))return t.buildingBlocks.map(buildingBlock).filter(Boolean).slice(0,4);
  return BLOCKS.blocks.filter(b=>blockMatchesTutorial(b,t)).sort((a,b)=>blockTierRank(a.tier)-blockTierRank(b.tier)).slice(0,4);
}
function blocksForLesson(l){return BLOCKS.blocks.filter(b=>(b.lessons||[]).includes(l.id)).sort((a,b)=>blockTierRank(a.tier)-blockTierRank(b.tier));}
function blockStatusChip(b){const done=blockDone(b.id);return `<a class="block-use-chip ${done?'learned':b.tier}" href="#/block/${b.id}"><span>${done?'✓':'🧱'}</span><div><strong>${esc(b.title)}</strong><small>${done?'Learned':`${BLOCKS.tiers[b.tier].title} • ${b.minutes} min`}</small></div></a>`}
function tutorialBuildingBlocks(t){const bs=blocksForTutorial(t);if(!bs.length)return '';return `<section class="tutorial-block-strip"><div><span class="eyebrow">YOU'RE ABOUT TO USE</span><h2>${bs.every(x=>blockDone(x.id))?'You already know these building blocks':'New term? Learn it in a few minutes.'}</h2><p>This is not a prerequisite wall. Open a Building Block only if the term is new, then come straight back to the tutorial.</p></div><div class="block-use-row">${bs.map(blockStatusChip).join('')}</div></section>`}
function lessonBuildingBlocks(l){const bs=blocksForLesson(l);if(!bs.length)return '';return `<section class="lesson-block-strip"><span class="eyebrow">BUILDING BLOCKS USED HERE</span><div class="block-use-row">${bs.map(blockStatusChip).join('')}</div></section>`}
function blockCard(b){const done=blockDone(b.id),tier=BLOCKS.tiers[b.tier];return `<a class="building-block-card ${b.tier} ${done?'done':''}" href="#/block/${b.id}"><div class="building-block-card-top"><span class="block-tier ${b.tier}">${done?'✓ LEARNED':tier.title}</span><span>${b.minutes} min</span></div><h3>${esc(b.title)}</h3><p>${esc(b.short)}</p>${b.prefix?`<code>${esc(b.prefix)}</code>`:''}<strong>${done?'Revisit':'Learn it'} →</strong></a>`}
function blockTrackSummary(t){const xs=BLOCKS.blocks.filter(b=>b.track===t.id),core=xs.filter(b=>b.tier==='core').length;return `<div class="block-track-summary"><span>${t.icon}</span><div><strong>${esc(t.title)}</strong><small>${core?`${core} core • ${xs.length} total`:`Learn when needed • ${xs.length} blocks`}</small></div></div>`}
function blockVisual(b){
  const visuals=(Array.isArray(b?.visual)?b.visual:[b?.visual]).filter(v=>v?.src);
  if(!visuals.length)return '';
  const allEpic=visuals.every(v=>v.kind==='epic');
  const exact=allEpic?'OFFICIAL UE5.6–5.8 REFERENCE':'CURRENT CLASSROOM / OFFICIAL REFERENCE';
  return `<section class="content-card block-visual-reference"><span class="eyebrow">${exact}</span><h2>See the real thing</h2><p class="muted">Every visual below is here because it directly explains part of this Building Block. The Hub does not use vaguely related screenshots to fill space.</p><div class="block-visual-gallery ${visuals.length>1?'multi':''}">${visuals.map((v,i)=>zoomableImage({src:v.src,alt:`${b.title} reference${visuals.length>1?` — view ${i+1}`:''}`,caption:v.caption||'',sourceUrl:v.sourceUrl||'',sourceTitle:v.sourceTitle||'',kind:v.kind||'reference',eager:false})).join('')}</div></section>`;
}
function blocksPage(){
  const filtered=BLOCKS.blocks.filter(b=>blocksTier==='all'||b.tier===blocksTier),done=(state.blockCompleted||[]).length,core=BLOCKS.blocks.filter(b=>b.tier==='core');
  return `<div class="page-head blocks-page-head"><div class="breadcrumb"><a href="#/">Home</a> / <a href="#/programming">Unreal Learning</a> / Building Blocks</div><span class="eyebrow">LEARN THE LANGUAGE • THEN BUILD THE GAME</span><h1>🧱 Unreal Building Blocks</h1><p class="muted">Tiny explanations and one small proof exercise for the Unreal terms tutorials keep using. You are <b>not</b> expected to learn all ${BLOCKS.blocks.length} up front.</p><div class="blocks-hero-stats"><span><b>${core.length}</b> Core first</span><span><b>${BLOCKS.blocks.filter(x=>x.tier==='common').length}</b> Common when needed</span><span><b>${BLOCKS.blocks.filter(x=>x.tier==='later').length}</b> Later</span><span><b>${done}</b> learned</span></div></div>
  <section class="blocks-rule"><div><span class="deep-label">THE ANTI-EXPLOSION RULE</span><h2>Learn only what today's build needs.</h2><p>Start with Core. When Sprint introduces an Input Action, learn IA/IMC. When AI introduces NavMesh, learn NavMesh. The tutorial links you here at the moment the concept becomes useful.</p></div><a class="button primary" href="#/tutorials">🛠 Build something →</a></section>
  <section class="section"><div class="section-head"><div><h2>Five shelves, not five compulsory courses</h2><p>These organise the knowledge so you can find it later.</p></div></div><div class="block-track-summaries">${BLOCKS.tracks.map(blockTrackSummary).join('')}</div></section>
  <section class="section"><div class="section-head"><div><h2>${blocksTier==='core'?'Start here: Core Building Blocks':blocksTier==='all'?'All Building Blocks':BLOCKS.tiers[blocksTier].title+' Building Blocks'}</h2><p>${blocksTier==='core'?'These are the only ones we actively recommend learning early. Everything else is just-in-time.':BLOCKS.tiers[blocksTier]?.description||'Browse everything when you need a reference.'}</p></div><div class="block-filter-row"><button class="block-filter ${blocksTier==='core'?'active':''}" data-action="block-filter" data-tier="core">Core</button><button class="block-filter ${blocksTier==='common'?'active':''}" data-action="block-filter" data-tier="common">Common</button><button class="block-filter ${blocksTier==='later'?'active':''}" data-action="block-filter" data-tier="later">Later</button><button class="block-filter ${blocksTier==='all'?'active':''}" data-action="block-filter" data-tier="all">All</button></div></div><div class="building-block-grid">${filtered.map(blockCard).join('')}</div></section>`;
}
function blockPage(id){
  const b=buildingBlock(id);if(!b)return notFound();const t=buildingTrack(b.track),done=blockDone(id),relatedTutorials=TOOLS.tutorials.filter(x=>blockMatchesTutorial(b,x)&&!x.designModule).slice(0,6),relatedLessons=(b.lessons||[]).map(lesson).filter(Boolean),requires=(b.requires||[]).map(buildingBlock).filter(Boolean);
  return `<div class="breadcrumb"><a href="#/">Home</a> / <a href="#/programming">Unreal Learning</a> / <a href="#/blocks">Building Blocks</a> / ${esc(b.title)}</div>
  <section class="block-detail-hero"><div><span class="block-tier ${b.tier}">${BLOCKS.tiers[b.tier].title} • ${b.minutes} MIN</span><h1>🧱 ${esc(b.title)}</h1><p>${esc(b.short)}</p>${b.prefix?`<code>${esc(b.prefix)}</code>`:''}</div><button class="button ${done?'success':'primary'}" data-action="complete-block" data-block="${b.id}">${done?'✓ Learned':'Mark learned • +25 XP'}</button></section>
  ${requires.length?`<section class="block-useful-first"><span class="eyebrow">USEFUL FIRST • NOT A LOCK</span><div class="block-use-row">${requires.map(blockStatusChip).join('')}</div></section>`:''}
  <article class="block-detail-layout"><section class="content-card block-plain"><span class="eyebrow">30-SECOND EXPLANATION</span><h2>What is it?</h2><p>${esc(b.remember)}</p>${b.cheatSheet?.length?`<div class="block-cheat-sheet">${b.cheatSheet.map(x=>`<div><code>${esc(x[0])}</code><span>${esc(x[1])}</span></div>`).join('')}</div>`:''}<div class="callout good"><b>Use it when:</b> ${esc(b.useWhen)}</div></section>
  ${blockVisual(b)}
  <section class="content-card block-practice"><span class="eyebrow">DO IT ONCE</span><h2>Prove the idea in Unreal</h2><ol>${b.steps.map((x,i)=>`<li><span>${String(i+1).padStart(2,'0')}</span><p>${esc(x)}</p></li>`).join('')}</ol><div class="block-check"><b>CHECK YOU GET IT</b><p>${esc(b.check)}</p></div></section>
  ${(relatedTutorials.length||relatedLessons.length)?`<section class="content-card"><span class="eyebrow">YOU'LL SEE THIS AGAIN</span><h2>Apply it in a real system</h2><div class="block-related-links">${relatedTutorials.map(x=>`<a href="#/tutorial/${x.id}"><span>${x.icon||'🛠'}</span><div><strong>${esc(x.title)}</strong><small>Quick Tutorial • ${esc(x.duration)}</small></div></a>`).join('')}${relatedLessons.map(x=>`<a href="#/lesson/${x.id}"><span>⌘</span><div><strong>${esc(x.title)}</strong><small>Core System Lesson • ${esc(x.duration)}</small></div></a>`).join('')}</div></section>`:''}</article>`;
}

function tutorial(id){return TOOLS.tutorials.find(x=>x.id===id)}
function tutorialCategory(id){return TOOLS.categories.find(x=>x.id===id)}
function tutorialFamily(id){return (TOOLS.families||[]).find(x=>x.id===id)}
function familyTutorials(f){return (f?.members||[]).map(tutorial).filter(Boolean)}
function familyDoneCount(f){return familyTutorials(f).filter(t=>tutorialDone(t.id)).length}
function familyHref(f){const ts=familyTutorials(f);return ts.length===1?`#/tutorial/${ts[0].id}`:`#/tutorial-family/${f.id}`}
function familySearchText(f){const ts=familyTutorials(f),c=tutorialCategory(f.category);return [f.title,f.summary,c?.title||f.category,...ts.flatMap(t=>[t.title,t.summary,...(t.uses||[])])].filter(Boolean).join(' ').toLowerCase()}
function hiddenLessonApplications(id){return TOOLS.tutorials.filter(t=>t.libraryHidden&&(t.lessonHome===id||t.referenceLesson===id))}
function snippetCategory(id){return SNIPPETS.categories.find(x=>x.id===id)}
function snippetsForTutorial(id){return SNIPPETS.snippets.filter(x=>(x.relatedTutorials||[]).includes(id))}
function snippetsForLesson(id){return SNIPPETS.snippets.filter(x=>(x.relatedLessons||[]).includes(id))}
function snippetSearchText(s){return [s.title,s.what,s.snippetSummary,s.sourceSection,s.pasteMode,...(s.tags||[]),...(s.prerequisites||[]),snippetCategory(s.category)?.title||s.category].filter(Boolean).join(' ').toLowerCase()}
function snippetCard(s,{compact=false}={}){
  const c=snippetCategory(s.category),related=(s.relatedTutorials||[]).map(tutorial).filter(Boolean),url=safeUrl(s.sourceUrl),mode=s.pasteMode||'Blueprint graph',pill=mode.startsWith('Level')?'LEVEL PASTE':'BLUEPRINT';
  return `<article class="snippet-card ${compact?'compact':''}" data-snippet-card data-category="${esc(s.category)}" data-search="${esc(snippetSearchText(s))}"><div class="snippet-card-top"><span class="snippet-icon">${s.icon||'⌘'}</span><div><span class="eyebrow">OFFICIAL EPIC UE ${esc(s.sourceVersion)} • ${esc(c?.title||s.category)}</span><h3>${esc(s.title)}</h3></div><span class="snippet-copy-pill">${pill}</span></div><p>${esc(s.what)}</p><div class="snippet-meta"><span>⌘ ${esc(s.snippetSummary)}</span><span>📍 ${esc((s.pasteInto||[])[0]||mode)}</span>${s.sourceSection?`<span>§ ${esc(s.sourceSection)}</span>`:''}</div>${compact?'':`<div class="snippet-detail-grid"><div><b>PASTE INTO</b><ul>${(s.pasteInto||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div><div><b>AFTER PASTING</b><ul>${(s.reconnect||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div></div><div class="snippet-prereqs"><b>Have these first:</b> ${(s.prerequisites||[]).map(x=>`<span>${esc(x)}</span>`).join('')}</div>`}<div class="snippet-card-actions">${url?`<a class="button primary small" href="${esc(url)}" target="_blank" rel="noopener">Open Epic + Copy Full Snippet ↗</a>`:''}${related[0]?`<a class="button ghost small" href="#/tutorial/${related[0].id}">Hub: ${esc(related[0].title)} →</a>`:''}</div></article>`;
}
function tutorialSnippetBridge(t){
  const xs=snippetsForTutorial(t.id);if(!xs.length)return '';
  return `<section class="tutorial-snippet-bridge"><div><span class="eyebrow">⚡ OFFICIAL EPIC CLIPBOARD ASSIST</span><h2>${xs.length===1?'Epic has a pasteable Unreal assist for this':'Epic has pasteable Unreal assists for this'}</h2><p>Open Epic, use <b>Copy Full Snippet</b>, paste into the named graph or viewport, then make the small reconnections shown. The Hub does not mirror the raw clipboard block.</p></div><div class="snippet-bridge-list">${xs.slice(0,2).map(x=>snippetCard(x,{compact:true})).join('')}</div><a class="button ghost" href="#/snippets">Browse the full Snippet Bank →</a></section>`;
}
function lessonSnippetBridge(l){
  const xs=snippetsForLesson(l.id);if(!xs.length)return '';
  return `<details class="content-card lesson-paste-assists" id="lesson-assists"><summary>⚡ ${xs.length} official Epic paste assist${xs.length===1?'':'s'} connected to this lesson</summary><div class="support-details-inner"><p class="muted">Use these when the lesson reaches the matching idea. Open Epic, use <b>Copy Full Snippet</b>, paste into Unreal, reconnect the marked pins, then explain what the graph is doing. The raw clipboard data stays on Epic.</p><div class="snippet-bridge-list lesson-snippet-list">${xs.map(x=>snippetCard(x,{compact:true})).join('')}</div><div class="lesson-assist-footer"><a class="button ghost small" href="#/snippets">Search all ${SNIPPETS.snippets.length} paste assists →</a></div></div></details>`;
}
function lessonApplications(l){
  const xs=hiddenLessonApplications(l.id);if(!xs.length)return '';
  return `<section class="content-card lesson-applications" id="lesson-applications"><span class="eyebrow">PRACTICAL APPLICATION${xs.length===1?'':'S'}</span><h2>Use the idea in a real mechanic</h2><p class="muted">These builds apply the lesson in a practical outcome. Use the explanation above when you get stuck, then focus on making, testing and improving the result.</p><div class="lesson-application-grid">${xs.map(t=>`<a href="#/tutorial/${t.id}"><span>${t.icon||'🛠'}</span><div><strong>${esc(t.title)}</strong><small>${esc(t.duration)} • ${esc(t.summary)}</small></div><b>Build it →</b></a>`).join('')}</div></section>`;
}

function snippetBankPage(){
  const sourcePages=new Set(SNIPPETS.snippets.map(x=>x.sourceUrl)).size;
  return `<div class="page-head snippet-bank-head"><div class="breadcrumb"><a href="#/">Home</a> / <a href="#/programming">Unreal Learning</a> / Epic Paste Assists</div><span class="eyebrow">${SNIPPETS.snippets.length} PASTE ASSISTS • ${sourcePages} OFFICIAL EPIC PAGES</span><h1>⚡ Epic Paste Assists</h1><p class="muted">This is the searchable reference shelf. Relevant assists also appear automatically inside Unreal Learning lessons and recipe families, so you normally do not need to browse here first. Why rebuild a graph node-by-node when Epic already gives you a real clipboard block? Use the official source, paste it into Unreal, reconnect the few pins the page tells you about, then study what you pasted.</p></div>
  <section class="snippet-policy"><div><span class="deep-label">COPY FROM EPIC • LEARN IN THE HUB</span><h2>${esc(SNIPPETS.policy.title)}</h2><p>${esc(SNIPPETS.policy.body)}</p><small>${esc(SNIPPETS.policy.versions)}</small></div><div class="snippet-policy-steps"><span><b>1</b> Open Epic</span><span><b>2</b> Copy Full Snippet</span><span><b>3</b> Paste in the named graph</span><span><b>4</b> Reconnect + test</span></div></section>
  <section class="snippet-bank-tools"><div class="tutorial-search-box"><span>⌕</span><input id="snippetSearch" type="search" enterkeyhint="search" placeholder="Try: door, enemy, HUD, spawn, animation, stamina…"></div><div class="tutorial-filter-row"><button class="tutorial-filter active" data-snippet-filter="all">All</button>${SNIPPETS.categories.map(c=>`<button class="tutorial-filter" data-snippet-filter="${esc(c.id)}">${c.icon} ${esc(c.title)}</button>`).join('')}</div><div class="tutorial-library-count"><strong id="snippetResultCount">${SNIPPETS.snippets.length}</strong><span>paste assists</span></div></section>
  <section class="section"><div class="section-head"><div><h2>Pasteable systems worth stealing time from</h2><p>These cards describe what Epic provides, where it belongs and what still needs reconnecting. The raw snippet stays on Epic.</p></div></div><div class="snippet-bank-grid" id="snippetGrid">${SNIPPETS.snippets.map(x=>snippetCard(x)).join('')}</div><div class="empty" id="snippetSearchEmpty" hidden><h2>No paste assists match that search.</h2><p>Try a broader mechanic, node, system or category.</p></div></section>
  <section class="content-card snippet-learning-rule"><span class="eyebrow">IMPORTANT</span><h2>Paste it, then prove you understand it.</h2><p>A pasted graph is a starting point, not evidence of learning. Run it, identify the event/data flow, change at least one value or behaviour, and be able to explain why the mechanic still works.</p></section>`;
}
function chapterBuild(pathId){return TOOLS.chapterBuilds.find(x=>x.path===pathId)}
function tutorialDone(id){return state.tutorialCompleted.includes(id)}
function chapterBuildDone(pathId){return state.chapterBuildCompleted.includes(pathId)}
function pathComplete(pathId){return pathProgress(pathId).pct===100}
function completedTutorialCount(){return TOOLS.tutorials.filter(t=>tutorialDone(t.id)).length}
function unlockedChapterBuilds(){return TOOLS.chapterBuilds.filter(b=>pathComplete(b.path))}
function pendingUnlockedBuild(){return TOOLS.chapterBuilds.find(b=>pathComplete(b.path)&&!chapterBuildDone(b.path))||null}
function tutorialOfficialRef(t){
  const l=lesson(t.referenceLesson),ref=l?.officialRefs?.[0];
  return ref||null;
}
function isBookVisual(v){return v?.kind==='book'||String(v?.src||'').includes('assets/book/best-practices/')}

function tutorialReferenceVisuals(t){
  const own=t.referenceImages||[];
  if(!own.length)return '';
  const books=own.filter(isBookVisual),epic=own.filter(v=>!isBookVisual(v)&&v.kind==='epic'),targets=own.filter(v=>!isBookVisual(v)&&v.kind!=='epic');
  const blocks=[];
  if(targets.length)blocks.push(`<div class="tutorial-reference-story target-reference-story"><div class="visual-story-head"><span class="deep-label">GAME / DESIGN TARGET</span><h2>See the result you are aiming for</h2><p>This is inspiration for the outcome, not a screenshot of the Unreal step. Build the principle rather than copying the picture.</p></div><div class="visual-story-grid">${targets.map((v,i)=>zoomableImage({src:v.src,alt:`${t.title} design reference ${i+1}`,caption:v.caption||'',sourceUrl:v.sourceUrl||'',sourceTitle:v.sourceTitle||'',kind:v.kind||'reference',eager:i===0})).join('')}</div></div>`);
  if(epic.length)blocks.push(`<div class="tutorial-reference-story epic-reference-story"><div class="visual-story-head"><span class="deep-label">OFFICIAL UE5.6–5.8 REFERENCE</span><h2>See the real Unreal interface</h2><p>These are official Epic documentation visuals. They are shown only where they genuinely match the Unreal feature being discussed.</p></div><div class="visual-story-grid">${epic.map((v,i)=>zoomableImage({src:v.src,alt:`${t.title} official Unreal Engine reference ${i+1}`,caption:v.caption||'',sourceUrl:v.sourceUrl||'',sourceTitle:v.sourceTitle||'',kind:'epic',eager:targets.length===0&&i===0})).join('')}</div></div>`);
  if(books.length)blocks.push(`<div class="tutorial-reference-story book-figure-strip"><div class="visual-story-head"><span class="deep-label">LICENSED BOOK VISUALS</span><h2>See the principle in practice</h2><p>Selected figures from the college's licensed copy of <em>Unreal Engine 5 Best Practices</em>. Current UE5.8 references remain the technical source of truth.</p></div><div class="visual-story-grid book-figure-grid count-${Math.min(books.length,4)}">${books.map((v,i)=>zoomableImage({src:v.src,alt:`${t.title} book figure ${i+1}`,caption:v.caption||'',sourceTitle:v.sourceTitle||'',kind:'book',eager:false})).join('')}</div></div>`);
  return blocks.join('');
}


function designModule(id){return DESIGN.modules.find(m=>m.id===id)}
function designBuildDone(id){return (state.designBuildCompleted||[]).includes(id)}
function designSourceKey(m,i){return `${m.id}:${String(i+1).padStart(2,'0')}`}
function designSourceDone(m,i){return (state.designSourceCompleted||[]).includes(designSourceKey(m,i))}
function designSourceCount(m){return (m.industryDeepDives||[]).filter((_,i)=>designSourceDone(m,i)).length}
function designSourceItems(){return DESIGN.modules.flatMap(m=>(m.industryDeepDives||[]).map((d,i)=>({id:designSourceKey(m,i),title:`${m.title}: ${d.title}`,duration:d.duration||''})))}
function designTutorialCount(m){return m.tutorials.filter(id=>tutorialDone(id)).length}
function designReferenceGrid(images,title){
  const other=(images||[]).filter(v=>!isBookVisual(v));
  if(!other.length)return '';
  return `<div class="designer-reference-strip"><div class="visual-story-head"><span class="deep-label">GAME / ENGINE REFERENCE</span><h2>${esc(title||'Study the visual language')}</h2><p>Do not copy the picture. Identify the design decision that makes it work, then reproduce that principle in your own scene.</p></div><div class="visual-story-grid">${other.map((v,i)=>zoomableImage({src:v.src,alt:`Designer reference ${i+1}`,caption:v.caption||'',sourceUrl:v.sourceUrl||'',sourceTitle:v.sourceTitle||'',kind:v.kind||'reference',eager:i===0})).join('')}</div></div>`;
}
function designBookReferenceGrid(images){
  const books=(images||[]).filter(isBookVisual);
  if(!books.length)return '';
  return `<div class="designer-reference-strip book-figure-strip"><div class="visual-story-head"><span class="deep-label">LICENSED BOOK VISUALS</span><h2>Now see the technique explained visually</h2><p>These selected figures from <em>Unreal Engine 5 Best Practices</em> sit after the analysis task on purpose: first read the design decision yourself, then use the professional example to reinforce it. Current UE5.8 documentation remains the technical source of truth.</p></div><div class="visual-story-grid book-figure-grid count-${Math.min(books.length,4)}">${books.map((v,i)=>zoomableImage({src:v.src,alt:`Book teaching figure ${i+1}`,caption:v.caption||'',sourceTitle:v.sourceTitle||'',kind:'book',eager:false})).join('')}</div></div>`;
}

function designModuleCard(m){
  const done=designTutorialCount(m),buildDone=designBuildDone(m.id),games=(m.caseStudies||[]).map(x=>x.game).slice(0,3);
  const search=[m.title,m.description,...m.principles,...games].join(' ').toLowerCase();
  return `<a class="designer-module-card ${buildDone?'done':''}" href="#/design/${m.id}" data-design-card data-search="${esc(search)}"><div class="designer-module-icon">${m.icon}</div><div><span class="eyebrow">${done}/${m.tutorials.length} RECIPES TRIED${buildDone?' • STUDIO BUILD ✓':''}</span><h3>${esc(m.title)}</h3><p>${esc(m.description)}</p><div class="tutorial-tag-row">${m.principles.slice(0,3).map(x=>`<span>${esc(x)}</span>`).join('')}</div>${games.length?`<div class="designer-game-row">${games.map(x=>`<span>${esc(x)}</span>`).join('')}</div>`:''}</div><span class="designer-open">Explore →</span></a>`;
}
function designResourceCard(r){
  return `<a class="designer-resource-card resource-library-card" href="${esc(r.url)}" target="_blank" rel="noopener"><span class="designer-resource-icon">${esc(r.icon)}</span><div><span class="eyebrow">${esc(r.type)}</span><h3>${esc(r.title)}</h3><p>${esc(r.note)}</p>${r.bestFor?`<div class="resource-best"><b>BEST FOR</b><span>${esc(r.bestFor)}</span></div>`:''}<span class="resource-license">${esc(r.license||'CHECK TERMS')}</span></div><span class="resource-open">↗</span></a>`;
}
function resourceLibraryPage(){
  const cats=DESIGN.resourceCategories||[];
  const cc0=DESIGN.resources.filter(r=>String(r.license||'').toUpperCase()==='CC0').length;
  return `<div class="page-head resource-page-head"><div class="breadcrumb"><a href="#/">Home</a> / Resource Library</div><span class="eyebrow">FREE ASSETS • SOUND • GAME STUDY • PROFESSIONAL REFERENCE</span><h1>🧰 Resource Library</h1><p class="muted">Build faster without turning asset hunting into the lesson. Use licence-clear placeholders, study real games properly, and hear how professional developers solved similar problems.</p><div class="designer-stats resource-stats"><div><strong>${DESIGN.resources.length}</strong><span>curated resources</span></div><div><strong>${cc0}</strong><span>CC0 libraries</span></div><div><strong>${cats.length}</strong><span>resource shelves</span></div><div><strong>1</strong><span>rule: check the licence</span></div></div></div>
  <section class="resource-license-guide"><div><span class="deep-label">LICENCE QUICK READ</span><h2>“Free” does not always mean the same thing.</h2><p>Use this as a classroom shortcut, then check the linked site's current terms before publishing or redistributing work.</p></div><div class="resource-license-grid"><div><b>CC0</b><p>The easiest classroom option: use and modify it without attribution requirements.</p></div><div><b>TERMS APPLY</b><p>Usable, but the listing, provider or pack has its own conditions. Read them before submission.</p></div><div><b>REFERENCE / STUDY</b><p>Use it to analyse shipped games and professional practice — not as a source of game assets to copy into your project.</p></div></div></section>
  <section class="resource-feature-strip"><a href="https://ambientcg.com/" target="_blank" rel="noopener"><span>CC0</span><h2>ambientCG</h2><p>PBR materials, HDRIs and models without the licence headache.</p><strong>Browse assets ↗</strong></a><a href="https://noclip.website/" target="_blank" rel="noopener"><span>LEVEL EXPLORER</span><h2>noclip.website</h2><p>Fly through extracted game levels and inspect layout, scale, sightlines and landmarks.</p><strong>Explore levels ↗</strong></a><a href="https://sonniss.com/gameaudiogdc/" target="_blank" rel="noopener"><span>GAME AUDIO</span><h2>Sonniss GDC Archive</h2><p>Professional royalty-free sound effects built for media production.</p><strong>Open archive ↗</strong></a></section>
  <div class="callout resource-noclip-note"><b>Two different “Noclips”:</b> <strong>noclip.website</strong> is the interactive level explorer; <strong>Noclip</strong> is the documentary team. Both are excellent for design research, but they are separate projects.</div>
  ${cats.map(cat=>{const items=DESIGN.resources.filter(r=>r.category===cat.id);return `<section class="section resource-shelf" id="resource-${esc(cat.id)}"><div class="section-head"><div><span class="eyebrow">${esc(cat.kicker)}</span><h2>${esc(cat.icon)} ${esc(cat.title)}</h2><p>${esc(cat.description)}</p></div><span class="resource-shelf-count">${items.length} resources</span></div><div class="designer-resource-grid">${items.map(designResourceCard).join('')}</div></section>`}).join('')}
  <section class="content-card resource-classroom-rule"><span class="eyebrow">CLASSROOM RULE</span><h2>Prototype first. Replace only what needs replacing.</h2><p>If the learning goal is route design, lighting, pacing or interaction, a clean placeholder is usually better than losing three lessons making a chair. Keep a tiny source note for anything you download and never redistribute somebody else's raw asset pack.</p><div class="resource-return-row"><a class="button primary" href="#/design">✦ Back to Designer Studio</a><a class="button ghost" href="#/modeling">⬡ Need to make the asset yourself?</a></div></section>`;
}
function designLoopCards(){
  return `<div class="designer-loop-grid">${(DESIGN.designLoop||[]).map(x=>`<article><span>${esc(x.n)}</span><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p></article>`).join('')}</div>`;
}
function designCaseStudyCard(c,i){
  const source=c.sourceUrl?`<div class="designer-case-evidence"><span>${esc(c.sourceType||'DESIGN SOURCE')}</span><strong>${esc(c.sourceTitle||c.game)}</strong>${c.sourceWhy?`<p>${esc(c.sourceWhy)}</p>`:''}<a class="designer-case-source" href="${esc(c.sourceUrl)}" target="_blank" rel="noopener">Read / watch the evidence ↗</a></div>`:'';
  return `<article class="designer-case-card"><div class="designer-case-image">${zoomableImage({src:c.image,alt:`${c.game} design case study`,caption:`${c.game} • ${c.lens}`,sourceUrl:c.sourceUrl||'',sourceTitle:c.sourceTitle||c.game,kind:'reference',eager:i===0})}</div><div class="designer-case-body"><span class="eyebrow">CASE STUDY ${String(i+1).padStart(2,'0')}</span><h3>${esc(c.game)}</h3><div class="designer-case-factor"><b>DESIGN FACTOR</b><p>${esc(c.lens||'Design decision')}</p></div><div class="designer-case-read"><b>WHAT ${esc(String(c.game).toUpperCase())} ACTUALLY DOES</b><p>${esc(c.notice)}</p></div><div class="designer-case-steal"><b>DESIGN PRINCIPLE</b><p>${esc(c.steal)}</p></div><div class="designer-case-task"><b>STUDENT TASK • USE THE SOURCE</b><p>${esc(c.task)}</p></div>${source}</div></article>`;
}
function designResearchCard(r,i){
  return `<article class="designer-research-card"><div class="designer-research-top"><span class="designer-research-num">${String(i+1).padStart(2,'0')}</span><div><span class="eyebrow">FIELD RESEARCH • ${esc(r.duration)}</span><h3>${esc(r.title)}</h3></div></div><p>${esc(r.brief)}</p><ol>${(r.steps||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ol><div class="designer-research-evidence"><b>BRING BACK</b><span>${esc(r.evidence)}</span></div></article>`;
}
function designIndustryDeepDiveCard(m,d,i){
  const url=safeUrl(d.url),videoId=String(d.youtubeId||'').replace(/[^A-Za-z0-9_-]/g,''),isVideo=!!videoId,done=designSourceDone(m,i),key=designSourceKey(m,i);
  const embed=isVideo?`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`:'';
  const media=isVideo?`<div class="designer-industry-video" data-video-shell><img src="https://i.ytimg.com/vi/${videoId}/hqdefault.jpg" alt="${esc(d.title)} video preview" loading="lazy"><button class="designer-video-play" data-action="load-video" data-embed="${esc(embed)}" data-title="${esc(d.title)}"><span>▶</span><b>Watch here</b><small>${esc(d.duration||'Video')}</small></button></div>`:'';
  return `<article class="designer-industry-card ${isVideo?'video':''} ${done?'source-complete':''}">${media}<div class="designer-industry-body"><div class="designer-industry-head"><span class="designer-industry-num">${done?'✓':String(i+1).padStart(2,'0')}</span><div><span class="eyebrow">${esc(String(d.type||'deep dive').toUpperCase())} • ${esc(d.source||'INDUSTRY SOURCE')}</span><h3>${esc(d.title)}</h3></div></div><div class="designer-industry-focus"><b>WHY THIS MATTERS</b><p>${esc(d.focus||'Study how a shipped game solved the same design problem.')}</p></div><div class="designer-industry-watch"><b>WATCH / READ FOR</b><p>${esc(d.watchFor||'Identify the decision, the constraint and the trade-off.')}</p></div><div class="designer-industry-task"><b>DO SOMETHING WITH IT</b><p>${esc(d.task||'Write down one principle you can test in your own project.')}</p></div><div class="designer-source-actions">${url?`<a class="button ghost small" href="${esc(url)}" target="_blank" rel="noopener">Open original source ↗</a>`:''}${done?`<span class="source-xp-complete">✓ Source task complete • +20 XP</span>`:`<button class="button small source-xp-button" data-action="complete-design-source" data-source-key="${esc(key)}">✓ Watched/read + did the task • +20 XP</button>`}</div></div></article>`;
}
function designChallengeCard(c,i){
  return `<article class="designer-constraint-card"><span class="designer-challenge-mark">${['◆','◈','✦'][i%3]}</span><span class="eyebrow">CONSTRAINT CHALLENGE</span><h3>${esc(c.title)}</h3><div><b>RULE</b><p>${esc(c.constraint)}</p></div><div><b>WIN CONDITION</b><p>${esc(c.goal)}</p></div></article>`;
}
function designProResourceCard(r){
  return `<a class="designer-pro-resource" href="${esc(r.url)}" target="_blank" rel="noopener"><div><span class="eyebrow">${esc(r.type||'DESIGN REFERENCE')}</span><h3>${esc(r.title)}</h3><p>${esc(r.why||'Open the source and identify one decision you can reuse.')}</p></div><span>↗</span></a>`;
}
function designBlackBox(m,done){
  const x=m.afterBuild;if(!x)return '';
  if(!done)return `<section class="designer-black-box locked"><div class="designer-black-icon">🔒</div><div><span class="eyebrow">HIDDEN DESIGN BRIEF</span><h2>Black Box challenge locked</h2><p>Complete the Studio Build first. Then the Hub removes one of your crutches and asks you to prove the design still works.</p></div></section>`;
  return `<section class="designer-black-box"><div class="designer-black-icon">⬢</div><div><span class="eyebrow">UNLOCKED • BLACK BOX BRIEF</span><h2>${esc(x.title)}</h2><p>${esc(x.brief)}</p><div class="designer-black-grid"><div><b>CONSTRAINTS</b><ul>${(x.constraints||[]).map(v=>`<li>${esc(v)}</li>`).join('')}</ul></div><div><b>IMPROVE IT</b><p>${esc(x.improve)}</p><b>EVIDENCE</b><p>${esc(x.evidence)}</p></div></div></div></section>`;
}
function designPage(){
  const designIds=[...new Set(DESIGN.modules.flatMap(m=>m.tutorials))],tried=designIds.filter(tutorialDone).length,builds=(state.designBuildCompleted||[]).length;
  const researchCount=DESIGN.modules.reduce((n,m)=>n+(m.researchMissions||[]).length,0),gameCount=new Set(DESIGN.modules.flatMap(m=>(m.caseStudies||[]).map(c=>c.game))).size;
  const featured=['decision-point-test','story-vignette','material-cost-check','lumen-mood-pass','silent-hill-fog','pcg-safe-route','cine-lens-language','audio-offscreen-story','profile-fix-retest'].map(tutorial).filter(Boolean);
  return `<div class="page-head designer-page-head"><div class="breadcrumb"><a href="#/">Dashboard</a> / Designer Studio</div><span class="eyebrow">LEVEL DESIGN • ENVIRONMENT • LIGHT • AUDIO • CINEMATICS</span><h1>✦ Designer Studio</h1><p class="muted">Stop treating design as “make it look nicer”. Study real games, reverse-engineer the decisions, research your own examples, build a small version, break it on purpose, then improve it from evidence.</p><div class="designer-stats"><div><strong>${DESIGN.modules.length}</strong><span>design disciplines</span></div><div><strong>${gameCount}</strong><span>different game studies</span></div><div><strong>${researchCount}</strong><span>research missions</span></div><div><strong>${builds}/${DESIGN.modules.length}</strong><span>studio builds</span></div></div></div>
  <section class="designer-manifesto designer-manifesto-v2"><div><span class="deep-label">THE DESIGN LOOP</span><h2>Look → steal → hear → research → build → break → improve.</h2><p>Every discipline starts with real game examples, then lets you hear directly from developers before you research and test the idea yourself. “I like it” is not evidence. A route that a stranger can read, a story they can infer, or a mood they can identify is evidence.</p></div><div class="designer-rule-stack"><span>01 • Name the design job</span><span>02 • Copy the principle, not the screenshot</span><span>03 • Hear the people who shipped it</span><span>04 • Research before you decorate</span><span>05 • Test with another human</span><span>06 • Make one evidence-based revision</span></div></section>
  <section class="section designer-loop-section"><div class="section-head"><div><span class="eyebrow">HOW EVERY MODULE WORKS</span><h2>Seven moves. No waffle.</h2><p>Use the game examples and developer commentary to understand the decision first. The Unreal recipes then help you execute that decision in your own project.</p></div></div>${designLoopCards()}</section>
  <section class="section"><div class="section-head"><div><span class="eyebrow">8 DISCIPLINES • 24 DIFFERENT GAMES</span><h2>Choose the design problem you are trying to solve</h2><p>Each discipline uses three different games in its LOOK stage — 24 distinct case studies across the Studio — before moving into developer commentary, field research, UE5 recipes and the Studio Build.</p></div></div><div class="designer-module-grid">${DESIGN.modules.map(designModuleCard).join('')}</div></section>
  <section class="section"><div class="section-head"><div><span class="eyebrow">NEED A TOOL RIGHT NOW?</span><h2>Designer Quick Tutorials</h2><p>Use these when the design decision is clear and you just need the UE5 technique.</p></div><a class="button ghost" href="#/tutorials">Open all Quick Tutorials →</a></div><div class="quick-tutorial-grid featured">${featured.map(tutorialCard).join('')}</div></section>`;
}
function designModulePage(id){
  const m=designModule(id);if(!m)return notFound();const b=m.build,done=designBuildDone(m.id),tried=designTutorialCount(m);
  const ts=m.tutorials.map(tutorial).filter(Boolean);
  const deep=(m.deepDives||[]).map((d,i)=>`<article class="designer-deep-card"><span>${String(i+1).padStart(2,'0')}</span><h3>${esc(d.title)}</h3><p>${esc(d.body)}</p><div class="designer-mini-exercise"><b>TRY IT</b><p>${esc(d.exercise)}</p></div></article>`).join('');
  const pro=(m.proHabits||[]).map(x=>`<li>${esc(x)}</li>`).join('');
  const critique=(m.critiqueQuestions||['What should the player notice first?','Can they understand the intended route without you talking?','What part feels generic or randomly placed?','What could be removed without losing anything?','What single change would improve the experience most?']).map(x=>`<li>${esc(x)}</li>`).join('');
  return `<div class="breadcrumb"><a href="#/">Dashboard</a> / <a href="#/design">Designer Studio</a> / ${esc(m.title)}</div>
  <section class="designer-module-hero"><div><span class="eyebrow">DESIGN DISCIPLINE • ${tried}/${ts.length} RECIPES TRIED</span><h1>${m.icon} ${esc(m.title)}</h1><p>${esc(m.intro)}</p><div class="designer-module-flow"><span>LOOK</span><i>→</i><span>HEAR THE TEAM</span><i>→</i><span>RESEARCH</span><i>→</i><span>BUILD</span><i>→</i><span>TEST</span><i>→</i><span>IMPROVE</span></div></div><div class="designer-principles"><span class="deep-label">DESIGN RULES</span>${m.principles.map((x,i)=>`<div><b>${String(i+1).padStart(2,'0')}</b><span>${esc(x)}</span></div>`).join('')}</div></section>
  <section class="section designer-case-section"><div class="section-head"><div><span class="eyebrow">01 • LOOK AT REAL GAMES</span><h2>${esc(m.lookTitle||`Three shipped games solving ${m.title}`)}</h2><p>${esc(m.lookIntro||'Each example names a specific design factor, shows what the game does, and links to an interview, developer article or design talk that explains the decision.')}</p></div></div><div class="designer-case-grid">${(m.caseStudies||[]).map(designCaseStudyCard).join('')}</div></section>
  ${(m.industryDeepDives||[]).length?`<section class="section designer-industry-section"><div class="section-head"><div><span class="eyebrow">02 • DESIGNERS EXPLAIN IT</span><h2>Hear the decisions from the people who shipped the game</h2><p>Do not watch documentaries, talks or interviews passively. Each source gives you something specific to hunt for and a small design task to bring back into Unreal.</p></div><span class="sync-chip source-progress-chip">${designSourceCount(m)}/${m.industryDeepDives.length} complete • ${designSourceCount(m)*20} XP</span></div><div class="designer-industry-grid">${m.industryDeepDives.map((d,i)=>designIndustryDeepDiveCard(m,d,i)).join('')}</div></section>`:''}
  <section class="section designer-research-section"><div class="section-head"><div><span class="eyebrow">03 • FIELD RESEARCH</span><h2>Go find evidence yourself</h2><p>Do one of these before the Studio Build. They are deliberately short, game-focused and easy to discuss with another student.</p></div></div><div class="designer-research-grid">${(m.researchMissions||[]).map(designResearchCard).join('')}</div></section>
  ${deep?`<section class="section designer-learning-section"><div class="section-head"><div><span class="eyebrow">04 • UNDERSTAND THE PRINCIPLE</span><h2>What transfers to your own project?</h2><p>These are the bits worth remembering after the Unreal buttons have moved again.</p></div></div><div class="designer-deep-grid">${deep}</div></section>`:''}
  ${designBookReferenceGrid(m.referenceImages)}
  <section class="designer-professional-row"><div class="content-card designer-pro-habits"><span class="eyebrow">PRODUCTION HABITS</span><h2>Habits that stop design work becoming guesswork</h2><ul>${pro}</ul></div><div class="content-card designer-engine-check"><span class="eyebrow">UE5.8 REALITY CHECK</span><h2>Current engine context</h2><p>${esc(m.engineNote||'Use current Epic documentation to verify engine-specific workflows.')}</p>${m.engineUrl?`<a class="button ghost small" href="${esc(m.engineUrl)}" target="_blank" rel="noopener">Current Epic UE5.8 reference ↗</a>`:''}</div></section>
  ${(m.resources||[]).length?`<section class="section designer-pro-reading"><div class="section-head"><div><span class="eyebrow">PROFESSIONAL BREAKDOWNS</span><h2>See how designers actually talk about the problem</h2><p>These are optional rabbit holes, not required reading. Pick one when the topic grabs you.</p></div></div><div class="designer-pro-resource-grid">${m.resources.map(designProResourceCard).join('')}</div></section>`:''}
  <section class="section"><div class="section-head"><div><span class="eyebrow">05 • BUILD THE TECHNIQUE</span><h2>UE5 recipes</h2><p>Use these when you know what design problem you are solving. Try the first version, then deliberately alter one decision.</p></div></div><div class="quick-tutorial-grid">${ts.map(tutorialCard).join('')}</div></section>
  <section class="section designer-challenge-section"><div class="section-head"><div><span class="eyebrow">06 • BREAK THE EASY VERSION</span><h2>Pick one constraint challenge</h2><p>Constraints force design decisions to become visible. If the idea only works with every crutch enabled, it probably is not robust yet.</p></div></div><div class="designer-challenge-grid">${(m.challenges||[]).map(designChallengeCard).join('')}</div></section>
  <section class="designer-studio-build ${done?'done':''}"><div class="designer-studio-title"><span class="eyebrow">07 • STUDIO BUILD • ${esc(b.duration)} • +300 XP</span><h2>🎨 ${esc(b.title)}</h2><p>${esc(b.brief)}</p><div class="tutorial-rich-note"><b>Build → test → revise:</b> finishing the phases is not the finish line. The evidence must show another human could read the experience you designed.</div></div><div class="designer-build-phases rich">${(b.phaseDetails||b.phases.map((x,i)=>({title:`Phase ${i+1}`,do:x}))).map((x,i)=>`<article class="designer-build-phase-rich"><span class="designer-build-phase-num">${String(i+1).padStart(2,'0')}</span><div><h3>${esc(x.title||`Phase ${i+1}`)}</h3>${x.where?`<div class="guided-where"><span>WHERE TO WORK</span><div>${renderRichText(x.where,false)}</div></div>`:''}<div class="guided-do"><span>DO THIS</span><div>${renderRichText(x.do||x,false)}</div></div>${x.check?`<div class="guided-check"><span>PROVE IT</span><div>${renderRichText(x.check,false)}</div></div>`:''}${x.troubleshoot?.length?`<div class="guided-fix"><span>IF IT'S WEAK</span><div>${renderRichText(x.troubleshoot,false)}</div></div>`:''}</div></article>`).join('')}</div><div class="designer-evidence"><h3>Show that it works</h3>${requirements(b.evidence)}<button class="button ${done?'success':'primary'}" data-action="complete-design-build" data-design-module="${m.id}">${done?'✓ Studio Build complete':'Mark Studio Build complete • +300 XP'}</button></div></section>
  ${designBlackBox(m,done)}
  <section class="content-card designer-critique"><span class="eyebrow">LAST THING • IMPROVE IT</span><h2>Critique your decision, not your effort</h2><ol>${critique}</ol><p class="muted">Pick the answer you like least. That is probably the next useful change.</p><div class="designer-critique-board-link"><a class="button primary" href="#/critique">💬 Post a screenshot for class critique →</a><span>Ask a specific design question, get structured peer feedback, then upload your improved version.</span></div></section>`;
}

function tutorialCard(t){
  const done=tutorialDone(t.id),c=tutorialCategory(t.category);
  const searchText=[t.title,t.summary,...(t.uses||[]),c?.title||t.category,t.difficulty].filter(Boolean).join(' ').toLowerCase();
  return `<a class="quick-tutorial-card ${done?'done':''}" href="#/tutorial/${t.id}" data-tutorial-card data-category="${esc(t.category)}" data-search="${esc(searchText)}"><div class="quick-tutorial-icon">${t.icon}</div><div><span class="eyebrow">${esc(c?.title||t.category)} • ${esc(t.duration)} • ${esc(t.difficulty)}</span><h3>${esc(t.title)}</h3><p>${esc(t.summary)}</p><div class="tutorial-tag-row">${t.uses.slice(0,3).map(x=>`<span>${esc(x)}</span>`).join('')}</div>${t.prescriptive?'<div class="tutorial-card-detail-badge">Detailed walkthrough</div>':''}</div><span class="tutorial-card-status">${done?'✓ Tried it':'Open →'}</span></a>`
}
function tutorialFamilyCard(f){
  const ts=familyTutorials(f),done=familyDoneCount(f),c=tutorialCategory(f.category),allDone=ts.length&&done===ts.length;
  return `<a class="quick-tutorial-card tutorial-family-card ${allDone?'done':''}" href="${familyHref(f)}" data-tutorial-card data-category="${esc(f.category)}" data-search="${esc(familySearchText(f))}"><div class="quick-tutorial-icon">${f.icon||'🛠'}</div><div><span class="eyebrow">${esc(c?.title||f.category)} • ${ts.length} build${ts.length===1?'':'s'}</span><h3>${esc(f.title)}</h3><p>${esc(f.summary)}</p><div class="tutorial-family-outcomes">${ts.slice(0,4).map(t=>`<span>${esc(t.title.replace(/^(Make|Add|Create|Set Up|Put|Show|Give)\s+/i,''))}</span>`).join('')}${ts.length>4?`<span>+${ts.length-4} more</span>`:''}</div></div><span class="tutorial-card-status">${allDone?'✓ Family tried':ts.length===1?(done?'✓ Tried it':'Open →'):`${done}/${ts.length} tried →`}</span></a>`;
}
function tutorialFamilyPage(id){
  const f=tutorialFamily(id);if(!f)return notFound();const ts=familyTutorials(f),c=tutorialCategory(f.category),done=familyDoneCount(f),lessonIds=[...new Set(ts.map(t=>t.referenceLesson).filter(Boolean))],lessons=lessonIds.map(lesson).filter(Boolean),snippetIds=new Set(ts.flatMap(t=>snippetsForTutorial(t.id).map(x=>x.id))),snips=SNIPPETS.snippets.filter(x=>snippetIds.has(x.id));
  return `<div class="breadcrumb"><a href="#/">Dashboard</a> / <a href="#/tutorials">Quick Tutorials</a> / ${esc(f.title)}</div><section class="tutorial-family-hero"><div><span class="eyebrow">${c?.icon||'🛠'} ${esc(c?.title||f.category)} • ${ts.length} PRACTICAL BUILD${ts.length===1?'':'S'}</span><h1>${f.icon||'🛠'} ${esc(f.title)}</h1><p>${esc(f.summary)}</p></div><div class="tutorial-family-progress"><strong>${done}/${ts.length}</strong><span>builds tried</span><div class="progress"><span style="width:${ts.length?Math.round(done/ts.length*100):0}%"></span></div></div></section><section class="content-card family-rule-card"><span class="eyebrow">ONE IDEA • SEVERAL OUTCOMES</span><h2>Choose the build you actually need.</h2><p>The shared explanation is kept together at family/course level. Each outcome below remains a complete practical build, so nothing has been deleted.</p></section>${snips.length?`<details class="content-card family-snippet-assists"><summary>⚡ ${snips.length} Epic paste assist${snips.length===1?'':'s'} available across this family</summary><div class="support-details-inner"><div class="snippet-bridge-list">${snips.map(x=>snippetCard(x,{compact:true})).join('')}</div></div></details>`:''}<section class="section"><div class="section-head"><div><h2>Pick an outcome</h2><p>Every original practical build is still available.</p></div></div><div class="quick-tutorial-grid family-variant-grid">${ts.map(tutorialCard).join('')}</div></section>${lessons.length?`<section class="content-card family-course-links"><span class="eyebrow">UNDERSTAND THE TRANSFERABLE IDEA</span><h2>Related Unreal Learning</h2><div class="block-related-links">${lessons.map(l=>`<a href="#/lesson/${l.id}"><span>⌘</span><div><strong>${esc(l.title)}</strong><small>Core System Lesson • ${esc(l.duration)}</small></div></a>`).join('')}</div></section>`:''}`;
}

function chapterBuildCard(b,{compact=false}={}){
  const p=path(b.path),done=chapterBuildDone(b.path),unlocked=pathComplete(b.path)||done;
  if(!unlocked)return `<article class="chapter-build-card locked ${compact?'compact':''}"><div class="chapter-build-icon">🔒</div><div><span class="eyebrow">${esc(p?.title||b.path)}</span><h3>${esc(b.title)}</h3><p>Complete this learning path to unlock the playable Chapter Build.</p></div><span class="chapter-build-state">${pathProgress(b.path).done}/${pathProgress(b.path).total}</span></article>`;
  return `<a class="chapter-build-card unlocked ${done?'done':''} ${compact?'compact':''}" href="#/chapter-build/${b.path}"><div class="chapter-build-icon">${done?'✓':b.icon}</div><div><span class="eyebrow">CHAPTER BUILD UNLOCKED • ${esc(p?.title||b.path)}</span><h3>${esc(b.title)}</h3><p>${esc(b.summary)}</p><div class="tutorial-tag-row"><span>${esc(b.duration)}</span>${b.uses.slice(0,3).map(x=>`<span>${esc(x)}</span>`).join('')}</div></div><span class="chapter-build-state">${done?'Completed':'Build it →'}</span></a>`;
}
function tutorialLibrary(){
  const families=TOOLS.families||[],featured=families.filter(f=>f.featured),visibleTutorials=TOOLS.tutorials.filter(t=>!t.libraryHidden),done=visibleTutorials.filter(t=>tutorialDone(t.id)).length;
  return `<div class="page-head tutorial-library-head"><div class="breadcrumb"><a href="#/">Dashboard</a> / Quick Tutorials</div><span class="eyebrow">${families.length} recipe families • ${visibleTutorials.length} practical builds</span><h1>🛠 Quick Tutorials</h1><p class="muted">Find the kind of system you need first, then choose the exact outcome. Similar builds live together so you can get to the exact outcome without wading through near-duplicate cards.</p></div><section class="tutorial-blocks-bridge"><div><span class="deep-label">SEE A TERM YOU DON'T KNOW?</span><h2>Don't abandon the build.</h2><p>Each recipe still shows the Building Blocks it uses. Open an unfamiliar term for a short explanation, then come straight back.</p></div><a class="button ghost" href="#/blocks">🧱 Browse Building Blocks</a></section><section class="tutorial-blocks-bridge snippet-reference-bridge"><div><span class="deep-label">⚡ EPIC PASTE ASSISTS</span><h2>Use the snippet where you learn the system.</h2><p>Use the relevant Epic clipboard assist inside the lesson or recipe where you learn the system. The standalone bank is there when you need to search for one quickly.</p></div><a class="button ghost" href="#/snippets">Search all ${SNIPPETS.snippets.length} assists →</a></section><section class="tutorial-library-tools"><div class="tutorial-search-box"><span>⌕</span><input id="tutorialSearch" type="search" enterkeyhint="search" placeholder="Try: dash, locked door, fog, health, AI, HUD…"></div><div class="tutorial-filter-row"><button class="tutorial-filter active" data-tutorial-filter="all">All</button>${TOOLS.categories.map(c=>`<button class="tutorial-filter" data-tutorial-filter="${c.id}">${c.icon} ${esc(c.title)}</button>`).join('')}</div><div class="tutorial-library-count"><strong>${done}/${visibleTutorials.length}</strong><span>practical builds tried</span></div></section><section class="section" id="tutorialFeaturedSection"><div class="section-head"><div><h2>Start with something useful</h2><p>Common system families students reach for constantly.</p></div></div><div class="quick-tutorial-grid featured">${featured.map(tutorialFamilyCard).join('')}</div></section><section class="section"><div class="section-head"><div><h2>All recipe families</h2><p id="tutorialResultCount">${families.length} recipe families</p></div></div><div class="quick-tutorial-grid" id="tutorialGrid">${families.map(tutorialFamilyCard).join('')}</div><div class="empty" id="tutorialSearchEmpty" hidden><h2>No recipe families match that search.</h2><p>Try a broader term, mechanic, node or clear the category filter.</p></div></section><section class="lesson-application-note"><span>⌘</span><div><strong>Some practical builds sit inside the Core Lesson that teaches them.</strong><p>Find Smooth Timeline Door with <a href="#/lesson/timelines">Timelines & Lerp</a>, Save a Checkpoint Between Sessions with <a href="#/lesson/savegame">SaveGame</a>, and Struct + Data Table with <a href="#/lesson/data">Data Structures & Data Tables</a>. Site-wide search still finds each build directly.</p></div></section><section class="section chapter-build-library"><div class="section-head"><div><span class="eyebrow">BIGGER APPLICATION TASKS</span><h2>🎮 Chapter Builds</h2><p>Finish a learning path and a new guided mini-game/system unlocks. The tutorial can still be step-by-step — you must test it and prove it works.</p></div></div><div class="chapter-build-grid">${TOOLS.chapterBuilds.map(b=>chapterBuildCard(b)).join('')}</div></section>`;
}

function renderTutorialStep(step,i){
  if(Array.isArray(step)){
    return `<article class="tutorial-step" data-level="legacy"><div class="tutorial-step-number">${String(i+1).padStart(2,'0')}</div><div><h3>${esc(step[0])}</h3><div class="guided-do"><span>DO THIS</span><p>${esc(step[1])}</p></div><div class="guided-reason"><span>WHY</span><p>${esc(step[2])}</p></div><div class="guided-check"><span>TEST / CHECK</span><p>${esc(step[3])}</p></div></div></article>`;
  }
  return `<article class="tutorial-step"><div class="tutorial-step-number">${String(i+1).padStart(2,'0')}</div><div><h3>${esc(step.title)}</h3>${step.where?`<div class="guided-where"><span>WHERE TO CLICK</span><div>${renderRichText(step.where,false)}</div></div>`:''}<div class="guided-do"><span>DO THIS</span><div>${renderRichText(step.do,false)}${step.doList?renderRichText(step.doList,true):''}</div></div>${step.see?`<div class="guided-see"><span>YOU SHOULD SEE</span><div>${renderRichText(step.see,false)}</div></div>`:''}<div class="guided-reason"><span>WHY</span><p>${esc(step.why)}</p></div><div class="guided-check"><span>TEST / CHECK</span><div>${renderRichText(step.check,false)}</div></div>${step.troubleshoot?.length?`<div class="guided-fix"><span>IF STUCK</span><div>${renderRichText(step.troubleshoot,false)}</div></div>`:''}${renderStepVisual(step.visual,step.title)}</div></article>`;
}
function tutorialPage(id){
  const t=tutorial(id);if(!t)return notFound();const c=tutorialCategory(t.category),done=tutorialDone(t.id),ref=tutorialOfficialRef(t),f=t.familyId?tutorialFamily(t.familyId):null,home=t.libraryHidden?`<a href="#/lesson/${t.lessonHome||t.referenceLesson}">${esc(lesson(t.lessonHome||t.referenceLesson)?.title||'Unreal Learning')}</a>`:(f&&familyTutorials(f).length>1?`<a href="#/tutorial-family/${f.id}">${esc(f.title)}</a>`:'<a href="#/tutorials">Quick Tutorials</a>'),related=f?familyTutorials(f).filter(x=>x.id!==t.id):TOOLS.tutorials.filter(x=>x.id!==t.id&&!x.libraryHidden&&(x.category===t.category||x.uses.some(u=>t.uses.includes(u)))).slice(0,4);
  return `<div class="breadcrumb"><a href="#/">Dashboard</a> / ${home} / ${esc(t.title)}</div>
  <section class="tutorial-hero"><div><span class="eyebrow">${c?.icon||'🛠'} ${esc(c?.title||t.category)} • ${esc(t.duration)} • ${esc(t.difficulty)}</span><h1>${t.icon} ${esc(t.title)}</h1><p>${esc(t.summary)}</p><div class="tutorial-tag-row large">${t.uses.map(x=>`<span>${esc(x)}</span>`).join('')}</div></div><div class="tutorial-complete-box"><strong>${done?'✓ Tried it':'Build → Test → Change'}</strong><p>${done?'You marked this tutorial as working. You can revisit it anytime.':'Follow the recipe, then make one small change of your own.'}</p><button class="button ${done?'success':'primary'}" data-action="complete-tutorial" data-tutorial="${t.id}">${done?'✓ Tutorial complete':'Mark tutorial complete'}</button></div></section>
  <article class="tutorial-detail">
    <section class="content-card tutorial-result"><span class="eyebrow">01 • What we are making</span><h2>A small working mechanic</h2><p>${esc(t.summary)}</p><div class="callout good"><b>Use this tutorial when:</b> you need this mechanic in a prototype, Chapter Build or assignment and want a short reliable route to a first working version.</div></section>
    ${tutorialBuildingBlocks(t)}
    ${tutorialSnippetBridge(t)}
    <section class="content-card practical-first-card"><span class="eyebrow">02 • BUILD IT</span><h2>${t.studentRecipe?.length?'Start at Step 1':'Follow the practical steps'}</h2>${t.studentRecipe?.length?renderSingleClearGuide(t.starterValues,t.studentRecipe,t.steps||[],{title:'Build the working version',intro:'Follow the steps in order. Each step tells you exactly what to make or click, the value to use, why you are doing it and how to check it worked.',recipeVisuals:t.recipeVisuals||null}):`<div class="tutorial-step-list">${t.steps.map((s,i)=>renderTutorialStep(s,i)).join('')}</div>`}</section>
  ${tutorialReferenceVisuals(t)}
    <section class="tutorial-three-col"><div class="content-card"><span class="eyebrow">03 • Common mistakes</span><h2>If it doesn\'t work</h2><ul>${t.mistakes.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div><div class="content-card"><span class="eyebrow">04 • Make it yours</span><h2>Change something</h2><ul>${t.makeItYours.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div><div class="content-card"><span class="eyebrow">05 • Definition of done</span><h2>It works when…</h2>${requirements(t.worksWhen)}</div></section>
    <section class="content-card tutorial-next"><div><span class="eyebrow">GO DEEPER</span><h2>Connect this recipe to the course</h2><p>Quick Tutorials solve the immediate mechanic. The full lesson explains the transferable idea behind it.</p></div><div class="tutorial-next-links">${t.designModule?`<a class="button" href="#/design/${t.designModule}">Open ${esc(designModule(t.designModule)?.title||'Designer Studio')} →</a>`:`<a class="button" href="#/lesson/${t.referenceLesson}">Open ${esc(lesson(t.referenceLesson)?.title||'related lesson')} →</a>`}${ref?`<a class="button ghost" href="${esc(ref.url)}" target="_blank" rel="noopener">Epic UE5.8 reference ↗</a>`:''}${t.source?.url?`<a class="button ghost" href="${esc(t.source.url)}" target="_blank" rel="noopener">${esc(t.source.title||'Reference source')} ↗</a>`:''}</div></section>
    ${related.length?`<section class="section"><div class="section-head"><div><h2>${f?'Other builds in this recipe family':'Related Quick Tutorials'}</h2><p>${f?'Same idea, different practical outcome.':'Useful next mechanics.'}</p></div></div><div class="quick-tutorial-grid related">${related.map(tutorialCard).join('')}</div></section>`:''}
  </article>`;
}

function chapterBuildPage(pathId){
  const b=chapterBuild(pathId),p=path(pathId);if(!b||!p)return notFound();const x=pathProgress(pathId),done=chapterBuildDone(pathId),unlocked=x.pct===100||done;
  if(!unlocked){const left=DATA.lessons.filter(l=>l.path===pathId&&!state.completed.includes(l.id));return `<div class="page-head"><div class="breadcrumb"><a href="#/">Dashboard</a> / <a href="#/path/${p.id}">${esc(p.title)}</a> / Chapter Build</div><span class="eyebrow">🔒 Complete the chapter first</span><h1>${b.icon} ${esc(b.title)}</h1><p class="muted">This mini-build unlocks when all ${x.total} lessons in ${esc(p.title)} are complete.</p></div><section class="content-card locked-build"><h2>${x.done}/${x.total} lessons complete</h2><div class="progress"><span style="width:${x.pct}%"></span></div><div class="lesson-list">${left.map((l,i)=>lessonRow(l,i)).join('')}</div></section>`}
  return `<div class="breadcrumb"><a href="#/">Dashboard</a> / <a href="#/path/${p.id}">${esc(p.title)}</a> / Chapter Build</div><section class="chapter-build-hero"><div><span class="eyebrow">🎮 CHAPTER BUILD • UNLOCKED</span><h1>${b.icon} ${esc(b.title)}</h1><p>${esc(b.summary)}</p><div class="tutorial-tag-row large"><span>${esc(b.duration)}</span>${b.uses.map(x=>`<span>${esc(x)}</span>`).join('')}</div></div><div class="tutorial-complete-box"><strong>${done?'✓ Chapter Build completed':'Use what you learned'}</strong><p>${done?'You can reopen this guide whenever you want.':'Follow the guide, test every checkpoint and keep screenshots showing it working.'}</p><button class="button ${done?'success':'primary'}" data-action="complete-chapter-build" data-path="${b.path}">${done?'✓ Build completed':`Mark build complete • +${b.xp} XP`}</button></div></section>
  <article class="chapter-build-detail"><section class="content-card"><span class="eyebrow">THE BRIEF</span><h2>What you are building</h2><p>${esc(b.brief)}</p></section>
  <section class="content-card"><span class="eyebrow">USE THE RECIPE LIBRARY</span><h2>Helpful Quick Tutorials</h2><p>You can use these while building. The challenge is combining systems and proving they work together.</p><div class="chapter-tutorial-links">${b.relatedTutorials.map(id=>{const t=tutorial(id);return t?`<a href="#/tutorial/${t.id}"><span>${t.icon}</span><strong>${esc(t.title)}</strong><small>${esc(t.duration)}</small></a>`:''}).join('')}</div></section>
  <section class="content-card"><span class="eyebrow">BUILD IT</span><h2>Work through the phases</h2><div class="chapter-phase-list">${b.phases.map((ph,i)=>`<article class="chapter-phase"><div class="chapter-phase-head"><span>${String(i+1).padStart(2,'0')}</span><h3>${esc(ph[0])}</h3></div><ol>${ph[1].map(x=>`<li>${esc(x)}</li>`).join('')}</ol></article>`).join('')}</div></section>
  <section class="tutorial-three-col"><div class="content-card"><span class="eyebrow">TEST IT</span><h2>Definition of done</h2>${requirements(b.checkpoints)}</div><div class="content-card"><span class="eyebrow">MAKE IT YOURS</span><h2>Independent change</h2><ul>${b.makeItYours.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div><div class="content-card"><span class="eyebrow">SHOW IT WORKING</span><h2>Evidence to capture</h2><ul>${b.evidence.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div></section>
  <section class="content-card chapter-build-finish"><h2>Finished?</h2><p>Do one clean play-through from the beginning. If it only works when you manually fix variables in the editor halfway through, it is not finished yet.</p><button class="button ${done?'success':'primary'}" data-action="complete-chapter-build" data-path="${b.path}">${done?'✓ Chapter Build completed':`Mark Chapter Build complete • +${b.xp} XP`}</button></section></article>`;
}
function chapterUnlockCard(pathId){
  const b=chapterBuild(pathId);if(!b||!pathComplete(pathId))return '';
  return `<section class="chapter-unlock-reveal"><span class="unlock-burst">🎮 NEW TASK UNLOCKED</span>${chapterBuildCard(b,{compact:true})}</section>`;
}



function sculptPractice(id){return SCULPT.practices.find(x=>x.id===id)}
function sculptDone(id){return (state.sculptCompleted||[]).includes(id)}
function sculptProgress(){const done=SCULPT.practices.filter(x=>sculptDone(x.id)).length;return {done,total:SCULPT.practices.length,pct:Math.round(done/SCULPT.practices.length*100)}}
function nextSculptPractice(){return SCULPT.practices.find(x=>!sculptDone(x.id))||SCULPT.practices[SCULPT.practices.length-1]}
function sculptPracticeCard(p){
  const done=sculptDone(p.id);
  return `<a class="sculpt-practice-card ${done?'done':''}" href="#/sculpt/${p.id}"><span class="sculpt-practice-number">${String(p.order).padStart(2,'0')}</span><span class="sculpt-practice-icon">${p.icon}</span><div><span class="eyebrow">${esc(p.time)} • +${p.xp} XP${done?' • ✓ COMPLETE':''}</span><h3>${esc(p.title)}</h3><p>${esc(p.aim)}</p><div class="tutorial-tag-row">${p.tools.map(x=>`<span>${esc(x)}</span>`).join('')}</div></div><b>${done?'Revisit':'Start'} →</b></a>`;
}
function renderSculptStep(s,i){
  return `<article class="sculpt-guide-step"><div class="sculpt-step-index">${String(i+1).padStart(2,'0')}</div><div><h3>${esc(s.title)}</h3><div class="sculpt-step-field where"><span>WHERE TO WORK</span><p>${esc(s.where)}</p></div><div class="sculpt-step-field do"><span>DO THIS</span><p>${esc(s.do)}</p></div><div class="sculpt-step-field see"><span>YOU SHOULD SEE</span><p>${esc(s.see)}</p></div><div class="sculpt-step-field check"><span>STOP & CHECK</span><p>${esc(s.check)}</p></div><div class="sculpt-step-field why"><span>WHY</span><p>${esc(s.why)}</p></div>${s.stuck?.length?`<div class="sculpt-step-field stuck"><span>IF YOURS DOESN'T MATCH</span><ul>${s.stuck.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`:''}</div></article>`;
}
function sculptSources(){return `<div class="model-reference-grid">${SCULPT.sources.map(r=>`<a class="model-reference-card" href="${esc(r.url)}" target="_blank" rel="noopener"><span>SCULPTGL REFERENCE</span><strong>${esc(r.title)}</strong><p>${esc(r.note)}</p><b>Open ↗</b></a>`).join('')}</div>`}
function sculptEmbed(){return `<div class="sculpt-embed-shell"><div class="sculpt-embed-head"><div><span class="eyebrow">LIVE DIGITAL CLAY</span><strong>SculptGL</strong><small>Embedded from the creator's official site • internet connection required</small></div><a class="button small ghost" href="${esc(SCULPT.toolUrl)}" target="_blank" rel="noopener">Open full screen ↗</a></div><iframe class="sculpt-iframe" src="${esc(SCULPT.embedUrl)}" title="SculptGL digital sculpting practice tool" loading="lazy" allow="fullscreen" sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-pointer-lock"></iframe><div class="sculpt-embed-fallback"><b>If the college browser blocks the embedded tool:</b> use <a href="${esc(SCULPT.toolUrl)}" target="_blank" rel="noopener">Open full screen</a>. Your Hub guide can stay open in another tab.</div></div>`}
function sculptPage(id){
  const selected=sculptPractice(id)||nextSculptPractice(),prog=sculptProgress(),done=sculptDone(selected.id);
  return `<div class="breadcrumb"><a href="#/">Home</a> / <a href="#/modeling">3D Modelling Studio</a> / Sculpt Playground</div>
  <section class="sculpt-hero"><div><span class="eyebrow">DIGITAL CLAY • FORM • SILHOUETTE • NO PRESSURE</span><h1>🗿 Sculpt Playground</h1><p>${esc(SCULPT.purpose)}</p><div class="tutorial-tag-row large"><span>${SCULPT.practices.length} tiny exercises</span><span>${prog.done}/${prog.total} complete</span><span>No installation</span><span>OBJ export</span></div></div><div class="sculpt-hero-clay"><span>FORM</span><b>≠</b><span>TOPOLOGY</span></div></section>
  <section class="sculpt-mindset"><div><span class="deep-label">THE RULE</span><h2>For ten minutes, think like a sculptor.</h2><p>Push, pull, rotate and judge the <b>shape</b>. Then switch your modeller brain back on and inspect what exists underneath.</p></div><ul>${SCULPT.rules.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section>
  <section class="sculpt-workspace-layout"><aside class="sculpt-guide-panel"><div class="sculpt-guide-head"><span class="eyebrow">EXERCISE ${String(selected.order).padStart(2,'0')} • ${esc(selected.time)} • +${selected.xp} XP</span><h2>${selected.icon} ${esc(selected.title)}</h2><p>${esc(selected.aim)}</p><div class="sculpt-new-skill"><small>NEW TODAY</small><strong>${esc(selected.newSkill)}</strong></div></div><div class="sculpt-guide-scroll">${selected.steps.map(renderSculptStep).join('')}<div class="sculpt-challenge"><span>MAKE IT YOURS</span><p>${esc(selected.challenge)}</p></div></div><button class="button ${done?'success':'primary'} sculpt-complete-button" data-action="complete-sculpt" data-sculpt="${selected.id}">${done?'✓ Exercise complete':`Mark exercise complete • +${selected.xp} XP`}</button></aside>${sculptEmbed()}</section>
  <section class="section"><div class="section-head"><div><span class="eyebrow">START SIMPLE</span><h2>Six tiny clay exercises</h2><p>Do them in order the first time. Each one introduces only a small amount of new control.</p></div></div><div class="sculpt-practice-grid">${SCULPT.practices.map(sculptPracticeCard).join('')}</div></section>
  <section class="section"><div class="section-head"><div><span class="eyebrow">TOOL CHEAT SHEET</span><h2>The only controls beginners need first</h2><p>SculptGL has more tools. Ignore them until these feel comfortable.</p></div></div><div class="sculpt-tool-grid">${SCULPT.starterTools.map(t=>`<article><span>${esc(t.key)}</span><h3>${esc(t.name)}</h3><p>${esc(t.purpose)}</p></article>`).join('')}</div></section>
  <section class="sculpt-pipeline-bridge"><div><span class="deep-label">THE IMPORTANT BRIDGE</span><h2>Nice sculpture → inspect mesh → rebuild / retopologise if needed</h2><p>SculptGL is excellent for learning form. It does not magically turn every sculpture into a clean game asset. Exercise 06 exports an OBJ to 3ds Max specifically so students can see that difference.</p></div><a class="button primary" href="#/modeling/lesson/max-topology-clinic">⬡ Go to Topology Clinic →</a></section>
  <section class="section"><div class="section-head"><div><h2>About the tool</h2><p>SculptGL is the original browser sculpting app by Stéphane Ginier. Its source is MIT-licensed; the repository is archived/read-only, so the Hub treats it as an optional practice tool rather than a critical dependency.</p></div></div>${sculptSources()}</section>`;
}

function modelLesson(id){return MODEL.lessons.find(x=>x.id===id)}
function modelBuild(id){return MODEL.builds.find(x=>x.id===id)}
function modelFix(id){return MODEL.fixes.find(x=>x.id===id)}
function modelLessonDone(id){return (state.modelLessonCompleted||[]).includes(id)}
function modelBuildDone(id){return (state.modelBuildCompleted||[]).includes(id)}
function modelFixDone(id){return (state.modelFixCompleted||[]).includes(id)}
function modelProgress(){
  const done=MODEL.lessons.filter(x=>modelLessonDone(x.id)).length,total=MODEL.lessons.length;
  return {done,total,pct:total?Math.round(done/total*100):0};
}
function nextModelLesson(){return MODEL.lessons.find(x=>!modelLessonDone(x.id))||MODEL.lessons[MODEL.lessons.length-1]}
function modelRequirements(ids){return (ids||[]).map(id=>modelLesson(id)).filter(Boolean)}

function modelTheoryChapter(id){return MODEL_FOUNDATIONS.chapters.find(x=>x.id===id)}
function modelTheoryDone(id){return (state.modelTheoryCompleted||[]).includes(id)}
function modelTheoryScore(id){return state.modelTheoryScores?.[id]||null}
function modelFoundationChaptersDone(){return MODEL_FOUNDATIONS.chapters.filter(x=>modelTheoryDone(x.id)).length}
function modelFoundationDone(){return !!state.modelFoundationFinal}
function modelTheoryUnlocked(id){
  const ch=modelTheoryChapter(id);if(!ch)return false;if(isTeacher()||ch.order===1)return true;
  const prev=MODEL_FOUNDATIONS.chapters.find(x=>x.order===ch.order-1);return !!prev&&modelTheoryDone(prev.id);
}
function modelFoundationProgress(){
  const done=modelFoundationChaptersDone(),total=MODEL_FOUNDATIONS.chapters.length;
  return {done,total,pct:total?Math.round(done/total*100):0,final:modelFoundationDone()};
}
function modelTheoryVisual(ch){
  if(ch.visual)return `<figure class="foundation-theory-visual"><img src="${esc(ch.visual)}" alt="${esc(ch.title)} visual reference" loading="lazy"><figcaption>${esc(ch.visualCaption||'')}</figcaption></figure>`;
  return '';
}
function modelTheorySectionVisuals(sec,ch,sectionIndex){
  const visuals=sec.visuals||[];if(!visuals.length)return '';
  return `<div class="foundation-section-visuals ${visuals.length>1?'multi':''}">${visuals.map((v,i)=>zoomableImage({src:v.src,alt:`${ch.title} — ${sec.title} visual ${i+1}`,caption:v.caption||'',sourceUrl:v.sourceUrl||'',sourceTitle:v.sourceTitle||'',kind:v.kind||'local',eager:sectionIndex===0&&i===0})).join('')}</div>`;
}
function modelTheorySection(sec,ch,i){
  const visuals=sec.visuals||[];
  return `<article class="foundation-concept ${visuals.length?'with-visuals':''} ${visuals.length>1?'many-visuals':''}"><div class="foundation-concept-copy"><span class="foundation-concept-number">${String(i+1).padStart(2,'0')}</span><div><h2>${esc(sec.title)}</h2><p>${esc(sec.body)}</p>${sec.points?.length?`<ul>${sec.points.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:''}${sec.lookFor?`<div class="foundation-look-for"><b>LOOK AT THE IMAGE</b><span>${esc(sec.lookFor)}</span></div>`:''}</div></div>${modelTheorySectionVisuals(sec,ch,i)}</article>`;
}
function modelTheoryChapterCard(ch){
  const done=modelTheoryDone(ch.id),unlocked=modelTheoryUnlocked(ch.id),score=modelTheoryScore(ch.id);
  return `<a class="foundation-chapter-card ${done?'done':''} ${unlocked?'':'locked'}" href="${unlocked?`#/modeling/foundations/${ch.id}`:'#/modeling/foundations'}" ${unlocked?'':'aria-disabled="true"'}><div class="foundation-card-number">${done?'✓':String(ch.order).padStart(2,'0')}</div><div class="foundation-card-copy"><span>${esc(ch.kicker)}</span><h3>${ch.icon} ${esc(ch.title)}</h3><p>${esc(ch.intro)}</p><small>${esc(ch.duration)} • ${MODEL_FOUNDATIONS.chapterXp} XP • quiz ${MODEL_FOUNDATIONS.passPercent}% to pass${score?` • best ${score.bestPct||score.pct}%`:''}</small></div><b>${done?'Revisit →':unlocked?'Start →':'LOCKED'}</b></a>`;
}
function modelFoundationsLaunch(){
  const p=modelFoundationProgress(),next=MODEL_FOUNDATIONS.chapters.find(x=>!modelTheoryDone(x.id)),target=modelFoundationDone()?MODEL_FOUNDATIONS.chapters[0]:next||null;
  return `<section class="model-foundations-launch ${modelFoundationDone()?'complete':''}"><div class="foundation-launch-copy"><span class="deep-label">MODULE 0 • REQUIRED BEFORE BUILD X</span><h2>Understand the mesh before Max becomes a button hunt.</h2><p>Six short theory chapters turn core 3D theory into decisions you actually make while modelling: <b>read topology, choose views, spend geometry, place pivots, unwrap cleanly and make the asset game-ready.</b></p><div class="foundation-launch-progress"><div><strong>${p.done}/${p.total}</strong><span>chapters passed</span></div><div><strong>${modelFoundationDone()?'✓':'○'}</strong><span>Model Doctor</span></div><div><strong>${MODEL_FOUNDATIONS.chapterXp*p.total+MODEL_FOUNDATIONS.finalXp}</strong><span>total XP available</span></div></div><div class="progress"><span style="width:${modelFoundationDone()?100:p.pct}%"></span></div><div class="foundation-launch-actions"><a class="button primary" href="${target?`#/modeling/foundations/${target.id}`:'#/modeling/foundations'}">${modelFoundationDone()?'↻ Revisit foundations':'▶ Start / continue Module 0'}</a><a class="button ghost" href="#/modeling/foundations">See all 6 chapters →</a></div></div><div class="foundation-launch-map">${MODEL_FOUNDATIONS.chapters.map(ch=>`<div class="foundation-map-node ${modelTheoryDone(ch.id)?'done':modelTheoryUnlocked(ch.id)?'ready':'locked'}"><span>${modelTheoryDone(ch.id)?'✓':ch.icon}</span><small>${String(ch.order).padStart(2,'0')}</small><b>${esc(ch.title)}</b></div>`).join('')}</div></section>`;
}
function modelTheoryQuestionForm(questions,action,chapterId=''){
  return `<form class="foundation-quiz-form" data-action-form="${action}" ${chapterId?`data-chapter="${esc(chapterId)}"`:''}>${questions.map((q,qi)=>`<fieldset class="foundation-question"><legend><span>${String(qi+1).padStart(2,'0')}</span>${esc(q.q)}</legend><div class="foundation-options">${q.options.map((o,oi)=>`<label><input type="radio" name="q${qi}" value="${oi}" required><span>${esc(o)}</span></label>`).join('')}</div></fieldset>`).join('')}<button class="button primary foundation-quiz-submit" type="submit">Check my answers →</button></form>`;
}
function modelTheoryReview(questions,attempt){
  if(!attempt)return '';
  return `<div class="foundation-review">${questions.map((q,i)=>{const picked=Number(attempt.answers?.[i]),ok=picked===q.correct;return `<article class="${ok?'correct':'wrong'}"><span>${ok?'✓':'×'}</span><div><h4>${esc(q.q)}</h4><p><b>Your answer:</b> ${esc(q.options[picked]??'No answer')}</p>${ok?'':`<p><b>Correct answer:</b> ${esc(q.options[q.correct])}</p>`}<small>${esc(q.feedback)}</small></div></article>`}).join('')}</div>`;
}
function modelTheoryQuizPanel(ch){
  const attempt=modelTheoryScore(ch.id),passed=modelTheoryDone(ch.id);
  if(!attempt)return `<section class="foundation-quiz-panel"><div class="foundation-quiz-head"><span class="deep-label">END OF CHAPTER • QUICK CHECK</span><h2>Prove you can make the call.</h2><p>${ch.quiz.length} questions. You need <b>${MODEL_FOUNDATIONS.passPercent}%</b> to pass this chapter and earn +${MODEL_FOUNDATIONS.chapterXp} XP.</p></div>${modelTheoryQuestionForm(ch.quiz,'model-theory-quiz',ch.id)}</section>`;
  return `<section class="foundation-quiz-panel result ${passed?'passed':'retry'}"><div class="foundation-score"><strong>${attempt.pct}%</strong><span>${attempt.correct}/${attempt.total} correct</span></div><div class="foundation-quiz-head"><span class="deep-label">${passed?'✓ CHAPTER PASSED':'RETRY THE GAP'}</span><h2>${passed?'Good. Move on when you are ready.':'Not quite yet — use the review, then have another go.'}</h2><p>${passed?`Best score ${attempt.bestPct||attempt.pct}%. Chapter XP is awarded once.`:`You need ${MODEL_FOUNDATIONS.passPercent}% to unlock the next chapter.`}</p></div>${modelTheoryReview(ch.quiz,attempt)}<details class="foundation-retake"><summary>${passed?'Retake for practice':'Retake quiz'}</summary>${modelTheoryQuestionForm(ch.quiz,'model-theory-quiz',ch.id)}</details></section>`;
}
function modelingFoundationsPage(){
  const p=modelFoundationProgress(),allDone=p.done===p.total;
  return `<div class="breadcrumb"><a href="#/">Home</a> / <a href="#/modeling">3D Modelling Studio</a> / Module 0</div><section class="foundation-module-hero"><div><span class="eyebrow">MODULE 0 • 3D THEORY THAT CHANGES WHAT YOU BUILD</span><h1>⬡ ${esc(MODEL_FOUNDATIONS.title)}</h1><p>${esc(MODEL_FOUNDATIONS.short)}</p><div class="foundation-module-stats"><span><b>${p.done}/${p.total}</b> chapter quizzes</span><span><b>${MODEL_FOUNDATIONS.passPercent}%</b> pass mark</span><span><b>+${MODEL_FOUNDATIONS.chapterXp}</b> XP each</span><span><b>+${MODEL_FOUNDATIONS.finalXp}</b> final</span></div></div><div class="foundation-module-seal ${modelFoundationDone()?'done':''}"><span>${modelFoundationDone()?'✓':'0'}</span><b>${modelFoundationDone()?'FOUNDATIONS COMPLETE':'BUILD X GATE'}</b><small>${modelFoundationDone()?'You have passed Model Doctor.':'Pass all chapters + Model Doctor.'}</small></div></section><section class="foundation-origin-note"><span>WHY THIS MATTERS IN THE PRACTICAL BUILDS</span><p>${esc(MODEL_FOUNDATIONS.sourceNote)}</p></section><section class="foundation-chapter-list">${MODEL_FOUNDATIONS.chapters.map(modelTheoryChapterCard).join('')}</section><section class="foundation-final-card ${allDone?'ready':'locked'} ${modelFoundationDone()?'done':''}"><div><span class="deep-label">FINAL CHECK • MODEL DOCTOR</span><h2>${modelFoundationDone()?'✓ Model Doctor passed':'Can you diagnose a game asset, not just define the words?'}</h2><p>${allDone?'12 mixed decisions from the whole module. Score at least 80% to complete Foundations and unlock Build X completion.':'Pass all six chapter quizzes first. The final check mixes topology, views, geometry budgets, pivots, UVs, materials, collision and engine-readiness.'}</p></div>${allDone?`<a class="button ${modelFoundationDone()?'success':'primary'}" href="#/modeling/foundations/final">${modelFoundationDone()?'Revisit Model Doctor':'Start Model Doctor • +'+MODEL_FOUNDATIONS.finalXp+' XP'} →</a>`:'<span class="foundation-lock-badge">🔒 '+p.done+'/'+p.total+' chapters</span>'}</section>`;
}
function modelingFoundationChapterPage(id){
  const ch=modelTheoryChapter(id);if(!ch)return notFound();
  if(!modelTheoryUnlocked(id)){
    const prev=MODEL_FOUNDATIONS.chapters.find(x=>x.order===ch.order-1);
    return `<div class="breadcrumb"><a href="#/modeling">3D Modelling Studio</a> / <a href="#/modeling/foundations">Module 0</a> / ${esc(ch.title)}</div><section class="foundation-locked-page"><span>🔒</span><h1>${esc(ch.title)}</h1><p>Pass <b>${esc(prev?.title||'the previous chapter')}</b> first. The sequence is deliberate: each chapter assumes the decisions from the one before it.</p><a class="button primary" href="#/modeling/foundations/${prev?.id||''}">Go to previous chapter →</a></section>`;
  }
  const next=MODEL_FOUNDATIONS.chapters.find(x=>x.order===ch.order+1),done=modelTheoryDone(ch.id);
  return `<div class="breadcrumb"><a href="#/">Home</a> / <a href="#/modeling">3D Modelling Studio</a> / <a href="#/modeling/foundations">Module 0</a> / ${esc(ch.title)}</div><section class="foundation-chapter-hero"><div><span class="eyebrow">CHAPTER ${String(ch.order).padStart(2,'0')} OF ${MODEL_FOUNDATIONS.chapters.length} • ${esc(ch.duration)} • +${MODEL_FOUNDATIONS.chapterXp} XP</span><h1>${ch.icon} ${esc(ch.title)}</h1><p>${esc(ch.intro)}</p></div><div class="foundation-chapter-status ${done?'done':''}"><span>${done?'✓':'?'}</span><b>${done?'PASSED':'QUIZ REQUIRED'}</b><small>${done?`Best ${modelTheoryScore(ch.id)?.bestPct||modelTheoryScore(ch.id)?.pct||0}%`:`${MODEL_FOUNDATIONS.passPercent}% unlocks the next chapter`}</small></div></section><section class="foundation-big-idea"><span>THE DECISION THAT MATTERS</span><h2>${esc(ch.bigIdea)}</h2></section><section class="foundation-concept-stack">${ch.sections.map((sec,i)=>modelTheorySection(sec,ch,i)).join('')}</section>${modelTheoryQuizPanel(ch)}<section class="foundation-chapter-nav"><a class="button ghost" href="#/modeling/foundations">← Module map</a>${done&&next?`<a class="button primary" href="#/modeling/foundations/${next.id}">Next: ${esc(next.title)} →</a>`:done&&!next?`<a class="button primary" href="#/modeling/foundations/final">Model Doctor →</a>`:'<span>Pass the quiz to unlock the next chapter.</span>'}</section>`;
}
function modelingFoundationFinalPage(){
  const allDone=modelFoundationChaptersDone()===MODEL_FOUNDATIONS.chapters.length;
  if(!allDone&&!isTeacher())return `<div class="breadcrumb"><a href="#/modeling/foundations">Module 0</a> / Model Doctor</div><section class="foundation-locked-page"><span>🔒</span><h1>Model Doctor is locked.</h1><p>Pass all six chapter quizzes first.</p><a class="button primary" href="#/modeling/foundations">Back to Module 0 →</a></section>`;
  const attempt=modelTheoryScore('final'),passed=modelFoundationDone();
  return `<div class="breadcrumb"><a href="#/">Home</a> / <a href="#/modeling">3D Modelling Studio</a> / <a href="#/modeling/foundations">Module 0</a> / Model Doctor</div><section class="foundation-final-hero"><span class="eyebrow">FINAL CHECK • ${MODEL_FOUNDATIONS.finalQuiz.length} MIXED DECISIONS • +${MODEL_FOUNDATIONS.finalXp} XP</span><h1>🩺 Model Doctor</h1><p>No definitions-for-the-sake-of-definitions. Diagnose modelling decisions across topology, views, pivots, UVs, materials, collision and game-readiness.</p></section>${attempt?`<section class="foundation-quiz-panel result ${passed?'passed':'retry'}"><div class="foundation-score"><strong>${attempt.pct}%</strong><span>${attempt.correct}/${attempt.total} correct</span></div><div class="foundation-quiz-head"><span class="deep-label">${passed?'✓ FOUNDATIONS COMPLETE':'ONE MORE PASS'}</span><h2>${passed?'Build X completion is unlocked.':'Review the misses and retake Model Doctor.'}</h2><p>${passed?`+${MODEL_FOUNDATIONS.finalXp} XP awarded once. The theory now becomes something you prove in the builds.`:`You need ${MODEL_FOUNDATIONS.passPercent}% to pass.`}</p></div>${modelTheoryReview(MODEL_FOUNDATIONS.finalQuiz,attempt)}<details class="foundation-retake"><summary>${passed?'Retake for practice':'Retake Model Doctor'}</summary>${modelTheoryQuestionForm(MODEL_FOUNDATIONS.finalQuiz,'model-theory-final')}</details></section>`:`<section class="foundation-quiz-panel"><div class="foundation-quiz-head"><span class="deep-label">MAKE THE CALL</span><h2>12 questions. 10 correct passes.</h2><p>This is the final gate before Build X completion.</p></div>${modelTheoryQuestionForm(MODEL_FOUNDATIONS.finalQuiz,'model-theory-final')}</section>`}<section class="foundation-chapter-nav"><a class="button ghost" href="#/modeling/foundations">← Module map</a>${passed?'<a class="button primary" href="#/modeling">⬡ Return to 3D Modelling Studio →</a>':'<span>Use the review. The point is to fix the decision, not memorise a letter.</span>'}</section>`;
}
function modelDiagram(src,caption='Concept diagram'){
  if(!src)return '';
  return `<div class="model-diagram"><div class="model-diagram-label">CONCEPT MAP • NOT 3DS MAX UI</div>${zoomableImage({src,alt:caption,caption,kind:'local',eager:false})}</div>`;
}
function modelInterfaceImages(l){
  if(!l.interfaceImages?.length)return '';
  return `<section class="model-ui-reference"><div class="visual-story-head"><span class="deep-label">REAL 3DS MAX INTERFACE REFERENCE</span><h2>Use this to orient yourself — then follow the current Autodesk reference</h2><p>Interface screenshots age faster than modelling principles. The version is labelled clearly; current Autodesk 2026 Help linked below is the source of truth if your college install differs.</p></div><div class="visual-story-grid">${l.interfaceImages.map((v,i)=>zoomableImage({src:v.src,alt:`${l.title} interface reference ${i+1}`,caption:`${v.caption} • UI reference version: ${v.version||'labelled source'}`,sourceUrl:v.sourceUrl||'',sourceTitle:v.sourceTitle||'',kind:'reference',eager:i===0})).join('')}</div></section>`;
}
function modelReferenceCards(refs){
  if(!refs?.length)return '';
  return `<div class="model-reference-grid">${refs.map(r=>`<a class="model-reference-card" href="${esc(r.url)}" target="_blank" rel="noopener"><span>OFFICIAL / CURRENT REFERENCE</span><strong>${esc(r.title)}</strong><p>${esc(r.note||'Open the current reference.')}</p><b>Open reference ↗</b></a>`).join('')}</div>`;
}
function modelBookReferences(l){
  const figs=l.bookFigures||[],notes=l.bookTakeaways||[];
  if(!figs.length&&!notes.length)return '';
  const book=MODEL.referenceBook||{title:'3ds Max course reference'};
  return `<section class="model-book-reference"><div class="model-book-reference-head"><div><span class="deep-label">SELECTED REFERENCE • NOT A CLICK GUIDE</span><h2>Look at what the geometry is doing</h2><p>These selected figures support the modelling principle. For exact current buttons and panels, use the current Autodesk references later in the lesson.</p></div><span class="model-book-source">${esc(book.title)}</span></div>${figs.length?`<div class="model-book-grid">${figs.map((v,i)=>zoomableImage({src:v.src,alt:`${l.title} supporting reference figure ${i+1}`,caption:`${v.caption} • Source: ${book.title}, page ${v.page}.`,kind:'local',eager:false})).join('')}</div>`:''}${notes.length?`<div class="model-book-takeaways">${notes.map(x=>`<div><span>✓</span><p>${esc(x)}</p></div>`).join('')}</div>`:''}</section>`;
}
function modelStudioLoop(){
  const xs=MODEL.studioLoop||[];
  if(!xs.length)return '';
  return `<section class="model-loop-section"><div class="section-head"><div><span class="eyebrow">THE ASSET LOOP</span><h2>Do not start with polygons.</h2><p>A modeller makes decisions before, during and after the mesh. This is the loop every lesson and Build X now follows.</p></div></div><div class="model-loop-track">${xs.map((x,i)=>`<article><span class="model-loop-num">${String(i+1).padStart(2,'0')}</span><small>${esc(x.step)}</small><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p></article>`).join('')}</div></section>`;
}
function modelThinkingBlock(l){
  const t=l.thinking;if(!t)return '';
  const refs=t.references||[];
  return `<section class="model-thinking"><div class="model-thinking-head"><div><span class="deep-label">LOOK • THINK • PLAN</span><h2>${esc(t.bigQuestion)}</h2><p>Before Max becomes a button hunt, decide what the geometry is actually trying to achieve.</p></div><span class="model-thinking-badge">NO MODELLING YET</span></div>${refs.length?`<div class="model-thinking-references">${refs.map((v,i)=>zoomableImage({src:v.src,alt:`${l.title} reference ${i+1}`,caption:v.caption||'',sourceUrl:v.sourceUrl||'',sourceTitle:v.sourceTitle||'',kind:'reference',eager:i===0})).join('')}</div>`:''}<div class="model-thinking-grid"><article><span>👁 01 • OBSERVE</span><h3>What should you notice?</h3><ul>${(t.observe||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul></article><article><span>✎ 02 • PLAN</span><h3>Make decisions first</h3><ol>${(t.plan||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ol></article><article class="decision"><span>⚖ 03 • JUDGEMENT</span><h3>${esc(t.decision?.title||'Make a modelling decision')}</h3><p>${esc(t.decision?.prompt||'Choose the simplest approach that still achieves the intended form.')}</p></article></div>${l.visual?`<div class="model-thinking-concept"><span class="deep-label">SIMPLIFY THE PROBLEM</span>${modelDiagram(l.visual,`${l.title} concept map`)}</div>`:''}</section>`;
}
function modelIndustryStudyCard(s){
  if(!s)return '';
  return `<a class="model-industry-card" href="${esc(s.url)}" target="_blank" rel="noopener"><span class="eyebrow">HOW A PRO ACTUALLY WORKS</span><h3>${esc(s.title)}</h3><small>${esc(s.source||'Industry breakdown')}</small><p>${esc(s.why||'Open the professional breakdown and study the decisions, not just the final render.')}</p>${s.lookFor?.length?`<div class="model-watch-for"><b>LOOK FOR</b>${s.lookFor.slice(0,4).map(x=>`<span>→ ${esc(x)}</span>`).join('')}</div>`:''}<strong>Open breakdown ↗</strong></a>`;
}
function modelBuildReferenceBoard(b){
  const refs=b.references||[];
  if(!refs.length)return '';
  return `<section class="model-reference-board"><div class="section-head"><div><span class="eyebrow">01 • REFERENCE BOARD</span><h2>Look before you model.</h2><p>Do not copy surface noise. Look for construction, proportion, repetition, material changes and the shapes that make the object recognisable.</p></div></div><div class="model-reference-grid visual">${refs.map((v,i)=>zoomableImage({src:v.src,alt:`${b.title} reference ${i+1}`,caption:v.caption||'',sourceUrl:v.sourceUrl||'',sourceTitle:v.sourceTitle||'',kind:'reference',eager:i===0})).join('')}</div></section>`;
}
function modelTopologyGuide(b){
  const t=b.topologyGuide;if(!t)return '';
  const imgs=t.images||[],legend=t.legend||[],rules=t.rules||[];
  return `<section class="model-topology-guide"><div class="model-topology-head"><div><span class="eyebrow">READ THE MESH • BEFORE STEP 1</span><h2>${esc(t.title||'Read the topology before you build')}</h2><p>${esc(t.intro||'Every edge should have a reason to exist.')}</p></div><span class="model-topology-badge">F4 / EDGED FACES MINDSET</span></div>${legend.length?`<div class="model-topology-legend">${legend.map((x,i)=>`<span class="legend-${i+1}">${esc(x)}</span>`).join('')}</div>`:''}${imgs.length?`<div class="model-topology-gallery ${imgs.length===1?'one':''}">${imgs.map((v,i)=>zoomableImage({src:v.src,alt:`${b.title} topology guide ${i+1}`,caption:v.caption||'',sourceUrl:v.sourceUrl||'',sourceTitle:v.sourceTitle||'',kind:v.kind||'local',eager:i===0})).join('')}</div>`:''}${rules.length?`<div class="model-topology-rules"><span class="deep-label">WHY THESE EDGES EXIST</span>${rules.map((x,i)=>`<article><span>${String(i+1).padStart(2,'0')}</span><p>${esc(x)}</p></article>`).join('')}</div>`:''}</section>`;
}
function modelBuildBrief(b){
  const x=b.brief;if(!x)return '';
  return `<section class="model-production-brief"><div class="model-production-role"><span>YOUR ROLE</span><strong>${esc(x.role)}</strong></div><div><span class="eyebrow">02 • PRODUCTION BRIEF</span><h2>${esc(x.context)}</h2><p><b>Design target:</b> ${esc(x.designTarget)}</p><div class="model-constraint"><b>CONSTRAINT</b><span>${esc(x.constraint)}</span></div></div></section>`;
}
function modelBuildPlanning(b){
  if(!b.plan?.length)return '';
  return `<section class="content-card model-plan-card"><span class="eyebrow">03 • PLAN IT BEFORE MAX</span><h2>Answer these before detail.</h2><p>A five-minute plan saves twenty minutes of repairing a model that was wrong from the start.</p><div class="model-plan-list">${b.plan.map((x,i)=>`<div><span>${String(i+1).padStart(2,'0')}</span><p>${esc(x)}</p></div>`).join('')}</div></section>`;
}
function modelQualityGates(b){
  if(!b.qualityGates?.length)return '';
  return `<section class="model-quality-section"><div class="section-head"><div><span class="eyebrow">QUALITY GATES</span><h2>Prove it. Do not vibe-check it.</h2><p>Before calling the asset finished, inspect it against each production test.</p></div></div><div class="model-quality-grid">${b.qualityGates.map((x,i)=>`<article><span>${String(i+1).padStart(2,'0')}</span><p>${esc(x)}</p></article>`).join('')}</div></section>`;
}
function modelCritiqueBridge(prompt,title='Put another pair of eyes on it'){ return `<section class="model-critique-bridge"><div><span class="deep-label">CRITIQUE • IMPROVE</span><h2>${esc(title)}</h2><p><b>Ask the room:</b> “${esc(prompt||'What is the single change that would improve this asset most?')}”</p><small>Post a screenshot to your class Critique Board, collect structured feedback, change one thing and compare the before/after.</small></div><a class="button primary" href="#/critique">💬 Post for critique →</a></section>`; }
function modelLessonCard(l){
  const done=modelLessonDone(l.id);
  return `<a class="model-lesson-card ${done?'done':''}" href="#/modeling/lesson/${l.id}"><div class="model-lesson-number">${String(l.order).padStart(2,'0')}</div><div><span class="eyebrow">${done?'✓ COMPLETE • ':''}${esc(l.duration)} • +100 XP</span><h3>${l.icon} ${esc(l.title)}</h3><p>${esc(l.intro)}</p><div class="model-skill-row"><span class="new-skill">NEW: ${esc(l.newSkill)}</span>${l.priorSkills.slice(0,3).map(x=>`<span>${esc(x)}</span>`).join('')}</div></div><span class="designer-open">${done?'Revisit':'Start'} →</span></a>`;
}
function modelBuildCard(b){
  const done=modelBuildDone(b.id),req=modelRequirements(b.requires),skillsReady=req.every(x=>modelLessonDone(x.id)),foundationReady=modelFoundationDone()||done,ready=skillsReady&&foundationReady,ref=b.references?.[0];
  return `<a class="model-build-card visual ${done?'done':''} ${foundationReady?'':'foundation-locked'}" href="#/modeling/build/${b.id}">${ref?`<div class="model-build-thumb"><img class="remote-reference-image" src="${esc(ref.src)}" alt="${esc(b.title)} reference" loading="lazy"><span>REAL REFERENCE</span></div>`:`<div class="model-build-icon">${b.icon}</div>`}<div class="model-build-copy"><span class="eyebrow">${esc(b.difficulty)} • ${esc(b.time)} • ${esc(b.support||'Guided checkpoints')}${done?' • COMPLETE':!foundationReady?' • MODULE 0 REQUIRED':ready?' • READY':' • SCAFFOLD FIRST'}</span><h3>${esc(b.title)}</h3><p>${esc(b.brief?.context||b.summary)}</p><div class="tutorial-tag-row">${b.teaches.slice(0,5).map(x=>`<span>${esc(x)}</span>`).join('')}</div><strong>${done?'✓ Revisit build':!foundationReady?'Preview brief • 🔒 completion locked': 'Open brief →'}</strong></div></a>`;
}
function modelFixCard(f){
  const done=modelFixDone(f.id);
  return `<a class="model-fix-card ${done?'done':''}" href="#/modeling/fix/${f.id}"><span class="model-fix-icon">${f.icon}</span><div><span class="eyebrow">FIX THIS MODEL${done?' • ✓ COMPLETE':''}</span><h3>${esc(f.title)}</h3><p>${esc(f.symptom)}</p></div><b>Diagnose →</b></a>`;
}
function modelStageBlock(stage){
  const lessons=MODEL.lessons.filter(l=>l.stage===stage.id);
  return `<section class="model-course-stage ${esc(stage.id)}"><div class="model-stage-head"><div><span class="eyebrow">${esc(stage.range)}</span><h3>${esc(stage.title)}</h3><p>${esc(stage.summary)}</p></div><span class="model-stage-count">${lessons.length} lessons</span></div><div class="model-lesson-list">${lessons.map(modelLessonCard).join('')}</div></section>`;
}
function modelToolBoundaries(l){
  const today=l.todayTools||[],later=l.notYet||[];
  if(!today.length&&!later.length)return '';
  return `<section class="model-tool-boundaries"><div><span class="deep-label">TOOLS YOU MAY USE TODAY</span><div class="model-tool-chips allowed">${today.map(x=>`<span>✓ ${esc(x)}</span>`).join('')}</div></div><div><span class="deep-label">LEAVE THESE ALONE FOR NOW</span><div class="model-tool-chips locked">${later.map(x=>`<span>⛔ ${esc(x)}</span>`).join('')}</div></div></section>`;
}
function modelVideo(id){return MODEL_VIDEOS.videos.find(x=>x.id===id)}
function modelVideoDone(id){return (state.modelVideoCompleted||[]).includes(id)}
function modelVideoItems(){return MODEL_VIDEOS.videos.map(v=>({id:v.id,title:`${String(v.order).padStart(2,'0')} • ${v.title}`}))}
function modelVideoProgress(){const done=MODEL_VIDEOS.videos.filter(v=>modelVideoDone(v.id)).length,total=MODEL_VIDEOS.videos.length;return {done,total,pct:total?Math.round(done/total*100):0}}
function relatedModelVideos(lessonId){return MODEL_VIDEOS.videos.filter(v=>(v.relatedLessons||[]).includes(lessonId))}
function modelVideoCard(v,{compact=false}={}){
  const done=modelVideoDone(v.id),lessonNames=(v.relatedLessons||[]).map(id=>modelLesson(id)?.title).filter(Boolean);
  return `<article class="model-video-card ${done?'done':''} ${compact?'compact':''}"><div class="model-video-player" data-video-shell><div class="model-video-placeholder"><span class="model-video-number">${done?'✓':String(v.order).padStart(2,'0')}</span><div class="model-video-playmark">▶</div><strong>${esc(v.title)}</strong><button class="button small primary" type="button" data-action="load-video" data-embed="${esc(v.embed)}" data-title="${esc(v.title)}">▶ Watch in Hub</button></div></div><div class="model-video-body"><span class="eyebrow">DITS' MAX SERIES${lessonNames.length?' • '+esc(lessonNames[0]):''}</span><h3>${esc(v.title)}</h3><div class="model-video-focus"><b>WATCH FOR</b><p>${esc(v.watchFor)}</p></div><div class="model-video-task"><b>DO IT IN MAX</b><p>${esc(v.task)}</p></div><div class="model-video-actions"><a class="button ghost small" href="${esc(v.url)}" target="_blank" rel="noopener">Open in Drive ↗</a>${done?`<span class="source-xp-complete">✓ Video task complete • +${MODEL_VIDEOS.xp} XP</span>`:`<button class="button small source-xp-button" data-action="complete-model-video" data-model-video="${esc(v.id)}">✓ Watched + did the task • +${MODEL_VIDEOS.xp} XP</button>`}</div></div></article>`;
}
function modelVideoCourseLaunch(){
  const p=modelVideoProgress(),next=MODEL_VIDEOS.videos.find(v=>!modelVideoDone(v.id))||MODEL_VIDEOS.videos[0];
  return `<section class="model-video-course-launch"><div><span class="deep-label">🎬 FOLLOW ALONG WITH YOUR TEACHER</span><h2>${esc(MODEL_VIDEOS.title)}</h2><p>${esc(MODEL_VIDEOS.short)}</p><div class="model-video-launch-stats"><span><b>${p.done}/${p.total}</b> video tasks</span><span><b>${p.done*MODEL_VIDEOS.xp}</b> XP earned</span><span><b>${p.total*MODEL_VIDEOS.xp}</b> XP available</span></div><div class="progress"><span style="width:${p.pct}%"></span></div><div class="button-row"><a class="button primary" href="#/modeling/videos">${p.done?'▶ Continue video series':'▶ Start video series'} →</a><a class="button ghost" href="${esc(MODEL_VIDEOS.folderUrl)}" target="_blank" rel="noopener">Open Drive folder ↗</a></div></div><div class="model-video-next"><span>${String(next.order).padStart(2,'0')}</span><small>NEXT VIDEO</small><strong>${esc(next.title)}</strong><p>${esc(next.task)}</p></div></section>`;
}
function modelLessonVideoBridge(l){
  const vids=relatedModelVideos(l.id);if(!vids.length)return '';
  return `<section class="section model-lesson-video-section"><div class="section-head"><div><span class="eyebrow">WATCH DITS DO IT</span><h2>${vids.length===1?'One video sits right beside this skill.':`${vids.length} videos support this lesson.`}</h2><p>Watch with Max open. Then reproduce the move yourself before claiming the video XP.</p></div><a class="button ghost" href="#/modeling/videos">All ${MODEL_VIDEOS.videos.length} videos →</a></div><div class="model-video-grid lesson">${vids.map(v=>modelVideoCard(v,{compact:true})).join('')}</div></section>`;
}
function modelingVideosPage(){
  const p=modelVideoProgress();
  const groups=MODEL_VIDEOS.groups.map(g=>{const vids=MODEL_VIDEOS.videos.filter(v=>v.group===g.id),done=vids.filter(v=>modelVideoDone(v.id)).length;return `<section class="section model-video-group"><div class="section-head"><div><span class="eyebrow">${esc(g.kicker)}</span><h2>${esc(g.title)}</h2><p>${esc(g.note)}</p></div><span class="sync-chip source-progress-chip">${done}/${vids.length} complete</span></div><div class="model-video-grid">${vids.map(v=>modelVideoCard(v)).join('')}</div></section>`}).join('');
  return `<div class="breadcrumb"><a href="#/">Home</a> / <a href="#/modeling">3D Modelling Studio</a> / Video Series</div><section class="model-video-page-hero"><div><span class="eyebrow">🎬 14 FOLLOW-ALONG VIDEOS • +${MODEL_VIDEOS.xp} XP EACH</span><h1>${esc(MODEL_VIDEOS.title)}</h1><p>${esc(MODEL_VIDEOS.short)}</p><div class="model-video-launch-stats"><span><b>${p.done}/${p.total}</b> complete</span><span><b>${p.pct}%</b> watched + practised</span><span><b>${p.done*MODEL_VIDEOS.xp}</b> XP earned</span></div><div class="progress"><span style="width:${p.pct}%"></span></div></div><div class="model-video-course-rule"><b>THE RULE</b><p>Playing the video is not the finish line. Pause it, do the named task in Max, compare your result, then claim the XP.</p><a class="button ghost small" href="${esc(MODEL_VIDEOS.folderUrl)}" target="_blank" rel="noopener">Open original Drive folder ↗</a></div></section>${groups}`;
}
function modelingPage(){
  const p=modelProgress(),n=nextModelLesson();
  return `<div class="page-head model-page-head revamped"><div class="breadcrumb"><a href="#/">Home</a> / 3D Modelling Studio</div><span class="eyebrow">REFERENCE • 3DS MAX • GAME ASSETS • SUBSTANCE • UE5</span><h1>⬡ 3D Modelling Studio</h1><p class="muted">Stop making random boxes with details stuck on them. Learn to <b>look at an object, plan it, block the important forms, model cleanly, judge the mesh and prove it works in game.</b></p><div class="designer-stats"><div><strong>${MODEL.lessons.length}</strong><span>step-by-step lessons</span></div><div><strong>${MODEL.builds.length}</strong><span>production briefs</span></div><div><strong>${MODEL.fixes.length}</strong><span>bad-model clinics</span></div><div><strong>${p.done}/${p.total}</strong><span>lessons complete</span></div></div></div>
  ${modelFoundationsLaunch()}
  ${modelVideoCourseLaunch()}
  ${modelStudioLoop()}
  <section class="model-continue revamped"><div><span class="eyebrow">PICK UP WHERE YOU LEFT OFF • ${p.pct}% COMPLETE</span><h2>${n.icon} ${esc(n.title)}</h2><p>${esc(n.aim)}</p><div class="progress"><span style="width:${p.pct}%"></span></div></div><a class="button primary" href="#/modeling/lesson/${n.id}">▶ Continue modelling</a></section>
  <section class="section model-build-section first"><div class="section-head"><div><span class="eyebrow">MAKE SOMETHING REAL</span><h2>Eight briefs. Guidance fades as you improve.</h2><p>Every build starts with real reference and planning questions, then walks through production checkpoints. The final Hero Prop stops telling you what to make.</p></div></div><div class="model-build-grid revamped">${MODEL.builds.map(modelBuildCard).join('')}</div></section>
  <section class="section model-industry-section"><div class="section-head"><div><span class="eyebrow">HEAR THE ARTISTS</span><h2>See how professional prop and environment artists think.</h2><p>Do not just admire the final render. Look for reference gathering, blockout choices, repeated geometry, topology density, UV strategy and the point where modelling hands work over to textures.</p></div></div><div class="model-industry-grid">${(MODEL.industryStudies||[]).map(modelIndustryStudyCard).join('')}</div></section>
  <section class="section"><div class="section-head"><div><span class="eyebrow">SKILL PATH</span><h2>Four stages. Each removes a different bad habit.</h2><p>Use the lessons when you need the technique. The builds are where you prove you can make decisions with it.</p></div></div><div class="model-course-stages">${(MODEL.courseStages||[]).map(modelStageBlock).join('')}</div></section>
  <section class="model-sculpt-bridge"><div class="model-sculpt-orb">🗿</div><div><span class="deep-label">OPTIONAL PRACTICE • DIGITAL CLAY</span><h2>Sculpt Playground</h2><p>Topology can wait for a moment. Practise silhouette, proportion and form in SculptGL, then export the OBJ into Max and inspect what the mesh underneath actually looks like.</p><div class="tutorial-tag-row"><span>6 structured exercises</span><span>Embedded browser tool</span><span>OBJ → 3ds Max bridge</span></div></div><a class="button primary" href="#/sculpt">🖐 Play with clay →</a></section>
  <section class="section model-fix-section"><div class="section-head"><div><span class="eyebrow">BAD MODEL CLINIC 😱</span><h2>Fix This Model</h2><p>Poly-bomb crate? Boolean apocalypse? UV lasagne? Diagnose the cause before you slap another modifier on top.</p></div></div><div class="model-fix-grid">${MODEL.fixes.map(modelFixCard).join('')}</div></section>
  ${modelCritiqueBridge('What reads first, what looks least believable, and what one change would improve this model most?','The studio wall is part of the modelling process')}
  <section class="section"><div class="section-head"><div><span class="eyebrow">CURRENT SOURCES</span><h2>Autodesk + Adobe + Epic references</h2><p>The Hub gives the classroom route. Vendor documentation remains the source of truth for current UI and pipeline behaviour.</p></div></div>${modelReferenceCards(MODEL.references.map(x=>({title:x.title,url:x.url,note:x.type})))}</section>`;
}
function renderModelStep(s,i){
  return `<article class="model-step"><div class="model-step-index">${String(i+1).padStart(2,'0')}</div><div class="model-step-body"><h3>${esc(s.title)}</h3>${s.warning?`<div class="model-warning"><b>⚠ BEFORE YOU DO THIS</b><p>${esc(s.warning)}</p></div>`:''}<div class="model-field where"><span>WHERE TO CLICK</span><p>${esc(s.where)}</p></div><div class="model-field do"><span>DO THIS NOW</span><p>${esc(s.do)}</p></div><div class="model-field checkpoint"><span>STOP AND CHECK BEFORE CONTINUING</span><p>${esc(s.check)}</p></div>${s.visual?modelDiagram(s.visual,s.title):''}<details class="step-support"><summary>Why / expected result / if yours is different</summary><div class="model-field see"><span>YOU SHOULD SEE</span><p>${esc(s.see)}</p></div><div class="model-field why"><span>WHY</span><p>${esc(s.why)}</p></div>${s.stuck?.length?`<div class="model-field stuck"><span>IF YOURS DOESN'T MATCH</span><ul>${s.stuck.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`:''}</details></div></article>`;
}
function modelingLessonPage(id){
  const l=modelLesson(id);if(!l)return notFound();const done=modelLessonDone(id),prev=MODEL.lessons.find(x=>x.order===l.order-1),next=MODEL.lessons.find(x=>x.order===l.order+1);
  return `<div class="breadcrumb"><a href="#/">Home</a> / <a href="#/modeling">3D Modelling Studio</a> / ${esc(l.title)}</div>
  <section class="model-lesson-hero revamped"><div><span class="eyebrow">LESSON ${String(l.order).padStart(2,'0')} • ${esc(l.duration)} • +100 XP</span><h1>${l.icon} ${esc(l.title)}</h1><p>${esc(l.aim)}</p><div class="model-skill-map"><div><small>NEW TODAY</small><strong>${esc(l.newSkill)}</strong></div><div><small>YOU ALREADY KNOW</small><strong>${l.priorSkills.length?esc(l.priorSkills.join(' • ')):'Nothing assumed'}</strong></div><div><small>YOU'LL USE THIS AGAIN IN</small><strong>${esc(l.reuseNext.join(' • '))}</strong></div></div></div><div class="model-complete-box"><strong>${done?'✓ Lesson checked off':'Accuracy first'}</strong><p>${done?'Revisit it when a later asset exposes a gap.':'A finished-looking object is not proof. Pass the checkpoints.'}</p><button class="button ${done?'success':'primary'}" data-action="complete-model-lesson" data-model-lesson="${l.id}">${done?'✓ Modelling lesson complete':'Mark lesson complete • +100 XP'}</button></div></section>
  ${modelLessonVideoBridge(l)}
  ${modelThinkingBlock(l)}
  <section class="model-safety-card"><span>⚠ PRODUCTION HABIT</span><strong>${esc(l.safety)}</strong></section>
  ${modelToolBoundaries(l)}
  <article class="model-lesson-detail"><section class="content-card practical-first-card model-step-guide-card"><span class="eyebrow">BUILD • STEP BY STEP</span><h2>Now open Max and follow it from Step 1.</h2><p class="model-guide-intro">Every step tells you what to do, why you are doing it and what must be true before you continue. Do not race past a failed check.</p>${renderSingleClearGuide(l.starterValues,l.studentRecipe,l.steps||[],{title:'Model it from Step 1',intro:'Work straight down. Create or change only the thing named in the current step; check the result before moving on.'})}</section>
  <section class="content-card model-practice-card revamped"><span class="eyebrow">USE IT WITHOUT COPYING</span><h2>${esc(l.practice.title)}</h2><p>${esc(l.practice.task)}</p><div class="model-check-grid">${l.practice.check.map(x=>`<div>✓ ${esc(x)}</div>`).join('')}</div></section>
  <details class="content-card model-support-details"><summary>Reference shelf • current UI, diagrams and book figures</summary><div class="support-details-inner"><p>${esc(l.intro)}</p>${modelInterfaceImages(l)}${modelBookReferences(l)}${modelReferenceCards(l.officialRefs)}</div></details>
  <section class="model-two-col"><div class="content-card"><span class="eyebrow">BREAK IT ON PURPOSE</span><h2>Common failure modes</h2><ul>${l.common.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div><div class="content-card model-judgement-card"><span class="eyebrow">MAKE THE CALL</span><h2>${esc(l.thinking?.decision?.title||'Choose deliberately')}</h2><p>${esc(l.thinking?.decision?.prompt||'Use the simplest geometry that achieves the intended result.')}</p></div></section>
  ${modelCritiqueBridge(l.thinking?.bigQuestion||'What one change would improve this model most?','Ask somebody to challenge your judgement')}
  <section class="model-lesson-footer"><div>${prev?`<a class="button ghost" href="#/modeling/lesson/${prev.id}">← ${esc(prev.title)}</a>`:''}</div><button class="button ${done?'success':'primary'}" data-action="complete-model-lesson" data-model-lesson="${l.id}">${done?'✓ Complete':'Mark complete • +100 XP'}</button><div>${next?`<a class="button ghost" href="#/modeling/lesson/${next.id}">${esc(next.title)} →</a>`:`<a class="button ghost" href="#/modeling">Back to Studio →</a>`}</div></section></article>`;
}
function modelingBuildPage(id){
  const b=modelBuild(id);if(!b)return notFound();const done=modelBuildDone(id),req=modelRequirements(b.requires),skillsReady=req.every(x=>modelLessonDone(x.id)),foundationReady=modelFoundationDone()||done,ready=skillsReady&&foundationReady,hero=b.references?.[0];
  return `<div class="breadcrumb"><a href="#/">Home</a> / <a href="#/modeling">3D Modelling Studio</a> / Build X / ${esc(b.title)}</div><section class="model-build-hero revamped"><div><span class="eyebrow">PRODUCTION BRIEF • ${esc(b.difficulty)} • ${esc(b.time)} • ${esc(b.support||'Guided checkpoints')}</span><h1>${b.icon} ${esc(b.title)}</h1><p>${esc(b.brief?.context||b.summary)}</p><div class="tutorial-tag-row large">${b.teaches.map(x=>`<span>${esc(x)}</span>`).join('')}</div></div>${hero?`<div class="model-build-hero-image"><img class="remote-reference-image" src="${esc(hero.src)}" alt="${esc(b.title)} real reference"><span>START FROM REFERENCE — NOT MEMORY</span></div>`:''}<div class="model-complete-box"><strong>${done?'✓ Build complete':!foundationReady?'🔒 Module 0 required':ready?'Prerequisites covered':'Scaffold first'}</strong><p>${done?'Revisit the brief whenever a later asset exposes a gap.':!foundationReady?'You can preview and practise this build, but completion stays locked until Game-Ready 3D Foundations + Model Doctor are passed.':ready?'You know the risky tools. Now make the decisions.':'You can read the brief now, but the linked lessons teach the techniques properly first.'}</p>${!foundationReady&&!done?`<a class="button ghost" href="#/modeling/foundations">Complete Module 0 →</a>`:`<button class="button ${done?'success':'primary'}" data-action="complete-model-build" data-model-build="${b.id}">${done?'✓ Build complete':'Mark Build X complete • +250 XP'}</button>`}</div></section>
  ${modelBuildReferenceBoard(b)}
  ${modelTopologyGuide(b)}
  ${modelBuildBrief(b)}
  ${modelBuildPlanning(b)}
  <section class="content-card"><span class="eyebrow">04 • CHECK YOUR TOOLKIT</span><h2>Skills this build expects</h2><div class="model-prereq-grid">${req.map(l=>`<a class="model-prereq ${modelLessonDone(l.id)?'done':''}" href="#/modeling/lesson/${l.id}"><span>${modelLessonDone(l.id)?'✓':'○'}</span><div><strong>${esc(l.title)}</strong><small>${esc(l.newSkill)}</small></div></a>`).join('')}</div></section>
  <section class="content-card practical-first-card model-step-guide-card"><span class="eyebrow">05 • BLOCKOUT → MODEL → CHECK</span><h2>Build it from Step 1.</h2>${renderSingleClearGuide(b.starterValues,b.studentRecipe,buildGuideSupports(b.phases||[]),{title:`Build ${b.title}`,intro:'Keep the reference visible. Work from big forms to small forms and stop whenever the checkpoint disagrees with what you have made.',recipeVisuals:b.recipeVisuals||null})}</section>
  <section class="model-variation-challenge"><div><span class="deep-label">DESIGN IT • DO NOT CLONE IT</span><h2>Make one decision yourself.</h2><p>${esc(b.variation||'Change one construction or proportion decision while preserving the skill the build is teaching.')}</p></div><span class="model-variation-icon">✦</span></section>
  <details class="content-card model-support-details"><summary>Phase map — what each stage is trying to achieve</summary><div class="support-details-inner"><div class="model-build-phases compact">${b.phases.map((ph,i)=>`<article><span>${String(i+1).padStart(2,'0')}</span><div><h3>${esc(ph.name)}</h3><p>${esc(ph.brief)}</p><div class="callout good"><b>PROOF:</b> ${esc(ph.proof)}</div></div></article>`).join('')}</div></div></details>
  ${modelQualityGates(b)}
  ${modelIndustryStudyCard(b.proStudy)}
  ${modelCritiqueBridge(b.critique||'What is the single change that would improve this asset most?','Before you call it finished')}
  <section class="model-finish-bar revamped"><p><b>Final rule:</b> fix failed geometry in the source. Do not hide problems under materials, Substance grunge or Unreal transforms.</p>${done?`<button class="button success" data-action="complete-model-build" data-model-build="${b.id}">✓ Build complete</button>`:foundationReady?`<button class="button primary" data-action="complete-model-build" data-model-build="${b.id}">Mark complete • +250 XP</button>`:`<a class="button ghost" href="#/modeling/foundations">🔒 Pass Module 0 first →</a>`}</section>`;
}
function modelingFixPage(id){
  const f=modelFix(id);if(!f)return notFound();const done=modelFixDone(id);
  return `<div class="breadcrumb"><a href="#/">Home</a> / <a href="#/modeling">3D Modelling Studio</a> / Fix This Model / ${esc(f.title)}</div><section class="model-fix-hero"><span class="model-fix-big-icon">${f.icon}</span><div><span class="eyebrow">FIX THIS MODEL • +75 XP</span><h1>${esc(f.title)}</h1><p>${esc(f.symptom)}</p></div></section><section class="model-fix-workflow"><article><span>01</span><h2>Diagnose first</h2><ol>${f.diagnose.map(x=>`<li>${esc(x)}</li>`).join('')}</ol></article><article><span>02</span><h2>Repair one thing</h2><ol>${f.repair.map(x=>`<li>${esc(x)}</li>`).join('')}</ol></article><article><span>03</span><h2>Prove the fix</h2><p>${esc(f.proof)}</p></article></section><section class="model-safety-card"><span>RULE</span><strong>Work on a copy. If a “repair” creates a second mystery problem, undo it rather than stacking fixes on top of fixes.</strong></section><div class="model-fix-complete"><button class="button ${done?'success':'primary'}" data-action="complete-model-fix" data-model-fix="${f.id}">${done?'✓ Clinic complete':'Mark clinic complete • +75 XP'}</button></div>`;
}



function teamsProjectNoticePage(){
  return `<div class="page-head"><div class="breadcrumb"><a href="#/">Home</a> / Projects</div><span class="eyebrow">TEAMS-FIRST WORKFLOW</span><h1>Project work lives in Microsoft Teams</h1><p class="muted">The Hub now focuses on learning, practice, revision, critique and progress. Project briefs, deadlines, formal submissions and assessed feedback stay in Microsoft Teams so there is only one place to hand work in.</p></div>
  <section class="section"><div class="section-head"><div><h2>Use the Hub to get better at the work</h2><p>Learn the technique here, practise it, use Critique Board for informal feedback, then follow the project brief and submit through Teams.</p></div></div><div class="button-row"><a class="button primary" href="#/homework">Open independent study →</a><a class="button ghost" href="#/critique">Open Critique Board</a><a class="button ghost" href="#/">Back to Home</a></div></section>`;
}

function classHomeShortcut(){
  if(!BACKEND.user)return '';
  const teacher=isTeacher();
  return `<section class="portal-class-shortcut ${teacher?'teacher':'student'}">
    <div class="portal-class-shortcut-icon">🏫</div>
    <div class="portal-class-shortcut-copy"><span class="eyebrow">${teacher?'TEACHING GROUPS':'YOUR TEACHING GROUP'}</span><h2>${teacher?'Classes':'My Class'}</h2><p>${teacher?'Jump straight to student rosters, class codes and class progress without hunting through the Teacher dashboard.':'Keep your class, progress and peer feedback one click away.'}</p></div>
    <div class="portal-class-shortcut-actions"><a class="button primary" href="#/classes">${teacher?'Open Classes':'Open My Class'} →</a><a class="button ghost" href="${teacher?'#/teacher':'#/progress'}">${teacher?'Teacher dashboard':'My Progress'}</a></div>
  </section>`;
}

function dashboard(){
  return `<section class="portal-hero portal-hero-clean">
    <div><span class="eyebrow">UE5 LEARNING HUB</span><h1>Choose a path.</h1><p>Learn systems. Design worlds. Build assets. Practise, critique and keep an eye on the industry.</p></div>
  </section>

  ${classHomeShortcut()}

  <section class="portal-path-grid" aria-label="Choose a Learning Hub area">
    <a class="portal-path-card programming" href="#/programming"><div class="portal-path-icon">⌘</div><span class="portal-kicker">BUILDING BLOCKS • SYSTEMS • BLUEPRINTS</span><h2>Unreal Learning</h2><p>Learn Unreal terms in tiny Building Blocks, understand the deeper systems, then apply them in practical tutorials and challenge builds.</p><div class="portal-chip-row"><span>${BLOCKS.blocks.filter(b=>b.tier==='core').length} core blocks</span><span>${DATA.lessons.length} system lessons</span><span>${(TOOLS.families||[]).length} recipe families</span></div><strong>Enter Unreal Learning →</strong></a>
    <a class="portal-path-card design" href="#/design"><div class="portal-path-icon">✦</div><span class="portal-kicker">LEVELS • ART • LIGHT • SOUND</span><h2>Design</h2><p>Build readable spaces, create atmosphere, guide players and learn why strong game worlds communicate rather than simply decorate.</p><div class="portal-chip-row"><span>${DESIGN.modules.length} disciplines</span><span>24 different games</span><span>Black Box challenges</span></div><strong>Enter Designer Studio →</strong></a>
    <a class="portal-path-card modeling" href="#/modeling"><div class="portal-path-icon">⬡</div><span class="portal-kicker">3DS MAX • TOPOLOGY • UVS</span><h2>3D Modelling</h2><p>Start from reference, plan the form, follow clear 3ds Max steps, inspect the mesh and finish with a game-ready asset you can explain.</p><div class="portal-chip-row"><span>${MODEL_FOUNDATIONS.chapters.length} foundations chapters</span><span>${MODEL.lessons.length} deep lessons</span><span>${MODEL.builds.length} Build X</span></div><strong>Open 3D Modelling Studio →</strong></a>
    <a class="portal-path-card sculpt" href="#/sculpt"><div class="portal-path-icon">🗿</div><span class="portal-kicker">DIGITAL CLAY • FORM • SILHOUETTE</span><h2>Sculpt Playground</h2><p>Push and pull digital clay in SculptGL with six tiny guided exercises, then inspect what exists underneath the surface.</p><div class="portal-chip-row"><span>${SCULPT.practices.length} exercises</span><span>Browser sculpting</span><span>OBJ → Max</span></div><strong>Play with clay →</strong></a>
    <a class="portal-path-card news" href="#/news"><div class="portal-path-icon">◉</div><span class="portal-kicker">LIVE • INDUSTRY • WATCH & LISTEN</span><h2>News & Industry</h2><p>Follow games and development stories, trailers, podcasts and industry discussion. Save what matters and come back later.</p><div class="portal-chip-row"><span>Live feeds</span><span>Read later</span><span>Discussion</span></div><strong>See what is happening →</strong></a>
  </section>

  <a class="portal-resource-home" href="#/resources"><div class="portal-resource-home-icon">🧰</div><div><span class="portal-kicker">FREE ASSETS • SOUND • LEVEL EXPLORERS • INDUSTRY REFERENCE</span><h2>Resource Library</h2><p>Need a texture, placeholder kit, sound effect, level to dissect, UI reference or professional design talk? Start here instead of opening twenty random tabs.</p><div class="portal-chip-row"><span>${DESIGN.resources.length} curated links</span><span>CC0 clearly labelled</span><span>noclip.website</span><span>ambientCG</span></div></div><strong>Open the useful cupboard →</strong></a>

  <section class="portal-session-grid">
    ${continueMissionCard()}
    ${featuredStudentCard()}
  </section>`;
}


function programmingPage(){
  const i=level(),n=nextLesson(),np=pathProgress(n.path),pb=pendingUnlockedBuild(),blocksDone=(state.blockCompleted||[]).length,coreBlocks=BLOCKS.blocks.filter(b=>b.tier==='core'),coreDone=coreBlocks.filter(b=>blockDone(b.id)).length;
  const pathsComplete=DATA.paths.filter(p=>pathProgress(p.id).pct===100).length;
  return `<div class="page-head programming-page-head"><div class="breadcrumb"><a href="#/">Home</a> / Unreal Learning</div><span class="eyebrow">UNDERSTAND THE ENGINE • BUILD SYSTEMS • APPLY THEM</span><h1>⌘ Unreal Learning</h1><p class="muted">You do not need to memorise Unreal before making games. Learn a small Building Block, use it in a system, then meet it again in tutorials and challenge builds.</p></div>
  <section class="unreal-learning-ladder"><a href="#/blocks"><span>01</span><div><small>3–8 MINUTE MICRO-LEARNING</small><h2>🧱 Building Blocks</h2><p>What does IA, BPI, Struct, AnimBP, NavMesh or Skeletal Mesh actually mean? Learn the term once with a tiny proof exercise.</p><strong>${coreDone}/${coreBlocks.length} Core learned →</strong></div></a><a href="#/path/${n.path}"><span>02</span><div><small>DEEPER SYSTEM UNDERSTANDING</small><h2>⌘ Core System Lessons</h2><p>Understand why systems work, build them carefully, debug them and apply them in a larger mechanic.</p><strong>${completedLessons().length}/${DATA.lessons.length} lessons complete →</strong></div></a><a href="#/tutorials"><span>03</span><div><small>JUST-IN-TIME BUILDING</small><h2>🛠 Quick Tutorials</h2><p>Choose a system family first, then the exact practical outcome. Similar builds are grouped instead of repeated as separate top-level destinations.</p><strong>${(TOOLS.families||[]).length} families • ${TOOLS.tutorials.filter(t=>!t.libraryHidden).length} family builds + ${TOOLS.tutorials.filter(t=>t.libraryHidden).length} lesson applications →</strong></div></a><a href="#/challenges"><span>04</span><div><small>REMOVE THE TRAINING WHEELS</small><h2>🔥 Challenges & Practice</h2><p>Combine systems without every node being handed to you. This is where copying becomes understanding.</p><strong>Prove it →</strong></div></a></section>
  <section class="programming-continue"><div><span class="eyebrow">CONTINUE CORE SYSTEMS • ${esc(path(n.path).title)}</span><h2>${esc(n.title)}</h2><p>${esc(n.short)}</p><div class="path-meta"><span>${n.duration} • ${n.xp} XP</span><span>${np.pct}% path complete</span></div><div class="progress"><span style="width:${np.pct}%"></span></div></div><div class="programming-continue-actions"><a class="button primary" href="${pb?`#/chapter-build/${pb.path}`:`#/lesson/${n.id}`}">${pb?`🎮 Build: ${esc(pb.title)}`:'▶ Continue core lesson'}</a><a class="button ghost" href="#/blocks">🧱 Building Blocks</a></div></section>
  <section class="snippet-programming-cta integrated"><div><span class="eyebrow">⚡ EPIC PASTE ASSISTS</span><h2>Learn the system first; use the shortcut at the right moment.</h2><p>Use the official Epic paste assists inside the relevant Unreal Learning lessons and recipe families. The standalone bank remains a searchable reference shelf when you need to find one directly.</p></div><a class="button ghost" href="#/snippets">Search the reference bank →</a></section>
  <div class="stat-grid programming-stats"><div class="stat"><small>Building Blocks</small><strong>${blocksDone}/${BLOCKS.blocks.length}</strong></div><div class="stat"><small>Core lessons</small><strong>${completedLessons().length}/${DATA.lessons.length}</strong></div><div class="stat"><small>Practical builds</small><strong>${TOOLS.tutorials.filter(t=>tutorialDone(t.id)).length}/${TOOLS.tutorials.length}</strong></div><div class="stat"><small>Total XP</small><strong>${i.xp}</strong></div></div>
  <section class="section"><div class="section-head"><div><span class="eyebrow">WHEN YOU WANT THE DEEPER VERSION</span><h2>Core System Lessons</h2><p>These are not prerequisites for every tutorial. Follow them in order as a course, or open the system your project needs.</p></div></div><div class="path-grid">${DATA.paths.map(p=>{const x=pathProgress(p.id);return `<a class="path-card" href="#/path/${p.id}"><div class="path-icon">${p.icon}</div><h3>${esc(p.title)}</h3><p>${esc(p.description)}</p><div class="path-meta"><span>${x.done}/${x.total} lessons</span><span>${x.pct}%</span></div><div class="progress"><span style="width:${x.pct}%"></span></div></a>`}).join('')}</div></section>
  <section class="blocks-mini-cta"><div><span class="deep-label">DON'T KNOW A TERM?</span><h2>Search the Building Blocks, not YouTube roulette.</h2><p>${BLOCKS.blocks.length} concise Unreal concepts are organised into Core, Common and Later. Only ${coreBlocks.length} are suggested early; the rest appear when tutorials need them.</p></div><a class="button primary" href="#/blocks">Open Building Blocks →</a></section>
  ${pb?`<section class="section dashboard-unlock"><div class="section-head"><div><span class="eyebrow">YOU FINISHED A CHAPTER</span><h2>🎮 New Chapter Build unlocked</h2><p>Combine what you learned into something playable before moving on.</p></div></div>${chapterBuildCard(pb,{compact:true})}</section>`:''}`;
}

const NEWS_CACHE_STORE='ue5hub:v3331:news-cache';
let newsStories=[];
let newsCategory='all';
let newsSearch='';
let newsSocial={saved:new Set(),savedItems:[],votes:{},myVotes:new Set(),comments:{},available:true,savedLoaded:false};

function newsStoryKey(value){
  const text=String(value||'');let h=2166136261;
  for(let i=0;i<text.length;i++){h^=text.charCodeAt(i);h=Math.imul(h,16777619)}
  return `news-${(h>>>0).toString(36)}`;
}
function newsPlainText(value){
  const doc=new DOMParser().parseFromString(String(value||''),'text/html');
  return (doc.body.textContent||'').replace(/\s+/g,' ').trim();
}
function newsImage(item){
  const direct=safeUrl(item.thumbnail)||safeUrl(item.enclosure?.link);
  if(direct)return direct;
  const html=String(item.description||item.content||''),m=html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return safeUrl(m?.[1]||'');
}
function newsItemCategory(source,item){
  if(source.category==='podcast')return 'podcast';
  const text=`${item.title||''} ${newsPlainText(item.description||'')}`.toLowerCase();
  if(/\b(trailer|teaser|gameplay reveal|reveal trailer|launch trailer|announcement trailer)\b/.test(text))return 'trailer';
  return source.category||'games';
}
function newsDate(value){
  const d=new Date(value||0);return Number.isNaN(d.getTime())?new Date(0):d;
}
function newsAge(value){
  const d=new Date(value),diff=Date.now()-d.getTime();if(!Number.isFinite(diff))return '';
  const mins=Math.max(0,Math.round(diff/60000));if(mins<60)return mins<=1?'just now':`${mins}m ago`;
  const hrs=Math.round(mins/60);if(hrs<24)return `${hrs}h ago`;
  const days=Math.round(hrs/24);if(days<14)return `${days}d ago`;
  return d.toLocaleDateString('en-GB',{day:'numeric',month:'short'});
}
function loadNewsCache(){
  try{const c=JSON.parse(localStorage.getItem(NEWS_CACHE_STORE)||'null');if(!c?.items?.length)return null;const age=Date.now()-Number(c.time||0);if(age>NEWS.cacheMinutes*60000)return null;return c}catch(e){return null}
}
function saveNewsCache(items){
  try{localStorage.setItem(NEWS_CACHE_STORE,JSON.stringify({time:Date.now(),items:items.slice(0,90)}))}catch(e){}
}
function newsFeedUrlForFetch(feed,force=false){
  try{
    const u=new URL(String(feed||''));
    // rss2json/CDN can keep serving the same feed URL from its own cache even
    // after our local cache is cleared. Give the upstream feed a shared time
    // bucket so normal loads advance regularly and a manual refresh advances
    // immediately without creating a unique URL for every student/page load.
    const normalMinutes=Math.max(5,Number(NEWS.cacheMinutes)||10);
    const bucketMs=(force?1:normalMinutes)*60000;
    u.searchParams.set('ue5hub_feed',String(Math.floor(Date.now()/bucketMs)));
    return u.toString();
  }catch(e){return String(feed||'')}
}
async function fetchNewsSource(source,{force=false}={}){
  const fetchFeed=async(feed,noStore=false)=>{
    const url=`${NEWS.proxy}${encodeURIComponent(feed)}`;
    const options={headers:{Accept:'application/json'}};
    if(noStore)options.cache='no-store';
    const res=await fetch(url,options);if(!res.ok)throw new Error(`${source.name}: HTTP ${res.status}`);
    const data=await res.json();if(data.status!=='ok'||!Array.isArray(data.items))throw new Error(`${source.name}: feed unavailable`);
    return data;
  };
  let data;
  try{data=await fetchFeed(newsFeedUrlForFetch(source.feed,force),force)}
  catch(err){
    // A small number of RSS servers reject unknown query parameters. Fall
    // back to their canonical feed rather than losing that source entirely.
    console.warn(`Fresh news fetch fallback: ${source.name}`,err.message);
    data=await fetchFeed(source.feed,force);
  }
  return data.items.map(item=>{
    const link=safeUrl(item.link||item.guid);if(!link)return null;
    const description=newsPlainText(item.description||item.content||'').slice(0,360);
    return {key:newsStoryKey(link),url:link,title:newsPlainText(item.title||'Untitled story').slice(0,500),summary:description,source:source.name,sourceId:source.id,badge:source.badge||'NEWS',category:newsItemCategory(source,item),date:newsDate(item.pubDate).toISOString(),image:newsImage(item)};
  }).filter(Boolean);
}
async function loadNewsSocial(){
  newsSocial={saved:new Set(),savedItems:[],votes:{},myVotes:new Set(),comments:{},available:true,savedLoaded:false};
  if(!BACKEND.user)return;
  try{
    const x=await BACKEND.getNewsState(newsStories.map(s=>s.key));
    newsSocial={saved:new Set(x.saved||[]),savedItems:[],votes:x.votes||{},myVotes:new Set(x.myVotes||[]),comments:x.comments||{},available:true,savedLoaded:false};
  }catch(err){newsSocial.available=false;console.warn('News social',err.message);toast(err.message)}
}
async function loadSavedNewsItems(force=false){
  if(!BACKEND.user||newsSocial.savedLoaded&&!force)return;
  try{
    const savedRows=await BACKEND.getSavedNews({force});
    newsSocial.savedItems=(savedRows||[]).map(r=>({key:r.story_key,url:r.story_url,title:r.story_title,summary:r.story_summary||'Saved for later.',source:r.story_source||'Saved story',sourceId:'saved',badge:'★',category:r.story_category||'games',date:r.story_date||r.saved_at,image:r.story_image||'',savedAt:r.saved_at}));
    newsSocial.saved=new Set((savedRows||[]).map(r=>r.story_key));
    newsSocial.savedLoaded=true;
  }catch(err){newsSocial.available=false;console.warn('Saved news',err.message);toast(err.message)}
}
async function loadNewsFeed(force=false){
  const box=$('#newsFeed');if(!box)return;
  box.innerHTML='<div class="news-loading"><span class="news-pulse"></span><div><strong>Checking the feeds…</strong><p>Pulling current stories from the selected games and development sources.</p></div></div>';
  let items=[],sourceCount=0;
  const previousKeys=new Set(newsStories.map(x=>x.key));
  const cached=!force&&loadNewsCache();
  if(cached){items=cached.items;sourceCount=new Set(items.map(x=>x.sourceId)).size}
  else{
    const results=await Promise.allSettled(NEWS.sources.map(source=>fetchNewsSource(source,{force})));
    sourceCount=results.filter(r=>r.status==='fulfilled'&&r.value.length).length;
    items=results.flatMap(r=>r.status==='fulfilled'?r.value:[]);
    const seen=new Set();items=items.filter(x=>!seen.has(x.url)&&(seen.add(x.url),true)).sort((a,b)=>new Date(b.date)-new Date(a.date)).slice(0,90);
    if(items.length)saveNewsCache(items);
  }
  newsStories=items;
  await loadNewsSocial();
  renderNewsFeed();
  const status=$('#newsLiveStatus');
  if(status){
    if(!items.length)status.textContent='Live feeds unavailable';
    else if(cached)status.textContent=`${items.length} live stories • cached recently`;
    else if(force){
      const newCount=items.filter(x=>!previousKeys.has(x.key)).length;
      const refreshedAt=new Date().toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'});
      status.textContent=`${items.length} live stories • ${newCount?`${newCount} new`:'no newer items'} • ${sourceCount}/${NEWS.sources.length} sources • refreshed ${refreshedAt}`;
      toast(newCount?`News refreshed — ${newCount} new stor${newCount===1?'y':'ies'}.`:'News refreshed — the sources returned no newer stories yet.');
    }else status.textContent=`${items.length} live stories • ${sourceCount}/${NEWS.sources.length} sources • updated now`;
  }
}
function newsStoryByKey(key){return newsStories.find(x=>x.key===key)||(newsSocial.savedItems||[]).find(x=>x.key===key)}
function newsCard(story){
  const saved=newsSocial.saved.has(story.key),voted=newsSocial.myVotes.has(story.key),votes=newsSocial.votes[story.key]||0,comments=newsSocial.comments[story.key]||0;
  const category=NEWS.categories.find(c=>c.id===story.category)?.label||'Games';
  return `<article class="news-card" data-news-story="${esc(story.key)}"><div class="news-card-media">${story.image?`<img src="${esc(story.image)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:`<div class="news-image-fallback"><b>${esc(story.badge)}</b><span>${esc(story.source)}</span></div>`}<span class="news-category-pill ${esc(story.category)}">${esc(category)}</span></div><div class="news-card-body"><div class="news-meta"><span>${esc(story.source)}</span><time datetime="${esc(story.date)}">${esc(newsAge(story.date))}</time></div><h2>${esc(story.title)}</h2><p>${esc(story.summary||'Open the original source to read or watch the full story.')}</p><div class="news-actions"><a class="button small primary" href="${esc(story.url)}" target="_blank" rel="noopener">Open source ↗</a><button class="news-action ${saved?'active':''}" data-action="news-save" data-story="${esc(story.key)}" title="Save for later">${saved?'★ Saved':'☆ Save'}</button><button class="news-action ${voted?'active':''}" data-action="news-vote" data-story="${esc(story.key)}" title="Upvote story">↑ ${votes}</button><button class="news-action" data-action="news-discuss" data-story="${esc(story.key)}">💬 ${comments}</button></div></div><div class="news-comments-panel" id="news-comments-${esc(story.key)}" hidden></div></article>`;
}
function renderNewsFeed(){
  const box=$('#newsFeed');if(!box)return;
  let rows=newsStories;
  if(newsCategory==='saved'){
    if(BACKEND.user){const live=Object.fromEntries(newsStories.map(x=>[x.key,x]));rows=(newsSocial.savedItems||[]).map(x=>live[x.key]||x)}else rows=[];
  }
  else if(newsCategory!=='all')rows=rows.filter(x=>x.category===newsCategory);
  if(newsSearch){const q=newsSearch.toLowerCase();rows=rows.filter(x=>`${x.title} ${x.summary} ${x.source}`.toLowerCase().includes(q))}
  const count=$('#newsResultCount');if(count)count.textContent=`${rows.length} stor${rows.length===1?'y':'ies'}`;
  if(!newsStories.length&&!(newsCategory==='saved'&&rows.length)){box.innerHTML='<div class="empty news-empty"><h2>The live feed did not load.</h2><p>The Learning Hub is still usable. Try the refresh button in a moment; source sites or the RSS converter may simply be unavailable.</p><button class="button" data-action="news-refresh">Try again</button></div>';return}
  if(newsCategory==='saved'&&!BACKEND.user){box.innerHTML='<div class="project-login-gate"><h2>Read Later follows your account.</h2><p>Sign in to save stories on one device and come back to them from another.</p><button class="button primary" data-action="open-auth">Sign in / create account</button></div>';return}
  box.innerHTML=rows.length?`<div class="news-grid">${rows.map(newsCard).join('')}</div>`:'<div class="empty news-empty"><h2>No stories match that view.</h2><p>Try another category or clear the search.</p></div>';
}
function newsPage(){
  return `<div class="page-head news-page-head"><div class="breadcrumb"><a href="#/">Home</a> / News & Industry</div><span class="eyebrow">LIVE GAMES • DEVELOPMENT • INDUSTRY • WATCH & LISTEN</span><h1>◉ News & Industry</h1><p class="muted">A student-friendly window into what is happening now. Headlines and short excerpts come from the original publishers; open the source for the full story, episode or video.</p><div class="news-live-row"><span class="live-dot"></span><strong id="newsLiveStatus">Loading live feeds…</strong><button class="link-button" data-action="news-refresh">Refresh</button></div></div>
  <section class="news-toolbar"><div class="news-filter-row">${NEWS.categories.map(c=>`<button class="news-filter ${c.id==='all'?'active':''}" data-news-filter="${esc(c.id)}">${c.icon} ${esc(c.label)}</button>`).join('')}</div><div class="news-search-wrap"><span>⌕</span><input id="newsSearch" type="search" enterkeyhint="search" placeholder="Search the live feed…"><small id="newsResultCount">0 stories</small></div></section>
  <section class="news-source-note"><div><b>Live sources</b><span>${NEWS.sources.map(s=>esc(s.name)).join(' • ')}</span></div><p>Save, vote and discussion features require a signed-in Learning Hub account. The Hub stores your interaction with a story, not a copy of the publisher's article.</p></section>
  <section id="newsFeed"><div class="news-loading"><span class="news-pulse"></span><div><strong>Checking the feeds…</strong><p>Pulling current stories from games and development sources.</p></div></div></section>`;
}
async function toggleNewsComments(key){
  const panel=$(`#news-comments-${key}`);if(!panel)return;
  if(!panel.hidden){panel.hidden=true;return}
  panel.hidden=false;
  if(!BACKEND.user){panel.innerHTML='<div class="news-comment-signin"><p>Sign in to read and join the Learning Hub discussion.</p><button class="button small" data-action="open-auth">Sign in</button></div>';return}
  panel.innerHTML='<div class="muted">Loading discussion…</div>';
  try{
    const rows=await BACKEND.getNewsComments(key),story=newsStoryByKey(key);
    panel.innerHTML=`<div class="news-comment-head"><strong>Learning Hub discussion</strong><span>${rows.length} comment${rows.length===1?'':'s'}</span></div><div class="news-comment-list">${rows.length?rows.map(c=>`<div class="news-comment"><div><b>${esc(c.display_name||'Student')}${c.role==='teacher'?' <span class="staff-role-pill compact">🎓 TEACHER</span>':''}</b><span>${esc(c.role||'student')} • ${new Date(c.created_at).toLocaleString('en-GB')}</span></div><p>${esc(c.body)}</p>${c.can_delete?`<button class="link-button danger-link" data-action="news-comment-delete" data-comment="${esc(c.id)}" data-story="${esc(key)}">Delete</button>`:''}</div>`).join(''):'<div class="muted">No comments yet. Start the discussion.</div>'}</div><form class="news-comment-form" data-action-form="news-comment" data-story="${esc(key)}"><label>Comment on this story<textarea name="body" maxlength="2000" required placeholder="What is interesting, useful or worth questioning here?"></textarea></label><button class="button small primary" type="submit">Post comment</button></form>${story?`<a class="news-discussion-source" href="${esc(story.url)}" target="_blank" rel="noopener">Open the original story before replying ↗</a>`:''}`;
  }catch(err){panel.innerHTML=`<div class="offline-note">${esc(err.message)}</div>`}
}

function pathPage(id){
  const p=path(id);if(!p)return notFound();
  const ls=DATA.lessons.filter(l=>l.path===id).sort((a,b)=>a.order-b.order),x=pathProgress(id);
  return `<div class="page-head"><div class="breadcrumb"><a href="#/">Dashboard</a> / Learning path</div><span class="eyebrow">${x.done}/${x.total} complete • ${x.pct}%</span><h1>${p.icon} ${esc(p.title)}</h1><p class="muted">${esc(p.description)}</p><div class="progress"><span style="width:${x.pct}%"></span></div></div><div class="lesson-list">${ls.map(lessonRow).join('')}</div>${chapterUnlockCard(id)}`;
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
  return `<section class="content-card teams-proof-card" id="evidence">
    <span class="eyebrow">10 • Keep proof for Teams</span><h2>Capture what proves it works</h2>
    <p class="muted">The Hub does not collect assignment evidence. Use this checklist to decide what is worth capturing, then submit through Microsoft Teams when your teacher asks for it.</p>
    ${l.evidencePrompt?`<div class="evidence-brief">
      <div><span class="deep-label">CAPTURE</span>${l.evidencePrompt.show.map(x=>`<p>✓ ${esc(x)}</p>`).join('')}</div>
      <div><span class="deep-label">BE READY TO EXPLAIN</span>${l.evidencePrompt.reflection.map(x=>`<p>• ${esc(x)}</p>`).join('')}</div>
    </div>`:''}
    <div class="callout good"><b>Teams hand-in:</b> keep the clearest screenshot, clip, build link or short reflection your brief asks for. Nothing is uploaded to the Hub from this section.</div>
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
  const p=path(l.path),done=state.completed.includes(id),pathLessons=DATA.lessons.filter(x=>x.path===l.path),isLast=l.order===Math.max(...pathLessons.map(x=>x.order));
  return `<div class="breadcrumb"><a href="#/">Dashboard</a> / <a href="#/path/${p.id}">${esc(p.title)}</a> / ${esc(l.title)}</div>
  <section class="lesson-hero">
    <div><span class="eyebrow">${esc(p.title)} • Lesson ${l.order}</span><h1>${esc(l.title)}</h1><p>${esc(l.short)}</p>
      <div class="tags"><span class="tag ${tagClass(l.difficulty)}">${l.difficulty}</span><span class="tag">${l.duration}</span><span class="tag">+${l.xp} XP</span>${done?'<span class="tag beginner">Completed ✓</span>':''}${projectStatus(id)==='complete'?'<span class="tag beginner">Game mechanic ✓</span>':''}</div>
      <div class="mode-toggle"><button data-action="mode" data-mode="guided" class="${lessonMode==='guided'?'active':''}">Guided</button><button data-action="mode" data-mode="independent" class="${lessonMode==='independent'?'active':''}">Independent</button></div>
    </div>
    <div class="lesson-meta"><div class="meta-line"><small>Learning aim</small><strong>${esc(l.aim)}</strong></div><div class="meta-line"><small>Lesson model</small><strong>Learn → Practise → Prove</strong></div><div class="meta-line"><small>Practice mechanic</small><strong>${esc(l.projectTask?.name||'Practice build')}</strong></div></div>
  </section>
  ${lessonBuildingBlocks(l)}

  <div class="lesson-layout ${lessonMode==='independent'?'independent':''}">
  <article>
    <section class="content-card" id="aims"><span class="eyebrow">01 • Goal</span><h2>What you should be able to do</h2><div class="goal-grid">${l.goals.map(g=>`<div class="goal">${esc(g)}</div>`).join('')}</div></section>

    <section class="content-card guided-section practical-first-card" id="guided"><span class="eyebrow">02 • BUILD IT</span><h2>Start at Step 1</h2><p>No prep list. No jumping between sections. Make each thing when the walkthrough asks for it and test as you go.</p>${guidedBuild(l)}</section>
    <section class="content-card guided-hidden-note"><span class="eyebrow">Independent mode</span><h2>Guided steps hidden</h2><p>Use the aim, explanation and challenges as your brief. Switch back only when the walkthrough is genuinely needed.</p></section>

    ${lessonApplications(l)}
    ${lessonSnippetBridge(l)}

    <section class="content-card" id="check"><span class="eyebrow">03 • CHECK IT</span><h2>Prove the build and the idea</h2>${quizHtml(l)}</section>

    <details class="content-card learn-card lesson-support-details" id="learn"><summary>04 • Understand why this works</summary><div class="support-details-inner">
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
    </div></details>
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

    <section class="content-card" id="game"><span class="eyebrow">09 • Practice build</span><h2>Apply it in a playable system</h2><p>Use Signal Lost as the shared practice spine, or adapt the same mechanic to a sandbox. This is practice, not an assignment submission — formal project work stays in Microsoft Teams.</p>${projectTaskCard(l)}</section>

    ${evidenceSection(l)}
    ${commentSection(l)}
    ${isLast?chapterUnlockCard(l.path):''}
  </article>

  <aside class="lesson-nav">
    <div class="lesson-nav-group"><span class="lesson-nav-label">DO THESE FIRST</span>
      <button class="section-button" data-action="scroll" data-target="aims">01 Learning aims</button>
      <button class="section-button" data-action="scroll" data-target="guided">02 Step-by-step guide</button>
      <button class="section-button" data-action="scroll" data-target="check">03 Check it</button>
      <button class="section-button" data-action="scroll" data-target="learn">04 Understand</button>
    </div>
    ${(hiddenLessonApplications(l.id).length||snippetsForLesson(l.id).length)?`<div class="lesson-nav-group"><span class="lesson-nav-label">HELPFUL SHORTCUTS</span>${hiddenLessonApplications(l.id).length?'<button class="section-button" data-action="scroll" data-target="lesson-applications">🛠 Practical application</button>':''}${snippetsForLesson(l.id).length?'<button class="section-button" data-action="scroll" data-target="lesson-assists">⚡ Epic paste assists</button>':''}</div>`:''}
    <div class="lesson-nav-group"><span class="lesson-nav-label">EXTEND IF ASKED</span>
      <button class="section-button" data-action="scroll" data-target="apply">05 Stretch & challenge</button>
      <button class="section-button" data-action="scroll" data-target="experience">06 Play / watch</button>
      <button class="section-button" data-action="scroll" data-target="homework">07 Homework</button>
    </div>
    <div class="lesson-nav-group"><span class="lesson-nav-label">WHEN STUCK</span>
      <button class="section-button" data-action="scroll" data-target="debug">08 Debug & improve</button>
      <button class="section-button" data-action="scroll" data-target="game">09 Practice build</button>
    </div>
    <div class="lesson-nav-group"><span class="lesson-nav-label">PROVE & REFLECT</span>
      <button class="section-button" data-action="scroll" data-target="evidence">10 Proof for Teams</button>
      <button class="section-button" data-action="scroll" data-target="comments">11 Ask / reflect</button>
    </div>
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
    return `<div class="page-head"><div class="breadcrumb"><a href="#/">Dashboard</a> / Projects</div><span class="eyebrow">Projects & progress</span><h1>▣ Projects</h1><p class="muted">A lightweight milestone evidence and feedback space for assignment, game-jam and team work.</p></div><div class="project-login-gate"><h2>Learning stays open. Project work is private.</h2><p>Sign in to keep project logs, screenshots, milestones and team feedback together.</p><button class="button primary" data-action="open-auth">Sign in / create account</button></div>`;
  }
  const teacher=BACKEND.profile?.role==='teacher';
  if(teacher){
    return `<div class="page-head"><div class="breadcrumb"><a href="#/">Dashboard</a> / Projects</div><span class="eyebrow">Projects & progress</span><h1>▣ Project Templates</h1><p class="muted">Create a simple brief and milestones for a class. Students then start an individual copy or form their own group.</p></div>
    <div class="project-create-grid teacher-template-create">
      <section class="project-panel"><span class="eyebrow">Teacher template</span><h2>Create class project</h2><form class="form-grid" data-action-form="create-project-template">
        <label>Project title<input name="title" maxlength="160" required placeholder="e.g. Unit 321 — 3D Environment"></label>
        <div class="form-two"><label>Class<select name="classId" id="templateClassSelect" required><option value="">Choose a class…</option></select></label><label>How students work<select name="workMode"><option value="either">Students choose individual or group</option><option value="individual">Individual only</option><option value="group">Group only</option></select></label></div><div id="templateClassHelp" class="template-class-help" hidden></div>
        <div class="form-two"><label>Type of work<select name="projectKind"><option value="assignment">Assignment</option><option value="group_project">Group project</option><option value="game_jam">Game jam</option><option value="client">Client project</option><option value="practice">Practice</option><option value="other">Other</option></select></label><label>Course / unit <small>optional</small><input name="assessmentUnit" maxlength="160" placeholder="e.g. Unit 321"></label></div>
        <div class="form-field"><span class="form-field-label">Brief</span>${projectRichEditor('brief','','Write the project brief students need to see. Use headings and lists to break up longer tasks.',6000)}</div>
        <button class="button primary" type="submit">Create template →</button>
      </form></section>
      <section class="project-panel"><span class="eyebrow">Deliberately lightweight</span><h2>What a template does</h2><p>It gives students the brief and milestone structure. It does <b>not</b> grade them, collect a final submission or replace your college assessment system.</p><div class="callout good"><b>Student flow:</b> Available Project → Start Individual / Start Group → milestone evidence → written update + screenshots → teacher feedback.</div></section>
    </div>
    <section class="section"><div class="section-head"><div><h2>Your class templates</h2><p>Draft templates stay hidden from students. Publish when the brief and milestones are ready.</p></div></div><div id="projectTemplatesList"><div class="empty">Loading templates…</div></div></section>
    <section class="section"><div class="section-head"><div><h2>Class project activity</h2><p>Student project copies linked to classes you teach.</p></div></div><div id="projectsList"><div class="empty">Loading projects…</div></div></section>`;
  }
  return `<div class="page-head"><div class="breadcrumb"><a href="#/">Dashboard</a> / Projects</div><span class="eyebrow">Teacher-set projects • milestone evidence • feedback</span><h1>▣ Projects</h1><p class="muted">Your teacher publishes the projects for your class. Start them here, then keep your evidence, files and feedback together.</p></div>
  <section class="section available-projects-section"><div class="section-head"><div><h2>Available Projects</h2><p>Projects published by your teachers appear here. Choose Individual or Group only when the brief allows it.</p></div></div><div id="availableProjectsList"><div class="empty">Loading available projects…</div></div></section>
  <section class="section"><div class="section-head"><div><h2>Your Projects</h2><p>Your active, completed and group projects.</p></div></div><div id="projectsList"><div class="empty">Loading projects…</div></div></section>
  <section class="section"><div class="section-head"><div><h2>Join a Group Project</h2><p>If another student has already started the teacher-published project as a group, enter the Project Lead's code here.</p></div></div><div class="project-create-grid student-project-join-only">
    <section class="project-panel"><span class="eyebrow">Teacher-published projects only</span><h2>Group project code</h2><p>Only students in the correct class can join. Students cannot create separate projects outside the projects published by their teacher.</p><form class="form-grid" data-action-form="join-project"><label>Project code<input name="projectCode" maxlength="20" required placeholder="GRP-XXXXXXXX"></label><button class="button" type="submit">Join group project</button></form></section>
  </div></section>`;
}

function projectListCards(rows,emptyMessage='No projects yet.'){
  if(!rows.length)return `<div class="empty"><h3>${esc(emptyMessage)}</h3></div>`;
  return `<div class="multi-project-grid">${rows.map(p=>{
    const mine=p.members.find(m=>m.user_id===BACKEND.user?.id);
    const memberNames=p.members.slice(0,3).map(m=>esc(m.profile?.display_name||'Student')).join(', ');
    return `<article class="multi-project-card ${esc(p.status)}"><div class="project-card-top"><span class="project-type-pill ${p.project_type}">${p.project_type==='group'?'GROUP':'SOLO'}</span><span class="request-status ${p.status==='complete'?'shipped':p.status==='archived'?'declined':'building'}">${esc(projectStatusLabelValue(p.status))}</span></div><h3>${esc(p.title)}</h3><p>${esc(projectRichExcerpt(p.description||'No project description yet.'))}</p><div class="project-card-meta"><span>${esc(projectKindLabel(p.project_kind))}</span>${p.class?`<span>${esc(p.class.name)}</span>`:''}${p.assessment_unit?`<span>${esc(p.assessment_unit)}</span>`:''}</div><div class="project-team-summary"><b>${p.members.length}</b> member${p.members.length===1?'':'s'}${memberNames?` • ${memberNames}`:''}${mine?.role_label?` • You: ${esc(mine.role_label)}`:''}</div><a class="button primary small" href="#/projects/${p.id}">Open project →</a></article>`;
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
      const tbox=$('#projectTemplatesList');if(tbox)tbox.innerHTML=templates.length?`<div class="multi-project-grid">${templates.map(t=>`<article class="multi-project-card template-card"><div class="project-card-top"><span class="project-type-pill solo">${esc(projectTemplateWorkModeLabel(t.work_mode).toUpperCase())}</span><span class="request-status ${t.status==='published'?'shipped':t.status==='archived'?'declined':'new'}">${esc(t.status==='published'?'Published':t.status==='archived'?'Archived':'Draft')}</span></div><h3>${esc(t.title)}</h3><p>${esc(projectRichExcerpt(t.brief||'No brief yet.'))}</p><div class="project-card-meta"><span>${esc(t.class?.name||'Class')}</span><span>${t.milestones.length} milestone${t.milestones.length===1?'':'s'}</span>${t.assessment_unit?`<span>${esc(t.assessment_unit)}</span>`:''}</div><a class="button primary small" href="#/projects/template/${t.id}">Manage template →</a></article>`).join('')}</div>`:'<div class="empty"><h3>No templates yet.</h3><p>Create the first class project above.</p></div>';
      box.innerHTML=projectListCards(rows,'No student project copies yet.');
      return;
    }
    const [rows,templates]=await Promise.all([BACKEND.getProjects(),BACKEND.getProjectTemplates()]);
    const started=new Set(rows.filter(p=>p.template_id).map(p=>p.template_id));
    const available=$('#availableProjectsList');
    if(available)available.innerHTML=templates.length?`<div class="available-template-grid">${templates.map(t=>{
      const already=started.has(t.id);
      const solo=t.work_mode==='individual'||t.work_mode==='either',group=t.work_mode==='group'||t.work_mode==='either';
      return `<article class="available-template-card ${already?'started':''}"><div><span class="eyebrow">${esc(t.class?.name||'Class')} • ${esc(projectKindLabel(t.project_kind))}</span><h3>${esc(t.title)}</h3><div class="project-rich-content project-rich-available">${projectRichHtml(t.brief||'Open the project to read the brief.')}</div><div class="project-card-meta"><span>${esc(projectTemplateWorkModeLabel(t.work_mode))}</span><span>${t.milestones.length} milestone${t.milestones.length===1?'':'s'}</span>${t.assessment_unit?`<span>${esc(t.assessment_unit)}</span>`:''}</div></div>${already?`<div class="callout good"><b>Started ✓</b><br>This class project is already in Your Projects.</div>`:`<div class="button-row">${solo?`<button class="button primary" data-action="start-template-project" data-template="${t.id}" data-mode="solo">Start Individual</button>`:''}${group?`<button class="button ${solo?'ghost':'primary'}" data-action="start-template-project" data-template="${t.id}" data-mode="group">Start Group</button>`:''}</div>`}</article>`;
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
    box.innerHTML=`<section class="project-detail-hero template-detail-hero"><div><span class="eyebrow">Teacher project template • ${esc(t.class?.name||'Class')}</span><h1>${esc(t.title)}</h1><div class="project-rich-content">${projectRichHtml(t.brief||'No brief yet.')}</div><div class="project-card-meta"><span>${esc(projectTemplateWorkModeLabel(t.work_mode))}</span><span>${esc(projectKindLabel(t.project_kind))}</span>${t.assessment_unit?`<span>${esc(t.assessment_unit)}</span>`:''}</div></div><div class="template-publish-state"><span class="request-status ${t.status==='published'?'shipped':t.status==='archived'?'declined':'new'}">${esc(t.status==='published'?'Published to students':t.status==='archived'?'Archived':'Draft')}</span></div></section>
    <div class="project-detail-grid">
      <section class="project-panel"><span class="eyebrow">Brief</span><h2>Template settings</h2><form class="form-grid" data-action-form="project-template-settings" data-template="${t.id}"><label>Title<input name="title" maxlength="160" required value="${esc(t.title)}"></label><div class="form-two"><label>How students work<select name="workMode"><option value="either" ${t.work_mode==='either'?'selected':''}>Students choose individual or group</option><option value="individual" ${t.work_mode==='individual'?'selected':''}>Individual only</option><option value="group" ${t.work_mode==='group'?'selected':''}>Group only</option></select></label><label>Type of work<select name="projectKind"><option value="assignment" ${t.project_kind==='assignment'?'selected':''}>Assignment</option><option value="group_project" ${t.project_kind==='group_project'?'selected':''}>Group project</option><option value="game_jam" ${t.project_kind==='game_jam'?'selected':''}>Game jam</option><option value="client" ${t.project_kind==='client'?'selected':''}>Client project</option><option value="practice" ${t.project_kind==='practice'?'selected':''}>Practice</option><option value="other" ${t.project_kind==='other'?'selected':''}>Other</option></select></label></div><label>Course / unit <small>optional</small><input name="assessmentUnit" maxlength="160" value="${esc(t.assessment_unit||'')}"></label><div class="form-field"><span class="form-field-label">Brief</span>${projectRichEditor('brief',t.brief||'','Write the project brief students need to see.',6000)}</div><label>Visibility<select name="status"><option value="draft" ${t.status==='draft'?'selected':''}>Draft — hidden from students</option><option value="published" ${t.status==='published'?'selected':''}>Published — available to class</option></select></label><button class="button primary" type="submit">Save template</button></form></section>
      <section class="project-panel"><span class="eyebrow">Milestones</span><h2>Simple project stages</h2>${b.milestones.length?`<div class="template-milestone-list">${b.milestones.map(m=>`<div class="template-milestone"><div><strong>${esc(m.title)}</strong><p>${esc(m.description||'')}</p></div><details><summary>Edit</summary><form class="form-grid compact-form" data-action-form="edit-template-milestone" data-template="${t.id}" data-milestone="${m.id}"><label>Title<input name="title" maxlength="160" value="${esc(m.title)}" required></label><label>Description<textarea name="description" maxlength="2000">${esc(m.description||'')}</textarea></label><div class="button-row"><button class="button small" type="submit">Save</button><button class="link-button danger-link" type="button" data-action="delete-template-milestone" data-template="${t.id}" data-milestone="${m.id}">Delete</button></div></form></details></div>`).join('')}</div>`:'<div class="muted">No milestones yet.</div>'}<form class="form-grid compact-form" data-action-form="template-milestone" data-template="${t.id}"><label>Milestone title<input name="title" maxlength="160" required placeholder="e.g. Greybox complete"></label><label>Short description<textarea name="description" maxlength="2000" placeholder="What does complete look like?"></textarea></label><button class="button small" type="submit">Add milestone</button></form></section>
    </div><section class="section"><div class="danger-zone"><div><strong>Delete template</strong><p>Student projects already created from it are kept. This only removes the teacher template.</p></div><button class="button danger" data-action="delete-project-template" data-template="${t.id}" data-name="${esc(t.title)}">Delete template</button></div></section>`;
  }catch(err){box.innerHTML=`<div class="offline-note">${esc(err.message)}</div>`}
}

function projectDetailPage(id){
  if(!BACKEND.user)return projectsPage();
  return `<div class="breadcrumb"><a href="#/">Dashboard</a> / <a href="#/projects">Projects</a> / Project</div><div id="projectDetail" data-project="${esc(id)}"><div class="empty">Loading project…</div></div>`;
}

function projectFileTypeLabel(f){
  const mime=String(f?.mime_type||'').toLowerCase(),name=String(f?.original_name||'').toLowerCase();
  if(mime==='application/pdf'||name.endsWith('.pdf'))return 'PDF';
  if(mime.includes('wordprocessingml')||mime==='application/msword'||/\.docx?$/.test(name))return 'WORD';
  if(mime.includes('presentationml')||mime==='application/vnd.ms-powerpoint'||/\.pptx?$/.test(name))return 'PPT';
  if(mime.includes('spreadsheetml')||mime==='application/vnd.ms-excel'||/\.xlsx?$/.test(name))return 'XLS';
  return 'FILE';
}
function projectMediaHtml(media){
  if(!media?.length)return '';
  return `<div class="project-media-grid">${media.map(f=>{
    const image=String(f.mime_type||'').startsWith('image/');
    if(image)return `<figure class="project-media-figure"><button class="project-media-thumb" data-action="open-project-image" data-path="${esc(f.storage_path)}" data-caption="${esc(f.caption||'')}" data-name="${esc(f.original_name)}" title="Open ${esc(f.original_name)}"><span data-project-preview data-path="${esc(f.storage_path)}">Loading image…</span></button>${f.caption?`<figcaption>${esc(f.caption)}</figcaption>`:`<figcaption class="muted">${esc(f.original_name)}</figcaption>`}</figure>`;
    return `<article class="project-file-attachment"><button class="project-file-icon" type="button" data-action="open-project-file" data-path="${esc(f.storage_path)}" aria-label="Open ${esc(f.original_name)}">${projectFileTypeLabel(f)}</button><div><strong>${esc(f.original_name)}</strong><small>${esc(projectFileTypeLabel(f))} • ${humanFileSize(f.size_bytes)}</small>${f.caption?`<p>${esc(f.caption)}</p>`:''}<button class="link-button" type="button" data-action="open-project-file" data-path="${esc(f.storage_path)}">Open file ↗</button></div></article>`;
  }).join('')}</div>`;
}
function projectExternalLinkHtml(u){
  const raw=String(u?.external_url||'').trim();if(!raw)return '';
  let url;try{url=new URL(raw)}catch(e){return ''}if(!['http:','https:'].includes(url.protocol))return '';
  const label=String(u.external_label||'').trim()||'Open larger / linked work';
  return `<div class="project-external-evidence"><span>🔗 Linked evidence</span><a href="${esc(url.href)}" target="_blank" rel="noopener noreferrer"><strong>${esc(label)}</strong><small>${esc(url.hostname)}</small></a><em>Opens external cloud storage or shared work.</em></div>`;
}
function updateField(label,value){return value?`<div class="project-update-field"><strong>${esc(label)}</strong><p>${esc(value)}</p></div>`:''}
function projectUpdateBody(u){
  const what=u.what_did||u.body||'';
  const legacyContribution=(!u.what_did&&u.contribution)?u.contribution:'';
  return `<div class="project-update-structured">${updateField('What I did',what)}${updateField('Why I did it',u.why||'')}${updateField('Problems / changes',u.problems||'')}${updateField('Next steps',u.next_steps||'')}${legacyContribution?updateField('My contribution',legacyContribution):''}</div>`;
}
function projectUpdateHtml(u,project,bundle){
  const mine=u.author_id===BACKEND.user?.id,active=project.status==='active',teacher=BACKEND.profile?.role==='teacher';
  const milestone=bundle.milestones.find(m=>m.id===u.milestone_id),member=bundle.members.find(m=>m.user_id===u.author_id);
  const edited=u.updated_at&&u.created_at&&(new Date(u.updated_at)-new Date(u.created_at)>1500);
  const memberCanComment=active&&bundle.members.some(m=>m.user_id===BACKEND.user?.id);
  const teacherCanReview=teacher&&['active','complete'].includes(project.status);
  const canComment=memberCanComment||teacherCanReview;
  const remaining=Math.max(0,6-(u.media?.length||0));
  const commentTitle=teacher?'Targeted milestone feedback':'Discussion & feedback';
  const commentPlaceholder=teacher?'Optional: leave feedback specific to this milestone evidence…':'Reply to this update…';
  const commentButton=teacher?'Send targeted feedback':'Reply';
  const commentForm=`<form class="project-comment-form ${teacher?'teacher-feedback-form':''}" data-action-form="project-comment" data-project="${project.id}" data-update="${u.id}"><textarea name="body" maxlength="3000" required placeholder="${esc(commentPlaceholder)}"></textarea><button class="button tiny ${teacher?'primary':''}" type="submit">${commentButton}</button></form>`;
  const composer=canComment?(teacher?`<details class="targeted-feedback-compose"><summary>＋ Add targeted feedback <span>optional</span></summary>${commentForm}</details>`:commentForm):'';
  return `<article class="project-log-entry ${mine?'mine':''}"><div class="project-log-head"><div><span class="entry-type">Milestone evidence</span><strong>${esc(u.author?.display_name||'Student')}</strong>${member?.role_label?`<small class="author-role">${esc(member.role_label)}</small>`:''}${u.title?`<h3>${esc(u.title)}</h3>`:''}</div><time>${new Date(u.created_at).toLocaleString()}${edited?' • edited':''}</time></div>${milestone?`<div class="log-milestone">Milestone: ${esc(milestone.title)}</div>`:`<div class="log-milestone unlinked">Not linked to a milestone</div>`}${projectUpdateBody(u)}${projectMediaHtml(u.media)}${projectExternalLinkHtml(u)}<div class="project-comments"><div class="project-comments-title">${commentTitle}</div>${u.comments.map(c=>{const staff=c.author?.role==='teacher';return `<div class="project-comment ${staff?'teacher-comment':''}"><b>${esc(c.author?.display_name||'User')}${staff?' <span class="comment-role-pill">🎓 Teacher</span>':''}</b><span>${new Date(c.created_at).toLocaleString()}</span><p>${esc(c.body)}</p></div>`}).join('')}${composer}</div>${mine&&active?`<details class="project-entry-edit"><summary>Edit my evidence</summary><form class="project-update-form compact-form" data-action-form="edit-project-update" data-project="${project.id}" data-update="${u.id}" data-existing-media="${u.media?.length||0}" data-has-milestones="${bundle.milestones.length?'1':'0'}"><div class="form-two"><label>Short heading <small>optional</small><input name="title" maxlength="180" value="${esc(u.title||'')}"></label><label>Milestone <small>${bundle.milestones.length?'required':'optional'}</small><select name="milestoneId" ${bundle.milestones.length?'required':''}><option value="">${bundle.milestones.length?'Choose milestone…':'Not linked'}</option>${bundle.milestones.map(m=>`<option value="${m.id}" ${m.id===u.milestone_id?'selected':''}>${esc(m.title)}</option>`).join('')}</select></label></div><label class="written-update-required"><span>Written update <small>required</small></span><textarea name="whatDid" maxlength="4000" required placeholder="Explain what you made or changed and what the evidence shows.">${esc(u.what_did||u.body||'')}</textarea></label><label><span>Why I did it <small>optional</small></span><textarea name="why" maxlength="3000">${esc(u.why||'')}</textarea></label><label><span>Problems / changes <small>optional</small></span><textarea name="problems" maxlength="3000">${esc(u.problems||'')}</textarea></label><label><span>Next steps <small>optional</small></span><textarea name="nextSteps" maxlength="3000">${esc(u.next_steps||'')}</textarea></label><div class="project-link-fields"><label><span>Link to larger work <small>optional</small></span><input type="url" name="externalUrl" maxlength="2000" value="${esc(u.external_url||'')}" placeholder="https://... OneDrive, Google Drive, SharePoint, YouTube etc."><small>Use this for large builds, videos or source files. Make sure your teacher has permission to view it.</small></label><label><span>Link label <small>optional</small></span><input name="externalLabel" maxlength="160" value="${esc(u.external_label||'')}" placeholder="e.g. Final playable build"></label></div>${u.media?.length?`<div class="existing-caption-editor"><strong>File captions / notes</strong>${u.media.map(f=>`<label>${esc(f.original_name)}<input name="caption_${f.id}" maxlength="500" value="${esc(f.caption||'')}" placeholder="What should the teacher notice?"></label>`).join('')}</div>`:''}${remaining?`<label>Add evidence files <small>optional • ${remaining} remaining • max 10 MB each</small><input type="file" name="files" multiple accept=".png,.jpg,.jpeg,.webp,.pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,image/png,image/jpeg,image/webp,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" data-project-files><small>Images are automatically resized and compressed for the Hub. PDF, Word, PowerPoint and Excel stay unchanged. For larger files, use the share-link field above.</small></label><div class="file-caption-list" data-file-captions></div>`:''}<div class="button-row"><button class="button small primary" type="submit">Save evidence</button><button class="link-button danger-link" type="button" data-action="delete-project-update" data-project="${project.id}" data-update="${u.id}">Delete entry</button></div></form></details>`:''}</article>`;
}

function projectOverallFeedbackHtml(comments,project,teacher){
  const rows=(comments||[]).map(c=>{const staff=c.author?.role==='teacher';return `<article class="overall-feedback-entry ${staff?'teacher-comment':''}"><div><strong>${esc(c.author?.display_name||'Teacher')}${staff?' <span class="comment-role-pill">🎓 Teacher</span>':''}</strong><time>${new Date(c.created_at).toLocaleString()}</time></div><p>${esc(c.body)}</p></article>`}).join('');
  const form=teacher&&['active','complete'].includes(project.status)?`<form class="overall-feedback-form" data-action-form="project-overall-feedback" data-project="${project.id}"><label><span>Overall project comment <small>up to 8,000 characters</small></span><textarea name="body" maxlength="8000" required placeholder="Summarise the project as a whole: strengths, progress, quality of evidence, key improvements and what the student should do next."></textarea></label><div class="overall-feedback-help">Use this for the substantial end-of-project review. Milestone comments above are optional and only needed when you want to address something specific.</div><button class="button primary" type="submit">Save overall feedback</button></form>`:'';
  return `<section class="section overall-project-feedback"><div class="section-head"><div><span class="eyebrow">Final review</span><h2>Overall Project Feedback</h2><p>${teacher?'One substantial comment for the project as a whole. You only need milestone feedback when something genuinely needs a specific note.':'Your teacher’s overall project feedback appears here.'}</p></div></div><div class="overall-feedback-list">${rows||'<div class="empty">No overall project feedback yet.</div>'}</div>${form}</section>`;
}

function contributionEntryHtml(u,bundle){
  const milestone=bundle.milestones.find(m=>m.id===u.milestone_id);
  return `<article class="assessment-entry"><div class="assessment-entry-head"><time>${new Date(u.created_at).toLocaleDateString()}</time>${milestone?`<span>${esc(milestone.title)}</span>`:''}</div><h3>${esc(u.title||'Development update')}</h3>${projectUpdateBody(u)}${projectMediaHtml(u.media)}${projectExternalLinkHtml(u)}</article>`;
}

async function renderProjectDetail(id){
  const box=$('#projectDetail');if(!box||!BACKEND.user)return;
  try{
    const b=await BACKEND.getProject(id),p=b.project;
    const me=b.members.find(m=>m.user_id===BACKEND.user.id),owner=p.owner_id===BACKEND.user.id,teacher=BACKEND.profile?.role==='teacher',active=p.status==='active',complete=p.status==='complete';
    const canStructure=active&&(owner||teacher),canLog=active&&Boolean(me),canReopen=complete&&(owner||teacher);
    const myUpdates=b.updates.filter(u=>u.author_id===BACKEND.user.id),myMedia=myUpdates.reduce((n,u)=>n+(u.media?.length||0),0);
    const completed=b.milestones.filter(m=>m.status==='complete').length,progress=b.milestones.length?Math.round(completed/b.milestones.length*100):0;
    const milestoneList=b.milestones.length?`<div class="project-milestone-list">${b.milestones.map(m=>`<div class="project-milestone ${m.status}"><div><strong>${esc(m.title)}</strong><p>${esc(m.description||'')}</p></div><div class="milestone-actions"><span>${esc(milestoneStatusLabel(m.status))}</span>${active&&(me||teacher)?`<button class="milestone-check ${m.status==='complete'?'complete':''}" data-action="milestone-toggle" data-milestone="${m.id}" data-status="${m.status==='complete'?'not_started':'complete'}" data-project="${p.id}" aria-label="${m.status==='complete'?'Mark incomplete':'Mark complete'}">${m.status==='complete'?'✓':'○'}</button>`:''}${canStructure?`<details class="milestone-edit"><summary>Edit</summary><form class="form-grid compact-form" data-action-form="edit-project-milestone" data-project="${p.id}" data-milestone="${m.id}"><label>Title<input name="title" maxlength="160" value="${esc(m.title)}" required></label><label>Description<textarea name="description" maxlength="2000">${esc(m.description||'')}</textarea></label><div class="button-row"><button class="button tiny" type="submit">Save</button><button class="link-button danger-link" type="button" data-action="delete-milestone" data-milestone="${m.id}" data-project="${p.id}">Delete</button></div></form></details>`:''}</div></div>`).join('')}</div>`:'<div class="muted">No milestones yet.</div>';
    const milestoneCreate=canStructure?`<form class="form-grid compact-form" data-action-form="project-milestone" data-project="${p.id}"><label>New milestone<input name="title" maxlength="160" required placeholder="e.g. Greybox complete"></label><label>Short description<textarea name="description" maxlength="2000" placeholder="What does complete look like?"></textarea></label><button class="button small" type="submit">Add milestone</button></form>`:'';
    const milestonePanel=teacher&&b.milestones.length?`<section class="project-panel teacher-milestone-panel"><span class="eyebrow">Milestones</span><h2>Project progress</h2><p class="muted">Milestones are progress checkpoints, not separate marking tasks. Open them when you need to check or change one.</p><details class="teacher-milestone-details"><summary><strong>${completed}/${b.milestones.length} complete</strong><span>Show milestones</span></summary>${milestoneList}${milestoneCreate}</details></section>`:`<section class="project-panel"><span class="eyebrow">Milestones</span><h2>Project progress</h2>${milestoneList}${milestoneCreate}</section>`;
    box.innerHTML=`<section class="project-detail-hero"><div><span class="eyebrow">${esc(projectKindLabel(p.project_kind))} • ${p.project_type==='group'?'Group':'Solo'} project</span><h1>${esc(p.title)}</h1><div class="project-rich-content">${projectRichHtml(p.description||'No project description yet.')}</div><div class="project-card-meta">${p.class?`<span>Class: ${esc(p.class.name)}</span>`:''}${p.assessment_unit?`<span>${esc(p.assessment_unit)}</span>`:''}<span>${esc(projectStatusLabelValue(p.status))}</span></div>${(owner&&active)||canReopen?`<div class="button-row project-completion-actions">${owner&&active?`<button class="button primary" data-action="complete-project" data-project="${p.id}">✓ Mark Project Complete</button>`:''}${canReopen?`<button class="button" data-action="reopen-project" data-project="${p.id}">↺ Reopen Project</button>`:''}</div>`:''}</div><div class="project-detail-stat"><strong>${progress}%</strong><small>${completed}/${b.milestones.length} milestones complete</small><div class="progress"><span style="width:${progress}%"></span></div></div></section>
    ${complete?`<div class="project-readonly-banner"><b>PROJECT COMPLETE</b><span>${teacher?'Student editing is locked, but you can still leave teacher feedback below. Reopen the project if the student needs to make changes.':'Student editing is locked. The Project Lead or an assigned class teacher can reopen it if more work is needed.'}</span></div>`:''}
    <div class="project-detail-grid">
      <section class="project-panel"><span class="eyebrow">Team</span><h2>${p.project_type==='group'?'Shared project':'Project owner'}</h2><div class="project-member-list">${b.members.map(m=>`<div class="project-member"><div class="project-member-avatar">${esc((m.profile?.display_name||'?').slice(0,1).toUpperCase())}</div><div><strong>${esc(m.profile?.display_name||'Student')}</strong><small>${m.role==='owner'?'Project Lead':esc(m.role_label||'Team member')}</small></div>${owner&&active&&m.role!=='owner'?`<button class="link-button danger-link" data-action="remove-project-member" data-project="${p.id}" data-user="${m.user_id}">Remove</button>`:''}</div>`).join('')}</div>${me&&active?`<form class="inline-role-form" data-action-form="project-role" data-project="${p.id}"><label>My role in this project<input name="roleLabel" maxlength="100" value="${esc(me.role_label||'')}" placeholder="e.g. Level Designer"></label><button class="button small" type="submit">Save role</button></form>`:''}${p.project_type==='group'&&owner&&active?`<div class="project-code-box"><small>GROUP JOIN CODE</small><code>${esc(p.join_code||'')}</code><div class="button-row"><button class="button small" data-action="copy-project-code" data-code="${esc(p.join_code||'')}">Copy code</button><button class="button small ghost" data-action="regenerate-project-code" data-project="${p.id}">New code</button></div></div>`:''}${me&&me.role!=='owner'&&active?`<button class="button small danger" data-action="leave-project" data-project="${p.id}" data-user="${BACKEND.user.id}">Leave project</button>`:''}</section>
      ${milestonePanel}
    </div>
    ${canLog?`<section class="section project-log-create"><div class="section-head"><div><h2>Add milestone evidence</h2><p>Choose the milestone, write a short explanation of what you did, then attach files or a share link if they help prove it. Written context is required so evidence never has to explain itself.</p></div></div><form class="project-update-form milestone-evidence-form" data-action-form="project-update" data-project="${p.id}" data-existing-media="0" data-has-milestones="${b.milestones.length?'1':'0'}"><div class="form-two"><label>Short heading <small>optional</small><input name="title" maxlength="180" placeholder="e.g. Rebuilt the corridor greybox"></label><label>Milestone <small>${b.milestones.length?'required':'optional'}</small><select name="milestoneId" ${b.milestones.length?'required':''}><option value="">${b.milestones.length?'Choose milestone…':'Not linked to a milestone'}</option>${b.milestones.map(m=>`<option value="${m.id}">${esc(m.title)}</option>`).join('')}</select></label></div><label class="written-update-required"><span>Written update <small>required</small></span><textarea name="whatDid" maxlength="4000" required placeholder="What did you make, test or change? What should your teacher notice in the evidence?"></textarea></label><div class="structured-log-grid supporting-prompts"><label><span>Why I did it <small>optional</small></span><textarea name="why" maxlength="3000" placeholder="Why was this the right decision?"></textarea></label><label><span>Problems / changes <small>optional</small></span><textarea name="problems" maxlength="3000" placeholder="What went wrong or changed after testing?"></textarea></label><label><span>Next steps <small>optional</small></span><textarea name="nextSteps" maxlength="3000" placeholder="What will you do next?"></textarea></label></div><div class="project-link-fields"><label><span>Link to larger work <small>optional</small></span><input type="url" name="externalUrl" maxlength="2000" placeholder="https://... OneDrive, Google Drive, SharePoint, YouTube etc."><small>For large builds, videos or source files. Make sure your teacher has permission to view the link.</small></label><label><span>Link label <small>optional</small></span><input name="externalLabel" maxlength="160" placeholder="e.g. Final playable build"></label></div><label>Evidence files <small>optional • up to 6 • max 10 MB each</small><input type="file" name="files" multiple accept=".png,.jpg,.jpeg,.webp,.pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,image/png,image/jpeg,image/webp,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" data-project-files><small>Screenshots are automatically resized and compressed. PDF, Word, PowerPoint and Excel stay unchanged.</small></label><div class="file-caption-list" data-file-captions></div><div class="milestone-evidence-help"><b>What gets saved together:</b> milestone + written update + files/share link + teacher feedback.</div><button class="button primary" type="submit">Add milestone evidence</button></form></section>`:''}
    <section class="section"><div class="section-head"><div><h2>Milestone evidence</h2><p>Evidence stays attached to the relevant checkpoint. Teacher comments here are optional and best used only for something specific.</p></div></div><div class="project-log-list">${b.updates.length?b.updates.map(u=>projectUpdateHtml(u,p,b)).join(''):'<div class="empty">No milestone evidence yet.</div>'}</div></section>
    ${projectOverallFeedbackHtml(b.comments,p,teacher)}
    ${me?`<section class="section"><div class="section-head"><div><h2>My Contributions</h2><p>Only the development evidence attributed to you, ready to refer back to when you submit assessment work elsewhere.</p></div></div><div class="contribution-summary"><div><small>My log entries</small><strong>${myUpdates.length}</strong></div><div><small>My files</small><strong>${myMedia}</strong></div><div><small>Role</small><strong>${esc(me.role_label||(me.role==='owner'?'Project Lead':'Team member'))}</strong></div></div><div class="my-contribution-list">${myUpdates.length?myUpdates.slice().reverse().map(u=>contributionEntryHtml(u,b)).join(''):'<div class="muted">Your own entries will appear here.</div>'}</div></section>`:''}
    ${owner&&active?`<section class="section"><details class="project-settings"><summary>Project settings</summary><form class="form-grid" data-action-form="project-settings" data-project="${p.id}"><label>Title<input name="title" maxlength="120" value="${esc(p.title)}" required></label><div class="form-field"><span class="form-field-label">Brief / description</span>${projectRichEditor('description',p.description||'','Describe the project clearly.',6000)}</div><label>Course / unit <small>optional</small><input name="assessmentUnit" maxlength="160" value="${esc(p.assessment_unit||'')}"></label><button class="button" type="submit">Save project settings</button><button class="button danger" type="button" data-action="delete-project" data-project="${p.id}" data-name="${esc(p.title)}">Permanently delete project</button></form></details></section>`:''}`;
    await hydrateProjectMedia();bindProjectFileInputs(box);
  }catch(err){box.innerHTML=`<div class="offline-note">${esc(err.message)}</div>`}
}

function bindProjectFileInputs(root=document){
  root.querySelectorAll?.('[data-project-files]').forEach(input=>{
    if(input.dataset.captionBound)return;input.dataset.captionBound='1';
    input.addEventListener('change',()=>{
      const form=input.closest('form'),target=form?.querySelector('[data-file-captions]');if(!target)return;
      const existing=Number(form?.dataset.existingMedia||0),files=Array.from(input.files||[]),limit=Math.max(0,6-existing);
      if(files.length>limit){toast(`This entry can contain up to 6 evidence files. You can add ${limit} more.`);input.value='';target.innerHTML='';return}
      target.innerHTML=files.map((f,i)=>`<label class="file-caption-row"><span>${esc(f.name)}</span><input name="newCaption${i}" maxlength="500" placeholder="Caption / note — what should the teacher notice?"></label>`).join('');
    });
  });
}

function lazySignedPreview(nodes,{thumbnail,full,backfill=null,alt,fallbackText}){
  const load=async node=>{
    if(node.dataset.previewLoaded==='1')return;
    node.dataset.previewLoaded='1';
    const path=node.dataset.path;
    try{
      let thumbUrl='';
      try{thumbUrl=await thumbnail(path)}catch(e){}
      const img=document.createElement('img');img.alt=alt;img.loading='lazy';img.decoding='async';
      let fellBack=false;
      img.addEventListener('error',async()=>{
        if(fellBack)return;fellBack=true;
        if(backfill){try{const generated=await backfill(path);if(generated){img.src=generated;return}}catch(e){}}
        try{const fullUrl=await full(path);if(fullUrl){img.src=fullUrl;return}}catch(e){}
        node.textContent=fallbackText;
      });
      if(thumbUrl){node.replaceChildren(img);img.src=thumbUrl;}
      else{const fullUrl=await full(path);if(fullUrl){node.replaceChildren(img);img.src=fullUrl;}else node.textContent=fallbackText;}
    }catch(e){node.textContent=fallbackText;}
  };
  if(!('IntersectionObserver' in window)){nodes.forEach(load);return}
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){observer.unobserve(entry.target);load(entry.target)}}),{rootMargin:'240px 0px'});
  nodes.forEach(node=>observer.observe(node));
}
async function hydrateProjectMedia(){
  lazySignedPreview($$('[data-project-preview]'),{thumbnail:path=>BACKEND.openProjectThumbnail(path),full:path=>BACKEND.openProjectFile(path),backfill:path=>BACKEND.backfillProjectThumbnail(path),alt:'Project screenshot',fallbackText:'Preview unavailable'});
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
    ${s.teacher_feedback?`<div class="teacher-feedback ${s.status==='approved'?'good':''}"><strong>🎓 Teacher feedback</strong><p>${esc(s.teacher_feedback)}</p></div>`:''}
    ${locked
      ?`<div class="offline-note">${s.status==='submitted'?'This submission is locked while it waits for teacher review.':'Approved evidence is kept as part of your course/project record.'}</div>`
      :evidenceForm(l,s)}
  </div>`;
}
function evidenceForm(l,s){
  return `<form class="evidence-form" data-action-form="evidence" data-lesson="${l.id}">
    <label><span>Short reflection</span><textarea name="reflection" maxlength="4000" required placeholder="What did you build? What problem did you solve? What did you change after testing?">${esc(s?.reflection||'')}</textarea></label>
    <label><span>Evidence link <small>optional</small></span><input name="evidenceUrl" type="url" maxlength="1000" value="${esc(s?.evidence_url||'')}" placeholder="Unlisted video, OneDrive/SharePoint link later, build link…"></label>
    <label><span>Upload screenshots / PDF <small>optional • up to 6 files • max 10 MB each</small></span><input name="file" type="file" multiple accept="image/png,image/jpeg,image/webp,application/pdf"><small class="evidence-upload-help">PNG, JPG, WebP or PDF. Screenshots are automatically resized and compressed for the Hub. For gameplay video, paste an external video/Stream/OneDrive link above rather than uploading the video file.</small></label>
    <div class="button-row">
      <button class="button small ghost" type="submit" data-intent="draft">Save draft</button>
      <button class="button small primary" type="submit" data-intent="submit">Submit for review</button>
    </div>
  </form>`;
}
function achievementData(approvedCount=0,requestCount=0){
  const done=completedLessons().length,game=projectProgress().complete,tuts=completedTutorialCount(),builds=state.chapterBuildCompleted.length,modelDone=(state.modelLessonCompleted||[]).length,modelFixes=(state.modelFixCompleted||[]).length,modelBuilds=(state.modelBuildCompleted||[]).length,sculptDoneCount=(state.sculptCompleted||[]).length;
  const ids=new Set(state.completed);
  const rows=[
    ['first-step','First Steps','Complete your first lesson.',done>=1,'◉'],
    ['blueprint-core','Blueprint Builder','Complete Variables, Branches and Functions.',['variables','branches','functions'].every(x=>ids.has(x)),'◇'],
    ['game-builder','Practice Systems Builder','Complete 10 mechanics in Signal Lost practice.',game>=10,'⚙'],
    ['halfway','Halfway There','Complete 10 lessons.',done>=10,'½'],
    ['recipe','Recipe Tested','Complete 5 practical builds.',tuts>=5,'🛠'],
    ['chapter-build','Chapter Builder','Complete your first unlocked Chapter Build.',builds>=1,'🎮'],
    ['community','Community Voice','Submit an idea to the Requests Board.',requestCount>=1,'✦'],
    ['final-game','Practice Build Complete','Complete all 20 practice mechanics.',game>=Object.keys(PROJECT.mechanics).length,'◈'],
    ['course','UE5 Pathfinder','Complete every lesson.',done>=DATA.lessons.length,'★'],
    ['first-mesh','First Mesh','Complete your first 3D Modelling Studio lesson.',modelDone>=1,'⬡'],
    ['mesh-doctor','Mesh Doctor','Complete Topology Clinic and one Fix This Model clinic.',(state.modelLessonCompleted||[]).includes('max-topology-clinic')&&modelFixes>=1,'⚕'],
    ['asset-pipeline','Game Asset Ready','Complete all 3D Modelling lessons and one Build X project.',modelDone>=MODEL.lessons.length&&modelBuilds>=1,'◆'],
    ['foundations-ready','Game-Ready Foundations','Pass Module 0 and Model Doctor.',!!state.modelFoundationFinal,'🩺'],
    ['max-apprentice','Max Apprentice',"Complete all 14 videos in Dits' Max series.",(state.modelVideoCompleted||[]).length>=MODEL_VIDEOS.videos.length,'▶'],
    ['industry-eye','Industry Eye','Complete at least one industry deep dive in every Designer discipline.',DESIGN.modules.every(m=>(m.industryDeepDives||[]).some((_,i)=>(state.designSourceCompleted||[]).includes(designSourceKey(m,i)))),'👁'],
    ['design-thinker','Design Thinker','Complete all eight Designer Studio builds.',(state.designBuildCompleted||[]).length>=DESIGN.modules.length,'✦'],
    ['digital-clay','Digital Clay','Complete all six Sculpt Playground exercises.',sculptDoneCount>=SCULPT.practices.length,'🗿']
  ];
  if(isTeacher())rows.unshift(['teacher','Unreal Instructor','Verified Learning Hub teacher account. Staff-only badge; students cannot unlock it.',true,'🎓']);
  return rows;
}
function progressPage(){
  const pp=projectProgress(),i=level(),eq=equippedBadge(),teacher=isTeacher();
  return `<div class="page-head progress-page-head">
    <div class="breadcrumb"><a href="#/">Dashboard</a> / My Progress</div>
    <span class="eyebrow">XP • BADGES • LEARNING • FEEDBACK</span>
    <h1>◎ My Progress</h1>
    <p class="muted">${teacher?'Your staff badge and MAX level are automatic. Learning completion and practice progress still track normally below.':"Track what you've learned, what you've practised and the badges you've earned. Formal project submissions stay in Microsoft Teams."}</p>
  </div>
  <section class="progress-player-banner ${teacher?'teacher-progress-banner':''}"><div class="progress-player-id">${avatarMarkup('xl',userDisplayName())}<div><span class="eyebrow">${esc(userRankTitle())}</span><h2>${esc(userDisplayName())}</h2><p>${teacher?'🎓 Teacher • Level MAX':`Level ${i.n} • ${i.xp} XP`}</p></div></div>${levelRingMarkup()}<div class="progress-equipped"><span>${teacher?'STAFF BADGE':'PINNED BADGE'}</span><strong>${eq?`${eq[4]} ${esc(eq[1])}`:'None yet'}</strong><small>${teacher?'Teacher-only • automatically equipped':eq?esc(BADGE_META[eq[0]]?.rarity||'Common'):'Unlock and pin one below'}</small></div></section>
  <div class="stat-grid">
    <div class="stat"><small>Lessons</small><strong>${completedLessons().length}/${DATA.lessons.length}</strong></div>
    <div class="stat"><small>Practical builds</small><strong>${completedTutorialCount()}/${TOOLS.tutorials.length}</strong></div>
    <div class="stat"><small>3D Foundations</small><strong>${modelFoundationChaptersDone()}/${MODEL_FOUNDATIONS.chapters.length}${modelFoundationDone()?' ✓':''}</strong></div><div class="stat"><small>3D Modelling</small><strong>${(state.modelLessonCompleted||[]).length}/${MODEL.lessons.length}</strong></div>
    <div class="stat"><small>Sculpt Playground</small><strong>${(state.sculptCompleted||[]).length}/${SCULPT.practices.length}</strong></div>
    <div class="stat"><small>Chapter Builds</small><strong>${state.chapterBuildCompleted.length}/${TOOLS.chapterBuilds.length}</strong></div>
    <div class="stat"><small>Practice mechanics</small><strong>${pp.complete}/${pp.total}</strong></div>
    <div class="stat"><small>${teacher?'Level':'XP'}</small><strong>${teacher?'MAX':i.xp}</strong></div>
  </div>
  <section class="section"><div class="section-head"><div><span class="eyebrow">BADGE CABINET</span><h2>Achievements</h2><p>${teacher?'Your Unreal Instructor badge stays equipped; student-style achievements still record your learning activity.':'Meaningful learning milestones rather than participation confetti. Pin any unlocked badge to your player card.'}</p></div></div><div class="achievement-grid badge-cabinet" id="achievementGrid">${renderAchievements(0,0)}</div></section>
  <section class="section"><div class="section-head"><div><h2>My class</h2><p>Your teaching group and class learning tools.</p></div></div><div id="progressClasses">${BACKEND.user?'<div class="empty">Loading classes…</div>':'<div class="offline-note">Create or sign in to a Learning Hub account, then join using the class code from your teacher.</div>'}</div></section>
  <section class="section" id="notifications"><div class="section-head"><div><h2>Notifications</h2><p>Teacher replies, critique activity and roadmap updates.</p></div></div><div id="progressNotifications">${BACKEND.user?'<div class="empty">Loading notifications…</div>':'<div class="offline-note">Notifications unlock when you sign in to a Learning Hub account.</div>'}</div></section>`;
}

function renderAchievements(approvedCount,requestCount){
  return achievementData(approvedCount,requestCount).map(a=>{
    const meta=BADGE_META[a[0]]||{rarity:'Common',tone:'common',hint:a[2]},staff=a[0]==='teacher',pinned=staff&&isTeacher()||profilePrefs.badge===a[0];
    return `<article class="achievement badge-card ${a[3]?'unlocked':'locked'} ${meta.tone} ${pinned?'pinned':''}"><div class="badge-rarity">${esc(meta.rarity)}</div><div class="achievement-icon">${a[4]}</div><div class="badge-copy"><strong>${esc(a[1])}</strong><p>${esc(a[2])}</p></div><div class="badge-card-footer">${staff?'<span class="staff-badge-lock">🎓 Staff badge • automatically equipped</span>':isTeacher()&&a[3]?'<span>✓ Achievement tracked • staff badge stays equipped</span>':a[3]?`<button class="link-button badge-pin-button" data-action="badge-equip" data-badge="${esc(a[0])}">${pinned?'★ Pinned':'☆ Pin to profile'}</button>`:`<span>🔒 ${esc(meta.hint)}</span>`}</div></article>`;
  }).join('');
}
async function renderProgressCloud(){
  if(!BACKEND.user)return;
  const [classes,notes,mine]=await Promise.all([
    BACKEND.getMyClasses(),BACKEND.getNotifications(),BACKEND.getMyRequestCount()
  ]);
  const ag=$('#achievementGrid');if(ag)ag.innerHTML=renderAchievements(0,mine);

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

function challengeItems(){
  const items=[];
  DATA.lessons.forEach(l=>items.push({
    id:`ue:${l.id}`,area:'unreal',areaLabel:'Unreal Learning',icon:'⌘',title:l.challenge.title,
    task:l.challenge.task,requirements:l.challenge.requirements||[],meta:l.projectTask?.name||path(l.path)?.title||'Unreal',
    href:`#/lesson/${l.id}`,linkLabel:'Open supporting lesson →'
  }));
  DESIGN.modules.forEach(m=>(m.challenges||[]).forEach((c,i)=>items.push({
    id:`design:${m.id}:${i}`,area:'design',areaLabel:'Designer Studio',icon:m.icon||'✦',title:c.title,
    task:c.constraint,requirements:[`Win condition: ${c.goal}`],meta:m.title,href:`#/design/${m.id}`,linkLabel:'Open design module →'
  })));
  (MODEL.builds||[]).forEach(b=>items.push({
    id:`model:${b.id}`,area:'modeling',areaLabel:'3D Modelling',icon:b.icon||'⬡',title:`${b.title} — make it yours`,
    task:b.variation||'Change one construction or proportion decision while preserving the skill this build teaches.',
    requirements:(b.qualityGates||[]).slice(0,3),meta:`Build X • ${b.difficulty}`,href:`#/modeling/build/${b.id}`,linkLabel:'Open Build X →'
  }));
  (SCULPT.practices||[]).forEach(x=>items.push({
    id:`sculpt:${x.id}`,area:'sculpt',areaLabel:'Sculpt Playground',icon:x.icon||'🗿',title:`${x.title} — make it yours`,
    task:x.challenge,requirements:[`Use the ${x.newSkill} skill rather than adding random detail.`],meta:`Exercise ${String(x.order).padStart(2,'0')} • ${x.time}`,href:`#/sculpt/${x.id}`,linkLabel:'Open Sculpt exercise →'
  }));
  return items;
}
function challengeBoard(){
  const items=challengeItems(),areas=[['unreal','⌘','Unreal',items.filter(x=>x.area==='unreal').length],['design','✦','Design',items.filter(x=>x.area==='design').length],['modeling','⬡','3D Modelling',items.filter(x=>x.area==='modeling').length],['sculpt','🗿','Sculpt',items.filter(x=>x.area==='sculpt').length]];
  const section=(area,title,desc,open=false)=>{const rows=items.filter(x=>x.area===area);return `<details class="study-board-section" data-study-section ${open?'open':''}><summary><span>${areas.find(a=>a[0]===area)?.[1]||'◆'}</span><div><strong>${esc(title)}</strong><small>${esc(desc)}</small></div><b>${rows.length}</b></summary><div class="board-grid study-board-grid">${rows.map(x=>`<article class="board-card study-board-card" data-study-card data-area="${x.area}" data-search="${esc((x.title+' '+x.task+' '+x.meta+' '+x.requirements.join(' ')).toLowerCase())}"><span class="eyebrow">${esc(x.areaLabel)} • ${esc(x.meta)}</span><h3>${esc(x.title)}</h3><p>${esc(x.task)}</p>${requirements(x.requirements)}<div class="button-row"><a class="button small" href="${x.href}">${esc(x.linkLabel)}</a></div></article>`).join('')}</div></details>`};
  return `<div class="page-head"><div class="breadcrumb"><a href="#/">Dashboard</a> / Challenges</div><span class="eyebrow">${items.length} transfer challenges across the Hub</span><h1>🔥 Challenge Board</h1><p class="muted">Programming, design, modelling and sculpting challenges that make you apply a skill without following another walkthrough.</p></div>
  <section class="study-tool-intro"><div><strong>Choose a skill you already know.</strong><span>Then solve a fresh problem with less scaffolding.</span></div><div><strong>Do not clone the example.</strong><span>The challenge only counts as useful practice if you make decisions yourself.</span></div><div><strong>Get another human to test it.</strong><span>Use the Critique Board when the result needs a second pair of eyes.</span></div></section>
  <div class="study-toolbar"><input id="challengeSearch" type="search" enterkeyhint="search" placeholder="Search challenges…"><div class="filter-row"><button class="filter active" data-challenge-filter="all">All <b>${items.length}</b></button>${areas.map(a=>`<button class="filter" data-challenge-filter="${a[0]}">${a[1]} ${a[2]} <b>${a[3]}</b></button>`).join('')}</div></div>
  <div id="challengeBoardSections">${section('unreal','Unreal transfer challenges','Take a Blueprint/system skill and make it solve a different gameplay problem.',true)}${section('design','Designer constraints','Remove a crutch and prove the design principle still communicates.',true)}${section('modeling','Build X variations','Change the brief while preserving clean construction and game-ready judgement.')}${section('sculpt','Sculpt variations','Use form, silhouette and observation instead of adding noise.')}</div>
  <div class="empty" id="challengeSearchEmpty" hidden><h2>No challenges match.</h2><p>Try a shorter search or switch back to All.</p></div>`;
}
function homeworkItems(){
  const items=[];
  DATA.lessons.forEach(l=>items.push({id:`ue:${l.id}`,legacyId:l.id,area:'unreal',areaLabel:'Unreal Learning',title:l.homework.title,task:l.homework.task,evidence:l.homework.evidence,stretch:l.homework.stretch,meta:l.title,href:`#/lesson/${l.id}`,linkLabel:'View lesson'}));
  DESIGN.modules.forEach(m=>(m.researchMissions||[]).forEach((r,i)=>items.push({id:`design:${m.id}:${i}`,area:'design',areaLabel:'Designer field research',title:r.title,task:r.brief,evidence:r.evidence,stretch:'Apply one finding to your own current scene/build and note what changed.',meta:`${m.title} • ${r.duration}`,steps:r.steps||[],href:`#/design/${m.id}`,linkLabel:'Open module'})));
  MODEL_FOUNDATIONS.chapters.forEach(ch=>{const h=STUDY.modelHomework[ch.id];if(h)items.push({id:`model:${ch.id}`,area:'modeling',areaLabel:'3D Foundations',title:h.title,task:h.task,evidence:h.evidence,stretch:h.stretch,meta:ch.title,href:`#/modeling/foundations/${ch.id}`,linkLabel:'Open chapter'})});
  (MODEL_VIDEOS.videos||[]).forEach(v=>items.push({id:`video:${v.id}`,area:'video',areaLabel:"Dits' Max series",title:`Watch + practise: ${v.title}`,task:v.task,evidence:'Show the result you made in Max and be ready to explain the move without replaying the video.',stretch:'Use the same tool or idea on a different object so it becomes a transferable skill.',meta:`Video ${String(v.order).padStart(2,'0')} • +${MODEL_VIDEOS.xp||20} XP when completed in the video series`,href:'#/modeling/videos',linkLabel:'Open video series'}));
  return items;
}
function homeworkBoard(){
  const items=homeworkItems(),areas=[['unreal','⌘','Unreal',items.filter(x=>x.area==='unreal').length],['design','✦','Design research',items.filter(x=>x.area==='design').length],['modeling','⬡','3D theory',items.filter(x=>x.area==='modeling').length],['video','▶','Max videos',items.filter(x=>x.area==='video').length]];
  const section=(area,title,desc,open=false)=>{const rows=items.filter(x=>x.area===area);return `<details class="study-board-section homework-section" data-study-section ${open?'open':''}><summary><span>${areas.find(a=>a[0]===area)?.[1]||'⌂'}</span><div><strong>${esc(title)}</strong><small>${esc(desc)}</small></div><b>${rows.length}</b></summary><div class="board-grid study-board-grid">${rows.map(x=>`<article class="board-card study-board-card homework-study-card" data-study-card data-area="${x.area}" data-search="${esc((x.title+' '+x.task+' '+x.evidence+' '+x.stretch+' '+x.meta).toLowerCase())}"><span class="eyebrow">${esc(x.areaLabel)} • ${esc(x.meta)}</span><h3>${esc(x.title)}</h3><p>${esc(x.task)}</p><div class="study-evidence"><b>Evidence</b><span>${esc(x.evidence)}</span></div><div class="study-stretch"><b>Stretch</b><span>${esc(x.stretch)}</span></div><div class="button-row"><button class="button small" data-action="copy-homework" data-study-homework="${esc(x.id)}">Copy for Teams</button><a class="button small ghost" href="${x.href}">${esc(x.linkLabel)}</a></div></article>`).join('')}</div></details>`};
  return `<div class="page-head"><div class="breadcrumb"><a href="#/">Dashboard</a> / Homework</div><span class="eyebrow">Independent study • not another assignment system</span><h1>⌂ Homework & Independent Study</h1><p class="muted">Short tasks that extend what students are already learning. The Hub supplies the activity and reference; Teams remains the place for formal assignment briefs, deadlines and submission.</p></div>
  <section class="study-tool-intro"><div><strong>Play / watch / inspect.</strong><span>Start with something real rather than another page of notes.</span></div><div><strong>Produce small evidence.</strong><span>A screenshot, annotation, map, comparison or short explanation is enough.</span></div><div><strong>Bring it back into the work.</strong><span>Every task should change a decision in the next build.</span></div></section>
  <div class="study-toolbar"><input id="homeworkSearch" type="search" enterkeyhint="search" placeholder="Search independent study…"><div class="filter-row"><button class="filter active" data-homework-filter="all">All <b>${items.length}</b></button>${areas.map(a=>`<button class="filter" data-homework-filter="${a[0]}">${a[1]} ${a[2]} <b>${a[3]}</b></button>`).join('')}</div></div>
  <div id="homeworkBoardSections">${section('unreal','Unreal independent learning','Broaden the thinking around a mechanic instead of doing more node-copying.',true)}${section('design','Designer field research','Observe games, spaces and players; then bring the principle back to your own work.',true)}${section('modeling','3D foundations study','Small modelling decisions that reinforce Module 0 before or between practical sessions.')}${section('video',"Dits' Max follow-along practice",'Watch the demonstration, reproduce the move, then apply it somewhere else.')}</div>
  <div class="empty" id="homeworkSearchEmpty" hidden><h2>No homework tasks match.</h2><p>Try a shorter search or switch back to All.</p></div>`;
}
function hubGlossary(){
  const base=(DATA.glossary||[]).map(([term,definition])=>[term,definition,'Unreal Engine']);
  return [...base,...(STUDY.glossary||[])].sort((a,b)=>a[0].localeCompare(b[0]));
}
function glossary(){
  const terms=hubGlossary(),counts=Object.fromEntries(['Unreal Engine','Game Design','3D Modelling'].map(a=>[a,terms.filter(x=>x[2]===a).length]));
  return `<div class="page-head"><div class="breadcrumb"><a href="#/">Dashboard</a> / Glossary</div><span class="eyebrow">${terms.length} useful terms across the Hub</span><h1>? Games Development Glossary</h1><p class="muted">Unreal, game design and 3D modelling terminology in one searchable reference. Short enough to use while building; specific enough to stop the words becoming mush.</p></div><div class="study-toolbar glossary-toolbar"><input id="glossarySearch" type="search" enterkeyhint="search" placeholder="Search a term, tool or idea…"><div class="filter-row"><button class="filter active" data-glossary-filter="all">All <b>${terms.length}</b></button><button class="filter" data-glossary-filter="Unreal Engine">⌘ Unreal <b>${counts['Unreal Engine']||0}</b></button><button class="filter" data-glossary-filter="Game Design">✦ Design <b>${counts['Game Design']||0}</b></button><button class="filter" data-glossary-filter="3D Modelling">⬡ 3D <b>${counts['3D Modelling']||0}</b></button></div><span class="study-result-count" id="glossaryResultCount">${terms.length} terms</span></div><div class="glossary-grid" id="glossaryGrid">${terms.map(([t,d,a])=>`<article class="glossary-item" data-area="${esc(a)}" data-search="${esc((t+' '+d+' '+a).toLowerCase())}"><span class="glossary-area">${esc(a)}</span><strong>${esc(t)}</strong><p>${esc(d)}</p></article>`).join('')}</div><div class="empty" id="glossarySearchEmpty" hidden><h2>No glossary terms match.</h2><p>Try a shorter term or switch back to All.</p></div>`;
}
function revisionTopics(){
  const topics=[];
  DATA.lessons.forEach(l=>topics.push({id:`ue:${l.id}`,areaId:'unreal',areaTitle:'Unreal Learning',icon:path(l.path)?.icon||'⌘',title:l.title,meta:path(l.path)?.title||'Unreal',href:`#/lesson/${l.id}`,sourceLabel:`Open ${l.title}`,questions:(l.quiz||[]).map((q,qi)=>({question:q[0],options:q[1],correct:Array.isArray(q[2])?q[2]:[q[2]],feedback:q[3],key:`ue:${l.id}:${qi}`}))}));
  MODEL_FOUNDATIONS.chapters.forEach(ch=>topics.push({id:`3d:${ch.id}`,areaId:'modeling',areaTitle:'3D Foundations',icon:ch.icon||'⬡',title:ch.title,meta:'Module 0',href:`#/modeling/foundations/${ch.id}`,sourceLabel:`Open ${ch.title}`,questions:(ch.quiz||[]).map((q,qi)=>({question:q.q,options:q.options,correct:[q.correct],feedback:q.feedback,key:`3d:${ch.id}:${qi}`}))}));
  DESIGN.modules.forEach(m=>topics.push({id:`design:${m.id}`,areaId:'design',areaTitle:'Designer Studio',icon:m.icon||'✦',title:m.title,meta:'Design judgement',href:`#/design/${m.id}`,sourceLabel:`Open ${m.title}`,questions:(STUDY.designRevision[m.id]||[]).map((q,qi)=>({question:q[0],options:q[1],correct:Array.isArray(q[2])?q[2]:[q[2]],feedback:q[3],key:`design:${m.id}:${qi}`}))}));
  return topics;
}
function revisionQuestionBank(topicIds=null){
  const selected=Array.isArray(topicIds)&&topicIds.length?new Set(topicIds):null;
  return revisionTopics().filter(t=>!selected||selected.has(t.id)).flatMap(t=>t.questions.map(q=>({...q,topicId:t.id,topicTitle:t.title,areaId:t.areaId,areaTitle:t.areaTitle,sourceHref:t.href,sourceLabel:t.sourceLabel})));
}
function shuffled(list){const a=[...list];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function loadRevisionResults(){try{return JSON.parse(localStorage.getItem(REVISION_STORE)||'[]')}catch(e){return []}}
function saveRevisionResult(result){const rows=[result,...loadRevisionResults()].slice(0,12);localStorage.setItem(REVISION_STORE,JSON.stringify(rows))}
function revisionSelectionLabel(topicIds){
  if(!topicIds?.length)return 'Random mixed';
  const topics=revisionTopics(),selected=topics.filter(t=>topicIds.includes(t.id));
  if(selected.length===1)return selected[0].title;
  for(const area of ['unreal','design','modeling']){const all=topics.filter(t=>t.areaId===area);if(all.length===selected.length&&all.every(t=>topicIds.includes(t.id)))return all[0]?.areaTitle||'Focused area'}
  return `${selected.length} selected topics`;
}
function startRevisionQuiz(topicIds=null,count=10,label=null){
  const bank=shuffled(revisionQuestionBank(topicIds));
  if(!bank.length){toast('Choose at least one topic with revision questions.');return}
  const wanted=[10,20,30].includes(Number(count))?Number(count):10,used=Math.min(wanted,bank.length);
  revisionSession={topicIds:Array.isArray(topicIds)?[...topicIds]:null,topicLabel:label||revisionSelectionLabel(topicIds),requestedCount:wanted,questions:bank.slice(0,used),index:0,answers:[],finished:false};
  route();if(used<wanted)toast(`This selection has ${used} question${used===1?'':'s'}, so the quiz uses all of them.`);
}
function revisionScore(session){
  let correct=0;session.answers.forEach((ans,i)=>{const expected=session.questions[i].correct.slice().sort().join(','),got=[...ans].sort().join(',');if(expected===got)correct++});
  return {correct,total:session.questions.length,pct:session.questions.length?Math.round(correct/session.questions.length*100):0};
}
function revisionAreaPicker(areaId,icon,title,subtitle){
  const topics=revisionTopics().filter(t=>t.areaId===areaId),count=topics.reduce((n,t)=>n+t.questions.length,0);
  return `<fieldset class="revision-path-picker revision-area-picker" data-revision-group="${areaId}"><legend><span>${icon}</span>${esc(title)}</legend><p>${esc(subtitle)}</p><label class="revision-select-path"><input type="checkbox" data-revision-group-toggle="${areaId}"> Select whole area • ${count} questions</label><div class="revision-lesson-options">${topics.map(t=>`<label><input type="checkbox" name="topicIds" value="${esc(t.id)}" data-revision-topic data-area="${areaId}"><span><strong>${esc(t.title)}</strong><small>${esc(t.meta)} • ${t.questions.length} question${t.questions.length===1?'':'s'}</small></span></label>`).join('')}</div></fieldset>`;
}
function revision(){
  if(revisionSession?.finished){
    const score=revisionScore(revisionSession);
    return `<div class="page-head"><div class="breadcrumb"><a href="#/">Dashboard</a> / Revision</div><span class="eyebrow">Quiz complete • ${esc(revisionSession.topicLabel)}</span><h1>↻ ${score.pct}%</h1><p class="muted">${score.correct} correct out of ${score.total}. Use the misses to choose what to revisit.</p></div><div class="revision-result-hero"><div class="revision-score-ring"><strong>${score.pct}%</strong><span>${score.correct}/${score.total}</span></div><div><h2>${score.pct>=80?'Strong work.':score.pct>=60?'Getting there.':'Use the review below to target the gaps.'}</h2><div class="button-row"><button class="button primary" data-action="revision-restart">Choose another quiz</button><button class="button ghost" data-action="revision-repeat">Repeat same topics</button></div></div></div><section class="section"><div class="section-head"><div><h2>Answer review</h2><p>Your answer, the correct answer and the reason.</p></div></div><div class="revision-review-list">${revisionSession.questions.map((q,i)=>{const selected=revisionSession.answers[i]||[],ok=q.correct.slice().sort().join(',')===[...selected].sort().join(',');return `<article class="revision-review ${ok?'correct':'wrong'}"><span>${ok?'✓ Correct':'× Review'} • ${esc(q.areaTitle)}</span><h3>${esc(q.question)}</h3><p><b>Your answer:</b> ${esc(selected.map(x=>q.options[x]).join(', ')||'No answer')}</p><p><b>Correct answer:</b> ${esc(q.correct.map(x=>q.options[x]).join(', '))}</p><div class="callout ${ok?'good':''}">${esc(q.feedback)}</div><a class="link-button" href="${q.sourceHref}">${esc(q.sourceLabel)} →</a></article>`}).join('')}</div></section>`;
  }
  if(revisionSession){
    const q=revisionSession.questions[revisionSession.index],n=revisionSession.index+1,multiple=q.correct.length>1;
    return `<div class="page-head"><div class="breadcrumb"><a href="#/">Dashboard</a> / Revision</div><span class="eyebrow">${esc(revisionSession.topicLabel)}</span><h1>Question ${n} of ${revisionSession.questions.length}</h1><div class="revision-progress"><span style="width:${Math.round((revisionSession.index/revisionSession.questions.length)*100)}%"></span></div></div><section class="revision-quiz-card"><span class="eyebrow">${esc(q.areaTitle)} • ${esc(q.topicTitle)}</span><h2>${esc(q.question)}</h2><p class="muted">${multiple?'Select every answer that applies.':'Choose the best answer.'}</p><form data-action-form="revision-answer" class="revision-answer-form">${q.options.map((o,i)=>`<label class="revision-choice"><input type="${multiple?'checkbox':'radio'}" name="answer" value="${i}" ${multiple?'':'required'}><span>${esc(o)}</span></label>`).join('')}<div class="button-row"><button class="button primary" type="submit">${n===revisionSession.questions.length?'Finish quiz':'Next question →'}</button><button class="button ghost" type="button" data-action="revision-abandon">Quit quiz</button></div></form></section>`;
  }
  const results=loadRevisionResults(),total=revisionQuestionBank().length,topicTotal=revisionTopics().length;
  return `<div class="page-head"><div class="breadcrumb"><a href="#/">Dashboard</a> / Revision</div><span class="eyebrow">Scored retrieval + design judgement</span><h1>↻ Revision Quizzes</h1><p class="muted">Practise Blueprint systems, Module 0 game-art theory and Designer Studio decisions. Choose one area to focus on or mix them for a quick retrieval session.</p></div>
  <div class="revision-start-grid"><section class="project-panel revision-random"><span class="eyebrow">Random quiz</span><h2>Mix the whole Hub</h2><p><b>${total}</b> questions across <b>${topicTotal}</b> topics are shuffled each time.</p><form data-action-form="revision-random-start"><label>Number of questions<select name="count"><option value="10" selected>10 — quick revision</option><option value="20">20 — solid session</option><option value="30">30 — full workout</option></select></label><button class="button primary" type="submit">Start mixed quiz →</button></form></section><section class="project-panel revision-focus-intro"><span class="eyebrow">Focused quiz</span><h2>Choose what you actually need</h2><p>Pick a whole area or individual topics. Use Unreal for technical recall, 3D Foundations for game-art decisions, or Designer Studio for scenario-based judgement.</p><div class="callout good"><b>Best use:</b> revise a weak area, prepare for the next practical session, then follow the review links straight back to the content you missed.</div></section></div>
  <section class="section revision-builder"><div class="section-head"><div><h2>Build a focused quiz</h2><p id="revisionSelectionSummary">Choose at least one topic.</p></div></div><form data-action-form="revision-focused-start" id="revisionFocusedForm"><div class="revision-path-picker-grid revision-area-picker-grid">${revisionAreaPicker('unreal','⌘','Unreal Learning','Core Blueprint/system knowledge from the existing course quizzes.')}${revisionAreaPicker('design','✦','Designer Studio','Scenario questions: choose the design decision that best solves the problem.')}${revisionAreaPicker('modeling','⬡','3D Foundations','Mesh, views, geometry, pivots, UVs, PBR and game-ready decisions.')}</div><div class="revision-builder-footer"><label>Number of questions<select name="count"><option value="10" selected>10</option><option value="20">20</option><option value="30">30</option></select></label><button class="button primary" type="submit">Start focused quiz →</button></div></form></section>
  ${results.length?`<section class="section"><div class="section-head"><div><h2>Recent scores</h2><p>Stored on this browser for quick progress checks.</p></div></div><div class="recent-quiz-results">${results.slice(0,6).map(r=>`<div><strong>${r.pct}%</strong><span>${esc(r.topicLabel)} • ${r.correct}/${r.total}</span><small>${new Date(r.at).toLocaleString()}</small></div>`).join('')}</div></section>`:''}`;
}

function teacherClassPage(classId){
  if(!BACKEND.user || BACKEND.profile?.role!=='teacher'){
    return `<div class="page-head"><div class="breadcrumb"><a href="#/teacher">Teacher Dashboard</a> / Class</div><span class="eyebrow">Class view</span><h1>Teacher access required</h1><p class="muted">Sign in with a teacher account to inspect class learning.</p></div>`;
  }
  return `<div class="page-head class-detail-head"><div class="breadcrumb"><a href="#/teacher">Teacher Dashboard</a> / Class</div><span class="eyebrow">Class learning view</span><h1>Loading class…</h1><p class="muted">Students, content and progress for this teaching group.</p></div><div id="teacherClassContent"><div class="empty">Loading class content…</div></div>`;
}
function classProgressRows(o,memberIds,items,prefix='',titleKey=x=>x.title){
  const total=memberIds.length;
  return items.map(item=>{
    const id=prefix+item.id;
    const complete=memberIds.filter(uid=>o.progress.some(p=>p.user_id===uid&&p.lesson_id===id&&p.completed)).length;
    const pct=total?Math.round((complete/total)*100):0;
    return `<div class="class-content-row"><div class="class-content-name"><strong>${esc(titleKey(item))}</strong>${item.duration?`<small>${esc(item.duration)}</small>`:''}</div><div class="class-content-progress"><div class="progress"><span style="width:${pct}%"></span></div><span>${complete}/${total} complete</span></div></div>`;
  }).join('');
}
function studentCompletedContent(o,userId){
  const completed=new Set(o.progress.filter(p=>p.user_id===userId&&p.completed).map(p=>p.lesson_id));
  const list=(items,prefix='')=>items.filter(x=>completed.has(prefix+x.id)).map(x=>`<li>${esc(x.title)}</li>`).join('');
  const core=list(DATA.lessons),blocks=list(BLOCKS.blocks,'block:'),tutorials=list(TOOLS.tutorials,'tutorial:'),modelTheory=list(MODEL_FOUNDATIONS.chapters,'modeltheory:')+(completed.has('modelfoundation:final')?'<li>Model Doctor</li>':''),model=list(MODEL.lessons,'model:'),sculpt=list(SCULPT.practices,'sculpt:'),design=list(DESIGN.modules.map(m=>({id:m.id,title:m.build?.title||m.title})),'designbuild:'),designSources=list(designSourceItems(),'designsource:'),modelVideos=list(modelVideoItems(),'modelvideo:'),modelBuild=list(MODEL.builds||[],'modelbuild:'),modelFix=list(MODEL.fixes||[],'modelfix:'),chapters=TOOLS.chapterBuilds.filter(x=>completed.has(`chapter:${x.path}`)).map(x=>`<li>${esc(x.title)}</li>`).join('');
  return `<div class="student-content-detail">
    <div><strong>Building Blocks</strong><ul>${blocks||'<li class="muted">None completed yet.</li>'}</ul></div>
    <div><strong>Core lessons</strong><ul>${core||'<li class="muted">None completed yet.</li>'}</ul></div>
    <div><strong>Practical builds</strong><ul>${tutorials||'<li class="muted">None completed yet.</li>'}</ul></div>
    <div><strong>Designer Studio</strong><ul>${design||'<li class="muted">None completed yet.</li>'}</ul></div>
    <div><strong>Designer industry sources</strong><ul>${designSources||'<li class="muted">None completed yet.</li>'}</ul></div>
    <div><strong>3D Foundations</strong><ul>${modelTheory||'<li class="muted">None completed yet.</li>'}</ul></div><div><strong>3D Videos</strong><ul>${modelVideos||'<li class="muted">None completed yet.</li>'}</ul></div><div><strong>3D / Sculpt</strong><ul>${model+modelBuild+modelFix+sculpt||'<li class="muted">None completed yet.</li>'}</ul></div>
    <div><strong>Chapter Builds</strong><ul>${chapters||'<li class="muted">None completed yet.</li>'}</ul></div>
  </div>`;
}
async function renderTeacherClass(classId){
  const box=$('#teacherClassContent');if(!box)return;
  try{
    const [o,teachingClasses]=await Promise.all([BACKEND.teacherClassOverview(classId),BACKEND.getTeachingClasses()]);
    const c=(o?.classes||[]).find(x=>String(x.id)===String(classId));
    if(!c){box.innerHTML='<div class="empty"><h3>Class not found.</h3><p>You may no longer teach this class, or it may have been deleted.</p><a class="button ghost" href="#/teacher">Back to Teacher Dashboard</a></div>';return}
    const memberIds=(c.class_members||[]).map(m=>m.user_id);
    const members=(o.profiles||[]).filter(p=>memberIds.includes(p.id));
    const progress=o.progress||[];
    const done=(uid,id)=>progress.some(p=>p.user_id===uid&&p.lesson_id===id&&p.completed);
    const count=(uid,items,prefix='')=>items.filter(x=>done(uid,prefix+x.id)).length;
    const teacherNames=Object.fromEntries((o.teachers||[]).map(t=>[t.id,t.display_name]));
    const teacherIds=(c.class_teachers||[]).map(t=>t.teacher_id);
    const head=document.querySelector('.class-detail-head');
    if(head)head.innerHTML=`<div class="breadcrumb"><a href="#/teacher">Teacher Dashboard</a> / ${esc(c.name)}</div><span class="eyebrow">Class learning view • ${esc(c.academic_year||'No academic year')}</span><h1>${esc(c.name)}</h1><p class="muted">One class, its students and exactly what they have completed across the Hub. Formal project work and submissions stay in Microsoft Teams.</p><div class="class-detail-team">${teacherIds.map(id=>`<span>${esc(teacherNames[id]||'Teacher')}${id===c.teacher_id?' • Owner':''}</span>`).join('')}</div>`;
    const lessonTotal=DATA.lessons.length*memberIds.length;
    const lessonDone=memberIds.reduce((n,uid)=>n+count(uid,DATA.lessons),0);
    const blockTotal=BLOCKS.blocks.length*memberIds.length;
    const blockDone=memberIds.reduce((n,uid)=>n+count(uid,BLOCKS.blocks,'block:'),0);
    const tutorialTotal=TOOLS.tutorials.length*memberIds.length;
    const tutorialDone=memberIds.reduce((n,uid)=>n+count(uid,TOOLS.tutorials,'tutorial:'),0);
    const designDone=memberIds.reduce((n,uid)=>n+count(uid,DESIGN.modules.map(m=>({id:m.id})),'designbuild:'),0);
    const modelDone=memberIds.reduce((n,uid)=>n+count(uid,MODEL.lessons,'model:')+count(uid,MODEL_FOUNDATIONS.chapters,'modeltheory:')+(done(uid,'modelfoundation:final')?1:0),0);
    box.innerHTML=`
      <div class="teacher-grid class-detail-stats">
        <div class="teacher-stat"><small>Students</small><strong>${memberIds.length}</strong></div>
        <div class="teacher-stat"><small>Building Blocks</small><strong>${blockDone}</strong><span>of ${blockTotal||0} student completions</span></div>
        <div class="teacher-stat"><small>Core lessons</small><strong>${lessonDone}</strong><span>of ${lessonTotal||0} student completions</span></div>
        <div class="teacher-stat"><small>Practical builds</small><strong>${tutorialDone}</strong><span>of ${tutorialTotal||0} student completions</span></div>
        <div class="teacher-stat"><small>Designer builds</small><strong>${designDone}</strong></div>
        <div class="teacher-stat"><small>3D learning</small><strong>${modelDone}</strong></div>
      </div>
      <section class="section"><div class="section-head"><div><h2>Students in ${esc(c.name)}</h2><p>Open a student to see the exact content they have completed, not just a percentage.</p></div><span class="sync-chip">${members.length} student${members.length===1?'':'s'}</span></div>
        <div class="class-student-grid">${members.length?members.map(p=>{
          const core=count(p.id,DATA.lessons),blocks=count(p.id,BLOCKS.blocks,'block:'),tutorials=count(p.id,TOOLS.tutorials,'tutorial:'),design=count(p.id,DESIGN.modules.map(m=>({id:m.id})),'designbuild:'),model=count(p.id,MODEL_FOUNDATIONS.chapters,'modeltheory:')+(done(p.id,'modelfoundation:final')?1:0)+count(p.id,MODEL.lessons,'model:')+count(p.id,SCULPT.practices,'sculpt:'),chapters=count(p.id,TOOLS.chapterBuilds.map(x=>({id:x.path})),'chapter:');
          const moveTargets=(teachingClasses||[]).filter(x=>String(x.id)!==String(c.id));
          return `<article class="class-student-card"><div class="class-student-head">${avatarMarkup('sm',p.display_name)}<div><h3>${esc(p.display_name)}</h3><span>${core}/${DATA.lessons.length} core lessons</span></div></div><div class="class-student-stats"><span><b>${blocks}</b> blocks</span><span><b>${tutorials}</b> tutorials</span><span><b>${design}</b> design builds</span><span><b>${model}</b> 3D/sculpt</span><span><b>${chapters}</b> chapter builds</span></div><div class="class-student-actions"><div><strong>Manage student</strong><small>Moving or removing keeps their account, XP and completed learning.</small></div>${moveTargets.length?`<form class="class-student-move" data-action-form="move-class-member" data-class="${c.id}" data-student="${p.id}" data-name="${esc(p.display_name)}"><select name="targetClass" required><option value="">Move to another class…</option>${moveTargets.map(x=>`<option value="${x.id}">${esc(x.name)}${x.academic_year?` • ${esc(x.academic_year)}`:''}</option>`).join('')}</select><button class="button small" type="submit">Move</button></form>`:''}<button class="button small danger class-student-remove" data-action="remove-class-member" data-class="${c.id}" data-student="${p.id}" data-name="${esc(p.display_name)}">Remove from class</button></div><details><summary>View completed content</summary>${studentCompletedContent(o,p.id)}</details></article>`;
        }).join(''):'<div class="empty"><h3>No students yet.</h3><p>Students will appear here after joining this class.</p></div>'}</div>
      </section>
      <section class="section class-learning-content"><div class="section-head"><div><span class="eyebrow">CLASS CONTENT</span><h2>What has this class completed?</h2><p>Every row shows how many students in this class have completed that piece of Hub learning. Project briefs, deadlines and submissions are handled in Microsoft Teams.</p></div></div>
        <details open class="class-content-group"><summary>🧱 Building Blocks <span>${BLOCKS.blocks.length} concepts</span></summary><div>${classProgressRows(o,memberIds,BLOCKS.blocks,'block:')}</div></details>
        <details open class="class-content-group"><summary>🧠 Core System Lessons <span>${DATA.lessons.length} lessons</span></summary><div>${classProgressRows(o,memberIds,DATA.lessons)}</div></details>
        <details class="class-content-group"><summary>🛠 Practical builds <span>${TOOLS.tutorials.length} outcomes</span></summary><div>${classProgressRows(o,memberIds,TOOLS.tutorials,'tutorial:')}</div></details>
        <details class="class-content-group"><summary>🎨 Designer Studio Builds <span>${DESIGN.modules.length} builds</span></summary><div>${classProgressRows(o,memberIds,DESIGN.modules.map(m=>({id:m.id,title:m.build?.title||m.title})),'designbuild:')}</div></details>
        <details class="class-content-group"><summary>🎬 Designer Industry Sources <span>${designSourceItems().length} source tasks</span></summary><div>${classProgressRows(o,memberIds,designSourceItems(),'designsource:')}</div></details>
        <details class="class-content-group"><summary>🎥 3ds Max Video Series <span>${MODEL_VIDEOS.videos.length} follow-alongs</span></summary><div>${classProgressRows(o,memberIds,modelVideoItems(),'modelvideo:')}</div></details>
        <details class="class-content-group"><summary>🧠 3D Foundations <span>${MODEL_FOUNDATIONS.chapters.length} chapters + final</span></summary><div>${classProgressRows(o,memberIds,MODEL_FOUNDATIONS.chapters,'modeltheory:')}${classProgressRows(o,memberIds,[{id:'final',title:'Model Doctor'}],'modelfoundation:')}</div></details>
        <details class="class-content-group"><summary>⬡ 3D Modelling <span>${MODEL.lessons.length} lessons</span></summary><div>${classProgressRows(o,memberIds,MODEL.lessons,'model:')}</div></details>
        ${(MODEL.builds||[]).length?`<details class="class-content-group"><summary>🔧 3D Build X <span>${MODEL.builds.length} builds</span></summary><div>${classProgressRows(o,memberIds,MODEL.builds,'modelbuild:')}</div></details>`:''}
        ${(MODEL.fixes||[]).length?`<details class="class-content-group"><summary>🩹 Fix This Model <span>${MODEL.fixes.length} clinics</span></summary><div>${classProgressRows(o,memberIds,MODEL.fixes,'modelfix:')}</div></details>`:''}
        <details class="class-content-group"><summary>◉ Sculpt Playground <span>${SCULPT.practices.length} exercises</span></summary><div>${classProgressRows(o,memberIds,SCULPT.practices,'sculpt:')}</div></details>
        <details class="class-content-group"><summary>🎮 Chapter Builds <span>${TOOLS.chapterBuilds.length} builds</span></summary><div>${classProgressRows(o,memberIds,TOOLS.chapterBuilds.map(x=>({...x,id:x.path})),'chapter:',x=>x.title)}</div></details>
      </section>`;
  }catch(err){box.innerHTML=`<div class="empty"><h3>Could not load this class.</h3><p>${esc(err.message)}</p></div>`}
}


function classesPage(){
  if(!BACKEND.user){
    return `<div class="page-head"><div class="breadcrumb"><a href="#/">Home</a> / Classes</div><span class="eyebrow">CLOUD ACCOUNT</span><h1>🏫 Classes</h1><p class="muted">Sign in to see your teaching group.</p></div><div class="offline-note">Use the account button at the top-right to sign in or create your Learning Hub account.</div>`;
  }
  const teacher=isTeacher();
  return `<div class="page-head classes-page-head"><div class="breadcrumb"><a href="#/">Home</a> / ${teacher?'Classes':'My Class'}</div><span class="eyebrow">${teacher?'TEACHER QUICK ACCESS':'STUDENT QUICK ACCESS'}</span><h1>🏫 ${teacher?'Classes':'My Class'}</h1><p class="muted">${teacher?'Open a teaching group immediately, copy its join code or jump to the full Teacher dashboard.':'Your teaching group and the places you use most often.'}</p></div><div id="classesHubContent"><div class="empty">Loading ${teacher?'classes':'your class'}…</div></div>`;
}


function critiquePage(){
  if(!BACKEND.user){
    return `<div class="page-head critique-page-head"><div class="breadcrumb"><a href="#/">Home</a> / Critique Board</div><span class="eyebrow">CLASS STUDIO WALL</span><h1>💬 Critique Board</h1><p class="muted">Share work in progress, ask a specific design question and help classmates improve theirs.</p></div><div class="offline-note">The Critique Board is private to your class. Sign in with your Learning Hub account to continue.</div>`;
  }
  return `<div class="page-head critique-page-head"><div class="breadcrumb"><a href="#/">Home</a> / Critique Board</div><span class="eyebrow">SHARE WORK • GIVE FEEDBACK • IMPROVE</span><h1>💬 Critique Board</h1><p class="muted">A class-only studio wall for work in progress. This is not an assignment hand-in: post a screenshot, ask one useful question, then help somebody else.</p></div><div id="critiqueContent"><div class="empty">Loading your class Critique Board…</div></div>`;
}
function critiqueLondonDay(value){
  try{return new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/London',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(value))}catch(e){return ''}
}
function critiqueFeedbackMarkup(f,post){
  const staff=f.author_role==='teacher',canDelete=isTeacher();
  return `<article class="critique-feedback ${staff?'teacher-feedback':''}"><div class="critique-feedback-head"><div><strong>${esc(f.author_name||'Classmate')}${staff?' <span class="staff-role-pill compact">🎓 TEACHER</span>':''}</strong><small>${new Date(f.created_at).toLocaleString()}${f.xp_awarded?' • +15 XP rewarded':''}</small></div>${canDelete?`<button class="link-button danger-link" data-action="delete-critique-feedback" data-feedback="${f.id}">Delete</button>`:''}</div><div class="critique-feedback-grid"><div><b>✓ WHAT WORKS</b><p>${esc(f.works_well)}</p></div><div><b>?</b><span>WHAT COULD BE CLEARER</span><p>${esc(f.clearer)}</p></div><div><b>→</b><span>ONE CHANGE I’D TRY</span><p>${esc(f.change_try)}</p></div></div></article>`;
}
function critiquePostCard(post){
  const mine=post.author_id===BACKEND.user?.id,feedback=post.feedback||[],already=feedback.some(f=>f.author_id===BACKEND.user?.id),needs=!mine&&feedback.length<2,staff=post.author_role==='teacher';
  const canDelete=mine||isTeacher(),after=post.improved_url,beforeThumb=post.image_thumb_url||post.image_url,afterThumb=post.improved_thumb_url||after;
  return `<article class="critique-post-card ${needs?'needs-feedback':''} ${mine?'my-critique-post':''}" id="critique-post-${post.id}" data-critique-post data-post="${post.id}" data-mine="${mine?'1':'0'}" data-needs="${needs?'1':'0'}"><div class="critique-post-meta"><div><span class="critique-area">${esc(post.area||'General')}</span>${needs?'<span class="critique-needs-chip">NEEDS FEEDBACK</span>':''}${after?'<span class="critique-improved-chip">IMPROVED VERSION</span>':''}</div><small>${esc(post.author_name||'Student')}${staff?' • Teacher':''} • ${new Date(post.created_at).toLocaleString()}</small></div>${post.title?`<h2>${esc(post.title)}</h2>`:''}<div class="critique-question"><span>THE QUESTION</span><p>${esc(post.prompt)}</p></div><div class="critique-image-stage ${after?'before-after':''}"><figure><span>${after?'BEFORE':'WORK IN PROGRESS'}</span>${post.image_url?`<button class="zoomable-image" data-action="open-image" data-src="${esc(post.image_url)}"><img class="cloud-thumb" src="${esc(beforeThumb)}" data-full-src="${esc(post.image_url)}" alt="${esc(post.title||post.prompt)} critique screenshot" loading="lazy" decoding="async"><small>Open image</small></button>`:'<div class="critique-image-missing">Screenshot unavailable</div>'}</figure>${after?`<figure><span>AFTER</span><button class="zoomable-image" data-action="open-image" data-src="${esc(after)}"><img class="cloud-thumb" src="${esc(afterThumb)}" data-full-src="${esc(after)}" alt="Improved version of ${esc(post.title||'critique work')}" loading="lazy" decoding="async"><small>Open image</small></button></figure>`:''}</div>${mine?`<div class="critique-owner-tools"><form data-action-form="critique-improved" data-post="${post.id}" data-class="${post.class_id}"><label><span>${after?'Replace improved version':'Show what changed'}</span><input name="file" type="file" accept="image/png,image/jpeg,image/webp" required></label><button class="button ghost small" type="submit">${after?'Replace After image':'Upload improved version →'}</button></form>${canDelete?`<button class="link-button danger-link" data-action="delete-critique-post" data-post="${post.id}">Delete post</button>`:''}</div>`:canDelete?`<div class="critique-owner-tools teacher"><button class="link-button danger-link" data-action="delete-critique-post" data-post="${post.id}">Remove post</button></div>`:''}<section class="critique-feedback-zone"><div class="critique-feedback-title"><div><span class="eyebrow">PEER CRITIQUE</span><h3>${feedback.length} response${feedback.length===1?'':'s'}</h3></div>${needs?'<small>Two useful responses get this off the “needs feedback” list.</small>':''}</div>${feedback.length?`<div class="critique-feedback-list">${feedback.map(f=>critiqueFeedbackMarkup(f,post)).join('')}</div>`:'<div class="critique-no-feedback">No critique yet. Be the first useful human.</div>'}${!mine&&!already?`<form class="critique-feedback-form" data-action-form="critique-feedback" data-post="${post.id}"><div class="critique-feedback-form-head"><strong>Give structured feedback</strong><span>${isTeacher()?'Teacher feedback • no XP':'+15 XP for up to 3 meaningful critiques per day'}</span></div><label><span>What works?</span><textarea name="worksWell" minlength="12" maxlength="600" rows="2" placeholder="What already reads clearly or feels strong?" required></textarea></label><label><span>What could be clearer?</span><textarea name="clearer" minlength="12" maxlength="600" rows="2" placeholder="Where did your eye go, or what confused you?" required></textarea></label><label><span>One change I’d try…</span><textarea name="changeTry" minlength="12" maxlength="600" rows="2" placeholder="Give one specific, testable suggestion." required></textarea></label><button class="button primary small" type="submit">Post critique${isTeacher()?'':' • +15 XP if rewarded'}</button></form>`:already?'<div class="critique-already">✓ You have already given this person feedback.</div>':''}</section></article>`;
}
function applyCritiqueFilter(){
  const cards=$$('[data-critique-post]');let shown=0;
  cards.forEach(card=>{const show=critiqueFilter==='all'||(critiqueFilter==='needs'&&card.dataset.needs==='1')||(critiqueFilter==='mine'&&card.dataset.mine==='1');card.hidden=!show;if(show)shown++;});
  $$('[data-action="critique-filter"]').forEach(b=>b.classList.toggle('active',b.dataset.filter===critiqueFilter));
  const count=$('#critiqueVisibleCount');if(count)count.textContent=`${shown} post${shown===1?'':'s'} shown`;
}
async function refreshCritiqueNav(){
  const badge=$('#critiqueNavCount');if(!badge)return;
  if(!BACKEND.user){badge.textContent='Share • feedback • improve';return}
  try{const n=await BACKEND.getCritiqueAttentionCount();badge.textContent=n?`${n} need${n===1?'s':''} feedback`:'Class studio wall';badge.parentElement?.classList.toggle('has-attention',n>0)}catch(e){badge.textContent='Class studio wall'}
}
async function renderCritiqueBoard(){
  const box=$('#critiqueContent');if(!box||!BACKEND.user)return;
  try{
    const classes=await BACKEND.getCritiqueClasses();
    if(!classes.length){box.innerHTML=`<div class="empty"><h3>No class Critique Board yet.</h3><p>${isTeacher()?'Create or join a teaching class first.':'Join your class with the code from your teacher.'}</p></div>`;return}
    if(!critiqueClassId||!classes.some(c=>String(c.id)===String(critiqueClassId)))critiqueClassId=String(classes[0].id);
    const cls=classes.find(c=>String(c.id)===String(critiqueClassId))||classes[0];
    const [posts,rewarded]=await Promise.all([BACKEND.getCritiquePosts(cls.id),BACKEND.getCritiqueRewardCountToday()]);critiquePostsCache=posts;
    const mine=posts.filter(p=>p.author_id===BACKEND.user.id).length,needs=posts.filter(p=>p.author_id!==BACKEND.user.id&&(p.feedback||[]).length<2).length;
    box.innerHTML=`<section class="critique-toolbar"><label>Class<select id="critiqueClassSelect">${classes.map(c=>`<option value="${c.id}" ${String(c.id)===String(cls.id)?'selected':''}>${esc(c.name)}${c.academic_year?' • '+esc(c.academic_year):''}</option>`).join('')}</select></label><button class="button primary" data-action="random-critique">🎲 Give me something to critique</button></section><section class="critique-stats"><div><strong>${posts.length}</strong><span>class posts</span></div><div><strong>${needs}</strong><span>need feedback</span></div><div><strong>${mine}</strong><span>your posts</span></div>${isTeacher()?'<div><strong>MOD</strong><span>teacher view</span></div>':`<div><strong>${Math.min(rewarded,3)}/3</strong><span>rewarded critiques today</span></div>`}</section><section class="critique-post-composer"><div><span class="deep-label">POST WORK IN PROGRESS</span><h2>Ask one useful question.</h2><p>Do not just post “thoughts?”. Tell classmates what you are trying to communicate so they can test whether it actually reads.</p></div><form data-action-form="critique-post" data-class="${cls.id}"><div class="critique-compose-grid"><label><span>Design area</span><select name="area"><option>Level Design</option><option>Environment</option><option>Materials</option><option>Lighting</option><option>Terrain / World</option><option>Cinematics</option><option>Audio</option><option>Polish</option><option>3D Modelling</option><option>Other</option></select></label><label><span>Short title <small>optional</small></span><input name="title" maxlength="120" placeholder="e.g. Corridor lighting pass"></label></div><label><span>What do you want classmates to judge?</span><textarea name="prompt" minlength="8" maxlength="600" rows="3" placeholder="I’m trying to make the player notice the doorway first. Does it work?" required></textarea></label><label class="critique-file-pick"><span>Screenshot</span><input name="file" type="file" accept="image/png,image/jpeg,image/webp" required><small>PNG, JPG or WebP • maximum 8 MB • automatically optimised for the Hub</small></label><button class="button primary" type="submit">💬 Post for critique</button></form></section><section class="section critique-feed-section"><div class="section-head"><div><span class="eyebrow">CLASS STUDIO WALL</span><h2>Give useful feedback while people are still building</h2><p>Structured critique rewards the first three meaningful responses you give each day. You can keep helping after that; the XP just stops.</p></div><span class="sync-chip" id="critiqueVisibleCount">${posts.length} posts shown</span></div><div class="critique-filter-row"><button class="tutorial-filter ${critiqueFilter==='all'?'active':''}" data-action="critique-filter" data-filter="all">All</button><button class="tutorial-filter ${critiqueFilter==='needs'?'active':''}" data-action="critique-filter" data-filter="needs">Needs feedback ${needs?`(${needs})`:''}</button><button class="tutorial-filter ${critiqueFilter==='mine'?'active':''}" data-action="critique-filter" data-filter="mine">My work ${mine?`(${mine})`:''}</button></div><div class="critique-feed">${posts.length?posts.map(critiquePostCard).join(''):'<div class="empty"><h3>The studio wall is empty.</h3><p>Post the first screenshot and ask something specific.</p></div>'}</div></section>`;
    applyCritiqueFilter();refreshCritiqueNav();
  }catch(err){box.innerHTML=`<div class="empty"><h3>Could not load the Critique Board.</h3><p>${esc(err.message)}</p></div>`}
}
function randomCritiquePost(){
  const candidates=critiquePostsCache.filter(p=>p.author_id!==BACKEND.user?.id&&!(p.feedback||[]).some(f=>f.author_id===BACKEND.user?.id));
  if(!candidates.length){toast('You have already critiqued everything currently available. Heroic.');return}
  const min=Math.min(...candidates.map(p=>(p.feedback||[]).length)),pool=candidates.filter(p=>(p.feedback||[]).length===min),pick=pool[Math.floor(Math.random()*pool.length)];
  critiqueFilter='all';applyCritiqueFilter();
  const card=document.getElementById(`critique-post-${pick.id}`);if(!card)return;
  card.scrollIntoView({behavior:'smooth',block:'center'});card.classList.add('critique-spotlight');setTimeout(()=>card.classList.remove('critique-spotlight'),1800);
}


function leaderboardPage(){
  if(!BACKEND.user){
    return `<div class="page-head"><div class="breadcrumb"><a href="#/">Home</a> / Leaderboard</div><span class="eyebrow">CLASS XP</span><h1>🏆 Leaderboard</h1><p class="muted">Sign in to see your class ranking, XP and streak.</p></div><div class="offline-note">Leaderboards are class-only. Sign in with your Learning Hub account to continue.</div>`;
  }
  return `<div class="page-head leaderboard-page-head"><div class="breadcrumb"><a href="#/">Home</a> / Leaderboard</div><span class="eyebrow">CLASS PROGRESSION</span><h1>🏆 Leaderboard</h1><p class="muted">Useful progress earns XP. Grades and assessment marks are never ranked here.</p></div><div id="leaderboardContent"><div class="empty">Loading class leaderboard…</div></div>`;
}
function leaderboardTitle(levelNo){
  const n=Number(levelNo)||1;
  if(n>=10)return 'Engine Architect';
  if(n>=8)return 'Systems Director';
  if(n>=6)return 'Prototype Ranger';
  if(n>=4)return 'Blueprint Adept';
  if(n>=2)return 'UE Explorer';
  return 'New Recruit';
}
function leaderboardMedal(pos){return Number(pos)===1?'🥇':Number(pos)===2?'🥈':Number(pos)===3?'🥉':`#${pos}`}
function leaderboardRow(row,me=false){
  const initial=String(row.display_name||'?').trim().slice(0,1).toUpperCase()||'?';
  return `<div class="leaderboard-row ${me?'is-you':''}"><div class="leaderboard-rank">${leaderboardMedal(row.rank_position)}</div><div class="leaderboard-person"><span class="leaderboard-avatar">${esc(initial)}</span><div><strong>${esc(row.display_name||'Student')}${me?' <span class="you-chip">YOU</span>':''}</strong><small>Level ${row.current_level} • ${esc(leaderboardTitle(row.current_level))}</small></div></div><div class="leaderboard-streak">${row.current_streak?`🔥 ${row.current_streak}`:'—'}<small>streak</small></div><div class="leaderboard-xp"><strong>${Number(row.score_xp||0).toLocaleString()}</strong><small>${leaderboardPeriod==='week'?'weekly XP':'total XP'}</small></div></div>`;
}
async function renderLeaderboard(){
  const box=$('#leaderboardContent');if(!box||!BACKEND.user)return;
  try{
    const classes=await BACKEND.getLeaderboardClasses();
    if(!classes.length){box.innerHTML=`<div class="empty"><h3>No class leaderboard yet.</h3><p>${isTeacher()?'Create or join a teaching class first.':'Join your class with the code from your teacher.'}</p></div>`;return}
    if(!leaderboardClassId||!classes.some(c=>String(c.id)===String(leaderboardClassId)))leaderboardClassId=String(classes[0].id);
    const cls=classes.find(c=>String(c.id)===String(leaderboardClassId))||classes[0];
    const enabled=cls.leaderboard_enabled!==false;
    if(!enabled&&!isTeacher()){
      box.innerHTML=`<section class="leaderboard-toolbar"><label>Class<select id="leaderboardClassSelect">${classes.map(c=>`<option value="${c.id}" ${String(c.id)===String(cls.id)?'selected':''}>${esc(c.name)}</option>`).join('')}</select></label></section><div class="empty leaderboard-paused"><h3>🏆 Leaderboard paused</h3><p>Your teacher has switched the leaderboard off for this class.</p></div>`;return;
    }
    const rows=await BACKEND.getClassLeaderboard(cls.id,leaderboardPeriod);
    const me=rows.find(r=>r.user_id===BACKEND.user.id)||null;
    const top=rows.slice(0,10),podium=rows.slice(0,3);
    const improving=[...rows].sort((a,b)=>((b.weekly_xp||0)-(b.previous_week_xp||0))-((a.weekly_xp||0)-(a.previous_week_xp||0)))[0]||null;
    const active=[...rows].sort((a,b)=>(b.current_streak||0)-(a.current_streak||0))[0]||null;
    box.innerHTML=`
      <section class="leaderboard-toolbar"><label>Class<select id="leaderboardClassSelect">${classes.map(c=>`<option value="${c.id}" ${String(c.id)===String(cls.id)?'selected':''}>${esc(c.name)}${c.academic_year?' • '+esc(c.academic_year):''}</option>`).join('')}</select></label><div class="leaderboard-period-tabs"><button class="${leaderboardPeriod==='week'?'active':''}" data-action="leaderboard-period" data-period="week">This week</button><button class="${leaderboardPeriod==='all'?'active':''}" data-action="leaderboard-period" data-period="all">All time</button></div>${isTeacher()?`<button class="button ghost small" data-action="toggle-leaderboard" data-class="${cls.id}" data-enabled="${enabled?'1':'0'}">${enabled?'Pause for students':'Enable for students'}</button>`:''}</section>
      ${isTeacher()&&!enabled?'<div class="teacher-security-banner"><b>LEADERBOARD PAUSED FOR STUDENTS</b><span>You can still preview it here. Students in this class cannot see rankings until you enable it again.</span></div>':''}
      ${rows.length?`<section class="leaderboard-podium">${podium.map((r,i)=>`<article class="podium-card place-${i+1}"><span class="podium-medal">${leaderboardMedal(r.rank_position)}</span><span class="podium-avatar">${esc(String(r.display_name||'?').slice(0,1).toUpperCase())}</span><h3>${esc(r.display_name)}</h3><p>Level ${r.current_level} • ${esc(leaderboardTitle(r.current_level))}</p><strong>${Number(r.score_xp||0).toLocaleString()} XP</strong>${r.current_streak?`<small>🔥 ${r.current_streak} day streak</small>`:'<small>No current streak</small>'}</article>`).join('')}</section>`:''}
      <section class="leaderboard-spotlights">${improving?`<article><span>📈</span><div><small>BIGGEST PROGRESS THIS WEEK</small><strong>${esc(improving.display_name)}</strong><p>+${Math.max(0,(improving.weekly_xp||0)-(improving.previous_week_xp||0)).toLocaleString()} XP vs last week</p></div></article>`:''}${active?`<article><span>🔥</span><div><small>CURRENT STREAK</small><strong>${esc(active.display_name)}</strong><p>${active.current_streak||0} active day${Number(active.current_streak)===1?'':'s'}</p></div></article>`:''}</section>
      <section class="section leaderboard-board"><div class="section-head"><div><h2>${leaderboardPeriod==='week'?'This week':'All-time'} Top 10</h2><p>XP comes from genuine learning progress. Repeating the same completion does not award it twice.</p></div><span class="sync-chip">${rows.length} student${rows.length===1?'':'s'}</span></div><div class="leaderboard-list">${top.map(r=>leaderboardRow(r,r.user_id===BACKEND.user.id)).join('')||'<div class="empty">No XP activity yet.</div>'}</div></section>
      ${!isTeacher()&&me&&!top.some(r=>r.user_id===BACKEND.user.id)?`<section class="your-rank-card"><span class="eyebrow">YOUR POSITION</span>${leaderboardRow(me,true)}</section>`:''}
      <section class="leaderboard-rules"><span class="eyebrow">HOW XP WORKS</span><h2>Progress, not grades.</h2><div class="leaderboard-rule-grid"><span><b>Core learning</b>Uses the XP already attached to Hub lessons and chapter builds.</span><span><b>+20 XP</b>Complete an industry video/article source task in Designer Studio.</span><span><b>+15 XP</b>Meaningful structured peer critique — first 3 rewarded each day.</span><span><b>+25 XP</b>Quick Tutorial or Building Block completion.</span><span><b>+5 XP</b>First genuine activity of the day.</span><span><b>No farming</b>One reward per source/post; critique XP has a daily cap.</span></div></section>`;
  }catch(err){box.innerHTML=`<div class="empty"><h3>Could not load the leaderboard.</h3><p>${esc(err.message)}</p></div>`}
}

async function renderClassesHub(){
  const box=$('#classesHubContent');if(!box||!BACKEND.user)return;
  try{
    if(isTeacher()){
      const active=await BACKEND.getTeachingClassCards();
      box.innerHTML=`<section class="classes-hub-toolbar"><div><span class="eyebrow">${active.length} ACTIVE CLASS${active.length===1?'':'ES'}</span><h2>Your teaching groups</h2><p>Open the class itself for student-by-student progress and content coverage.</p></div><a class="button ghost" href="#/teacher">Full Teacher dashboard →</a></section>
      <section class="classes-hub-grid">${active.length?active.map(c=>{
        const members=(c.class_members||[]).length;
        const owner=c.teacher_id===BACKEND.user.id;
        return `<article class="classes-hub-card ${owner?'owned':'co-taught'}"><div class="classes-hub-card-top"><div><span class="eyebrow">${owner?'OWNER':'CO-TEACHER'}</span><h2>${esc(c.name)}</h2><p>${esc(c.academic_year||'Current class')}</p></div><span class="classes-hub-count"><b>${members}</b> student${members===1?'':'s'}</span></div><div class="classes-hub-code"><small>JOIN CODE</small><code>${esc(c.join_code||'Not set')}</code><span>${c.join_enabled?'Accepting joins':'Joins paused'}</span></div><div class="classes-hub-actions"><a class="button primary" href="#/teacher/class/${c.id}">Open class →</a><a class="button ghost" href="#/leaderboard">🏆 Leaderboard</a><a class="button ghost" href="#/teacher">Manage classes</a></div></article>`;
      }).join(''):`<div class="empty classes-hub-empty"><h3>No active classes yet.</h3><p>Create your first class from the Teacher dashboard.</p><a class="button primary" href="#/teacher">Create a class →</a></div>`}</section>`;
      return;
    }

    const classes=await BACKEND.getMyClasses();
    box.innerHTML=`${classes.length?`<section class="classes-hub-grid student-classes">${classes.map(c=>`<article class="classes-hub-card student"><div class="classes-hub-card-top"><div><span class="eyebrow">YOUR CLASS</span><h2>${esc(c.name)}</h2><p>${esc(c.academic_year||'Teaching group')}</p></div><span class="classes-hub-count student">🏫</span></div><p class="classes-hub-note">Use the shortcuts below for the work connected to your Learning Hub account.</p><div class="classes-hub-actions"><a class="button primary" href="#/progress">My Progress →</a><a class="button ghost" href="#/leaderboard">🏆 Leaderboard</a><a class="button ghost" href="#/critique">💬 Critique Board</a></div></article>`).join('')}</section>`:`<div class="empty classes-hub-empty"><h3>You are not in a class yet.</h3><p>Enter the class code your teacher gave you.</p></div>`}
    <section class="classes-join-panel"><div><span class="eyebrow">${classes.length?'NEED ANOTHER CLASS?':'JOIN YOUR CLASS'}</span><h2>Use a class code</h2><p>Your teacher can give you the current code for the teaching group.</p></div><form class="join-class-inline" data-action-form="join-class"><input name="classCode" maxlength="20" required placeholder="CLASS CODE"><button class="button primary" type="submit">Join class</button></form></section>`;
  }catch(err){box.innerHTML=`<div class="empty"><h3>Could not load classes.</h3><p>${esc(err.message)}</p></div>`}
}

function teacherPage(){
  if(!BACKEND.user || BACKEND.profile?.role!=='teacher'){
    return `<div class="page-head"><span class="eyebrow">Teacher dashboard</span><h1>Teacher access</h1><p class="muted">This page becomes available to a profile with the teacher role when the cloud backend is connected.</p></div><div class="offline-note">Student learning remains fully usable in local mode. Teacher overview needs Supabase because it is aggregating progress across different accounts/devices.</div>`;
  }
  return `<div class="page-head"><span class="eyebrow">Teacher dashboard</span><h1>Teaching overview</h1><p class="muted">Class groups, learning progress, student questions, critique and the student roadmap. Formal project work stays in Microsoft Teams.</p></div><div id="teacherContent"><div class="empty">Loading teaching data…</div></div>`;
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
  lazySignedPreview($$('[data-evidence-preview]'),{thumbnail:path=>BACKEND.openEvidenceThumbnail(path),full:path=>BACKEND.openEvidenceFile(path),alt:'Student evidence preview',fallbackText:'Preview unavailable — open file'});
}

async function renderTeacher(){
  const box=$('#teacherContent');if(!box)return;
  try{
    const o=await BACKEND.teacherOverview();
    if(!o){box.innerHTML='<div class="empty">Teacher data unavailable.</div>';return}
    const progressRows=o.progressSummary||[],progressBy=Object.fromEntries(progressRows.map(x=>[x.user_id,x]));
    const pcount=(id,key)=>Number(progressBy[id]?.[key]||0);
    const byStudent=id=>pcount(id,'core_lessons');
    const tutorialBy=id=>pcount(id,'tutorials');
    const designBy=id=>pcount(id,'designer_builds');
    const modelingBy=id=>pcount(id,'modelling');
    const chapterBy=id=>pcount(id,'chapter_builds');
    const names=Object.fromEntries(o.profiles.map(p=>[p.id,p.display_name]));
    const teacherNames=Object.fromEntries((o.teachers||[]).map(p=>[p.id,p.display_name]));
    const recent=(o.comments||[]).slice(0,12);
    const activeClasses=(o.classes||[]).filter(c=>!c.archived);
    const archivedClasses=(o.classes||[]).filter(c=>c.archived);

    box.innerHTML=`<div class="teacher-grid">
      <div class="teacher-stat"><small>Students</small><strong>${o.profiles.length}</strong></div>
      <div class="teacher-stat"><small>Active classes</small><strong>${activeClasses.length}</strong><span>${archivedClasses.length} archived</span></div>
      <div class="teacher-stat"><small>Lesson completions</small><strong>${progressRows.reduce((n,x)=>n+Number(x.core_lessons||0),0)}</strong></div>
      <div class="teacher-stat"><small>Practical builds tried</small><strong>${progressRows.reduce((n,x)=>n+Number(x.tutorials||0),0)}</strong></div>
      <div class="teacher-stat"><small>Designer builds</small><strong>${progressRows.reduce((n,x)=>n+Number(x.designer_builds||0),0)}</strong></div>
      <div class="teacher-stat"><small>3D / Foundations</small><strong>${progressRows.reduce((n,x)=>n+Number(x.modelling||0),0)}</strong></div>
      <div class="teacher-stat"><small>Chapter Builds complete</small><strong>${progressRows.reduce((n,x)=>n+Number(x.chapter_builds||0),0)}</strong></div>
      <div class="teacher-stat"><small>Student requests</small><strong>${(o.requests||[]).length}</strong></div>
    </div>

    <div class="teacher-security-banner"><b>CLASS-SCOPED PRIVACY ACTIVE</b><span>You only see learning progress and lesson comments from classes you own or co-teach. Project briefs, files and formal feedback stay in Microsoft Teams.</span></div>

    <section class="section">
      <div class="section-head"><div><h2>Teacher team</h2><p>Invite colleagues without sharing a permanent master code. Each invite is unique, expires and can only be used once.</p></div><span class="sync-chip">${o.teachers?.length||1} teacher${(o.teachers?.length||1)===1?'':'s'}</span></div>
      <div class="teacher-split">
        <form class="project-panel form-grid" data-action-form="create-teacher-invite">
          <span class="eyebrow">Invite a teacher</span>
          <label>Who is it for? <span class="muted">(optional)</span><input name="label" maxlength="120" placeholder="e.g. Leah / Games teacher"></label>
          <label>Expires after<select name="days"><option value="1">1 day</option><option value="3">3 days</option><option value="7" selected>7 days</option><option value="14">14 days</option><option value="30">30 days</option></select></label>
          <button class="button small primary" type="submit">Generate teacher invite</button><div id="teacherInviteResult"></div>
        </form>
        <div class="teacher-team-panel"><div class="teacher-list">${(o.teachers||[]).map(t=>`<div class="teacher-person"><span class="teacher-person-icon">T</span><div><strong>${esc(t.display_name)}</strong><small>${t.id===BACKEND.user.id?'You • Teacher':'Teacher'}</small></div></div>`).join('')||'<div class="muted">Teacher account active.</div>'}</div><div class="teacher-invite-list">${(o.teacherInvites||[]).length?(o.teacherInvites||[]).map(inv=>{const expired=new Date(inv.expires_at)<=new Date();const state=inv.used_at?'Used':inv.revoked_at?'Revoked':expired?'Expired':'Active';return `<div class="teacher-invite-row ${state.toLowerCase()}"><div><strong>${esc(inv.label||'Teacher invite')}</strong><small>Code ending ${esc(inv.code_hint)} • ${state} • expires ${new Date(inv.expires_at).toLocaleDateString()}</small></div>${state==='Active'?`<button class="button tiny ghost" data-action="revoke-teacher-invite" data-invite="${inv.id}">Revoke</button>`:''}</div>`}).join(''):'<div class="muted">No teacher invites created yet.</div>'}</div></div>
      </div>
    </section>

    <section class="section">
      <div class="section-head"><div><h2>Classes</h2><p>Classes you own or co-teach. Assigned teachers share learning-progress access; only the class owner can add/remove co-teachers or permanently delete the class.</p></div><span class="sync-chip">${activeClasses.length} active</span></div>
      <div class="teacher-split">
        <form class="project-panel form-grid" data-action-form="create-class"><span class="eyebrow">New class</span><label>Class name<input name="name" required maxlength="100" placeholder="Games Y1 A"></label><label>Academic year<input name="academicYear" maxlength="40" placeholder="2026/27"></label><button class="button small primary" type="submit">Create class</button></form>
        <div class="class-manager">
          ${activeClasses.length?activeClasses.map(c=>{
            const memberIds=(c.class_members||[]).map(m=>m.user_id),available=o.profiles.filter(p=>!memberIds.includes(p.id)),teacherIds=(c.class_teachers||[]).map(t=>t.teacher_id),availableTeachers=(o.teachers||[]).filter(t=>!teacherIds.includes(t.id)),isOwner=c.teacher_id===BACKEND.user.id;
            return `<div class="class-card ${isOwner?'owned':'co-taught'}"><div class="class-card-head"><div><strong>${esc(c.name)}</strong><small>${esc(c.academic_year||'No academic year set')} • ${isOwner?'You own this class':'You co-teach this class'}</small></div><span>${memberIds.length} student${memberIds.length===1?'':'s'}</span></div>
              <div class="class-teaching-team"><div class="class-team-head"><small>TEACHING TEAM</small><span>${teacherIds.length} teacher${teacherIds.length===1?'':'s'}</span></div><div class="class-teacher-chips">${teacherIds.map(id=>`<div class="class-teacher-chip ${id===c.teacher_id?'owner':''}"><span>${esc(teacherNames[id]||'Teacher')}</span><small>${id===c.teacher_id?'Owner':id===BACKEND.user.id?'You • Co-teacher':'Co-teacher'}</small>${isOwner&&id!==c.teacher_id?`<button data-action="remove-class-teacher" data-class="${c.id}" data-teacher="${id}" data-name="${esc(teacherNames[id]||'Teacher')}" title="Remove co-teacher">×</button>`:''}</div>`).join('')}</div>${isOwner&&availableTeachers.length?`<form class="class-add-teacher" data-action-form="add-class-teacher" data-class="${c.id}"><select name="teacher" required><option value="">Add co-teacher…</option>${availableTeachers.map(t=>`<option value="${t.id}">${esc(t.display_name)}</option>`).join('')}</select><button class="button small" type="submit">Add teacher</button></form>`:''}</div>
              <details class="class-edit-panel"><summary>Edit class details</summary><form class="class-edit-form" data-action-form="edit-class" data-class="${c.id}"><label>Class name<input name="name" maxlength="100" value="${esc(c.name)}" required></label><label>Academic year<input name="academicYear" maxlength="40" value="${esc(c.academic_year||'')}"></label><button class="button small primary" type="submit">Save changes</button></form></details>
              <div class="class-code-panel ${c.join_enabled?'enabled':'paused'}"><div><small>STUDENT JOIN CODE</small><code>${esc(c.join_code||'—')}</code><span>${c.join_enabled?'Accepting joins':'Paused'}</span></div><div class="class-code-actions"><button class="button small ghost" data-action="copy-class-code" data-code="${esc(c.join_code||'')}">Copy</button><button class="button small ghost" data-action="toggle-class-join" data-class="${c.id}" data-enabled="${c.join_enabled?'1':'0'}">${c.join_enabled?'Pause':'Enable'}</button><button class="button small ghost" data-action="regenerate-class-code" data-class="${c.id}">New code</button></div></div>
              <div class="class-members">${memberIds.length?memberIds.map(id=>`<div class="class-member"><span>${esc(names[id]||'Student')}</span><button data-action="remove-class-member" data-class="${c.id}" data-student="${id}" data-name="${esc(names[id]||'Student')}" title="Remove from class">×</button></div>`).join(''):'<div class="muted">No students in this class yet. Give students the join code above.</div>'}</div>
              ${available.length?`<form class="class-add" data-action-form="add-class-member" data-class="${c.id}"><select name="student" required><option value="">Add student already visible to you…</option>${available.map(st=>`<option value="${st.id}">${esc(st.display_name)}</option>`).join('')}</select><button class="button small" type="submit">Add</button></form>`:'<div class="muted">New students should normally join with the class code. Manual add only lists students already visible through one of your classes.</div>'}
              <div class="class-open-row"><a class="button primary class-open-button" href="#/teacher/class/${c.id}">Open class →</a><span>See this class's students and learning content.</span></div><div class="class-danger-row"><button class="button small ghost" data-action="archive-class" data-class="${c.id}" data-name="${esc(c.name)}">Archive class</button>${isOwner?`<button class="button small danger" data-action="delete-class" data-class="${c.id}" data-name="${esc(c.name)}">Delete permanently</button>`:`<button class="button small ghost" data-action="leave-class-teacher" data-class="${c.id}" data-name="${esc(c.name)}">Leave teaching team</button>`}</div></div>`;
          }).join(''):'<div class="offline-note">No active classes yet. Create your first teaching group here.</div>'}
          ${archivedClasses.length?`<details class="archived-classes"><summary>${archivedClasses.length} archived class${archivedClasses.length===1?'':'es'}</summary><div class="archived-class-list">${archivedClasses.map(c=>{const isOwner=c.teacher_id===BACKEND.user.id;return `<div class="class-card archived"><div class="class-card-head"><div><strong>${esc(c.name)}</strong><small>${esc(c.academic_year||'')} • ${isOwner?'Owner':'Co-teacher'}</small></div><span>Archived</span></div><p class="muted">Students and learning progress remain in the Hub; this class no longer accepts joins.</p><div class="class-danger-row"><button class="button small ghost" data-action="unarchive-class" data-class="${c.id}" data-name="${esc(c.name)}">Restore class</button>${isOwner?`<button class="button small danger" data-action="delete-class" data-class="${c.id}" data-name="${esc(c.name)}">Delete permanently</button>`:`<button class="button small ghost" data-action="leave-class-teacher" data-class="${c.id}" data-name="${esc(c.name)}">Leave teaching team</button>`}</div></div>`}).join('')}</div></details>`:''}
        </div>
      </div>
    </section>

    <section class="section"><div class="section-head"><div><h2>Student overview</h2><p>Use completion to spot who needs help. Formal assessment decisions still belong in Microsoft Teams.</p></div></div><table class="teacher-table"><thead><tr><th>Student</th><th>Lessons</th><th>Tutorials</th><th>Designer</th><th>3D</th><th>Chapter Builds</th></tr></thead><tbody>${o.profiles.map(p=>`<tr><td>${esc(p.display_name)}</td><td>${byStudent(p.id)}/${DATA.lessons.length}</td><td>${tutorialBy(p.id)}/${TOOLS.tutorials.length}</td><td>${designBy(p.id)}/${DESIGN.modules.length}</td><td>${modelingBy(p.id)}</td><td>${chapterBy(p.id)}/${TOOLS.chapterBuilds.length}</td></tr>`).join('')}</tbody></table></section>

    <section class="section"><div class="section-head"><div><h2>Student roadmap</h2><p>Top student requests and ideas for what the Hub should support next.</p></div><a class="button small" href="#/requests">Open full Requests Board</a></div><div class="board-grid">${(o.requests||[]).slice().sort((a,b)=>(b.request_votes?.length||0)-(a.request_votes?.length||0)).slice(0,6).map(r=>`<div class="board-card"><span class="eyebrow">${esc(requestCategoryLabel(r.category))} • ${r.request_votes?.length||0} votes</span><h3>${esc(r.title)}</h3><p>${esc(r.body)}</p><span class="request-status ${esc(r.status)}">${esc(requestStatusLabel(r.status))}</span></div>`).join('')||'<div class="empty">No requests yet.</div>'}</div></section>

    <section class="section"><div class="section-head"><div><h2>Recent questions & reflections</h2><p>Reply directly to the student. Replies remain inside that student's private lesson thread.</p></div></div><div class="board-grid">${recent.length?recent.map(c=>{const l=lesson(c.lesson_id);return `<div class="board-card"><span class="eyebrow">${esc(names[c.student_id]||'Student')} • ${esc(l?.title||c.lesson_id)}</span><p>${esc(c.body)}</p><form class="comment-form" data-action-form="teacher-reply" data-lesson="${esc(c.lesson_id)}" data-student="${esc(c.student_id)}"><textarea name="body" maxlength="2000" placeholder="Teacher reply…" required></textarea><button class="button small primary" type="submit">Reply</button></form></div>`}).join(''):'<div class="empty">No student comments yet.</div>'}</div></section>`;
  }catch(e){box.innerHTML=`<div class="offline-note">${esc(e.message)}</div>`}
}

async function loadComments(id){
  const box=$('#commentsList');if(!box||!BACKEND.user)return;
  const rows=await BACKEND.getComments(id);
  if(!rows.length){box.innerHTML='<div class="muted">No comments yet. Use this space for a question or a short learning reflection.</div>';return}
  box.innerHTML=rows.map(c=>{
    const name=c.author?.display_name||'User',role=c.author?.role||'student';
    return `<div class="comment"><div class="comment-avatar">${esc(name.slice(0,1).toUpperCase())}</div><div><div class="comment-head"><strong>${esc(name)}${role==='teacher'?' <span class="staff-role-pill compact">🎓 TEACHER</span>':''}</strong><span>${esc(role)} • ${new Date(c.created_at).toLocaleString()}</span></div><p>${esc(c.body)}</p></div></div>`;
  }).join('');
}

function rememberCurrentRouteScroll(){
  const hash=location.hash||'#/';
  if(!hash.startsWith('#/'))return;
  try{history.replaceState({...history.state,hubRoute:hash,hubScrollY:window.scrollY},'');}catch(e){}
}
function route(options={}){
  const preserveScroll=options===true||options?.preserveScroll===true;
  const previousScroll=window.scrollY;
  const currentHash=location.hash||'#/';
  const savedState=history.state||{};
  const restoreHistoryScroll=!preserveScroll&&savedState.hubRoute===currentHash&&Number.isFinite(savedState.hubScrollY);
  const parts=currentHash.replace(/^#\//,'').split('/').filter(Boolean),app=$('#app');
  $$('.nav a').forEach(a=>a.classList.remove('active'));
  if(!parts.length){app.innerHTML=dashboard();activate('home')}
  else if(parts[0]==='programming'){app.innerHTML=programmingPage();activate('programming')}
  else if(parts[0]==='blocks'){app.innerHTML=blocksPage();activate('blocks')}
  else if(parts[0]==='block'&&parts[1]){app.innerHTML=blockPage(parts[1]);activate('blocks')}
  else if(parts[0]==='news'){app.innerHTML=newsPage();activate('news')}
  else if(parts[0]==='path'){app.innerHTML=pathPage(parts[1]);activate(parts[1])}
  else if(parts[0]==='lesson'){app.innerHTML=lessonPage(parts[1]);const l=lesson(parts[1]);if(l)activate(l.path)}
  else if(parts[0]==='my-game'||parts[0]==='projects'){app.innerHTML=teamsProjectNoticePage();activate('home')}
  else if(parts[0]==='classes'){app.innerHTML=classesPage();activate('classes')}
  else if(parts[0]==='leaderboard'){app.innerHTML=leaderboardPage();activate('leaderboard')}
  else if(parts[0]==='critique'){app.innerHTML=critiquePage();activate('critique')}
  else if(parts[0]==='progress'){app.innerHTML=progressPage();activate('progress')}
  else if(parts[0]==='requests'){app.innerHTML=requestBoard();activate('requests')}
  else if(parts[0]==='challenges'){app.innerHTML=challengeBoard();activate('challenges')}
  else if(parts[0]==='homework'){app.innerHTML=homeworkBoard();activate('homework')}
  else if(parts[0]==='sculpt'){app.innerHTML=sculptPage(parts[1]);activate('sculpt')}
  else if(parts[0]==='modeling'&&parts[1]==='videos'){app.innerHTML=modelingVideosPage();activate('modeling')}
  else if(parts[0]==='modeling'&&parts[1]==='foundations'&&parts[2]==='final'){app.innerHTML=modelingFoundationFinalPage();activate('modeling')}
  else if(parts[0]==='modeling'&&parts[1]==='foundations'&&parts[2]){app.innerHTML=modelingFoundationChapterPage(parts[2]);activate('modeling')}
  else if(parts[0]==='modeling'&&parts[1]==='foundations'){app.innerHTML=modelingFoundationsPage();activate('modeling')}
  else if(parts[0]==='modeling'&&parts[1]==='lesson'&&parts[2]){app.innerHTML=modelingLessonPage(parts[2]);activate('modeling')}
  else if(parts[0]==='modeling'&&parts[1]==='build'&&parts[2]){app.innerHTML=modelingBuildPage(parts[2]);activate('modeling')}
  else if(parts[0]==='modeling'&&parts[1]==='fix'&&parts[2]){app.innerHTML=modelingFixPage(parts[2]);activate('modeling')}
  else if(parts[0]==='modeling'){app.innerHTML=modelingPage();activate('modeling')}
  else if(parts[0]==='design'&&parts[1]){app.innerHTML=designModulePage(parts[1]);activate('design')}
  else if(parts[0]==='design'){app.innerHTML=designPage();activate('design')}
  else if(parts[0]==='resources'){app.innerHTML=resourceLibraryPage();activate('resources')}
  else if(parts[0]==='tutorials'){app.innerHTML=tutorialLibrary();activate('tutorials')}
  else if(parts[0]==='snippets'){app.innerHTML=snippetBankPage();activate('snippets')}
  else if(parts[0]==='tutorial-family'&&parts[1]){app.innerHTML=tutorialFamilyPage(parts[1]);activate('tutorials')}
  else if(parts[0]==='tutorial'&&parts[1]){app.innerHTML=tutorialPage(parts[1]);activate('tutorials')}
  else if(parts[0]==='chapter-build'&&parts[1]){app.innerHTML=chapterBuildPage(parts[1]);activate('tutorials')}
  else if(parts[0]==='revision'){app.innerHTML=revision();activate('revision')}
  else if(parts[0]==='glossary'){app.innerHTML=glossary();activate('glossary')}
  else if(parts[0]==='teacher'&&parts[1]==='class'&&parts[2]){app.innerHTML=teacherClassPage(parts[2]);activate('teacher')}
  else if(parts[0]==='teacher'){app.innerHTML=teacherPage();activate('teacher')}
  else app.innerHTML=notFound();

  bindPageInputs();
  updateChrome();
  refreshNotificationCount();
  if(preserveScroll)requestAnimationFrame(()=>window.scrollTo({top:previousScroll,left:0,behavior:'auto'}));
  else if(restoreHistoryScroll)requestAnimationFrame(()=>window.scrollTo({top:Math.max(0,savedState.hubScrollY||0),left:0,behavior:'auto'}));
  else window.scrollTo(0,0);
  try{history.replaceState({...history.state,hubRoute:currentHash,hubScrollY:restoreHistoryScroll?(savedState.hubScrollY||0):0},'');}catch(e){}
  app.focus({preventScroll:true});
  $('#sidebar').classList.remove('open');

  if(parts[0]==='lesson'&&BACKEND.user)loadComments(parts[1]);
  if(parts[0]==='news') loadNewsFeed();
  if(parts[0]==='leaderboard'&&BACKEND.user) renderLeaderboard();
  if(parts[0]==='critique'&&BACKEND.user) renderCritiqueBoard();
  if(parts[0]==='progress'&&BACKEND.user) renderProgressCloud();
  if(parts[0]==='classes'&&BACKEND.user) renderClassesHub();
  if(parts[0]==='requests'&&BACKEND.user) renderRequests();
  if(parts[0]==='teacher'&&parts[1]==='class'&&parts[2]) renderTeacherClass(parts[2]);
  else if(parts[0]==='teacher') renderTeacher();
}
function activate(key){
  const a=$(`[data-route="${key}"]`);if(a)a.classList.add('active');
}
function bindRevisionBuilder(){
  const form=$('#revisionFocusedForm');if(!form)return;
  const topics=()=>Array.from(form.querySelectorAll('[data-revision-topic]'));
  const update=()=>{
    const checked=topics().filter(x=>x.checked),ids=checked.map(x=>x.value),available=revisionQuestionBank(ids).length;
    const summary=$('#revisionSelectionSummary');if(summary)summary.textContent=ids.length?`${ids.length} topic${ids.length===1?'':'s'} selected • ${available} question${available===1?'':'s'} available`:'Choose at least one topic.';
    form.querySelectorAll('[data-revision-group-toggle]').forEach(toggle=>{const items=topics().filter(x=>x.dataset.area===toggle.dataset.revisionGroupToggle),n=items.filter(x=>x.checked).length;toggle.checked=n===items.length&&items.length>0;toggle.indeterminate=n>0&&n<items.length;});
  };
  form.querySelectorAll('[data-revision-group-toggle]').forEach(toggle=>toggle.addEventListener('change',()=>{topics().filter(x=>x.dataset.area===toggle.dataset.revisionGroupToggle).forEach(x=>x.checked=toggle.checked);update();}));
  topics().forEach(x=>x.addEventListener('change',update));update();
}
function bindStudyBoard(searchId,buttonAttr,emptyId){
  const search=$(`#${searchId}`);if(!search)return;
  let area='all';
  const cards=()=>$$('[data-study-card]');
  const apply=()=>{
    const tokens=search.value.toLowerCase().trim().split(/\s+/).filter(Boolean);let visible=0;
    cards().forEach(card=>{const hay=card.dataset.search||'',okText=!tokens.length||tokens.every(t=>hay.includes(t)),okArea=area==='all'||card.dataset.area===area,ok=okText&&okArea;card.style.display=ok?'':'none';if(ok)visible++;});
    $$('[data-study-section]').forEach(section=>{const any=$$('[data-study-card]',section).some(c=>c.style.display!=='none');section.hidden=!any;if(any&&tokens.length)section.open=true;});
    const empty=$(`#${emptyId}`);if(empty)empty.hidden=visible!==0;
  };
  bindEmbeddedSearchInput(search,apply,()=>firstVisible('[data-study-card]')?.scrollIntoView({block:'center',behavior:'smooth'}));
  $$(`[${buttonAttr}]`).forEach(btn=>btn.addEventListener('click',()=>{$$(`[${buttonAttr}]`).forEach(x=>x.classList.remove('active'));btn.classList.add('active');area=btn.getAttribute(buttonAttr)||'all';apply();}));
}
function bindEmbeddedSearchInput(input,apply,onEnter){
  if(!input)return;
  const run=()=>apply();
  input.addEventListener('input',run);
  input.addEventListener('search',run);
  input.addEventListener('change',run);
  input.addEventListener('compositionend',run);
  input.addEventListener('keydown',e=>{
    if(e.key!=='Enter')return;
    e.preventDefault();
    run();
    if(onEnter)requestAnimationFrame(onEnter);
  });
}
function firstVisible(selector,root=document){
  return $$(selector,root).find(x=>x.style.display!=='none'&&!x.hidden);
}
function bindTutorialLibrary(){
  const search=$('#tutorialSearch');if(!search)return;
  let category='all';
  const grid=$('#tutorialGrid'),cards=()=>grid?$$('[data-tutorial-card]',grid):[];
  const apply=()=>{
    const q=search.value.toLowerCase().trim(),tokens=q.split(/\s+/).filter(Boolean);let visible=0;
    cards().forEach(card=>{const hay=card.dataset.search||'',okText=!tokens.length||tokens.every(t=>hay.includes(t)),okCat=category==='all'||card.dataset.category===category;card.style.display=okText&&okCat?'':'none';if(okText&&okCat)visible++;});
    const out=$('#tutorialResultCount');if(out)out.textContent=`${visible} recipe famil${visible===1?'y':'ies'}`;
    const featured=$('#tutorialFeaturedSection');if(featured)featured.hidden=!!tokens.length||category!=='all';
    const empty=$('#tutorialSearchEmpty');if(empty)empty.hidden=visible!==0;
  };
  bindEmbeddedSearchInput(search,apply,()=>firstVisible('[data-tutorial-card]',grid)?.scrollIntoView({block:'center',behavior:'smooth'}));
  $$('[data-tutorial-filter]').forEach(btn=>btn.addEventListener('click',()=>{$$('[data-tutorial-filter]').forEach(x=>x.classList.remove('active'));btn.classList.add('active');category=btn.dataset.tutorialFilter||'all';apply();}));
}
function bindSnippetBank(){
  const search=$('#snippetSearch');if(!search)return;
  let category='all';
  const grid=$('#snippetGrid'),cards=()=>grid?$$('[data-snippet-card]',grid):[];
  const apply=()=>{
    const q=search.value.toLowerCase().trim(),tokens=q.split(/\s+/).filter(Boolean);let visible=0;
    cards().forEach(card=>{const hay=card.dataset.search||'',okText=!tokens.length||tokens.every(t=>hay.includes(t)),okCat=category==='all'||card.dataset.category===category;card.style.display=okText&&okCat?'':'none';if(okText&&okCat)visible++;});
    const out=$('#snippetResultCount');if(out)out.textContent=visible;
    const empty=$('#snippetSearchEmpty');if(empty)empty.hidden=visible!==0;
  };
  bindEmbeddedSearchInput(search,apply,()=>firstVisible('[data-snippet-card]',grid)?.scrollIntoView({block:'center',behavior:'smooth'}));
  $$('[data-snippet-filter]').forEach(btn=>btn.addEventListener('click',()=>{$$('[data-snippet-filter]').forEach(x=>x.classList.remove('active'));btn.classList.add('active');category=btn.dataset.snippetFilter||'all';apply();}));
}
function bindNewsPage(){
  const search=$('#newsSearch');if(!search)return;
  newsCategory='all';newsSearch='';
  const apply=()=>{newsSearch=search.value.trim();renderNewsFeed()};
  bindEmbeddedSearchInput(search,apply,()=>$('#newsFeed')?.scrollIntoView({block:'start',behavior:'smooth'}));
  $$('[data-news-filter]').forEach(btn=>btn.addEventListener('click',async()=>{
    $$('[data-news-filter]').forEach(x=>x.classList.remove('active'));btn.classList.add('active');
    newsCategory=btn.dataset.newsFilter||'all';
    if(newsCategory==='saved'&&BACKEND.user&&!newsSocial.savedLoaded){
      const box=$('#newsFeed');if(box)box.innerHTML='<div class="news-loading"><span class="news-pulse"></span><div><strong>Loading your saved stories…</strong></div></div>';
      await loadSavedNewsItems();
    }
    renderNewsFeed();
  }));
}
function bindPageInputs(){
  const gs=$('#glossarySearch');
  if(gs){
    let area='all';
    const apply=()=>{
      const q=gs.value.toLowerCase().trim(),tokens=q.split(/\s+/).filter(Boolean);let visible=0;
      $$('.glossary-item').forEach(x=>{const hay=x.dataset.search||'',okText=!tokens.length||tokens.every(t=>hay.includes(t)),okArea=area==='all'||x.dataset.area===area,ok=okText&&okArea;x.style.display=ok?'':'none';if(ok)visible++;});
      const out=$('#glossaryResultCount');if(out)out.textContent=`${visible} term${visible===1?'':'s'}`;
      const empty=$('#glossarySearchEmpty');if(empty)empty.hidden=visible!==0;
    };
    bindEmbeddedSearchInput(gs,apply,()=>firstVisible('.glossary-item')?.scrollIntoView({block:'center',behavior:'smooth'}));
    $$('[data-glossary-filter]').forEach(btn=>btn.addEventListener('click',()=>{$$('[data-glossary-filter]').forEach(x=>x.classList.remove('active'));btn.classList.add('active');area=btn.dataset.glossaryFilter||'all';apply();}));
  }
  bindStudyBoard('challengeSearch','data-challenge-filter','challengeSearchEmpty');
  bindStudyBoard('homeworkSearch','data-homework-filter','homeworkSearchEmpty');
  bindRevisionBuilder();
  bindTutorialLibrary();
  bindSnippetBank();
  bindNewsPage();
}
async function copyHomework(id){
  let item=homeworkItems().find(x=>x.id===id);
  if(!item){const l=lesson(id);if(l)item=homeworkItems().find(x=>x.legacyId===id)}
  if(!item)return;
  const steps=item.steps?.length?`\n\nSuggested steps:\n${item.steps.map((x,i)=>`${i+1}. ${x}`).join('\n')}`:'';
  const text=`${item.title}\n\nTask:\n${item.task}${steps}\n\nEvidence:\n${item.evidence}\n\nStretch:\n${item.stretch}\n\nRelated Hub area: ${item.areaLabel}\nReference: ${item.meta}`;
  try{await navigator.clipboard.writeText(text);toast('Independent-study task copied — ready for Teams.')}catch(e){toast('Clipboard blocked by browser.')}
}

function localUnlockedBadgeIds(){return new Set(achievementData(0,0).filter(a=>a[3]).map(a=>a[0]))}
function badgeUnlockAfter(before,fallback){
  const after=achievementData(0,0).filter(a=>a[3]);
  const unlocked=after.find(a=>!before.has(a[0]));
  if(unlocked){toast(`🏆 Badge unlocked — ${unlocked[1]}!`,'badge');return true}
  toast(fallback);return false;
}

async function setLessonComplete(id){
  const l=lesson(id),was=state.completed.includes(id),before=localUnlockedBadgeIds();
  if(was) state.completed=state.completed.filter(x=>x!==id);
  else state.completed.push(id);
  saveState();
  if(BACKEND.user){
    try{await BACKEND.setLessonComplete(id,!was)}catch(e){toast('Saved locally; cloud sync failed.')}
  }
  const unlocked=!was&&pathComplete(l.path)&&!chapterBuildDone(l.path);
  if(was)toast('Marked incomplete.');
  else if(unlocked)toast('Chapter complete — 🎮 Chapter Build unlocked!','badge');
  else badgeUnlockAfter(before,`Lesson complete! +${l.xp} XP`);
  finishInlineUpdate(!was);
}
async function setBlockComplete(id){
  const b=buildingBlock(id);if(!b)return;const was=blockDone(id);
  state.blockCompleted=was?(state.blockCompleted||[]).filter(x=>x!==id):[...new Set([...(state.blockCompleted||[]),id])];saveState();
  if(BACKEND.user){try{await BACKEND.setLessonComplete(`block:${id}`,!was)}catch(e){toast('Saved locally; cloud sync failed.')}}
  toast(was?'Building Block marked not learned.':'Building Block learned • +25 XP');finishInlineUpdate(!was);
}
async function setTutorialComplete(id){
  const t=tutorial(id);if(!t)return;const was=tutorialDone(id),before=localUnlockedBadgeIds();
  state.tutorialCompleted=was?state.tutorialCompleted.filter(x=>x!==id):[...new Set([...state.tutorialCompleted,id])];saveState();
  if(BACKEND.user){try{await BACKEND.setLessonComplete(`tutorial:${id}`,!was)}catch(e){toast('Saved locally; cloud sync failed.')}}
  if(was)toast('Tutorial marked not complete.');else badgeUnlockAfter(before,'Tutorial complete ✓');finishInlineUpdate(!was);
}
async function setChapterBuildComplete(pathId){
  const b=chapterBuild(pathId),was=chapterBuildDone(pathId),before=localUnlockedBadgeIds();if(!b||(!pathComplete(pathId)&&!was)){toast('Finish the learning path first.');return}
  state.chapterBuildCompleted=was?state.chapterBuildCompleted.filter(x=>x!==pathId):[...new Set([...state.chapterBuildCompleted,pathId])];saveState();
  if(BACKEND.user){try{await BACKEND.setLessonComplete(`chapter:${pathId}`,!was)}catch(e){toast('Saved locally; cloud sync failed.')}}
  if(was)toast('Chapter Build marked incomplete.');else badgeUnlockAfter(before,`Chapter Build complete! +${b.xp} XP`);finishInlineUpdate(!was);
}
async function setDesignBuildComplete(id){
  const m=designModule(id);if(!m)return;const was=designBuildDone(id),before=localUnlockedBadgeIds();
  state.designBuildCompleted=was?state.designBuildCompleted.filter(x=>x!==id):[...new Set([...state.designBuildCompleted,id])];saveState();
  if(BACKEND.user){try{await BACKEND.setLessonComplete(`designbuild:${id}`,!was)}catch(e){toast('Saved locally; cloud sync failed.')}}
  if(was)toast('Studio Build marked incomplete.');else badgeUnlockAfter(before,'Studio Build complete • +300 XP');finishInlineUpdate(!was);
}
async function setDesignSourceComplete(key){
  const clean=String(key||'').trim();if(!clean||(state.designSourceCompleted||[]).includes(clean))return;const before=localUnlockedBadgeIds();
  state.designSourceCompleted=[...new Set([...(state.designSourceCompleted||[]),clean])];saveState();
  if(BACKEND.user){try{await BACKEND.setLessonComplete(`designsource:${clean}`,true)}catch(e){toast('Saved locally; cloud sync failed.')}}
  badgeUnlockAfter(before,'Industry source task complete • +20 XP');finishInlineUpdate(true);
}
async function setModelVideoComplete(id){
  const v=modelVideo(id);if(!v||modelVideoDone(id))return;const before=localUnlockedBadgeIds();
  state.modelVideoCompleted=[...new Set([...(state.modelVideoCompleted||[]),id])];saveState();
  if(BACKEND.user){try{await BACKEND.setLessonComplete(`modelvideo:${id}`,true)}catch(e){toast('Saved locally; cloud sync failed.')}}
  badgeUnlockAfter(before,`Video task complete • +${MODEL_VIDEOS.xp} XP`);finishInlineUpdate(true);
}
async function setModelLessonComplete(id){
  const l=modelLesson(id);if(!l)return;const was=modelLessonDone(id),before=localUnlockedBadgeIds();
  state.modelLessonCompleted=was?(state.modelLessonCompleted||[]).filter(x=>x!==id):[...new Set([...(state.modelLessonCompleted||[]),id])];saveState();
  if(BACKEND.user){try{await BACKEND.setLessonComplete(`model:${id}`,!was)}catch(e){toast('Saved locally; cloud sync failed.')}}
  if(was)toast('Modelling lesson marked incomplete.');else badgeUnlockAfter(before,'⬡ Modelling lesson complete • +100 XP');finishInlineUpdate(!was);
}
async function setModelBuildComplete(id){
  const b=modelBuild(id);if(!b)return;const was=modelBuildDone(id),before=localUnlockedBadgeIds();
  if(!was&&!modelFoundationDone()&&!isTeacher()){toast('Pass Module 0 + Model Doctor before marking Build X complete.');return}
  state.modelBuildCompleted=was?(state.modelBuildCompleted||[]).filter(x=>x!==id):[...new Set([...(state.modelBuildCompleted||[]),id])];saveState();
  if(BACKEND.user){try{await BACKEND.setLessonComplete(`modelbuild:${id}`,!was)}catch(e){toast('Saved locally; cloud sync failed.')}}
  if(was)toast('Build X marked incomplete.');else badgeUnlockAfter(before,'◆ Build X complete • +250 XP');finishInlineUpdate(!was);
}
async function setModelFixComplete(id){
  const f=modelFix(id);if(!f)return;const was=modelFixDone(id),before=localUnlockedBadgeIds();
  state.modelFixCompleted=was?(state.modelFixCompleted||[]).filter(x=>x!==id):[...new Set([...(state.modelFixCompleted||[]),id])];saveState();
  if(BACKEND.user){try{await BACKEND.setLessonComplete(`modelfix:${id}`,!was)}catch(e){toast('Saved locally; cloud sync failed.')}}
  if(was)toast('Repair clinic marked incomplete.');else badgeUnlockAfter(before,'⚕ Repair clinic complete • +75 XP');finishInlineUpdate(!was);
}
async function setSculptComplete(id){
  const p=sculptPractice(id);if(!p)return;const was=sculptDone(id),before=localUnlockedBadgeIds();
  state.sculptCompleted=was?(state.sculptCompleted||[]).filter(x=>x!==id):[...new Set([...(state.sculptCompleted||[]),id])];saveState();
  if(BACKEND.user){try{await BACKEND.setLessonComplete(`sculpt:${id}`,!was)}catch(e){toast('Saved locally; cloud sync failed.')}}
  if(was)toast('Sculpt exercise marked incomplete.');else badgeUnlockAfter(before,`🗿 Sculpt exercise complete • +${p.xp} XP`);finishInlineUpdate(!was);
}

async function setMechanicStatus(id,status){
  const old=projectState.mechanics[id]||{};
  projectState.mechanics[id]={...old,status};
  saveProjectState();
  // Legacy practice tracker is local-only; formal project work lives in Microsoft Teams.
  toast(status==='complete'?'Game mechanic complete ✓':status==='building'?'Marked as building.':'Reset to not started.');
  finishInlineUpdate(status==='complete'&&old.status!=='complete');
}
async function saveProjectProfile(){
  projectState.project_title=$('#projectTitle')?.value.trim()||'Signal Lost';
  projectState.theme=$('#projectTheme')?.value||PROJECT.themes[0];
  projectState.pitch=$('#projectPitch')?.value.trim()||'';
  saveProjectState();
  // Legacy practice profile is local-only; formal project work lives in Microsoft Teams.
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
    body.innerHTML=`<div class="account-summary account-summary-rich">
      ${avatarMarkup('large',userDisplayName())}
      <div><b>${esc(userDisplayName())}</b><span>${esc(BACKEND.user.email||'')}</span><small>${esc(userRankTitle())} • ${isTeacher()?'Level MAX':`Level ${level().n}`}</small>${isTeacher()?'<span class="staff-role-pill">🎓 TEACHER • MAX</span>':''}</div>
    </div>
    <div class="cloud-callout">
      Your lesson progress, projects, development logs, evidence, feedback, classes, notifications and requests sync to this Learning Hub account.
      ${isTeacher()?'<br><br><b>🎓 Teacher role active • Level MAX • Unreal Instructor badge equipped.</b>':''}
    </div>
    <div class="avatar-studio">
      <div class="avatar-studio-head"><span class="eyebrow">PROFILE CUSTOMISATION</span><h3>Avatar Studio</h3><p class="muted">Choose a simple icon and colour identity for the Hub.</p></div>
      <div class="avatar-preview-row">${avatarMarkup('xl',userDisplayName())}<div><strong>${esc(userDisplayName())}</strong><p>${esc(userRankTitle())}</p></div></div>
      <div class="avatar-studio-grid"><div><span class="deep-label">ICON</span><div class="avatar-choice-row">${AVATAR_GLYPHS.map(g=>`<button class="avatar-choice ${profilePrefs.glyph===g?'active':''}" type="button" data-action="avatar-glyph" data-glyph="${esc(g)}">${esc(g)}</button>`).join('')}</div></div><div><span class="deep-label">COLOUR</span><div class="avatar-choice-row">${Object.entries(AVATAR_THEMES).map(([id,t])=>`<button class="avatar-theme-choice ${profilePrefs.theme===id?'active':''}" type="button" title="${esc(t.name)}" data-action="avatar-theme" data-theme="${esc(id)}"><span style="background:${t.bg}"></span></button>`).join('')}</div></div></div>
      <div class="avatar-badges-inline"><div class="portal-player-badge-head"><strong>Badge cabinet</strong><a href="#/progress" onclick="document.querySelector('[data-action=close-auth]')?.click()">Open →</a></div>${profileBadgeStrip(4)}</div>
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
      <p class="auth-message"><b>Guest mode remains available:</b> close this window and the whole learning course still works. An account is needed for cloud sync, classes, Critique Board, lesson feedback, requests, leaderboards and notifications. Formal assignment submission stays in Microsoft Teams.</p>
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
document.addEventListener('click',e=>{
  const link=e.target.closest?.('a[href^="#/"]');
  if(!link||e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||link.target==='_blank')return;
  if(link.getAttribute('href')===(location.hash||'#/'))return;
  rememberCurrentRouteScroll();
},{capture:true});
document.addEventListener('mousedown',e=>{
  if(e.target.closest?.('[data-action="rich-command"]'))e.preventDefault();
});
document.addEventListener('input',e=>{
  const editor=e.target.closest?.('[data-rich-editor]');
  if(editor)syncProjectRichEditor(editor);
});
document.addEventListener('click',async e=>{
  const b=e.target.closest('[data-action]');if(!b)return;
  const r=b.getBoundingClientRect();completionBurstPoint={x:r.left+r.width/2,y:r.top+r.height/2};
  const a=b.dataset.action;
  if(a==='rich-command'){
    const editor=b.closest('[data-rich-editor]'),surface=editor?.querySelector('[data-rich-surface]');
    if(!editor||!surface)return;
    surface.focus();
    const cmd=b.dataset.command||'';
    if(cmd==='createLink'){
      const entered=prompt('Paste the full link (https://...)','https://');
      if(entered===null)return;
      const href=safeUrl(entered);
      if(!href){toast('Use a full http:// or https:// link.');return}
      document.execCommand('createLink',false,href);
    }else if(cmd==='formatBlock'){
      document.execCommand('formatBlock',false,b.dataset.value||'p');
    }else if(cmd){
      document.execCommand(cmd,false,null);
    }
    syncProjectRichEditor(editor);
  }
  else if(a==='open-image'){openImageLightbox(b);}
  else if(a==='load-video'){
    const shell=b.closest('[data-video-shell]');
    if(!shell)return;
    const src=safeVideoEmbed(b.dataset.embed||'');
    if(!src){toast('Video source was blocked for safety.');return}
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
  else if(a==='complete-block') await setBlockComplete(b.dataset.block);
  else if(a==='block-filter'){blocksTier=b.dataset.tier||'core';route();}
  else if(a==='complete-tutorial') await setTutorialComplete(b.dataset.tutorial);
  else if(a==='complete-chapter-build') await setChapterBuildComplete(b.dataset.path);
  else if(a==='complete-design-build') await setDesignBuildComplete(b.dataset.designModule);
  else if(a==='complete-design-source') await setDesignSourceComplete(b.dataset.sourceKey);
  else if(a==='complete-model-video') await setModelVideoComplete(b.dataset.modelVideo);
  else if(a==='complete-model-lesson') await setModelLessonComplete(b.dataset.modelLesson);
  else if(a==='complete-model-build') await setModelBuildComplete(b.dataset.modelBuild);
  else if(a==='complete-model-fix') await setModelFixComplete(b.dataset.modelFix);
  else if(a==='complete-sculpt') await setSculptComplete(b.dataset.sculpt);
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
  else if(a==='copy-homework') await copyHomework(b.dataset.studyHomework||b.dataset.lesson);
  else if(a==='mode'){lessonMode=b.dataset.mode;route();}
  else if(a==='avatar-glyph'){profilePrefs.glyph=b.dataset.glyph||'⌘';saveProfilePrefs();renderAuth();}
  else if(a==='avatar-theme'){profilePrefs.theme=b.dataset.theme||'violet';saveProfilePrefs();renderAuth();}
  else if(a==='badge-equip'){const badge=badgeById(b.dataset.badge);if(!badge)return;profilePrefs.badge=b.dataset.badge||'';localStorage.setItem(PROFILE_STORE,JSON.stringify(profilePrefs));toast(`★ ${badge[1]} pinned to profile.`,'badge');updateChrome();route();}
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
  else if(a==='leaderboard-period'){
    leaderboardPeriod=b.dataset.period==='all'?'all':'week';
    await renderLeaderboard();
  }
  else if(a==='toggle-leaderboard'){
    try{
      const enable=b.dataset.enabled!=='1';
      await BACKEND.setClassLeaderboardEnabled(b.dataset.class,enable);
      const classes=await BACKEND.getLeaderboardClasses();
      const current=classes.find(c=>String(c.id)===String(b.dataset.class));
      if(current)current.leaderboard_enabled=enable;
      await renderLeaderboard();toast(enable?'Leaderboard enabled for students.':'Leaderboard paused for students.');
    }catch(err){toast(err.message)}
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
  else if(a==='critique-filter'){critiqueFilter=b.dataset.filter||'all';applyCritiqueFilter();}
  else if(a==='random-critique'){randomCritiquePost();}
  else if(a==='delete-critique-post'){
    if(confirm('Delete this Critique Board post and its feedback?')){
      try{await BACKEND.deleteCritiquePost(b.dataset.post);await renderCritiqueBoard();toast('Critique post deleted.')}catch(err){toast(err.message)}
    }
  }
  else if(a==='delete-critique-feedback'){
    if(confirm('Delete this critique feedback?')){
      try{await BACKEND.deleteCritiqueFeedback(b.dataset.feedback);await renderCritiqueBoard();toast('Feedback removed.')}catch(err){toast(err.message)}
    }
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
  else if(a==='news-refresh'){
    try{localStorage.removeItem(NEWS_CACHE_STORE)}catch(e){}
    await loadNewsFeed(true);
  }
  else if(a==='news-save'){
    if(!BACKEND.user){authView='signin';openAuth();toast('Sign in to save stories for later.');return}
    const story=newsStoryByKey(b.dataset.story);if(!story)return;
    const saved=newsSocial.saved.has(story.key);
    try{await BACKEND.setNewsSaved(story,!saved);if(saved){newsSocial.saved.delete(story.key);newsSocial.savedItems=(newsSocial.savedItems||[]).filter(x=>x.key!==story.key)}else{newsSocial.saved.add(story.key);newsSocial.savedItems=[story,...(newsSocial.savedItems||[]).filter(x=>x.key!==story.key)]}renderNewsFeed();toast(saved?'Removed from Read Later.':'Saved for later ★')}catch(err){toast(err.message)}
  }
  else if(a==='news-vote'){
    if(!BACKEND.user){authView='signin';openAuth();toast('Sign in to upvote stories.');return}
    const story=newsStoryByKey(b.dataset.story);if(!story)return;
    const voted=newsSocial.myVotes.has(story.key);
    try{await BACKEND.setNewsVote(story,!voted);if(voted){newsSocial.myVotes.delete(story.key);newsSocial.votes[story.key]=Math.max(0,(newsSocial.votes[story.key]||1)-1)}else{newsSocial.myVotes.add(story.key);newsSocial.votes[story.key]=(newsSocial.votes[story.key]||0)+1}renderNewsFeed()}catch(err){toast(err.message)}
  }
  else if(a==='news-discuss') await toggleNewsComments(b.dataset.story);
  else if(a==='news-comment-delete'){
    if(confirm('Delete this comment?')){
      try{await BACKEND.deleteNewsComment(b.dataset.comment);newsSocial.comments[b.dataset.story]=Math.max(0,(newsSocial.comments[b.dataset.story]||1)-1);renderNewsFeed();await toggleNewsComments(b.dataset.story);toast('Comment deleted.')}catch(err){toast(err.message)}
    }
  }
  else if(a==='revision-restart'){revisionSession=null;route()}
  else if(a==='revision-repeat'){const ids=revisionSession?.topicIds?[...revisionSession.topicIds]:null,label=revisionSession?.topicLabel||'Random mixed',count=revisionSession?.requestedCount||10;revisionSession=null;startRevisionQuiz(ids,count,label)}
  else if(a==='revision-abandon'){revisionSession=null;route()}
  else if(a==='start-template-project'){try{const row=await BACKEND.startProjectFromTemplate(b.dataset.template,b.dataset.mode);location.hash=`#/projects/${row.project_id}`;toast(b.dataset.mode==='group'?'Group project started — share the join code with your teammates.':'Individual project started.')}catch(err){toast(err.message)}}
  else if(a==='delete-template-milestone'){if(confirm('Delete this template milestone? Student projects already started will not be changed.')){try{await BACKEND.deleteTemplateMilestone(b.dataset.milestone);await renderProjectTemplate(b.dataset.template);toast('Template milestone deleted.')}catch(err){toast(err.message)}}}
  else if(a==='delete-project-template'){const name=b.dataset.name||'this template';if(confirm(`Delete teacher template "${name}"?\n\nStudent projects already created from it will be kept.`)){try{await BACKEND.deleteProjectTemplate(b.dataset.template);location.hash='#/projects';toast('Template deleted.')}catch(err){toast(err.message)}}}
  else if(a==='copy-project-code'){try{await navigator.clipboard.writeText(b.dataset.code||'');toast('Project code copied.')}catch(e){toast('Copy failed.')}}
  else if(a==='regenerate-project-code'){if(confirm('Generate a new group code? The old code will stop working.')){try{await BACKEND.regenerateProjectCode(b.dataset.project);await renderProjectDetail(b.dataset.project);toast('New project code generated.')}catch(err){toast(err.message)}}}
  else if(a==='remove-project-member'){if(confirm('Remove this student from the project? Their existing authored log entries stay in the project record.')){try{await BACKEND.removeProjectMember(b.dataset.project,b.dataset.user);await renderProjectDetail(b.dataset.project);toast('Team member removed.')}catch(err){toast(err.message)}}}
  else if(a==='leave-project'){if(confirm('Leave this group project? Your existing authored development-log entries stay attributed to you.')){try{await BACKEND.removeProjectMember(b.dataset.project,b.dataset.user);location.hash='#/projects';toast('You left the project.')}catch(err){toast(err.message)}}}
  else if(a==='milestone-toggle'){try{const completed=b.dataset.status==='complete';await BACKEND.setProjectMilestoneStatus(b.dataset.milestone,b.dataset.status);await renderProjectDetail(b.dataset.project);if(completed)completionConfetti()}catch(err){toast(err.message)}}
  else if(a==='delete-milestone'){if(confirm('Delete this milestone? Development-log entries will remain.')){try{await BACKEND.deleteProjectMilestone(b.dataset.milestone);await renderProjectDetail(b.dataset.project)}catch(err){toast(err.message)}}}
  else if(a==='complete-project'){if(confirm('Mark this project complete?\n\nThe project becomes read-only until you reopen it.')){try{await BACKEND.setProjectStatus(b.dataset.project,'complete');await renderProjectDetail(b.dataset.project);completionConfetti();toast('Project marked complete.')}catch(err){toast(err.message)}}}
  else if(a==='reopen-project'){try{await BACKEND.setProjectStatus(b.dataset.project,'active');await renderProjectDetail(b.dataset.project);toast('Project reopened.')}catch(err){toast(err.message)}}
  else if(a==='delete-project-update'){if(confirm('Delete this development-log entry?\n\nIts uploaded files and comments will also be removed. This cannot be undone.')){try{await BACKEND.deleteProjectUpdate(b.dataset.project,b.dataset.update);await renderProjectDetail(b.dataset.project);toast('Log entry deleted.')}catch(err){toast(err.message)}}}
  else if(a==='open-project-image'){try{const url=await BACKEND.openProjectFile(b.dataset.path);if(url)openImageLightbox({dataset:{src:url,caption:b.dataset.caption||'',source:''},querySelector:()=>({alt:b.dataset.name||'Project screenshot'})})}catch(err){toast(err.message)}}
  else if(a==='open-project-file'){try{const url=await BACKEND.openProjectFile(b.dataset.path);if(url)window.open(url,'_blank','noopener,noreferrer')}catch(err){toast(err.message)}}
  else if(a==='delete-project'){const name=b.dataset.name||'this project';const typed=prompt(`PERMANENTLY DELETE "${name}"?\n\nThis deletes the shared project, milestones, logs and uploaded files. Type the project name exactly to confirm:`, '');if(typed===name){try{await BACKEND.deleteProject(b.dataset.project);location.hash='#/projects';toast('Project deleted.')}catch(err){toast(err.message)}}else if(typed!==null)toast('Project was not deleted — the name did not match.')}
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
    const classId=b.dataset.class,name=b.dataset.name||'this student';
    if(confirm(`Remove ${name} from this class?

Their account, XP and completed learning will be kept.`)){
      try{
        await BACKEND.removeClassMember(classId,b.dataset.student);
        if(location.hash===`#/teacher/class/${classId}`)await renderTeacherClass(classId);else await renderTeacher();
        toast('Student removed from class.');
      }catch(err){toast(err.message)}
    }
  }
  else if(a==='signout'){await BACKEND.signOut();closeAuth();toast('Signed out. Local progress remains on this browser.');route();}
});

document.addEventListener('change',async e=>{
  if(e.target?.id==='leaderboardClassSelect'){
    leaderboardClassId=String(e.target.value||'');
    await renderLeaderboard();
  }
  if(e.target?.id==='critiqueClassSelect'){
    critiqueClassId=String(e.target.value||'');
    critiqueFilter='all';
    await renderCritiqueBoard();
  }
});

document.addEventListener('submit',async e=>{
  if(syncProjectRichEditors(e.target)){
    e.preventDefault();
    toast('That brief is over the 6,000 character limit. Shorten it before saving.');
    return;
  }
  if(e.target.dataset.actionForm==='model-theory-quiz'){
    e.preventDefault();const ch=modelTheoryChapter(e.target.dataset.chapter);if(!ch)return;
    const fd=new FormData(e.target),answers=ch.quiz.map((_,i)=>{const v=fd.get(`q${i}`);return v===null?NaN:Number(v)});
    if(answers.some(Number.isNaN)){toast('Answer every question first.');return}
    const correct=ch.quiz.reduce((n,q,i)=>n+(answers[i]===q.correct?1:0),0),total=ch.quiz.length,pct=Math.round(correct/total*100),old=modelTheoryScore(ch.id),bestPct=Math.max(old?.bestPct||old?.pct||0,pct),passed=pct>=MODEL_FOUNDATIONS.passPercent,firstPass=passed&&!modelTheoryDone(ch.id);
    state.modelTheoryScores={...(state.modelTheoryScores||{}),[ch.id]:{answers,correct,total,pct,bestPct,at:new Date().toISOString()}};
    if(firstPass)state.modelTheoryCompleted=[...new Set([...(state.modelTheoryCompleted||[]),ch.id])];saveState();
    if(firstPass&&BACKEND.user){try{await BACKEND.setLessonComplete(`modeltheory:${ch.id}`,true)}catch(err){toast('Passed locally; cloud sync failed.')}}
    toast(passed?(firstPass?`Chapter passed • +${MODEL_FOUNDATIONS.chapterXp} XP`:'Chapter passed again — XP was already awarded.'):`${pct}% — review the misses and retry.`);route({preserveScroll:true});return;
  }
  if(e.target.dataset.actionForm==='model-theory-final'){
    e.preventDefault();if(modelFoundationChaptersDone()<MODEL_FOUNDATIONS.chapters.length&&!isTeacher()){toast('Pass all six chapters first.');return}
    const qs=MODEL_FOUNDATIONS.finalQuiz,fd=new FormData(e.target),answers=qs.map((_,i)=>{const v=fd.get(`q${i}`);return v===null?NaN:Number(v)});
    if(answers.some(Number.isNaN)){toast('Answer every question first.');return}
    const correct=qs.reduce((n,q,i)=>n+(answers[i]===q.correct?1:0),0),total=qs.length,pct=Math.round(correct/total*100),old=modelTheoryScore('final'),bestPct=Math.max(old?.bestPct||old?.pct||0,pct),passed=pct>=MODEL_FOUNDATIONS.passPercent,firstPass=passed&&!modelFoundationDone(),before=firstPass?localUnlockedBadgeIds():null;
    state.modelTheoryScores={...(state.modelTheoryScores||{}),final:{answers,correct,total,pct,bestPct,at:new Date().toISOString()}};
    if(firstPass)state.modelFoundationFinal=true;saveState();
    if(firstPass&&BACKEND.user){try{await BACKEND.setLessonComplete('modelfoundation:final',true)}catch(err){toast('Passed locally; cloud sync failed.')}}
    if(firstPass)badgeUnlockAfter(before,`Model Doctor passed • +${MODEL_FOUNDATIONS.finalXp} XP • Build X completion unlocked`);else toast(passed?'Model Doctor passed again — XP was already awarded.':`${pct}% — use the review and have another go.`);route({preserveScroll:true});return;
  }
  if(e.target.dataset.actionForm==='critique-post'){
    e.preventDefault();const fd=new FormData(e.target),file=e.target.elements.file?.files?.[0];
    try{await BACKEND.createCritiquePost({classId:e.target.dataset.class,area:fd.get('area'),title:fd.get('title'),prompt:fd.get('prompt'),file});e.target.reset();await renderCritiqueBoard();toast('Posted to your class Critique Board.');}catch(err){toast(err.message)}return;
  }
  if(e.target.dataset.actionForm==='critique-improved'){
    e.preventDefault();const file=e.target.elements.file?.files?.[0];
    try{await BACKEND.addCritiqueImprovedImage(e.target.dataset.post,e.target.dataset.class,file);await renderCritiqueBoard();toast('Improved version added — nice.');}catch(err){toast(err.message)}return;
  }
  if(e.target.dataset.actionForm==='critique-feedback'){
    e.preventDefault();const fd=new FormData(e.target);
    try{const row=await BACKEND.postCritiqueFeedback(e.target.dataset.post,{worksWell:fd.get('worksWell'),clearer:fd.get('clearer'),changeTry:fd.get('changeTry')});await renderCritiqueBoard();toast(row?.xp_awarded?'Useful critique posted • +15 XP':'Critique posted. Daily XP cap reached, but the feedback still counts.');}catch(err){toast(err.message)}return;
  }
  if(e.target.dataset.actionForm==='news-comment'){
    e.preventDefault();const key=e.target.dataset.story,story=newsStoryByKey(key);if(!story)return;
    if(!BACKEND.user){authView='signin';openAuth();toast('Sign in to comment.');return}
    const fd=new FormData(e.target);try{await BACKEND.postNewsComment(story,fd.get('body'));newsSocial.comments[key]=(newsSocial.comments[key]||0)+1;renderNewsFeed();await toggleNewsComments(key);toast('Comment posted.')}catch(err){toast(err.message)}return;
  }
  if(e.target.dataset.actionForm==='revision-random-start'){
    e.preventDefault();const fd=new FormData(e.target);startRevisionQuiz(null,Number(fd.get('count')||10),'Random mixed');return;
  }
  if(e.target.dataset.actionForm==='revision-focused-start'){
    e.preventDefault();const fd=new FormData(e.target),ids=fd.getAll('topicIds').map(String);if(!ids.length){toast('Choose at least one revision topic.');return}startRevisionQuiz(ids,Number(fd.get('count')||10),revisionSelectionLabel(ids));return;
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
    e.preventDefault();const fd=new FormData(e.target),files=Array.from(e.target.elements.files?.files||[]),written=String(fd.get('whatDid')||'').trim(),hasMilestones=e.target.dataset.hasMilestones==='1';if(!written){toast('Add a short written update explaining what the evidence shows.');e.target.elements.whatDid?.focus();return}if(hasMilestones&&!fd.get('milestoneId')){toast('Choose the milestone this evidence belongs to.');e.target.elements.milestoneId?.focus();return}if(files.length>6){toast('Upload up to 6 evidence files per milestone entry.');return}
    const captions=files.map((_,i)=>String(fd.get(`newCaption${i}`)||''));
    try{const row=await BACKEND.createProjectUpdate(e.target.dataset.project,{title:fd.get('title'),whatDid:written,why:fd.get('why'),problems:fd.get('problems'),nextSteps:fd.get('nextSteps'),milestoneId:fd.get('milestoneId'),externalUrl:fd.get('externalUrl'),externalLabel:fd.get('externalLabel')});if(files.length)await BACKEND.uploadProjectFiles(e.target.dataset.project,row.id,files,captions);await renderProjectDetail(e.target.dataset.project);toast('Milestone evidence added.')}catch(err){toast(err.message)}return;
  }
  if(e.target.dataset.actionForm==='edit-project-update'){
    e.preventDefault();const fd=new FormData(e.target),files=Array.from(e.target.elements.files?.files||[]),existing=Number(e.target.dataset.existingMedia||0),written=String(fd.get('whatDid')||'').trim(),hasMilestones=e.target.dataset.hasMilestones==='1';if(existing+files.length>6){toast('A milestone evidence entry can contain up to 6 evidence files.');return}if(!written){toast('Keep a short written update explaining what the evidence shows.');e.target.elements.whatDid?.focus();return}if(hasMilestones&&!fd.get('milestoneId')){toast('Choose the milestone this evidence belongs to.');e.target.elements.milestoneId?.focus();return}
    try{await BACKEND.updateProjectUpdate(e.target.dataset.update,{title:fd.get('title'),whatDid:written,why:fd.get('why'),problems:fd.get('problems'),nextSteps:fd.get('nextSteps'),milestoneId:fd.get('milestoneId'),externalUrl:fd.get('externalUrl'),externalLabel:fd.get('externalLabel')});const captionInputs=Array.from(e.target.querySelectorAll('input[name^="caption_"]'));await Promise.all(captionInputs.map(input=>BACKEND.updateProjectMediaCaption(input.name.slice(8),input.value)));if(files.length){const captions=files.map((_,i)=>String(fd.get(`newCaption${i}`)||''));await BACKEND.uploadProjectFiles(e.target.dataset.project,e.target.dataset.update,files,captions)}await renderProjectDetail(e.target.dataset.project);toast('Milestone evidence updated.')}catch(err){toast(err.message)}return;
  }
  if(e.target.dataset.actionForm==='project-overall-feedback'){
    e.preventDefault();const fd=new FormData(e.target);try{await BACKEND.postProjectComment(e.target.dataset.project,null,fd.get('body'));await renderProjectDetail(e.target.dataset.project);toast('Overall project feedback saved.')}catch(err){toast(err.message)}return;
  }
  if(e.target.dataset.actionForm==='project-comment'){
    e.preventDefault();const fd=new FormData(e.target);try{await BACKEND.postProjectComment(e.target.dataset.project,e.target.dataset.update,fd.get('body'));await renderProjectDetail(e.target.dataset.project);if(BACKEND.profile?.role==='teacher')toast('Targeted milestone feedback saved.')}catch(err){toast(err.message)}return;
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
      if(location.hash==='#/classes')await renderClassesHub();
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
  if(e.target.dataset.actionForm==='move-class-member'){
    e.preventDefault();
    const fd=new FormData(e.target),fromClass=e.target.dataset.class,student=e.target.dataset.student,targetClass=String(fd.get('targetClass')||''),name=e.target.dataset.name||'this student';
    const select=e.target.elements.targetClass,targetName=select?.selectedOptions?.[0]?.textContent?.trim()||'the selected class';
    if(!targetClass){toast('Choose a destination class.');return}
    if(!confirm(`Move ${name} to ${targetName}?

Their account, XP and completed learning will be kept.`))return;
    try{
      await BACKEND.moveClassMember(fromClass,targetClass,student);
      toast(`${name} moved to ${targetName}.`);
      if(location.hash===`#/teacher/class/${fromClass}`)await renderTeacherClass(fromClass);else await renderTeacher();
    }catch(err){toast(err.message)}
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

function normaliseSearchText(value){
  return String(value??'')
    .normalize('NFKD').replace(/[\u0300-\u036f]/g,'')
    .toLowerCase().replace(/[^a-z0-9+#.]+/g,' ').replace(/\s+/g,' ').trim();
}
function deepSearchText(value,seen=new WeakSet()){
  if(value==null)return '';
  if(['string','number','boolean'].includes(typeof value))return String(value);
  if(typeof value!=='object')return '';
  if(seen.has(value))return '';
  seen.add(value);
  if(Array.isArray(value))return value.map(x=>deepSearchText(x,seen)).join(' ');
  return Object.entries(value)
    .filter(([k])=>!['src','url','sourceUrl','image','images','referenceImages','visuals'].includes(k))
    .map(([k,v])=>`${k} ${deepSearchText(v,seen)}`).join(' ');
}
function makeSearchEntry({title,meta,href,icon='',data='',kind=''}){
  const titleText=normaliseSearchText(title);
  return {title,meta,href,icon,kind,titleText,text:normaliseSearchText(`${title} ${meta} ${data}`)};
}
function buildGlobalSearchIndex(){
  const entries=[];
  const add=e=>{if(e?.title&&e?.href)entries.push(makeSearchEntry(e))};

  (DATA.lessons||[]).forEach(l=>add({
    title:l.title,meta:`Unreal Learning • ${l.projectTask?.name||path(l.path)?.title||'Core lesson'}`,
    href:`#/lesson/${l.id}`,icon:'◇',kind:'lesson',data:deepSearchText(l)
  }));
  (TOOLS.families||[]).forEach(f=>add({
    title:f.title,meta:`Quick Tutorial family • ${familyTutorials(f).length} build${familyTutorials(f).length===1?'':'s'} • ${tutorialCategory(f.category)?.title||'UE5'}`,
    href:familyHref(f),icon:f.icon||'🛠',kind:'tutorial-family',data:deepSearchText({...f,outcomes:familyTutorials(f)})
  }));
  (TOOLS.tutorials||[]).forEach(t=>{const f=t.familyId?tutorialFamily(t.familyId):null;add({
    title:t.title,meta:t.libraryHidden?`Core lesson application • ${lesson(t.lessonHome||t.referenceLesson)?.title||'Unreal Learning'}`:`Practical build • ${f?.title||tutorialCategory(t.category)?.title||'UE5'} • ${t.duration||''}`,
    href:`#/tutorial/${t.id}`,icon:'🛠',kind:'tutorial',data:deepSearchText(t)
  })});
  (DESIGN.modules||[]).forEach(m=>add({
    title:m.title,meta:'Designer Studio • Discipline',href:`#/design/${m.id}`,icon:m.icon||'◆',kind:'design',data:deepSearchText(m)
  }));
  (DESIGN.resources||[]).forEach(r=>add({
    title:r.title,meta:`Resource Library • ${r.type||'Resource'} • ${r.license||'check terms'}`,href:'#/resources',icon:r.icon||'🎁',kind:'resource',data:deepSearchText(r)
  }));
  (MODEL_FOUNDATIONS.chapters||[]).forEach(ch=>add({
    title:ch.title,meta:`3D Modelling Studio • Foundations Chapter ${ch.order}`,href:`#/modeling/foundations/${ch.id}`,icon:ch.icon||'⬡',kind:'model-theory',data:deepSearchText(ch)
  }));
  add({title:'Model Doctor',meta:'3D Modelling Studio • Foundations final check',href:'#/modeling/foundations/final',icon:'🩺',kind:'model-theory',data:deepSearchText(MODEL_FOUNDATIONS.finalQuiz||[])});
  (MODEL_VIDEOS.videos||[]).forEach(v=>add({title:v.title,meta:`3D Modelling Studio • Dits' Max Video ${v.order}`,href:'#/modeling/videos',icon:'🎬',kind:'model-video',data:deepSearchText(v)}));
  (MODEL.lessons||[]).forEach(l=>add({
    title:l.title,meta:`3D Modelling Studio • Lesson ${l.order||''}`,href:`#/modeling/lesson/${l.id}`,icon:'⬡',kind:'model-lesson',data:deepSearchText(l)
  }));
  (MODEL.builds||[]).forEach(b=>add({
    title:`How to build: ${b.title}`,meta:'3D Modelling Studio • Build',href:`#/modeling/build/${b.id}`,icon:b.icon||'⬡',kind:'model-build',data:deepSearchText(b)
  }));
  (MODEL.fixes||[]).forEach(f=>add({
    title:f.title,meta:'3D Modelling Studio • Fix This Model',href:`#/modeling/fix/${f.id}`,icon:f.icon||'⚕',kind:'model-fix',data:deepSearchText(f)
  }));
  (SCULPT.practices||[]).forEach(p=>add({
    title:p.title,meta:`Sculpt Playground • ${p.time||''}`,href:`#/sculpt/${p.id}`,icon:'🗿',kind:'sculpt',data:deepSearchText(p)
  }));
  (BLOCKS.blocks||[]).forEach(b=>add({
    title:b.title,meta:`${BLOCKS.tiers?.[b.tier]?.title||'UE5'} Building Block • ${b.minutes||''} min`,href:`#/block/${b.id}`,icon:'🧱',kind:'block',data:deepSearchText(b)
  }));
  (SNIPPETS.snippets||[]).forEach(x=>{const l=lesson((x.relatedLessons||[])[0]);add({
    title:x.title,meta:`Official Epic paste assist • ${l?`inside ${l.title}`:`UE ${x.sourceVersion||'5'}`}`,href:l?`#/lesson/${l.id}`:'#/snippets',icon:'⚡',kind:'snippet',data:deepSearchText(x)
  })});
  hubGlossary().forEach(g=>add({
    title:g[0],meta:`${g[2]} glossary • ${g[1]}`,href:'#/glossary',icon:'?',kind:'glossary',data:g.join(' ')
  }));

  [
    ['Unreal Learning','Core lessons, learning paths and practical Unreal Engine progression','#/programming','◇'],
    ['Blueprint Snippet Bank','Official Epic paste assists and reusable Blueprint graph helpers','#/snippets','⚡'],
    ['Quick Tutorials','Recipe families and practical UE5 build outcomes','#/tutorials','🛠'],
    ['Designer Studio','Level design, lighting, materials, terrain, cinematic and environment design','#/design','◆'],
    ['Critique Board','Class studio wall, screenshots, peer feedback, structured critique and improvement','#/critique','💬'],
    ['Resource Library','Free assets, CC0 textures, HDRIs, sound libraries, level explorers, UI reference, documentaries and professional talks','#/resources','🧰'],
    ['3D Modelling Studio','3ds Max modelling lessons, builds, video series and topology repair','#/modeling','⬡'],
    ["Dits' 3ds Max Video Series",'14 follow-along videos covering interface, primitives, Editable Poly, modifiers, Array, mini builds and materials','#/modeling/videos','🎬'],
    ['Glossary','Unreal Engine, game design and 3D modelling terminology','#/glossary','?'],
    ['Revision Quizzes','Mixed Unreal, Designer Studio and 3D Foundations knowledge checks','#/revision','↻'],
    ['Homework','Independent study across Unreal, design and 3D with Teams-ready task copy','#/homework','⌂']
  ].forEach(([title,data,href,icon])=>add({title,meta:'Hub area',href,icon,kind:'area',data}));
  return entries;
}
function scoreSearchEntry(entry,q,tokens){
  if(!tokens.every(t=>entry.text.includes(t)))return -1;
  let score=0;
  if(entry.titleText===q)score+=120;
  if(entry.titleText.startsWith(q))score+=70;
  if(entry.titleText.includes(q))score+=45;
  tokens.forEach(t=>{
    if(entry.titleText===t)score+=30;
    else if(entry.titleText.startsWith(t))score+=18;
    else if(entry.titleText.includes(t))score+=10;
    else score+=2;
  });
  if(entry.kind==='lesson'||entry.kind==='tutorial'||entry.kind==='tutorial-family')score+=3;
  return score;
}
function setupSearch(){
  const input=$('#globalSearch'),panel=$('#searchPanel');
  if(!input||!panel)return;
  const index=buildGlobalSearchIndex();
  const render=()=>{
    const q=normaliseSearchText(input.value);
    if(!q){panel.hidden=true;panel.innerHTML='';return}
    const tokens=q.split(' ').filter(Boolean);
    const rows=index
      .map(entry=>({entry,score:scoreSearchEntry(entry,q,tokens)}))
      .filter(x=>x.score>=0)
      .sort((a,b)=>b.score-a.score||a.entry.title.localeCompare(b.entry.title))
      .slice(0,24);
    panel.innerHTML=rows.length
      ?`<div class="search-panel-head"><strong>${rows.length}${rows.length===24?'+' : ''} results</strong><small>Searches the full Hub content, not just page titles.</small></div>${rows.map(({entry})=>`<a class="search-result" href="${esc(entry.href)}"><strong>${esc(entry.icon)} ${esc(entry.title)}</strong><small>${esc(entry.meta)}</small></a>`).join('')}`
      :'<div class="search-result search-empty"><strong>No results</strong><small>Try a broader term, node name, mechanic or workflow.</small></div>';
    panel.hidden=false;
  };
  input.addEventListener('input',render);
  input.addEventListener('search',render);
  input.addEventListener('focus',()=>{if(input.value.trim())render()});
  panel.addEventListener('click',e=>{if(e.target.closest('a'))panel.hidden=true});
  document.addEventListener('click',e=>{if(!e.target.closest('.global-search'))panel.hidden=true});
  document.addEventListener('keydown',e=>{
    if(e.key==='/'&&document.activeElement!==input&&!e.target?.matches?.('input,textarea,select,[contenteditable="true"]')){e.preventDefault();input.focus();input.select()}
    if(e.key==='Escape'){input.blur();panel.hidden=true;closeAuth();closeImageLightbox()}
  });
}

$('#menuButton').addEventListener('click',()=>$('#sidebar').classList.toggle('open'));
$('#resetProgress').addEventListener('click',()=>{
  if(confirm('Reset all locally saved lesson progress, XP and game-project status on this browser?')){
    state={completed:[],quiz:{},lastLesson:null,tutorialCompleted:[],chapterBuildCompleted:[],designBuildCompleted:[],designSourceCompleted:[],modelVideoCompleted:[],modelTheoryCompleted:[],modelTheoryScores:{},modelFoundationFinal:false,modelLessonCompleted:[],modelBuildCompleted:[],modelFixCompleted:[],sculptCompleted:[],blockCompleted:[]};
    projectState={project_title:'Signal Lost',theme:PROJECT.themes[0],pitch:'',mechanics:{}};
    saveState();saveProjectState();route();toast('Local progress reset.');
  }
});
$('#authModal').addEventListener('click',e=>{if(e.target===$('#authModal'))closeAuth()});
document.addEventListener('error',e=>{
  const img=e.target;
  if(img?.classList?.contains('cloud-thumb')&&img.dataset.fullSrc&&!img.dataset.fullFallback){img.dataset.fullFallback='1';img.src=img.dataset.fullSrc;return;}
  if(img?.classList?.contains('remote-reference-image')){img.closest('.visual-flow-card')?.classList.add('image-failed');img.closest('.model-build-thumb')?.classList.add('image-failed');img.closest('.model-build-hero-image')?.classList.add('image-failed');}
},true);
$('#imageLightbox')?.addEventListener('click',e=>{if(e.target===$('#imageLightbox'))closeImageLightbox()});
try{if('scrollRestoration' in history)history.scrollRestoration='manual';}catch(e){}
window.addEventListener('beforeunload',rememberCurrentRouteScroll);
window.addEventListener('hashchange',route);

BACKEND.onChange(async ()=>{
  updateChrome();
  if(BACKEND.user){await syncCloudProgress()}
  refreshCritiqueNav();
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
  refreshCritiqueNav();
  route();
  await BACKEND.init();
})();
})();
