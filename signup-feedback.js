/* UE5 Learning Hub v3.56.0 — LOCAL ONLY / PRIVACY LOCKDOWN
   This replaces the old signup helper while keeping the existing script path.
   It removes account/cloud UI and converts account-backed areas to local/static equivalents.
*/
(() => {
  'use strict';

  const VERSION = '3.56.0';
  const BLOCKED_PREFIXES = ['#/classes', '#/teacher', '#/requests', '#/projects'];

  const style = document.createElement('style');
  style.id = 'localOnlyPrivacyCss';
  style.textContent = `
    #accountButton,#notificationButton,#authModal,#classesNav,#teacherNav,
    .leaderboard-nav,[data-route="leaderboard"],[data-route="requests"]{display:none!important}
    [data-action="open-auth"],[data-action="news-save"],[data-action="news-vote"],[data-action="news-discuss"],
    [data-news-filter="saved"]{display:none!important}
    .local-only-notice{border:1px solid var(--line,#263746);padding:10px 12px;margin:12px 0;background:rgba(255,255,255,.025);font-size:13px}
    .local-only-notice b{display:block;margin-bottom:3px}
    .local-only-critique-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
    .local-only-critique-grid article{border:1px solid var(--line,#263746);padding:14px;background:rgba(255,255,255,.02)}
    .local-only-critique-grid h3{margin-top:0}
    @media(max-width:760px){.local-only-critique-grid{grid-template-columns:1fr}}
  `;
  document.head.appendChild(style);

  function clearOldAccountCache() {
    const exact = [
      'ue5hub:v3:pending-class-code',
      'ue5hub:v3:pending-teacher-code',
      'ue5hub:v3:pending-teacher-invite'
    ];
    exact.forEach(k => { try { localStorage.removeItem(k); } catch (_) {} });
    try {
      for (let i = localStorage.length - 1; i >= 0; i--) {
        const key = localStorage.key(i) || '';
        if (key.startsWith('sb-') || key.startsWith('ue5hub:v3:migrated-progress:')) {
          localStorage.removeItem(key);
        }
      }
    } catch (_) {}
  }

  function blockedHash(hash = location.hash || '#/') {
    return BLOCKED_PREFIXES.some(prefix => hash === prefix || hash.startsWith(prefix + '/'));
  }

  function guardRoute() {
    const hash = location.hash || '#/';
    if (hash === '#/leaderboard' || hash.startsWith('#/leaderboard/')) {
      location.replace('#/progress');
      return true;
    }
    if (blockedHash(hash)) {
      location.replace('#/');
      return true;
    }
    return false;
  }

  function staticCritiquePage() {
    if ((location.hash || '#/') !== '#/critique') return;
    const app = document.querySelector('#app');
    if (!app || app.dataset.localOnlyCritique === '1') return;
    app.dataset.localOnlyCritique = '1';
    app.innerHTML = `
      <div class="page-head">
        <div class="breadcrumb"><a href="#/">Home</a> / Critique Guide</div>
        <span class="eyebrow">PEER REVIEW • NO UPLOADS • NO ACCOUNTS</span>
        <h1>Critique Guide</h1>
        <p class="muted">Use these prompts while looking at a classmate's work in person or through the college-approved place your teacher gives you. Nothing is posted or stored in the Hub.</p>
      </div>
      <section class="section local-only-critique-grid">
        <article><h3>1 • What is working?</h3><p>Name one specific thing that communicates clearly, feels good to use, or supports the intended experience.</p></article>
        <article><h3>2 • What is unclear?</h3><p>Point to one place where you hesitated, misunderstood the intention, or could not tell what to do next.</p></article>
        <article><h3>3 • What would you change?</h3><p>Suggest one realistic improvement. Explain why it would improve the player's experience rather than just saying you prefer it.</p></article>
        <article><h3>4 • What should be tested?</h3><p>Choose one thing the creator should test next and say what evidence would show that the change worked.</p></article>
      </section>
      <section class="content-card"><h2>Keep feedback where college expects it</h2><p>Give verbal feedback in class or use Microsoft Teams when your teacher asks you to record it. The Learning Hub is now a learning resource only.</p></section>`;
  }

  function scrubChrome() {
    ['accountButton','notificationButton','authModal','classesNav','teacherNav'].forEach(id => {
      const node = document.getElementById(id);
      if (node) { node.hidden = true; node.style.display = 'none'; node.setAttribute('aria-hidden','true'); }
    });

    document.querySelectorAll('[data-route="leaderboard"],[data-route="requests"]').forEach(n => n.remove());

    const critique = document.querySelector('[data-route="critique"]');
    if (critique) {
      const label = critique.querySelector('span');
      const sub = critique.querySelector('small');
      if (label) label.textContent = 'Critique Guide';
      if (sub) sub.textContent = 'Peer review prompts • no uploads';
    }

    document.querySelectorAll('.nav-heading').forEach(h => {
      if (h.textContent.trim() === 'Community & progress') h.textContent = 'Progress & support';
    });

    const mode = document.getElementById('modeBadge');
    if (mode) mode.textContent = '• LOCAL ONLY';
    const badge = document.querySelector('.version-badge b');
    if (badge) badge.textContent = `v${VERSION}`;
  }

  function scrubPage(root = document) {
    root.querySelectorAll?.('[data-action="open-auth"],[data-action="news-save"],[data-action="news-vote"],[data-action="news-discuss"],[data-news-filter="saved"]')
      .forEach(n => n.remove());

    const comments = root.querySelector?.('#comments');
    if (comments && comments.dataset.localOnly !== '1') {
      comments.dataset.localOnly = '1';
      comments.innerHTML = `<span class="eyebrow">ASK / REFLECT</span><h2>Questions & teacher feedback</h2><div class="local-only-notice"><b>Nothing is sent from this page.</b>Ask in class or use Microsoft Teams when your teacher asks you to record a question or reflection.</div>`;
    }

    const focus = root.querySelector?.('.journey-start-card.class-focus');
    if (focus && /sign in for your class|loading class focus|class focus unavailable/i.test(focus.textContent || '')) {
      focus.classList.add('quiet');
      focus.innerHTML = `<span class="journey-card-kicker">📌 TODAY'S CLASS TASK</span><h2>Follow the task from your teacher</h2><p>Class accounts and server-based Class Focus have been removed. Use the task shown in class or Microsoft Teams, then use the Hub for the skills you need.</p>`;
    }

    const hero = root.querySelector?.('.portal-hero.portal-hero-clean p');
    if (hero && /class focus/i.test(hero.textContent || '')) {
      hero.textContent = 'Follow today’s class task, continue your own work, or explore. The Hub helps after you choose a direction.';
    }

    const sourceNote = root.querySelector?.('.news-source-note p');
    if (sourceNote) sourceNote.textContent = 'The live feed links to external publishers. Saving, voting and Hub discussion have been removed; no student interaction data is stored by the Hub.';

    root.querySelectorAll?.('.sync-chip').forEach(chip => {
      if (/account|cloud/i.test(chip.textContent || '')) {
        chip.classList.remove('cloud');
        chip.textContent = '● Saved on this browser';
      }
    });

    root.querySelectorAll?.('.project-login-gate,.news-comment-signin').forEach(node => {
      if (/sign in|account/i.test(node.textContent || '')) node.remove();
    });
  }

  function footerNotice() {
    const footer = document.querySelector('footer');
    if (!footer || footer.querySelector('.local-only-footer')) return;
    const note = document.createElement('small');
    note.className = 'epic-disclaimer local-only-footer';
    note.textContent = 'Privacy: no Learning Hub accounts. Progress and preferences stay on this browser only. Formal work and feedback stay in Microsoft Teams.';
    footer.appendChild(note);
  }

  function enforce() {
    if (guardRoute()) return;
    scrubChrome();
    staticCritiquePage();
    scrubPage(document);
    footerNotice();
  }

  document.addEventListener('click', event => {
    const auth = event.target.closest?.('[data-action="open-auth"]');
    if (auth) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }
    const link = event.target.closest?.('a[href^="#/"]');
    const href = link?.getAttribute('href') || '';
    if (href === '#/leaderboard' || href.startsWith('#/leaderboard/')) {
      event.preventDefault();
      location.hash = '#/progress';
    } else if (blockedHash(href)) {
      event.preventDefault();
      location.hash = '#/';
    }
  }, true);

  window.addEventListener('hashchange', () => setTimeout(enforce, 0));

  const observer = new MutationObserver(() => {
    clearTimeout(observer.timer);
    observer.timer = setTimeout(enforce, 0);
  });
  observer.observe(document.documentElement, {subtree:true, childList:true});

  clearOldAccountCache();
  enforce();
  console.info('[UE5 Hub] v3.56.0 privacy lockdown active — local-only learning resource');
})();
