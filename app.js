
(() => {
'use strict';
const DATA = window.UE5_COURSE_DATA;
if (!DATA) {
  const e = document.querySelector('#bootError'); if (e) e.hidden = false;
  return;
}
const STORE = 'ue5hub:v2:progress';
const LEGACY = 'ue5LearningHubProgressV1';
let state = loadState();
let lessonMode = 'guided';

function loadState(){
  const clean={completed:[],quiz:{},lastLesson:null};
  try{
    const current=JSON.parse(localStorage.getItem(STORE)||'null');
    if(current) return {...clean,...current};
    const old=JSON.parse(localStorage.getItem(LEGACY)||'null');
    if(old){const migrated={...clean,...old};localStorage.setItem(STORE,JSON.stringify(migrated));return migrated;}
  }catch(e){}
  return clean;
}
function save(){localStorage.setItem(STORE,JSON.stringify(state));updateChrome();}
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
const lesson=id=>DATA.lessons.find(x=>x.id===id);
const path=id=>DATA.paths.find(x=>x.id===id);
const completedLessons=()=>DATA.lessons.filter(l=>state.completed.includes(l.id));
const totalXp=()=>completedLessons().reduce((n,l)=>n+l.xp,0);
function level(){const xp=totalXp(),n=Math.floor(xp/500)+1,into=xp%500;return {n,xp,into,left:500-into,pct:into/5};}
function pathProgress(id){const ls=DATA.lessons.filter(l=>l.path===id),done=ls.filter(l=>state.completed.includes(l.id)).length;return {done,total:ls.length,pct:ls.length?Math.round(done/ls.length*100):0};}
function nextLesson(){
  if(state.lastLesson){const l=lesson(state.lastLesson);if(l&&!state.completed.includes(l.id))return l;}
  return DATA.lessons.find(l=>!state.completed.includes(l.id))||DATA.lessons[0];
}
function updateChrome(){
  const i=level();
  $('#sideLevel').textContent=`LEVEL ${i.n}`;$('#sideXp').textContent=`${i.xp} XP`;$('#sideBar').style.width=`${i.pct}%`;$('#sideNext').textContent=`${i.left} XP to Level ${i.n+1}`;
  $('#topDone').textContent=state.completed.length;$('#topXp').textContent=i.xp;
}
function $(s,root=document){return root.querySelector(s)}
function $$(s,root=document){return [...root.querySelectorAll(s)]}
function tagClass(d){return d.toLowerCase().includes('inter')?'intermediate':'beginner'}
function youtube(q){return `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`}
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>t.classList.remove('show'),1900)}

