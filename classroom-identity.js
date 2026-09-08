/* UE5 Learning Hub v3.47.1 — Low-key Authorship
   Presentation-only layer. Makes the Hub feel like a maintained course tool,
   not a generic generated dashboard.
*/
(() => {
  'use strict';

  const NAV_CODES = {
    home:'HOME', classes:'CLASS', pathways:'PATH', programming:'UE5',
    theory:'GD', design:'WORLD', critique:'CRIT', modeling:'3D', news:'NEWS',
    blocks:'TERM', tutorials:'MAKE', challenges:'TASK', homework:'HW',
    revision:'TEST', resources:'REF', snippets:'BP', glossary:'A-Z',
    leaderboard:'XP', progress:'ME', requests:'IDEA', teacher:'STAFF'
  };

  const HOME_CODES = {
    '#/programming':'UE5',
    '#/theory':'DESIGN',
    '#/design':'WORLD',
    '#/modeling':'3D',
    '#/news':'NEWS'
  };

  let queued = false;

  function cleanLeadingText(anchor){
    [...anchor.childNodes].forEach(node=>{
      if(node.nodeType===Node.TEXT_NODE && node.textContent.trim()){
        node.textContent='';
      }
    });
  }

  function tidyNav(){
    const nav=document.querySelector('#mainNav');
    if(!nav)return;
    nav.querySelectorAll('a').forEach(a=>{
      cleanLeadingText(a);
      const route=a.dataset.route || '';
      let code=NAV_CODES[route];
      if(a.classList.contains('blueprint-checks-nav'))code='CHECK';
      if(a.classList.contains('cheatsheet-nav'))code='KEYS';
      if(!code)code='OPEN';
      a.dataset.ciCode=code;
    });
    const brandSmall=document.querySelector('.brand-copy small');
    if(brandSmall)brandSmall.textContent='Games Development';
  }


  function tidyHome(){
    const app=document.querySelector('#app');
    if(!app)return;
    const hero=app.querySelector('.portal-hero-clean');
    if(hero){
      const eyebrow=hero.querySelector('.eyebrow');
      const h1=hero.querySelector('h1');
      const p=hero.querySelector('p');
      if(eyebrow)eyebrow.textContent='GAMES DEVELOPMENT / COURSE HUB';
      if(h1)h1.textContent='UE5 Learning Hub';
      if(p)p.textContent='Course tools, lesson support and reference. Start with the class task, continue your own work, or find the thing you need.';
    }

    const focus=app.querySelector('.journey-start-card.class-focus .journey-card-kicker');
    const personal=app.querySelector('.journey-start-card.personal .journey-card-kicker');
    const explore=app.querySelector('.journey-start-card.explore .journey-card-kicker');
    if(focus)focus.textContent='01 / CLASS FOCUS';
    if(personal)personal.textContent='02 / CONTINUE';
    if(explore)explore.textContent='03 / FIND';

    app.querySelectorAll('.journey-mini-actions a').forEach(a=>{
      const map={'#/modeling':'3D Modelling','#/programming':'Unreal','#/design':'Design','#/theory':'Theory'};
      if(map[a.getAttribute('href')])a.textContent=map[a.getAttribute('href')];
    });

    app.querySelectorAll('.journey-support-strip a').forEach(a=>{
      const href=a.getAttribute('href')||'';
      const labels={
        '#/tutorials':'Make something',
        '#/blocks':'Explain a term',
        '#/revision':'Test yourself',
        '#/critique':'Get feedback',
        '#/resources':'Find assets',
        'cheatsheet.html':'Quick reference',
        '#/progress':'My progress'
      };
      if(labels[href])a.textContent=labels[href];
    });

    app.querySelectorAll('.portal-path-card').forEach(card=>{
      const href=card.getAttribute('href');
      if(href==='#/sculpt'){card.remove();return}
      const icon=card.querySelector('.portal-path-icon');
      if(icon && HOME_CODES[href])icon.textContent=HOME_CODES[href];

      const open=card.querySelector(':scope > strong');
      if(open){
        const label={
          '#/programming':'Open Unreal Learning',
          '#/theory':'Open Game Design Theory',
          '#/design':'Open Designer Studio',
          '#/modeling':'Open 3D Modelling',
          '#/news':'Open News & Industry'
        }[href];
        if(label)open.textContent=label;
      }
    });

    const browse=app.querySelector('.journey-browse-head');
    if(browse){
      const eyebrow=browse.querySelector('.eyebrow');
      const h2=browse.querySelector('h2');
      const p=browse.querySelector('p');
      if(eyebrow)eyebrow.textContent='COURSE AREAS';
      if(h2)h2.textContent='Browse the Hub';
      if(p)p.textContent='All main learning areas stay visible. Pick the area that matches what you are doing.';
    }
  }

  function addClassroomContext(){
    const app=document.querySelector('#app');
    if(!app || app.querySelector('.classroom-context-strip'))return;
    const lesson=app.querySelector('.lesson-hero');
    const guided=app.querySelector('.guided-path-hero');
    const pageHead=app.querySelector('.programming-page-head,.theory-page-head,.designer-page-head,.model-page-head.revamped');

    let target=null,copy='';
    if(lesson){
      target=lesson;
      copy='Live demo first where available. Build it, test it, then use the guide to recover or go further.';
    }else if(guided){
      target=guided;
      copy='Work on the current stage. Stop at the session target unless your teacher asks you to continue.';
    }else if(pageHead){
      target=pageHead;
      copy='Use this area as part of the course, for catch-up, or for independent practice.';
    }
    if(target){
      target.insertAdjacentHTML('afterend',
        `<div class="classroom-context-strip"><strong>CLASSROOM USE</strong><span>${copy}</span></div>`);
    }
  }

  function tidyFooter(){
    const footer=document.querySelector('footer');
    if(!footer || footer.querySelector('.classroom-footer-meta'))return;
    footer.insertAdjacentHTML('beforeend',
      `<span class="classroom-footer-meta">Course-built • shaped by student feedback • <a class="classroom-about-link" href="about-hub.html">About</a></span>`);
  }

  function scrubVisibleSculptLinks(){
    document.querySelectorAll('a[href^="#/sculpt"]').forEach(a=>a.remove());
    // Keep the old compatibility data underneath app.js, but do not present its retired route.
    if(location.hash.startsWith('#/sculpt'))location.hash='#/modeling';
  }

  function apply(){
    tidyNav();
    tidyHome();
    addClassroomContext();
    tidyFooter();
    scrubVisibleSculptLinks();
  }

  function queue(){
    if(queued)return;
    queued=true;
    requestAnimationFrame(()=>{queued=false;apply();});
  }

  new MutationObserver(queue).observe(document.body,{childList:true,subtree:true});
  window.addEventListener('hashchange',queue);
  document.addEventListener('DOMContentLoaded',queue,{once:true});
  queue();
  console.info('[classroom-identity] v3.47.1 active');
})();
