/* UE5 Learning Hub v3.48.3 — consistent shell for standalone reference pages */
(() => {
  'use strict';

  const path = location.pathname.toLowerCase();
  const page = path.endsWith('blueprint-checks.html') ? 'checks' : 'cheat';
  const pageTitle = page === 'checks' ? 'Blueprint Checks' : 'UE5 Cheat Sheet';
  const pageGroup = page === 'checks' ? 'Study tools' : 'Reference';

  const groups = [
    ['Main areas', [
      ['HOME','Home','index.html#/'],
      ['CLASS','Classes','index.html#/classes'],
      ['PATH','Guided Paths','index.html#/pathways'],
      ['UE5','Unreal Learning','index.html#/programming'],
      ['GD','Game Design Theory','index.html#/theory'],
      ['WORLD','Designer Studio','index.html#/design'],
      ['CRIT','Critique Board','index.html#/critique'],
      ['3D','3D Modelling Studio','index.html#/modeling'],
      ['NEWS','News & Industry','index.html#/news']
    ]],
    ['Unreal learning', [
      ['TERM','Building Blocks','index.html#/blocks'],
      ['MAKE','Quick Tutorials','index.html#/tutorials']
    ]],
    ['Study tools', [
      ['TASK','Challenge Board','index.html#/challenges'],
      ['HW','Homework','index.html#/homework'],
      ['TEST','Revision Quizzes','index.html#/revision'],
      ['CHECK','Blueprint Checks','blueprint-checks.html']
    ]],
    ['Reference', [
      ['KEYS','UE5 Cheat Sheet','cheatsheet.html'],
      ['REF','Resource Library','index.html#/resources'],
      ['BP','Epic Paste Assists','index.html#/snippets'],
      ['A-Z','Glossary','index.html#/glossary']
    ]],
    ['Community & progress', [
      ['XP','Leaderboard','index.html#/leaderboard'],
      ['ME','My Progress','index.html#/progress'],
      ['IDEA','Feature Requests','index.html#/requests']
    ]]
  ];

  const activeHref = page === 'checks' ? 'blueprint-checks.html' : 'cheatsheet.html';

  const navHtml = groups.map(([heading, links]) => `
    <div class="standalone-nav-heading">${heading}</div>
    ${links.map(([code,label,href]) =>
      `<a class="${href===activeHref?'active':''}" href="${href}">
        <span class="standalone-nav-code">${code}</span>
        <span>${label}</span>
      </a>`
    ).join('')}
  `).join('');

  const aside = document.createElement('aside');
  aside.className = 'standalone-sidebar';
  aside.id = 'standaloneSidebar';
  aside.innerHTML = `
    <a class="standalone-brand" href="index.html#/">
      <span class="standalone-brand-mark">U</span>
      <span><b>UE5</b><small>Games Development</small></span>
    </a>
    <nav class="standalone-nav">${navHtml}</nav>
    <div class="standalone-side-note">COURSE HUB<br><span>Learn • make • check • reference</span></div>
  `;

  const contextual = page === 'checks'
    ? `<a href="index.html#/pathways/blueprint-foundations-lab">Blueprint Foundations</a><a href="cheatsheet.html">Cheat Sheet</a>`
    : `<a href="blueprint-checks.html">Blueprint Checks</a><a href="index.html#/tutorials">Quick Tutorials</a>`;

  const bar = document.createElement('header');
  bar.className = 'hub-shell-bar';
  bar.innerHTML = `
    <button class="standalone-menu" type="button" aria-label="Open navigation">☰</button>
    <div class="hub-shell-crumb">
      <span>${pageGroup}</span>
      <strong>${pageTitle}</strong>
    </div>
    <nav class="hub-shell-actions">${contextual}<a class="hub-return" href="index.html#/">Hub home</a></nav>
  `;

  document.body.prepend(bar);
  document.body.prepend(aside);
  document.body.classList.add('standalone-shell-ready', `standalone-${page}`);

  const menu = bar.querySelector('.standalone-menu');
  menu?.addEventListener('click', () => aside.classList.toggle('open'));

  aside.addEventListener('click', event => {
    if (event.target.closest('a') && matchMedia('(max-width: 820px)').matches) {
      aside.classList.remove('open');
    }
  });

  document.addEventListener('click', event => {
    if (!matchMedia('(max-width: 820px)').matches || !aside.classList.contains('open')) return;
    if (event.target.closest('.standalone-sidebar') || event.target.closest('.standalone-menu')) return;
    aside.classList.remove('open');
  });

  // The old standalone headers duplicate only a few links. The shared shell
  // now supplies full Hub navigation, so keep one interface rather than two.
  document.querySelector('body > .cheat-topbar')?.setAttribute('hidden','');
  document.querySelector('body > header.topbar:not(.hub-shell-bar)')?.setAttribute('hidden','');

  console.info('[standalone-shell] v3.48.3 active');
})();