function lessonRow(l,index){
 const done=state.completed.includes(l.id);
 return `<a class="lesson-row ${done?'done':''}" href="#/lesson/${l.id}">
 <span class="lesson-num">${done?'✓':String(index+1).padStart(2,'0')}</span>
 <span><strong>${esc(l.title)}</strong><p>${esc(l.short)}</p><span class="tags"><span class="tag ${tagClass(l.difficulty)}">${esc(l.difficulty)}</span><span class="tag">${esc(l.duration)}</span></span></span>
 <span class="lesson-xp">+${l.xp} XP</span></a>`;
}
function visual(l){
 if(!l.visual) return `<div class="callout">This lesson is text-first for now; build the practical example in Unreal as the main visual.</div>`;
 return `<figure class="visual"><img src="${esc(l.visual.src)}" alt="${esc(l.title)} learning visual" loading="lazy"><figcaption>${esc(l.visual.caption||'')}</figcaption></figure>`;
}
function dashboard(){
 const i=level(),n=nextLesson(),np=pathProgress(n.path);
 return `<section class="hero">
 <div class="hero-copy"><span class="eyebrow">Learn • Build • Analyse • Apply</span><h1>Learn Unreal by<br>making things.</h1>
 <p>Short guided lessons that turn into stretch work, independent challenges and game-analysis homework. The goal is understanding, not blindly copying nodes.</p>
 <div class="hero-actions"><a class="button primary" href="#/lesson/${n.id}">▶ Continue learning</a><a class="button ghost" href="#/challenges">🔥 Challenge board</a></div></div>
 <div class="hero-art" aria-hidden="true"><div class="bp-node one"><div class="bp-head">Event BeginPlay</div><div class="bp-body">WHEN something happens → execution starts</div></div><div class="bp-node two"><div class="bp-head">Learning Complete</div><div class="bp-body">Skill unlocked<br>XP +100</div></div></div></section>
 <div class="stat-grid"><div class="stat"><small>Current level</small><strong>${i.n}</strong></div><div class="stat"><small>Total XP</small><strong>${i.xp}</strong></div><div class="stat"><small>Lessons complete</small><strong>${state.completed.length}/${DATA.lessons.length}</strong></div><div class="stat"><small>Independent challenges</small><strong>${DATA.lessons.length}</strong></div></div>
 <section class="section"><div class="section-head"><div><h2>Continue learning</h2><p>Resume your current skill.</p></div></div>
 <a class="continue-card" href="#/lesson/${n.id}"><div class="continue-icon">${path(n.path).icon}</div><div class="continue-main"><span class="eyebrow">${esc(path(n.path).title)}</span><h3>${esc(n.title)}</h3><p>${esc(n.short)}</p><div class="path-meta"><span>${n.duration} • ${n.xp} XP</span><span>${np.pct}% path complete</span></div><div class="progress"><span style="width:${np.pct}%"></span></div></div><span class="button small">Open →</span></a></section>
 <section class="section"><div class="section-head"><div><h2>Learning paths</h2><p>Follow them in order or jump to the skill you need.</p></div></div><div class="path-grid">${DATA.paths.map(p=>{const x=pathProgress(p.id);return `<a class="path-card" href="#/path/${p.id}"><div class="path-icon">${p.icon}</div><h3>${esc(p.title)}</h3><p>${esc(p.description)}</p><div class="path-meta"><span>${x.done}/${x.total} lessons</span><span>${x.pct}%</span></div><div class="progress"><span style="width:${x.pct}%"></span></div></a>`}).join('')}</div></section>
 <section class="section"><div class="section-head"><div><h2>Next skills</h2><p>Four useful things you have not finished yet.</p></div></div><div class="lesson-list">${DATA.lessons.filter(l=>!state.completed.includes(l.id)).slice(0,4).map(lessonRow).join('')||'<div class="empty">Everything in this build is complete. Time for the boss challenges.</div>'}</div></section>`;
}
function pathPage(id){
 const p=path(id);if(!p)return notFound();const ls=DATA.lessons.filter(l=>l.path===id).sort((a,b)=>a.order-b.order),x=pathProgress(id);
 return `<div class="page-head"><div class="breadcrumb"><a href="#/">Dashboard</a> / Learning path</div><span class="eyebrow">${x.done}/${x.total} complete • ${x.pct}%</span><h1>${p.icon} ${esc(p.title)}</h1><p class="muted">${esc(p.description)}</p><div class="progress"><span style="width:${x.pct}%"></span></div></div><div class="lesson-list">${ls.map(lessonRow).join('')}</div>`;
}
function quizHtml(l){
 return l.quiz.map((q,qi)=>`<div class="quiz" data-q="${qi}"><strong>${qi+1}. ${esc(q[0])}</strong><div class="quiz-options">${q[1].map((o,oi)=>`<button class="quiz-option" data-action="quiz" data-lesson="${l.id}" data-q="${qi}" data-o="${oi}">${esc(o)}</button>`).join('')}</div><div class="quiz-feedback">${esc(q[3])}</div></div>`).join('');
}
function requirements(xs){return `<div class="requirements">${xs.map(x=>`<div class="requirement">${esc(x)}</div>`).join('')}</div>`}
function task(type,label,x,l){
 const hints=x.hints?.length?`<button class="button small ghost" data-action="hint">💡 Reveal hint</button>${x.hints.map((h,i)=>`<div class="hint">Hint ${i+1}: ${esc(h)}</div>`).join('')}`:'';
 return `<div class="task ${type}"><span class="task-label">${label}</span><h3>${esc(x.title)}</h3><p>${esc(x.task)}</p>${requirements(x.requirements)}${hints}</div>`;
}
function lessonPage(id){
 const l=lesson(id);if(!l)return notFound();state.lastLesson=id;save();const p=path(l.path),done=state.completed.includes(id);
 return `<div class="breadcrumb"><a href="#/">Dashboard</a> / <a href="#/path/${p.id}">${esc(p.title)}</a> / ${esc(l.title)}</div>
 <section class="lesson-hero"><div><span class="eyebrow">${esc(p.title)} • Lesson ${l.order}</span><h1>${esc(l.title)}</h1><p>${esc(l.short)}</p><div class="tags"><span class="tag ${tagClass(l.difficulty)}">${l.difficulty}</span><span class="tag">${l.duration}</span><span class="tag">+${l.xp} XP</span>${done?'<span class="tag beginner">Completed ✓</span>':''}</div><div class="mode-toggle"><button data-action="mode" data-mode="guided" class="${lessonMode==='guided'?'active':''}">Guided</button><button data-action="mode" data-mode="independent" class="${lessonMode==='independent'?'active':''}">Independent</button></div></div>
 <div class="lesson-meta"><div class="meta-line"><small>Learning aim</small><strong>${esc(l.aim)}</strong></div><div class="meta-line"><small>Lesson model</small><strong>Learn → Build → Apply</strong></div><div class="meta-line"><small>Book backbone</small><strong>${esc(l.bookRef||'UE5 Blueprint reference')}</strong></div></div></section>
 <div class="lesson-layout ${lessonMode==='independent'?'independent':''}">
 <article>
 <section class="content-card" id="aims"><span class="eyebrow">01 • Goal</span><h2>What you should be able to do</h2><div class="goal-grid">${l.goals.map(g=>`<div class="goal">${esc(g)}</div>`).join('')}</div></section>
 <section class="content-card" id="learn"><span class="eyebrow">02 • Learn</span><h2>Core ideas</h2><div class="goal-grid">${l.concepts.map(c=>`<div class="concept"><strong>${esc(c[0])}</strong><br>${esc(c[1])}</div>`).join('')}</div>${visual(l)}</section>
 <section class="content-card guided-section" id="guided"><span class="eyebrow">03 • Guided build</span><h2>Follow it once</h2><p>Predict the result before pressing Play. The point is understanding the system, not racing the steps.</p><ol class="steps">${l.guided.map(s=>`<li>${esc(s)}</li>`).join('')}</ol></section>
 <section class="content-card guided-hidden-note"><span class="eyebrow">Independent mode</span><h2>Guided steps hidden</h2><p>Use the learning aim, concepts and challenges as your brief. Switch back to Guided if you genuinely need the walkthrough.</p></section>
 <section class="content-card" id="check"><span class="eyebrow">04 • Quick check</span><h2>Do you understand the idea?</h2>${quizHtml(l)}</section>
 <section class="content-card" id="apply"><span class="eyebrow">05 • Apply</span><h2>Stretch & Challenge</h2>${task('stretch','★ Stretch',l.stretch,l)}${task('challenge','🔥 Challenge',l.challenge,l)}</section>
 <section class="content-card" id="experience"><span class="eyebrow">06 • Experience it</span><h2>Play it or watch it</h2><div class="task experience"><span class="task-label">🎮 ${esc(l.experience.focus)}</span><h3>${esc(l.experience.game)}</h3><div class="analysis-grid"><div class="analysis-box"><small>Play it</small><strong>Use the real game</strong><p>${esc(l.experience.play)}</p></div><div class="analysis-box"><small>Watch it</small><strong>No game? No problem.</strong><p>${esc(l.experience.watch)}</p></div></div><h3 style="margin-top:13px">What to look for</h3>${requirements(l.experience.observe)}<a class="button small ghost" target="_blank" rel="noopener" href="${youtube(l.experience.search)}">▶ Find gameplay on YouTube</a></div></section>
 <section class="content-card" id="homework"><span class="eyebrow">07 • Homework</span><h2>Take the thinking outside Unreal</h2><div class="task homework"><span class="task-label">⌂ Homework</span><h3>${esc(l.homework.title)}</h3><p>${esc(l.homework.task)}</p><div class="callout"><b>Evidence:</b> ${esc(l.homework.evidence)}</div><div class="callout good"><b>Stretch:</b> ${esc(l.homework.stretch)}</div><button class="button small" data-action="copy-homework" data-lesson="${l.id}">Copy for Teams</button></div></section>
 <section class="content-card" id="debug"><span class="eyebrow">08 • Debug & improve</span><h2>Common problems</h2><ul>${l.common.map(x=>`<li>${esc(x)}</li>`).join('')}</ul><div class="callout good"><b>Good practice:</b> ${esc(l.goodPractice)}</div></section>
 </article>
 <aside class="lesson-nav"><button class="section-button" data-action="scroll" data-target="aims">01 Learning aims</button><button class="section-button" data-action="scroll" data-target="learn">02 Learn</button><button class="section-button" data-action="scroll" data-target="guided">03 Guided build</button><button class="section-button" data-action="scroll" data-target="check">04 Quick check</button><button class="section-button" data-action="scroll" data-target="apply">05 Stretch & challenge</button><button class="section-button" data-action="scroll" data-target="experience">06 Play / watch</button><button class="section-button" data-action="scroll" data-target="homework">07 Homework</button><button class="section-button" data-action="scroll" data-target="debug">08 Debug & improve</button><hr><button class="button ${done?'success':'primary'}" data-action="complete" data-lesson="${l.id}">${done?'✓ Completed':`Mark complete • +${l.xp} XP`}</button></aside>
 </div>`;
}
function challengeBoard(){
 return `<div class="page-head"><div class="breadcrumb"><a href="#/">Dashboard</a> / Challenges</div><span class="eyebrow">Independent practice</span><h1>🔥 Challenge Board</h1><p class="muted">No complete walkthroughs. Revisit lessons as reference and transfer the skill to a new problem.</p></div><div class="board-grid">${DATA.lessons.map(l=>`<div class="board-card"><span class="eyebrow">${esc(path(l.path).title)}</span><h3>${esc(l.challenge.title)}</h3><p>${esc(l.challenge.task)}</p>${requirements(l.challenge.requirements)}<a class="button small" href="#/lesson/${l.id}">Open lesson →</a></div>`).join('')}</div>`;
}
function homeworkBoard(){
 return `<div class="page-head"><div class="breadcrumb"><a href="#/">Dashboard</a> / Homework</div><span class="eyebrow">Play • Watch • Analyse • Design</span><h1>⌂ Homework Board</h1><p class="muted">Homework is deliberately broader than “do more Unreal”. Students can analyse games, design systems, debug and explain.</p></div><div class="board-grid">${DATA.lessons.map(l=>`<div class="board-card"><span class="eyebrow">${esc(l.title)}</span><h3>${esc(l.homework.title)}</h3><p>${esc(l.homework.task)}</p><div class="button-row"><button class="button small" data-action="copy-homework" data-lesson="${l.id}">Copy for Teams</button><a class="button small ghost" href="#/lesson/${l.id}">View lesson</a></div></div>`).join('')}</div>`;
}
function glossary(){
 return `<div class="page-head"><div class="breadcrumb"><a href="#/">Dashboard</a> / Glossary</div><span class="eyebrow">${DATA.glossary.length} starter terms</span><h1>? UE5 Glossary</h1><p class="muted">Short definitions for the terms students actually meet while building.</p></div><input id="glossarySearch" type="search" placeholder="Filter glossary…" style="width:min(430px,100%);background:#0b121b;border:1px solid var(--line);color:#fff;border-radius:9px;padding:10px;margin-bottom:12px"><div class="glossary-grid" id="glossaryGrid">${DATA.glossary.map(([t,d])=>`<div class="glossary-item" data-search="${esc((t+' '+d).toLowerCase())}"><strong>${esc(t)}</strong><p>${esc(d)}</p></div>`).join('')}</div>`;
}
function revision(){
 const cards=DATA.lessons.flatMap(l=>l.quiz.map(q=>({lesson:l,q:q[0],answer:q[1][q[2]],feedback:q[3]})));
 const card=cards[Math.floor(Math.random()*cards.length)];
 return `<div class="page-head"><div class="breadcrumb"><a href="#/">Dashboard</a> / Revision</div><span class="eyebrow">Random retrieval practice</span><h1>↻ Revision</h1><p class="muted">A quick random question pulled from the learning content.</p></div><div class="revision-card"><span class="eyebrow">${esc(card.lesson.title)}</span><h2 style="margin-top:8px">${esc(card.q)}</h2><div class="button-row"><button class="button primary" data-action="reveal-revision">Reveal answer</button><button class="button ghost" data-action="new-revision">New question</button></div><div class="revision-answer" id="revisionAnswer"><div class="callout good"><b>Answer:</b> ${esc(card.answer)}</div><p class="muted">${esc(card.feedback)}</p><a class="button small" href="#/lesson/${card.lesson.id}">Open related lesson</a></div></div>`;
}
function notFound(){return `<div class="empty"><h2>That page fell out of the level.</h2><p>Return to the dashboard.</p><a class="button" href="#/">Dashboard</a></div>`}

