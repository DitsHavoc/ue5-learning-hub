/* UE5 Learning Hub v3.56.1 — LOCAL ONLY / CLEANUP
   Removes account-backed leftovers that no longer make sense in the local-only Hub.
   Local completion/XP still works internally; the dedicated Progress page is simply no longer exposed.
*/
(() => {
  'use strict';

  const VERSION = '3.56.1';
  const BLOCKED_PREFIXES = [
    '#/classes', '#/teacher', '#/requests', '#/projects',
    '#/leaderboard', '#/progress', '#/critique'
  ];

  const style = document.createElement('style');
  style.id = 'localOnlyPrivacyCss';
  style.textContent = `
    #accountButton,#notificationButton,#authModal,#classesNav,#teacherNav,
    .leaderboard-nav,[data-route="leaderboard"],[data-route="requests"],
    [data-route="progress"],[data-route="critique"]{display:none!important}
    [data-action="open-auth"],[data-action="news-save"],[data-action="news-vote"],[data-action="news-discuss"],
    [data-news-filter="saved"],a[href="#/progress"],a[href="#/critique"]{display:none!important}
    .journey-start-card.class-focus{display:none!important}
    #journeyStartGrid{grid-template-columns:repeat(2,minmax(0,1fr))!important}
    .local-only-notice{border:1px solid var(--line,#263746);padding:10px 12px;margin:12px 0;background:rgba(255,255,255,.025);font-size:13px}
    .local-only-notice b{display:block;margin-bottom:3px}
    @media(max-width:760px){#journeyStartGrid{grid-template-columns:1fr!important}}
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
    if (blockedHash(hash)) {
      location.replace('#/');
      return true;
    }
    return false;
  }

  function cleanHome() {
    if ((location.hash || '#/') !== '#/' && (location.hash || '#/') !== '#') return;

    document.querySelectorAll('.journey-start-card.class-focus').forEach(n => n.remove());

    const personal = document.querySelector('.journey-start-card.personal .journey-card-kicker');
    const explore = document.querySelector('.journey-start-card.explore .journey-card-kicker');
    if (personal) personal.textContent = '01 / CONTINUE';
    if (explore) explore.textContent = '02 / FIND';

    const hero = document.querySelector('.portal-hero.portal-hero-clean p');
    if (hero) {
      hero.textContent = 'Continue your work or find what you need. The Hub helps you get back into making quickly.';
    }
  }

  function scrubChrome() {
    ['accountButton','notificationButton','authModal','classesNav','teacherNav'].forEach(id => {
      const node = document.getElementById(id);
      if (node) {
        node.hidden = true;
        node.style.display = 'none';
        node.setAttribute('aria-hidden','true');
      }
    });

    document.querySelectorAll(
      '[data-route="leaderboard"],[data-route="requests"],[data-route="progress"],[data-route="critique"]'
    ).forEach(n => n.remove());

    document.querySelectorAll('.nav-heading').forEach(h => {
      const t = h.textContent.trim().toLowerCase();
      if (t === 'community & progress' || t === 'progress & support') h.remove();
    });

    const mode = document.getElementById('modeBadge');
    if (mode) mode.textContent = '• LOCAL ONLY';
    const badge = document.querySelector('.version-badge b');
    if (badge) badge.textContent = `v${VERSION}`;
  }

  function scrubPage(root = document) {
    root.querySelectorAll?.(
      '[data-action="open-auth"],[data-action="news-save"],[data-action="news-vote"],[data-action="news-discuss"],' +
      '[data-news-filter="saved"],a[href="#/progress"],a[href="#/critique"]'
    ).forEach(n => n.remove());

    const comments = root.querySelector?.('#comments');
    if (comments && comments.dataset.localOnly !== '1') {
      comments.dataset.localOnly = '1';
      comments.innerHTML = `<span class="eyebrow">ASK / REFLECT</span><h2>Questions & teacher feedback</h2><div class="local-only-notice"><b>Nothing is sent from this page.</b>Ask in class or use Microsoft Teams when your teacher asks you to record a question or reflection.</div>`;
    }

    const sourceNote = root.querySelector?.('.news-source-note p');
    if (sourceNote) {
      sourceNote.textContent = 'The live feed links to external publishers. Saving, voting and Hub discussion have been removed; no student interaction data is stored by the Hub.';
    }

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
    note.textContent = 'Privacy: no Learning Hub accounts. Any completion state used by the Hub stays on this browser only. Formal work and feedback stay in Microsoft Teams.';
    footer.appendChild(note);
  }

  function enforce() {
    if (guardRoute()) return;
    scrubChrome();
    cleanHome();
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
    if (blockedHash(href)) {
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
  console.info('[UE5 Hub] v3.56.1 local-only cleanup active');
})();
