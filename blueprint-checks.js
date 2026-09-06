(() => {
'use strict';
const STORE='ue5hub:blueprint-checks:v1';
const state=(()=>{try{return JSON.parse(localStorage.getItem(STORE)||'{}')}catch{return {}}})();
function save(){localStorage.setItem(STORE,JSON.stringify(state))}
function sectionState(id){return state[id]||(state[id]={proof:[],quizPassed:false,best:0})}
function updateSection(sec){
  const id=sec.dataset.section,s=sectionState(id);
  const boxes=[...sec.querySelectorAll('[data-proof]')];
  boxes.forEach((b,i)=>b.checked=!!s.proof[i]);
  const done=boxes.filter(b=>b.checked).length;
  sec.querySelector('[data-proof-count]').textContent=`${done}/${boxes.length} complete`;
  sec.querySelector('[data-proof-bar]').style.width=`${boxes.length?done/boxes.length*100:0}%`;
  const pass=done===boxes.length&&s.quizPassed;
  const badge=sec.querySelector('[data-status]');
  badge.textContent=pass?'✓ PASSED':s.quizPassed?'QUIZ PASSED • PROOF LEFT':'NOT PASSED';
  badge.classList.toggle('pass',pass);
  sec.querySelector('[data-move-on]').hidden=!pass;
  updateOverall();
}
function updateOverall(){
  const secs=[...document.querySelectorAll('.check-section')];
  const passed=secs.filter(sec=>{
    const s=sectionState(sec.dataset.section);
    const boxes=[...sec.querySelectorAll('[data-proof]')];
    return s.quizPassed && s.proof.filter(Boolean).length===boxes.length;
  }).length;
  document.querySelector('[data-overall]').textContent=`${passed} / ${secs.length}`;
  document.querySelector('[data-overall-bar]').style.width=`${secs.length?passed/secs.length*100:0}%`;
}
document.querySelectorAll('.check-section').forEach(sec=>{
  const id=sec.dataset.section,s=sectionState(id);
  const boxes=[...sec.querySelectorAll('[data-proof]')];
  boxes.forEach((b,i)=>b.addEventListener('change',()=>{s.proof[i]=b.checked;save();updateSection(sec)}));
  const form=sec.querySelector('.quiz-form');
  form.addEventListener('submit',e=>{
    e.preventDefault();
    let score=0,answered=0;
    [...sec.querySelectorAll('.quiz-q')].forEach(q=>{
      const picked=q.querySelector('input[type=radio]:checked');
      const correct=Number(q.dataset.correct);
      q.querySelectorAll('.answer').forEach(a=>a.classList.remove('correct','wrong'));
      const ex=q.querySelector('.explanation');
      if(picked){
        answered++;
        const label=picked.closest('.answer');
        if(Number(picked.value)===correct){score++;label.classList.add('correct')}
        else{label.classList.add('wrong');q.querySelector(`input[value="${correct}"]`).closest('.answer').classList.add('correct')}
      }
      ex.textContent=q.dataset.explain;
      ex.hidden=false;
    });
    const passMark=Number(sec.dataset.pass),total=sec.querySelectorAll('.quiz-q').length;
    const passed=score>=passMark && answered===total;
    s.best=Math.max(s.best||0,score);
    if(passed)s.quizPassed=true;
    save();
    const r=sec.querySelector('[data-result]');
    r.hidden=false;r.className='quiz-result '+(passed?'pass':'fail');
    r.innerHTML=passed?`<b>✓ ${score}/${total} — passed.</b> Best score ${s.best}/${total}. Now make sure every practical proof item is genuinely complete.`:
      `<b>${score}/${total}${answered<total?` • ${total-answered} unanswered`:''} — not passed yet.</b> Pass mark is ${passMark}/${total}. Read the feedback and retry. Best score ${s.best}/${total}.`;
    updateSection(sec);
  });
  sec.querySelector('[data-reset]').addEventListener('click',()=>{
    form.reset();sec.querySelectorAll('.answer').forEach(a=>a.classList.remove('correct','wrong'));
    sec.querySelectorAll('.explanation').forEach(x=>x.hidden=true);
    sec.querySelector('[data-result]').hidden=true;
  });
  updateSection(sec);
});
document.querySelector('[data-clear]').addEventListener('click',()=>{
  if(!confirm('Clear your local Blueprint check ticks and quiz passes on this device?'))return;
  localStorage.removeItem(STORE);location.reload();
});
if(location.hash){setTimeout(()=>document.querySelector(location.hash)?.scrollIntoView({behavior:'smooth'}),100)}
})();