function route(){
 const parts=(location.hash||'#/').replace(/^#\//,'').split('/').filter(Boolean),app=$('#app');
 $$('.nav a').forEach(a=>a.classList.remove('active'));
 if(!parts.length){app.innerHTML=dashboard();activate('home')}
 else if(parts[0]==='path'){app.innerHTML=pathPage(parts[1]);activate(parts[1])}
 else if(parts[0]==='lesson'){app.innerHTML=lessonPage(parts[1]);const l=lesson(parts[1]);if(l)activate(l.path)}
 else if(parts[0]==='challenges'){app.innerHTML=challengeBoard();activate('challenges')}
 else if(parts[0]==='homework'){app.innerHTML=homeworkBoard();activate('homework')}
 else if(parts[0]==='revision'){app.innerHTML=revision();activate('revision')}
 else if(parts[0]==='glossary'){app.innerHTML=glossary();activate('glossary')}
 else app.innerHTML=notFound();
 bindPageInputs();updateChrome();window.scrollTo(0,0);app.focus({preventScroll:true});$('#sidebar').classList.remove('open');
}
function activate(key){const a=$(`[data-route="${key}"]`);if(a)a.classList.add('active')}
function bindPageInputs(){
 const gs=$('#glossarySearch');if(gs)gs.addEventListener('input',()=>{const q=gs.value.toLowerCase().trim();$$('.glossary-item').forEach(x=>x.style.display=x.dataset.search.includes(q)?'':'none')});
}
async function copyHomework(id){
 const l=lesson(id);if(!l)return;
 const text=`${l.homework.title}\n\nTask:\n${l.homework.task}\n\nEvidence:\n${l.homework.evidence}\n\nStretch:\n${l.homework.stretch}\n\nRelated UE5 lesson: ${l.title}`;
 try{await navigator.clipboard.writeText(text);toast('Homework copied — ready for Teams.')}catch(e){toast('Clipboard blocked by browser.')}
}
document.addEventListener('click',e=>{
 const b=e.target.closest('[data-action]');if(!b)return;const a=b.dataset.action;
 if(a==='scroll'){const t=document.getElementById(b.dataset.target);if(t)t.scrollIntoView({behavior:'smooth',block:'start'});}
 if(a==='complete'){const id=b.dataset.lesson,l=lesson(id);if(state.completed.includes(id)){state.completed=state.completed.filter(x=>x!==id);toast('Marked incomplete.')}else{state.completed.push(id);toast(`Lesson complete! +${l.xp} XP`)}save();route();}
 if(a==='quiz'){const l=lesson(b.dataset.lesson),qi=+b.dataset.q,oi=+b.dataset.o,q=l.quiz[qi],wrap=b.closest('.quiz');$$('.quiz-option',wrap).forEach(x=>x.disabled=true);$$('.quiz-option',wrap).forEach((x,i)=>{if(i===q[2])x.classList.add('correct');else if(i===oi)x.classList.add('wrong')});$('.quiz-feedback',wrap).classList.add('show');}
 if(a==='hint'){const wrap=b.closest('.task'),h=$$('.hint',wrap).find(x=>!x.classList.contains('show'));if(h)h.classList.add('show');if(!$$('.hint',wrap).some(x=>!x.classList.contains('show')))b.textContent='All hints revealed';}
 if(a==='copy-homework')copyHomework(b.dataset.lesson);
 if(a==='mode'){lessonMode=b.dataset.mode;route();}
 if(a==='reveal-revision')$('#revisionAnswer')?.classList.add('show');
 if(a==='new-revision')route();
});
function setupSearch(){
 const input=$('#globalSearch'),panel=$('#searchPanel');
 input.addEventListener('input',()=>{const q=input.value.toLowerCase().trim();if(!q){panel.hidden=true;panel.innerHTML='';return}
 const ls=DATA.lessons.filter(l=>[l.title,l.short,l.aim,...l.goals,...l.concepts.flat()].join(' ').toLowerCase().includes(q)).slice(0,7);
 const gs=DATA.glossary.filter(x=>x.join(' ').toLowerCase().includes(q)).slice(0,4);
 panel.innerHTML=[...ls.map(l=>`<a class="search-result" href="#/lesson/${l.id}"><strong>${esc(l.title)}</strong><small>Lesson • ${esc(path(l.path).title)}</small></a>`),...gs.map(g=>`<a class="search-result" href="#/glossary"><strong>${esc(g[0])}</strong><small>${esc(g[1])}</small></a>`)].join('')||'<div class="search-result"><strong>No results</strong><small>Try a broader UE5 term.</small></div>';panel.hidden=false;});
 document.addEventListener('click',e=>{if(!e.target.closest('.global-search'))panel.hidden=true});
 document.addEventListener('keydown',e=>{if(e.key==='/'&&document.activeElement!==input){e.preventDefault();input.focus()}if(e.key==='Escape'){input.blur();panel.hidden=true}});
}
$('#menuButton').addEventListener('click',()=>$('#sidebar').classList.toggle('open'));
$('#resetProgress').addEventListener('click',()=>{if(confirm('Reset all locally saved lesson progress and XP on this browser?')){state={completed:[],quiz:{},lastLesson:null};save();route();toast('Local progress reset.')}});
window.addEventListener('hashchange',route);
setupSearch();updateChrome();route();
})();
