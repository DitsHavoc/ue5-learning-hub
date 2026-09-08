/* v3.46.0 — Learning Flow Pass
   Student Journey + Class Focus + learning-flow refinement layer.
   Does not replace core learning data, app.js, backend.js, roster controls or existing progress logic.
*/
(() => {
  'use strict';

  const VERSION = '3.46.0';
  const WORK_KEY = 'ue5hub:v345:personal-work';
  const NAV_KEY = 'ue5hub:v345:nav-groups';
  const FOCUS_CACHE_MS = 20000;

  let focusCache = null;
  let focusCacheAt = 0;
  let enhanceQueued = false;
  let scheduleRows = [];
  let currentAdminClass = '';
  let adminClasses = [];

  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'
  }[ch]));
  const BACKEND = () => window.UE5_BACKEND;
  const field = (form,name) => form?.elements?.namedItem(name) || form?.querySelector(`[name="${name}"]`);

  function flash(message, kind='') {
    const node = $('#toast');
    if (!node) return;
    node.textContent = message;
    node.classList.toggle('badge-toast', kind === 'good');
    node.classList.add('show');
    clearTimeout(flash.timer);
    flash.timer = setTimeout(() => node.classList.remove('show','badge-toast'), 2600);
  }

  function routeHash() {
    return location.hash || '#/';
  }

  function isHome() {
    return routeHash() === '#/' || routeHash() === '#';
  }

  function localDateTimeValue(date = new Date()) {
    const pad = n => String(n).padStart(2,'0');
    return `${date.getFullYear()}-${pad(date.getMonth()+1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
  }

  function toIso(localValue) {
    if (!localValue) return null;
    const d = new Date(localValue);
    return Number.isFinite(d.getTime()) ? d.toISOString() : null;
  }

  function dateLabel(value) {
    if (!value) return '';
    const d = new Date(value);
    if (!Number.isFinite(d.getTime())) return '';
    return d.toLocaleString([], {weekday:'short', day:'numeric', month:'short', hour:'2-digit', minute:'2-digit'});
  }

  function relativeAge(ts) {
    const age = Date.now() - Number(ts || 0);
    if (!Number.isFinite(age) || age < 0) return '';
    if (age < 60_000) return 'just now';
    if (age < 3_600_000) return `${Math.max(1,Math.floor(age/60_000))} min ago`;
    if (age < 86_400_000) return `${Math.floor(age/3_600_000)} hr ago`;
    const days = Math.floor(age/86_400_000);
    return days === 1 ? 'yesterday' : `${days} days ago`;
  }

  function currentWork() {
    try { return JSON.parse(localStorage.getItem(WORK_KEY) || 'null'); }
    catch (_) { return null; }
  }

  function workArea(hash) {
    if (/^#\/pathways\//.test(hash)) return 'Guided Path';
    if (/^#\/modeling/.test(hash)) return '3D Modelling';
    if (/^#\/design/.test(hash)) return 'Designer Studio';
    if (/^#\/theory/.test(hash)) return 'Game Design Theory';
    if (/^#\/sculpt/.test(hash)) return 'Sculpt';
    if (/^#\/tutorial/.test(hash)) return 'Quick Tutorial';
    if (/^#\/lesson/.test(hash) || /^#\/programming/.test(hash) || /^#\/path\//.test(hash)) return 'Unreal Learning';
    if (/^#\/chapter-build/.test(hash)) return 'Chapter Build';
    if (/^#\/blocks\//.test(hash)) return 'Building Block';
    return 'Hub work';
  }

  function isMeaningfulWorkRoute(hash) {
    if (['#/programming','#/theory','#/design','#/modeling','#/sculpt'].includes(hash)) return true;
    return [
      '#/pathways/','#/lesson/','#/path/','#/tutorial/','#/tutorial-family/',
      '#/design/','#/modeling/','#/theory/','#/chapter-build/'
    ].some(prefix => hash.startsWith(prefix));
  }

  function isSupportRoute(hash) {
    return ['#/blocks','#/tutorials','#/revision','#/resources','#/snippets','#/glossary','#/critique','#/news','#/homework','#/challenges']
      .some(prefix => hash === prefix || hash.startsWith(prefix + '/'));
  }

  function rememberCurrentWork() {
    const hash = routeHash();
    if (!isMeaningfulWorkRoute(hash)) return;
    const app = $('#app');
    const titleNode = app?.querySelector('h1');
    if (!titleNode) return;
    const title = titleNode.textContent.replace(/\s+/g,' ').trim();
    if (!title) return;
    const old = currentWork();
    if (old?.href === hash && old?.title === title && Date.now() - Number(old.at||0) < 30_000) return;
    const record = {href:hash, title, area:workArea(hash), at:Date.now()};
    try { localStorage.setItem(WORK_KEY, JSON.stringify(record)); } catch (_) {}
  }

  async function rpc(name, args={}) {
    const b = BACKEND();
    if (!b?.client || !b.user) throw new Error('Sign in to use Class Focus.');
    const {data,error} = await b.client.rpc(name,args);
    if (error) {
      if (error.code === '42883' || error.code === '42P01') {
        throw new Error('Class Focus database migration is not installed.');
      }
      throw error;
    }
    return data;
  }

  async function getFocusRows({force=false}={}) {
    const b = BACKEND();
    if (!b?.user) return [];
    if (!force && focusCache && Date.now()-focusCacheAt < FOCUS_CACHE_MS) return focusCache;
    const rows = await rpc('get_my_class_focus');
    focusCache = Array.isArray(rows) ? rows : [];
    focusCacheAt = Date.now();
    return focusCache;
  }

  function recentPrevious(row) {
    if (!row?.previous_title || !row?.previous_href || !row?.previous_ended_at) return null;
    const ended = new Date(row.previous_ended_at).getTime();
    if (!Number.isFinite(ended) || Date.now() - ended > 7*86400000) return null;
    return {title:row.previous_title, href:row.previous_href, endedAt:row.previous_ended_at};
  }

  function personalWorkMarkup() {
    const item = currentWork();
    if (!item) {
      return `<article class="journey-start-card personal">
        <span class="journey-card-kicker">▶ YOUR WORK</span>
        <h2>Choose your own direction</h2>
        <p>Working independently? Pick an area and the Hub will remember what you were doing without changing the class focus.</p>
        <div class="journey-mini-actions">
          <a href="#/modeling">⬡ 3D</a><a href="#/programming">⌘ Unreal</a><a href="#/design">✦ Design</a><a href="#/theory">◈ Theory</a>
        </div>
      </article>`;
    }
    return `<article class="journey-start-card personal">
      <span class="journey-card-kicker">▶ CONTINUE YOUR WORK • YOUR CHOICE</span>
      <h2>${esc(item.title)}</h2>
      <p><b>${esc(item.area || 'Hub work')}</b>${item.at ? ` • last opened ${esc(relativeAge(item.at))}` : ''}. Class Focus never replaces this.</p>
      <div class="journey-card-actions"><a class="button primary" href="${esc(item.href)}">Continue →</a><button class="button ghost small" type="button" data-journey-choose>Choose something else</button></div>
    </article>`;
  }

  function exploreMarkup() {
    const count = window.UE5_PATHWAY_DATA?.paths?.length || 0;
    return `<article class="journey-start-card explore">
      <span class="journey-card-kicker">⌕ FIND / EXPLORE</span>
      <h2>Know what you need?</h2>
      <p>Search the whole Hub, browse freely, or use a Guided Path when you want the site to suggest an order.</p>
      <div class="journey-card-actions"><button class="button primary" type="button" data-journey-search>Search the Hub</button><a class="button ghost" href="#/pathways">${count} Guided Paths →</a></div>
    </article>`;
  }

  async function classFocusMarkup() {
    const b = BACKEND();
    if (!b?.user) {
      return `<article class="journey-start-card class-focus quiet">
        <span class="journey-card-kicker">📌 CLASS FOCUS</span>
        <h2>Sign in for your class</h2>
        <p>Your teacher can pin or schedule the current class task here. It never overrides what you choose to work on yourself.</p>
        <button class="button ghost" type="button" data-action="open-auth">Sign in →</button>
      </article>`;
    }

    let rows = [];
    try { rows = await getFocusRows(); }
    catch (err) {
      return `<article class="journey-start-card class-focus quiet">
        <span class="journey-card-kicker">📌 CLASS FOCUS</span>
        <h2>Class Focus unavailable</h2><p>${esc(err.message || 'Could not load class focus.')}</p>
      </article>`;
    }

    const teacher = b.profile?.role === 'teacher';
    if (teacher) {
      const active = rows.filter(x=>x.is_active);
      return `<article class="journey-start-card class-focus teacher">
        <span class="journey-card-kicker">📌 CLASS FOCUS</span>
        <h2>${active.length ? `${active.length} class${active.length===1?'':'es'} currently focused` : 'Set what matters today'}</h2>
        <p>Schedule a focus for each teaching group. Future items take over automatically when their start time arrives.</p>
        <div class="journey-card-actions"><a class="button primary" href="#/classes">Manage Class Focus →</a></div>
      </article>`;
    }

    const active = rows.filter(x=>x.is_active && x.title && x.href);
    if (!active.length) {
      const previous = rows.map(recentPrevious).find(Boolean);
      return `<article class="journey-start-card class-focus quiet">
        <span class="journey-card-kicker">📌 CLASS FOCUS</span>
        <h2>No current class focus</h2>
        <p>That is fine — continue your own work or explore the Hub.${previous ? ` Your previous class task is still available for a few days.` : ''}</p>
        ${previous ? `<a class="journey-previous-link" href="${esc(previous.href)}">Previous: ${esc(previous.title)} →</a>` : ''}
      </article>`;
    }

    const row = active[0];
    const previous = recentPrevious(row);
    const more = active.length > 1 ? `<span class="journey-more-focus">+${active.length-1} other class focus</span>` : '';
    const timing = row.ends_at ? `Until ${dateLabel(row.ends_at)}` : 'Until replaced or superseded by a scheduled focus';
    return `<article class="journey-start-card class-focus">
      <div class="journey-focus-top"><span class="journey-card-kicker">📌 CLASS FOCUS • ${esc(row.class_name || 'YOUR CLASS')}</span>${more}</div>
      <h2>${esc(row.title)}</h2>
      <p>${esc(row.note || 'This is what the class is currently working on.')}</p>
      <small class="journey-focus-time">${esc(timing)}</small>
      <div class="journey-card-actions"><a class="button primary" href="${esc(row.href)}">Open class focus →</a>${previous ? `<a class="journey-previous-link" href="${esc(previous.href)}">Previous: ${esc(previous.title)}</a>` : ''}</div>
    </article>`;
  }

  async function renderJourneyStart(host) {
    if (!host || host.dataset.loading === '1') return;
    host.dataset.loading = '1';
    host.innerHTML = `<article class="journey-start-card class-focus quiet loading"><span class="journey-card-kicker">📌 CLASS FOCUS</span><h2>Loading class focus…</h2></article>${personalWorkMarkup()}${exploreMarkup()}`;
    const focus = await classFocusMarkup();
    if (!host.isConnected) return;
    const first = host.firstElementChild;
    if (first) first.outerHTML = focus;
    host.dataset.loading = '0';
  }

  function supportStripMarkup() {
    return `<section class="journey-support-strip" aria-label="Fast support tools">
      <div><span class="eyebrow">STUCK OR NEED ONE THING?</span><h2>Fast support</h2><p>Use these to solve a problem, then return to your work.</p></div>
      <nav>
        <a href="#/tutorials">🛠 Make something</a>
        <a href="#/blocks">🧱 Explain a term</a>
        <a href="#/revision">↻ Test yourself</a>
        <a href="#/critique">💬 Get feedback</a>
        <a href="#/resources">🧰 Find assets</a>
        <a href="cheatsheet.html">⚡ Quick reference</a>
        <a href="#/progress">◎ My progress</a>
      </nav>
    </section>`;
  }

  function enhanceHome() {
    if (!isHome()) return;
    const app = $('#app');
    const hero = app?.querySelector('.portal-hero.portal-hero-clean');
    if (!app || !hero) return;

    app.classList.add('journey-home-ready');

    if (!hero.dataset.journey) {
      hero.dataset.journey = '1';
      hero.innerHTML = `<div><span class="eyebrow">UE5 LEARNING HUB</span><h1>What are you here to do?</h1><p>Follow the class focus, continue your own work, or explore. The Hub guides you after you choose a direction — it does not choose the direction for you.</p></div>`;
    }

    let start = app.querySelector('#journeyStartGrid');
    if (!start) {
      start = document.createElement('section');
      start.id = 'journeyStartGrid';
      start.className = 'journey-start-grid';
      hero.insertAdjacentElement('afterend', start);
    }
    renderJourneyStart(start);

    const classShortcut = app.querySelector('.portal-class-shortcut');
    if (classShortcut) classShortcut.classList.add('journey-class-shortcut');

    const guided = app.querySelector('.guided-home-cta');
    if (guided && !guided.dataset.journey) {
      guided.dataset.journey = '1';
      guided.classList.add('journey-guided-compact');
      const count = window.UE5_PATHWAY_DATA?.paths?.length || 0;
      const p = guided.querySelector('p');
      if (p) p.textContent = `${count} optional outcome-based routes connect the useful parts of the Hub in a sensible order. Nothing gets locked.`;
      const chips = guided.querySelector('.portal-chip-row');
      if (chips) chips.innerHTML = `<span>${count} guided paths</span><span>Existing progress counts</span><span>Browse freely anytime</span>`;
    }

    const grid = app.querySelector('.portal-path-grid');
    if (grid) {
      grid.classList.add('journey-browse-grid');
      if (!grid.previousElementSibling?.classList?.contains('journey-browse-head')) {
        grid.insertAdjacentHTML('beforebegin', `<section class="journey-browse-head"><div><span class="eyebrow">BROWSE LEARNING</span><h2>Choose an area</h2><p>Four main destinations first. Everything else is still here when you need it.</p></div></section>`);
      }
      const secondary=[...grid.querySelectorAll('.portal-path-card')].filter(x=>['#/sculpt','#/news'].includes(x.getAttribute('href')));
      secondary.forEach(x=>x.classList.add('journey-secondary-browse-card'));
      if (secondary.length && !app.querySelector('[data-journey-more-browse]')) {
        grid.insertAdjacentHTML('afterend', `<button class="journey-more-browse" type="button" data-journey-more-browse><span>More areas</span><small>Sculpt • News & Industry</small><b>▾</b></button>`);
      }
      const more=app.querySelector('[data-journey-more-browse]');
      if (more) secondary.forEach(x=>x.hidden=!more.classList.contains('open'));
      if (!app.querySelector('.journey-support-strip')) (more||grid).insertAdjacentHTML('afterend', supportStripMarkup());
    }

    const resource = app.querySelector('.portal-resource-home');
    if (resource) resource.classList.add('journey-resource-compact');

    const mission = app.querySelector('.portal-mission-card');
    if (mission) mission.classList.add('journey-retired-mission');

    const session = app.querySelector('.portal-session-grid');
    if (session) {
      session.classList.add('journey-session-clean');
      const player=session.querySelector('.portal-player-card');
      if (player) player.classList.add('journey-player-lower-priority');
    }

    const leaderboard = app.querySelector('#homeLeaderboard');
    if (leaderboard && app.lastElementChild !== leaderboard) {
      leaderboard.classList.add('journey-leaderboard-lower');
      app.appendChild(leaderboard);
    }
  }

  const ORIENTATION = {
    '#/pathways': ['WANT A COMPLETE JOURNEY?','Start here when you want the Hub to suggest a sensible order.','Choose an outcome, follow the current step, then use the linked lesson/tutorial only when it appears.','Leave whenever you want — normal browsing stays open.'],
    '#/programming': ['LEARNING UNREAL SYSTEMATICALLY?','Start here for the structured Unreal route.','Learn a Building Block → use it in a system lesson → apply it in a practical build.','If you only need one mechanic, jump to Quick Tutorials instead.'],
    '#/blocks': ["DON'T UNDERSTAND A TERM?",'Use Building Blocks as a quick explanation shelf.','Open the unfamiliar term, get the short mental model, then go back to the build that sent you here.','This is support, not another course to complete.'],
    '#/tutorials': ['KNOW WHAT YOU WANT TO MAKE?','Use Quick Tutorials for a concrete outcome.','Search the mechanic or result you need, build the first working version, test it, then change something.','If a term is unfamiliar, open its Building Block and come straight back.'],
    '#/theory': ['NEED THE WHY BEFORE THE DECISION?','Use Theory when a design choice needs a reason.','Learn the principle, inspect a real-game case study, then apply it to something you are making.','Do not read the whole library just because it exists.'],
    '#/design': ['BUILDING THE PLAYER EXPERIENCE?','Use Designer Studio for space, readability, atmosphere, light, sound and presentation.','Pick the discipline that matches the problem in your current scene.','Test from the player view before polishing.'],
    '#/modeling': ['WORKING ON A GAME-READY ASSET?','Use the 3D route as its own learning journey.','Foundations → guided Max work → Build X → export/test in Unreal.','Stay here if 3D is your chosen work; Class Focus does not override it.'],
    '#/revision': ['READY TO TEST RECALL?','Use Revision after you have learned the idea.','Quiz yourself, inspect mistakes, then jump back to the weak area.','Do not use a quiz as the first explanation of a new topic.'],
    '#/resources': ['NEED AN ASSET OR REFERENCE?','Use the Resource Library as the useful cupboard.','Find the asset/reference you need, check its licence/context, then return to your build.','Avoid turning resource hunting into the task itself.']
  };

  function enhanceOrientation() {
    const hash=routeHash();
    const data=ORIENTATION[hash];
    const app=$('#app');
    if (!data || !app || app.querySelector('.journey-orientation')) return;
    const head=app.querySelector('.page-head');
    if (!head) return;
    head.insertAdjacentHTML('afterend', `<section class="journey-orientation"><div><span>USE THIS WHEN</span><strong>${esc(data[0])}</strong><p>${esc(data[1])}</p></div><div><span>START HERE</span><strong>${esc(data[2])}</strong></div><div><span>THEN</span><strong>${esc(data[3])}</strong></div></section>`);
  }

  function enhanceReturnToWork() {
    const hash=routeHash(), item=currentWork(), app=$('#app');
    if (!item || !app || hash===item.href || !isSupportRoute(hash) || app.querySelector('.journey-return-work')) return;
    const target=app.querySelector('.page-head') || app.querySelector('.breadcrumb');
    if (!target) return;
    const html=`<a class="journey-return-work" href="${esc(item.href)}"><span>← BACK TO YOUR WORK</span><strong>${esc(item.title)}</strong><small>${esc(item.area||'Hub work')}</small></a>`;
    if (target.classList.contains('page-head')) target.insertAdjacentHTML('afterbegin',html);
    else target.insertAdjacentHTML('afterend',html);
  }

  function stepTitle(step) {
    return step?.querySelector('.guided-step-head h2,.guided-step-main h2,.guided-step-main h3,h2,h3')?.textContent?.replace(/\s+/g,' ').trim() || 'this step';
  }

  function enhanceGuidedPathFlow() {
    const match=routeHash().match(/^#\/pathways\/([^/]+)$/);
    if (!match) return;
    const seq=$('.guided-sequence');
    if (!seq || seq.dataset.flowReady==='1') return;
    const steps=$$('.guided-step',seq);
    if (!steps.length) return;
    seq.dataset.flowReady='1';
    const currentIndex=Math.max(0,steps.findIndex(x=>x.classList.contains('current'))>=0?steps.findIndex(x=>x.classList.contains('current')):steps.findIndex(x=>!x.classList.contains('done')));
    const allDone=steps.every(x=>x.classList.contains('done'));
    const now=allDone?null:steps[currentIndex];
    const next=allDone?null:steps.slice(currentIndex+1).find(x=>!x.classList.contains('done'));
    let past=0,future=0;
    steps.forEach((step,i)=>{
      if (step.classList.contains('done') && !allDone) { step.classList.add('journey-path-past'); past++; }
      if (now===step) step.classList.add('journey-path-now');
      else if (next===step) step.classList.add('journey-path-next');
      else if (!step.classList.contains('done') && i>currentIndex) { step.classList.add('journey-path-future'); future++; }
      if (allDone) { step.classList.add('journey-path-past'); past++; }
    });
    const head=seq.querySelector('.section-head');
    const summary=`<section class="journey-path-focus"><div class="journey-path-focus-main"><span class="eyebrow">${allDone?'PATH COMPLETE':'RIGHT NOW'}</span><h2>${allDone?'You have completed this route.':esc(stepTitle(now))}</h2><p>${allDone?'Review anything when you actually need it — completed steps stay collapsed by default.':'Finish the current step and prove it works before treating the future list as a checklist.'}</p></div>${next?`<div class="journey-path-next-box"><span>NEXT WHEN READY</span><strong>${esc(stepTitle(next))}</strong></div>`:''}<div class="journey-path-controls">${past?`<button class="button small ghost" type="button" data-path-past>Show ${past} completed</button>`:''}${future?`<button class="button small ghost" type="button" data-path-all>Show full path</button>`:''}</div></section>${!allDone?`<section class="journey-session-target"><span>SESSION TARGET</span><div><strong>Make → test → prove the current step.</strong><p>A sensible stopping point is when this step works and you can explain the test. Continue only if your class task or your own plan needs the next stage.</p></div></section>`:''}`;
    (head||seq.firstElementChild)?.insertAdjacentHTML(head?'afterend':'beforebegin',summary);
  }

  function classifySearch(href='') {
    if (/^#\/(lesson|path\/|programming|theory)/.test(href)) return ['LEARN','Learn the idea or system'];
    if (/^#\/(tutorial|chapter-build|design|modeling|sculpt)/.test(href)) return ['MAKE','Build or apply something'];
    if (/^#\/(blocks|revision|critique|glossary)/.test(href)) return ['FIX / CHECK','Unstick or test yourself'];
    return ['REFERENCE','Look something up'];
  }

  function groupSearchResults() {
    const panel=$('#searchPanel');
    if (!panel || panel.hidden || panel.dataset.grouping==='1') return;
    const results=[...panel.children].filter(x=>x.matches?.('a.search-result'));
    if (results.length<2) return;
    panel.dataset.grouping='1';
    const map=new Map();
    results.forEach((node,index)=>{
      const meta=classifySearch(node.getAttribute('href')||'');
      const key=meta[0];
      if(!map.has(key))map.set(key,{label:key,desc:meta[1],first:index,nodes:[]});
      map.get(key).nodes.push(node);
    });
    const other=[...panel.children].filter(x=>!results.includes(x));
    panel.innerHTML='';
    [...map.values()].sort((a,b)=>a.first-b.first).forEach(g=>{
      const section=document.createElement('section');section.className='journey-search-group';
      section.innerHTML=`<div class="journey-search-group-head"><strong>${esc(g.label)}</strong><span>${esc(g.desc)}</span></div>`;
      g.nodes.forEach(n=>section.appendChild(n));
      panel.appendChild(section);
    });
    other.forEach(n=>panel.appendChild(n));
    panel.dataset.grouping='0';
  }

  function bindSearchGrouping() {
    const panel=$('#searchPanel');
    if(!panel || panel.dataset.flowObserver==='1')return;
    panel.dataset.flowObserver='1';
    new MutationObserver(()=>requestAnimationFrame(groupSearchResults)).observe(panel,{childList:true});
    $('#globalSearch')?.addEventListener('input',()=>requestAnimationFrame(groupSearchResults));
  }

  function currentScheduleInfo() {
    const now=Date.now();
    const started=scheduleRows.filter(x=>new Date(x.starts_at).getTime()<=now).sort((a,b)=>new Date(b.starts_at)-new Date(a.starts_at));
    const current=started[0]||null;
    const active=current&&(!current.ends_at||new Date(current.ends_at).getTime()>now)?current:null;
    const upcoming=scheduleRows.filter(x=>new Date(x.starts_at).getTime()>now).sort((a,b)=>new Date(a.starts_at)-new Date(b.starts_at));
    return {current,active,next:upcoming[0]||null,upcoming};
  }

  async function cloneFocus(row,classId,startsAt=new Date().toISOString(),endsAt=null) {
    if(!row)throw new Error('There is no focus to copy.');
    return rpc('save_class_focus_item',{
      p_class_id:classId,p_title:row.title,p_href:row.href,p_note:row.note||'',p_focus_kind:row.focus_kind||'custom',p_starts_at:startsAt,p_ends_at:endsAt,p_item_id:null
    });
  }

  async function updateExistingFocus(row,{startsAt=row?.starts_at,endsAt=row?.ends_at}={}) {
    if(!row)throw new Error('There is no current focus.');
    return rpc('save_class_focus_item',{
      p_class_id:row.class_id,p_title:row.title,p_href:row.href,p_note:row.note||'',p_focus_kind:row.focus_kind||'custom',p_starts_at:startsAt,p_ends_at:endsAt,p_item_id:row.id
    });
  }

  async function runFocusQuick(action) {
    const info=currentScheduleInfo(), now=new Date();
    if(action==='repeat') await cloneFocus(info.active||info.current,currentAdminClass,now.toISOString(),null);
    else if(action==='hold') await updateExistingFocus(info.active,{endsAt:null});
    else if(action==='next') {
      if(!info.next)throw new Error('There is no upcoming focus to move forward.');
      await updateExistingFocus(info.next,{startsAt:now.toISOString(),endsAt:info.next.ends_at});
    } else if(action==='finish') {
      if(!info.active)throw new Error('There is no active focus to finish.');
      const start=new Date(info.active.starts_at).getTime();
      const end=new Date(Math.max(Date.now(),start+1000)).toISOString();
      await updateExistingFocus(info.active,{endsAt:end});
    } else if(action==='copy') {
      const dest=$('#journeyCopyClass')?.value;
      if(!dest)throw new Error('Choose the class to copy to.');
      if(dest===currentAdminClass)throw new Error('Choose a different class.');
      await cloneFocus(info.active||info.current,dest,now.toISOString(),null);
    }
    focusCache=null;focusCacheAt=0;
    await loadFocusSchedule(currentAdminClass);
    flash(action==='finish'?'Class Focus finished.':action==='next'?'Next focus is live now.':'Class Focus updated.','good');
  }

  function navState() {
    try { return JSON.parse(localStorage.getItem(NAV_KEY) || '{}'); }
    catch (_) { return {}; }
  }

  function saveNavState(state) {
    try { localStorage.setItem(NAV_KEY, JSON.stringify(state)); } catch (_) {}
  }

  function headingLinks(heading) {
    const links = [];
    let node = heading.nextElementSibling;
    while (node && !node.classList.contains('nav-heading')) {
      if (node.matches('a')) links.push(node);
      node = node.nextElementSibling;
    }
    return links;
  }

  function setNavGroup(heading, open, persist=true) {
    const links = headingLinks(heading);
    heading.classList.toggle('collapsed', !open);
    heading.setAttribute('aria-expanded', open ? 'true' : 'false');
    links.forEach(link => link.classList.toggle('journey-nav-hidden', !open));
    if (persist) {
      const state = navState();
      state[heading.dataset.journeyGroup] = open;
      saveNavState(state);
    }
  }

  function activeHref() {
    return routeHash();
  }

  function ensureActiveNavVisible() {
    const href = activeHref();
    $$('.nav-heading[data-journey-group]').forEach(heading => {
      const links = headingLinks(heading);
      if (links.some(link => link.getAttribute('href') === href)) setNavGroup(heading, true, false);
    });
    const active = $$('#mainNav a').find(link=>link.getAttribute('href')===href);
    if (active?.classList.contains('journey-main-extra-hidden')) {
      const more = $('#mainNav .journey-more-areas');
      ['critique','sculpt','news'].map(id=>$(`#mainNav [data-route="${id}"]`)).filter(Boolean).forEach(x=>x.classList.remove('journey-main-extra-hidden'));
      if (more) {
        more.classList.add('open');
        const mark=more.querySelector('b');if(mark)mark.textContent='▴';
      }
    }
  }

  function enhanceSidebar() {
    const nav = $('#mainNav');
    if (!nav || nav.dataset.journeyReady === '1') {
      ensureActiveNavVisible();
      return;
    }
    nav.dataset.journeyReady = '1';

    // Keep five core destinations visible; tuck the extra main-area destinations behind one small reveal.
    const modeling = nav.querySelector('[data-route="modeling"]');
    const extraLinks = ['critique','sculpt','news'].map(id=>nav.querySelector(`[data-route="${id}"]`)).filter(Boolean);
    if (modeling && extraLinks.length) {
      const more = document.createElement('button');
      more.type = 'button';
      more.className = 'journey-more-areas';
      more.innerHTML = `<span>More areas</span><b>▾</b>`;
      modeling.insertAdjacentElement('afterend', more);
      const state = navState();
      const apply = open => {
        more.classList.toggle('open', open);
        more.querySelector('b').textContent = open ? '▴' : '▾';
        extraLinks.forEach(x=>x.classList.toggle('journey-main-extra-hidden', !open));
        const next = navState(); next.moreAreas = open; saveNavState(next);
      };
      apply(Boolean(state.moreAreas));
      more.addEventListener('click', ()=>apply(!more.classList.contains('open')));
    }

    const defaults = {
      'main-areas': true,
      'unreal-learning': true,
      'study-tools': false,
      'reference': false,
      'community-progress': false
    };
    const state = navState();

    $$('.nav-heading', nav).forEach((heading, index) => {
      const key = heading.textContent.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'') || `group-${index}`;
      heading.dataset.journeyGroup = key;
      heading.setAttribute('role','button');
      heading.setAttribute('tabindex','0');
      const current = Object.prototype.hasOwnProperty.call(state,key) ? Boolean(state[key]) : (defaults[key] ?? true);
      setNavGroup(heading,current,false);
      const toggle = () => setNavGroup(heading, heading.classList.contains('collapsed'));
      heading.addEventListener('click',toggle);
      heading.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggle();}});
    });

    ensureActiveNavVisible();
  }

  function focusTargetOptions() {
    const options = [
      {href:'#/programming',title:'Unreal Learning',kind:'unreal',label:'⌘ Unreal Learning'},
      {href:'#/theory',title:'Game Design Theory',kind:'theory',label:'◈ Game Design Theory'},
      {href:'#/design',title:'Designer Studio',kind:'design',label:'✦ Designer Studio'},
      {href:'#/modeling',title:'3D Modelling Studio',kind:'modeling',label:'⬡ 3D Modelling Studio'},
      {href:'#/sculpt',title:'Sculpt Playground',kind:'sculpt',label:'🗿 Sculpt Playground'},
      {href:'#/tutorials',title:'Quick Tutorials',kind:'tutorial',label:'🛠 Quick Tutorials'},
      {href:'#/revision',title:'Revision Quizzes',kind:'revision',label:'↻ Revision Quizzes'},
      {href:'blueprint-checks.html',title:'Blueprint Checks',kind:'reference',label:'✓ Blueprint Checks'},
      {href:'cheatsheet.html',title:'UE5 Cheat Sheet',kind:'reference',label:'⚡ UE5 Cheat Sheet'}
    ];
    const paths = window.UE5_PATHWAY_DATA?.paths || [];
    paths.forEach(p=>options.unshift({
      href:`#/pathways/${p.id}`, title:p.title, kind:'guided_path', label:`${p.icon || '↠'} Guided Path — ${p.title}`
    }));
    return options;
  }

  function adminPanelMarkup(classes) {
    const classOptions = classes.map(c=>`<option value="${esc(c.id)}">${esc(c.name)}${c.academic_year ? ` • ${esc(c.academic_year)}` : ''}</option>`).join('');
    const targets = focusTargetOptions();
    const targetOptions = targets.map(t=>`<option value="${esc(t.href)}" data-title="${esc(t.title)}" data-kind="${esc(t.kind)}">${esc(t.label)}</option>`).join('');
    return `<section class="journey-focus-admin" id="journeyFocusAdmin">
      <div class="journey-focus-admin-head">
        <div><span class="eyebrow">📌 CLASS FOCUS</span><h2>What should this class see first?</h2><p>Set one focus now or schedule several. A future item automatically takes over when its start time arrives. Students can still continue their own work instead.</p></div>
        <span class="journey-admin-rule">Suggest • don't lock</span>
      </div>
      <div class="journey-focus-quickbar"><div><span class="eyebrow">FAST CLASS CONTROLS</span><strong>Change the room in seconds</strong></div><div class="journey-focus-quick-actions"><button class="button small ghost" type="button" data-focus-quick="repeat">↻ Repeat current</button><button class="button small ghost" type="button" data-focus-quick="hold">⏸ Hold current</button><button class="button small ghost" type="button" data-focus-quick="next">▶ Next now</button><button class="button small ghost" type="button" data-focus-quick="finish">✓ Finish now</button><label>Copy current to <select id="journeyCopyClass">${classes.map(c=>`<option value="${esc(c.id)}">${esc(c.name)}</option>`).join('')}</select></label><button class="button small ghost" type="button" data-focus-quick="copy">Copy</button></div></div>
      <div class="journey-focus-admin-grid">
        <form id="journeyFocusForm" class="journey-focus-form">
          <input type="hidden" name="itemId">
          <label>Class<select name="classId" required>${classOptions}</select></label>
          <label>Hub destination<select name="target" required>${targetOptions}<option value="__custom__">Custom internal Hub link…</option></select></label>
          <label class="journey-custom-link" hidden>Custom Hub link<input name="customHref" placeholder="#/tutorial/..." maxlength="500"></label>
          <label>Card title<input name="title" maxlength="160" required></label>
          <label>Short instruction / context<textarea name="note" maxlength="500" rows="3" placeholder="e.g. Watch the demo → build the room → Play test → stop at the greybox checkpoint."></textarea></label>
          <div class="journey-date-grid">
            <label>Starts<input name="startsAt" type="datetime-local" required></label>
            <label>Ends <small>(optional)</small><input name="endsAt" type="datetime-local"></label>
          </div>
          <div class="journey-focus-form-actions"><button class="button primary" type="submit">Set / schedule focus</button><button class="button ghost" type="button" data-focus-new>New focus</button></div>
          <small class="journey-form-help">Leave Ends blank for “until replaced”. If another scheduled focus starts later, the newer one takes over automatically.</small>
        </form>
        <div class="journey-focus-schedule">
          <div class="journey-focus-schedule-head"><div><span class="eyebrow">CURRENT + UPCOMING</span><h3>Focus schedule</h3></div><button class="button small ghost" type="button" data-focus-refresh>Refresh</button></div>
          <div id="journeyFocusSchedule"><div class="empty">Choose a class to load its schedule.</div></div>
        </div>
      </div>
    </section>`;
  }

  function resetFocusForm(form, preserveClass=true) {
    if (!form) return;
    const selectedClass = field(form,'classId')?.value || '';
    form.reset();
    if (preserveClass && selectedClass && field(form,'classId')) field(form,'classId').value = selectedClass;
    if (field(form,'itemId')) field(form,'itemId').value = '';
    if (field(form,'startsAt')) field(form,'startsAt').value = localDateTimeValue();
    const target = field(form,'target')?.selectedOptions?.[0];
    if (target && field(form,'title')) field(form,'title').value = target.dataset.title || '';
    const custom = form.querySelector('.journey-custom-link');
    if (custom) custom.hidden = field(form,'target')?.value !== '__custom__';
    const submit = form.querySelector('[type="submit"]');
    if (submit) submit.textContent = 'Set / schedule focus';
  }

  async function loadFocusSchedule(classId) {
    const host = $('#journeyFocusSchedule');
    if (!host || !classId) return;
    host.innerHTML = `<div class="empty">Loading focus schedule…</div>`;
    try {
      const rows = await rpc('get_class_focus_schedule',{p_class_id:classId});
      scheduleRows = Array.isArray(rows) ? rows : [];
      const now = Date.now();
      const sortedStarted = scheduleRows
        .filter(x=>new Date(x.starts_at).getTime() <= now)
        .sort((a,b)=>new Date(b.starts_at)-new Date(a.starts_at));
      const latestStartedId = sortedStarted[0]?.id || null;
      const current = scheduleRows.find(x=>x.id===latestStartedId);
      const currentActive = current && (!current.ends_at || new Date(current.ends_at).getTime() > now);
      if (!scheduleRows.length) {
        host.innerHTML = `<div class="journey-schedule-empty"><b>No focus scheduled yet.</b><span>Create one on the left. You can add future sessions now and forget about them until teaching day.</span></div>`;
        return;
      }
      const ordered=[...scheduleRows].sort((a,b)=>{
        const as=new Date(a.starts_at).getTime(),bs=new Date(b.starts_at).getTime();
        const ar=a.id===latestStartedId&&currentActive?0:(as>now?1:2),br=b.id===latestStartedId&&currentActive?0:(bs>now?1:2);
        if(ar!==br)return ar-br;
        return ar===1?as-bs:bs-as;
      });
      let lastDay='';
      host.innerHTML = ordered.map(row=>{
        const start = new Date(row.starts_at).getTime();
        const isCurrent = currentActive && row.id===latestStartedId;
        const upcoming = start > now;
        const status = isCurrent ? 'CURRENT' : upcoming ? 'UPCOMING' : 'PREVIOUS';
        const timing = upcoming ? `Starts ${dateLabel(row.starts_at)}` : isCurrent ? (row.ends_at ? `Ends ${dateLabel(row.ends_at)}` : 'Until replaced') : (row.ends_at ? `Ended ${dateLabel(row.ends_at)}` : 'Superseded by a newer focus');
        const d=new Date(row.starts_at), day=d.toLocaleDateString([],{weekday:'long',day:'numeric',month:'short'});
        const dayHead=day!==lastDay?`<div class="journey-schedule-day"><span>${esc(day)}</span></div>`:'';lastDay=day;
        return `${dayHead}<article class="journey-schedule-item ${status.toLowerCase()}">
          <div class="journey-schedule-item-main"><span>${status}</span><strong>${esc(row.title)}</strong><small>${esc(timing)}</small><a href="${esc(row.href)}">${esc(row.href)}</a></div>
          <div class="journey-schedule-actions"><button class="button small ghost" type="button" data-focus-edit="${esc(row.id)}">Edit</button><button class="button small ghost danger" type="button" data-focus-delete="${esc(row.id)}">Delete</button></div>
        </article>`;
      }).join('');
    } catch (err) {
      host.innerHTML = `<div class="empty"><b>Could not load Class Focus.</b><p>${esc(err.message || err)}</p></div>`;
    }
  }

  function syncCopyClassOptions() {
    const select=$('#journeyCopyClass');
    if(!select)return;
    [...select.options].forEach(o=>o.disabled=o.value===currentAdminClass);
    if(select.value===currentAdminClass){const alt=[...select.options].find(o=>!o.disabled);if(alt)select.value=alt.value;}
  }

  async function enhanceClasses() {
    if (!routeHash().startsWith('#/classes')) return;
    const b = BACKEND();
    if (!b?.user || b.profile?.role !== 'teacher') return;
    const app = $('#app');
    const head = app?.querySelector('.page-head');
    if (!app || !head || app.querySelector('#journeyFocusAdmin')) return;

    let classes = [];
    try { classes = await b.getTeachingClassCards(); }
    catch (err) { return; }
    if (!classes.length) return;
    adminClasses = classes;

    head.insertAdjacentHTML('afterend', adminPanelMarkup(classes));
    const form = $('#journeyFocusForm');
    if (!form) return;
    if (field(form,'startsAt')) field(form,'startsAt').value = localDateTimeValue();
    const first = field(form,'target')?.selectedOptions?.[0];
    if (first && field(form,'title')) field(form,'title').value = first.dataset.title || '';
    currentAdminClass = field(form,'classId')?.value || classes[0].id;
    syncCopyClassOptions();
    loadFocusSchedule(currentAdminClass);
  }

  function openGlobalSearch() {
    const input = $('#globalSearch');
    if (!input) return;
    input.focus();
    input.select?.();
    window.scrollTo({top:0,behavior:'smooth'});
  }

  function scrollToBrowse() {
    $('.journey-browse-head')?.scrollIntoView({behavior:'smooth',block:'start'});
  }

  function editFocusItem(id) {
    const row = scheduleRows.find(x=>x.id===id);
    const form = $('#journeyFocusForm');
    if (!row || !form) return;
    field(form,'itemId').value = row.id;
    field(form,'classId').value = row.class_id;
    const targetControl = field(form,'target');
    const targetOption = [...targetControl.options].find(o=>o.value===row.href);
    if (targetOption) {
      targetControl.value = row.href;
      form.querySelector('.journey-custom-link').hidden = true;
    } else {
      targetControl.value = '__custom__';
      field(form,'customHref').value = row.href;
      form.querySelector('.journey-custom-link').hidden = false;
    }
    field(form,'title').value = row.title || '';
    field(form,'note').value = row.note || '';
    field(form,'startsAt').value = localDateTimeValue(new Date(row.starts_at));
    field(form,'endsAt').value = row.ends_at ? localDateTimeValue(new Date(row.ends_at)) : '';
    form.querySelector('[type="submit"]').textContent = 'Update focus';
    form.scrollIntoView({behavior:'smooth',block:'center'});
  }

  async function saveFocusFromForm(form) {
    const targetControl = field(form,'target');
    const targetOption = targetControl?.selectedOptions?.[0];
    const custom = targetControl.value === '__custom__';
    const href = custom ? field(form,'customHref').value.trim() : targetControl.value;
    const kind = custom ? 'custom' : (targetOption?.dataset.kind || 'custom');
    const starts = toIso(field(form,'startsAt').value);
    const ends = toIso(field(form,'endsAt').value);
    if (!href) throw new Error('Choose a Hub destination.');
    if (!starts) throw new Error('Choose a valid start date/time.');
    const payload = {
      p_class_id: field(form,'classId').value,
      p_title: field(form,'title').value.trim(),
      p_href: href,
      p_note: field(form,'note').value.trim(),
      p_focus_kind: kind,
      p_starts_at: starts,
      p_ends_at: ends,
      p_item_id: field(form,'itemId').value || null
    };
    await rpc('save_class_focus_item',payload);
    focusCache = null; focusCacheAt = 0;
    currentAdminClass = field(form,'classId').value;
    resetFocusForm(form,true);
    await loadFocusSchedule(currentAdminClass);
    flash('Class Focus saved. Students will see it at the scheduled time.','good');
  }

  async function deleteFocus(id) {
    if (!id) return;
    await rpc('delete_class_focus_item',{p_item_id:id});
    focusCache = null; focusCacheAt = 0;
    await loadFocusSchedule(currentAdminClass);
    flash('Class Focus item deleted.');
  }

  function bindGlobalEvents() {
    document.addEventListener('click', async e => {
      const search = e.target.closest('[data-journey-search]');
      if (search) { e.preventDefault(); openGlobalSearch(); return; }

      const moreBrowse=e.target.closest('[data-journey-more-browse]');
      if(moreBrowse){e.preventDefault();const open=!moreBrowse.classList.contains('open');moreBrowse.classList.toggle('open',open);moreBrowse.querySelector('b').textContent=open?'▴':'▾';$$('.journey-secondary-browse-card').forEach(x=>x.hidden=!open);return;}

      const pastToggle=e.target.closest('[data-path-past]');
      if(pastToggle){e.preventDefault();const seq=$('.guided-sequence');const open=!seq?.classList.contains('journey-show-past');seq?.classList.toggle('journey-show-past',open);pastToggle.textContent=open?'Hide completed':`Show ${$$('.journey-path-past',seq).length} completed`;return;}

      const allToggle=e.target.closest('[data-path-all]');
      if(allToggle){e.preventDefault();const seq=$('.guided-sequence');const open=!seq?.classList.contains('journey-show-all');seq?.classList.toggle('journey-show-all',open);allToggle.textContent=open?'Hide future steps':'Show full path';return;}

      const quick=e.target.closest('[data-focus-quick]');
      if(quick){e.preventDefault();quick.disabled=true;try{await runFocusQuick(quick.dataset.focusQuick);}catch(err){flash(err.message||'Could not update Class Focus.');}finally{quick.disabled=false;}return;}

      const choose = e.target.closest('[data-journey-choose]');
      if (choose) { e.preventDefault(); scrollToBrowse(); return; }

      const fresh = e.target.closest('[data-focus-new]');
      if (fresh) { e.preventDefault(); resetFocusForm($('#journeyFocusForm'),true); return; }

      const refresh = e.target.closest('[data-focus-refresh]');
      if (refresh) { e.preventDefault(); if(currentAdminClass) loadFocusSchedule(currentAdminClass); return; }

      const edit = e.target.closest('[data-focus-edit]');
      if (edit) { e.preventDefault(); editFocusItem(edit.dataset.focusEdit); return; }

      const del = e.target.closest('[data-focus-delete]');
      if (del) {
        e.preventDefault();
        const row = scheduleRows.find(x=>x.id===del.dataset.focusDelete);
        const label = row?.title ? `“${row.title}”` : 'this focus';
        if (!confirm(`Delete ${label}?`)) return;
        try { await deleteFocus(del.dataset.focusDelete); }
        catch (err) { flash(err.message || 'Could not delete focus.'); }
      }
    });

    document.addEventListener('change', e => {
      const form = e.target.closest('#journeyFocusForm');
      if (!form) return;
      if (e.target.name === 'classId') {
        currentAdminClass = e.target.value;
        syncCopyClassOptions();
        loadFocusSchedule(currentAdminClass);
      }
      if (e.target.name === 'target') {
        const custom = e.target.value === '__custom__';
        const customWrap = form.querySelector('.journey-custom-link');
        if (customWrap) customWrap.hidden = !custom;
        const opt = e.target.selectedOptions?.[0];
        if (!custom && field(form,'title') && (!field(form,'itemId').value || !field(form,'title').value.trim())) {
          field(form,'title').value = opt?.dataset.title || '';
        }
      }
    });

    document.addEventListener('submit', async e => {
      const form = e.target.closest('#journeyFocusForm');
      if (!form) return;
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = 'Saving…'; }
      try { await saveFocusFromForm(form); }
      catch (err) {
        flash(err.message || 'Could not save Class Focus.');
        if (btn) btn.textContent = field(form,'itemId').value ? 'Update focus' : 'Set / schedule focus';
      } finally {
        if (btn) btn.disabled = false;
      }
    });
  }

  function enhance() {
    enhanceSidebar();
    rememberCurrentWork();
    enhanceHome();
    enhanceClasses();
    enhanceOrientation();
    enhanceReturnToWork();
    enhanceGuidedPathFlow();
    bindSearchGrouping();
    groupSearchResults();
  }

  function queueEnhance() {
    if (enhanceQueued) return;
    enhanceQueued = true;
    requestAnimationFrame(() => {
      enhanceQueued = false;
      enhance();
    });
  }

  function boot() {
    enhanceSidebar();
    bindGlobalEvents();
    queueEnhance();

    const app = $('#app');
    if (app) {
      const observer = new MutationObserver(queueEnhance);
      observer.observe(app,{childList:true,subtree:true});
    }

    window.addEventListener('hashchange',()=>{
      ensureActiveNavVisible();
      setTimeout(queueEnhance,0);
    });

    const b = BACKEND();
    if (b?.onChange) {
      b.onChange(()=>{
        focusCache = null;
        focusCacheAt = 0;
        setTimeout(queueEnhance,0);
      });
    }

    console.info(`[v${VERSION}] Learning Flow / Class Focus layer loaded.`);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',boot,{once:true});
  else boot();
})();
