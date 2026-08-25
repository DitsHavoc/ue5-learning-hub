(() => {
  const DATA = window.UE5_DATA;
  const STORAGE_KEY = "ue5LearningHubProgressV1";

  const state = loadState();

  function loadState() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return parsed && typeof parsed === "object"
        ? { completed: parsed.completed || [], quiz: parsed.quiz || {}, lastLesson: parsed.lastLesson || null }
        : { completed: [], quiz: {}, lastLesson: null };
    } catch {
      return { completed: [], quiz: {}, lastLesson: null };
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    updateChrome();
  }

  function completedLessons() {
    return DATA.lessons.filter(l => state.completed.includes(l.id));
  }

  function xp() {
    return completedLessons().reduce((sum, l) => sum + l.xp, 0);
  }

  function levelInfo() {
    const currentXp = xp();
    const level = Math.floor(currentXp / 500) + 1;
    const into = currentXp % 500;
    return { level, currentXp, into, remaining: 500 - into, percent: (into / 500) * 100 };
  }

  function updateChrome() {
    const info = levelInfo();
    document.querySelector("#sidebarLevel").textContent = `LEVEL ${info.level}`;
    document.querySelector("#sidebarXp").textContent = `${info.currentXp} XP`;
    document.querySelector("#sidebarProgress").style.width = `${info.percent}%`;
    document.querySelector("#sidebarNextLevel").textContent = `${info.remaining} XP to Level ${info.level + 1}`;
    document.querySelector("#topXp").textContent = info.currentXp;
    document.querySelector("#topCompleted").textContent = state.completed.length;
  }

  function pathProgress(pathId) {
    const lessons = DATA.lessons.filter(l => l.path === pathId);
    const done = lessons.filter(l => state.completed.includes(l.id)).length;
    return { done, total: lessons.length, percent: lessons.length ? Math.round(done / lessons.length * 100) : 0 };
  }

  function lessonById(id) {
    return DATA.lessons.find(l => l.id === id);
  }

  function pathById(id) {
    return DATA.paths.find(p => p.id === id);
  }

  function nextLesson() {
    if (state.lastLesson) {
      const last = lessonById(state.lastLesson);
      if (last && !state.completed.includes(last.id)) return last;
    }
    return DATA.lessons.find(l => !state.completed.includes(l.id)) || DATA.lessons[0];
  }

  function esc(s="") {
    return String(s).replace(/[&<>"']/g, m => ({
      "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
    }[m]));
  }

  function youtubeSearchUrl(query) {
    return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
  }

  function tagClass(difficulty) {
    return difficulty.toLowerCase().includes("inter") ? "intermediate" : "beginner";
  }

  function lessonRow(lesson, index) {
    const complete = state.completed.includes(lesson.id);
    return `
      <a class="lesson-row ${complete ? "complete" : ""}" href="#/lesson/${lesson.id}">
        <span class="lesson-number">${complete ? "✓" : String(index + 1).padStart(2,"0")}</span>
        <span>
          <strong>${esc(lesson.title)}</strong>
          <p>${esc(lesson.short)}</p>
          <span class="lesson-tags">
            <span class="tag ${tagClass(lesson.difficulty)}">${esc(lesson.difficulty)}</span>
            <span class="tag">${esc(lesson.duration)}</span>
            ${lesson.challenge ? '<span class="tag challenge">Challenge</span>' : ''}
          </span>
        </span>
        <span class="row-xp">+${lesson.xp} XP</span>
      </a>`;
  }

  function dashboard() {
    const info = levelInfo();
    const next = nextLesson();
    const p = pathProgress(next.path);
    return `
      <section class="hero">
        <div class="hero-content">
          <span class="eyebrow">Learn • Build • Break • Fix</span>
          <h1>Learn Unreal by<br>actually making things.</h1>
          <p>Short lessons, guided builds, proper stretch work, independent challenges and game-analysis homework. Learn the idea, then prove you can use it.</p>
          <div class="hero-actions">
            <a class="button primary" href="#/lesson/${next.id}">▶ Continue Learning</a>
            <a class="button ghost" href="#/challenges">🔥 Browse Challenges</a>
          </div>
        </div>
        <div class="hero-visual" aria-hidden="true">
          <div class="node">
            <div class="node-head">Event BeginPlay</div>
            <div class="node-body"><div class="fake-pin">then</div><div class="fake-pin">execution</div></div>
          </div>
          <div class="node">
            <div class="node-head">Learning Complete</div>
            <div class="node-body"><div class="fake-pin">Student</div><div class="fake-pin">XP +100</div></div>
          </div>
        </div>
      </section>

      <div class="stat-grid">
        <div class="stat-card"><small>Current Level</small><strong>${info.level}</strong></div>
        <div class="stat-card"><small>Total XP</small><strong>${info.currentXp}</strong></div>
        <div class="stat-card"><small>Lessons Complete</small><strong>${state.completed.length}/${DATA.lessons.length}</strong></div>
        <div class="stat-card"><small>Challenges Available</small><strong>${DATA.lessons.filter(l=>l.challenge).length}</strong></div>
      </div>

      <section class="section">
        <div class="section-heading">
          <div><h2>Continue learning</h2><p>Pick up where you left off.</p></div>
        </div>
        <a class="continue-card" href="#/lesson/${next.id}">
          <div class="continue-icon">${next.icon}</div>
          <div class="continue-main">
            <span class="eyebrow">${esc(pathById(next.path).title)}</span>
            <h3>${esc(next.title)}</h3>
            <p>${esc(next.short)}</p>
            <div class="continue-meta"><span>${next.duration}</span><span>${next.xp} XP</span><span>${p.percent}% path complete</span></div>
            <div class="progress-track"><div class="progress-fill" style="width:${p.percent}%"></div></div>
          </div>
          <span class="button small">Open lesson →</span>
        </a>
      </section>

      <section class="section">
        <div class="section-heading">
          <div><h2>Learning paths</h2><p>Build skills in a sensible order, then combine them.</p></div>
        </div>
        <div class="path-grid">
          ${DATA.paths.map(path => {
            const prog = pathProgress(path.id);
            return `
              <a class="path-card" href="#/path/${path.id}" style="--path-glow:${path.colour}">
                <div class="path-icon">${path.icon}</div>
                <h3>${esc(path.title)}</h3>
                <p>${esc(path.description)}</p>
                <div class="path-meta"><span>${prog.done}/${prog.total} lessons</span><span>${prog.percent}%</span></div>
                <div class="progress-track" style="margin-top:8px"><div class="progress-fill" style="width:${prog.percent}%"></div></div>
              </a>`;
          }).join("")}
        </div>
      </section>

      <section class="section">
        <div class="section-heading">
          <div><h2>Up next</h2><p>The next few skills waiting for you.</p></div>
        </div>
        <div class="lesson-list">
          ${DATA.lessons.filter(l=>!state.completed.includes(l.id)).slice(0,4).map(lessonRow).join("") || '<div class="empty-state">Everything in V1 is complete. You absolute menace.</div>'}
        </div>
      </section>
    `;
  }

  function pathPage(pathId) {
    const path = pathById(pathId);
    if (!path) return notFound();
    const lessons = DATA.lessons.filter(l => l.path === path.id).sort((a,b)=>a.order-b.order);
    const prog = pathProgress(path.id);
    return `
      <div class="page-header">
        <div class="breadcrumb"><a href="#/">Dashboard</a> / Learning Path</div>
        <span class="eyebrow">${prog.done}/${prog.total} COMPLETE • ${prog.percent}%</span>
        <h1>${path.icon} ${esc(path.title)}</h1>
        <p>${esc(path.description)}</p>
        <div class="progress-track"><div class="progress-fill" style="width:${prog.percent}%"></div></div>
      </div>
      <div class="lesson-list">
        ${lessons.map(lessonRow).join("")}
      </div>
    `;
  }

  function conceptCards(lesson) {
    return `
      <div class="learning-goals">
        ${lesson.concepts.map(c => `<div class="goal"><strong>${esc(c.name)}:</strong> ${esc(c.text)}</div>`).join("")}
      </div>`;
  }

  function taskCard(type, label, data, lesson) {
    if (!data) return "";
    const reqs = data.requirements ? `<div class="requirements">${data.requirements.map(r=>`<div class="requirement">${esc(r)}</div>`).join("")}</div>` : "";
    const hints = data.hints?.length ? `
      <div class="hints">
        <button class="button small ghost hint-button" data-lesson="${lesson.id}">💡 Reveal hint</button>
        ${data.hints.map((h,i)=>`<div class="hint" data-hint="${i}">Hint ${i+1}: ${esc(h)}</div>`).join("")}
      </div>` : "";
    return `
      <div class="task-card ${type}">
        <span class="task-label">${label}</span>
        <h3>${esc(data.title)}</h3>
        <p>${esc(data.task)}</p>
        ${reqs}
        ${hints}
      </div>`;
  }

  function quizHtml(lesson) {
    return lesson.quickCheck.map((q, qi) => `
      <div class="quiz-question" data-q="${qi}">
        <strong>${qi+1}. ${esc(q.q)}</strong>
        <div class="quiz-options">
          ${q.options.map((opt, oi) => `<button class="quiz-option" data-lesson="${lesson.id}" data-q="${qi}" data-option="${oi}">${esc(opt)}</button>`).join("")}
        </div>
        <div class="quiz-feedback">${esc(q.feedback)}</div>
      </div>`).join("");
  }

  function lessonPage(id) {
    const lesson = lessonById(id);
    if (!lesson) return notFound();
    state.lastLesson = lesson.id;
    saveState();

    const path = pathById(lesson.path);
    const completed = state.completed.includes(lesson.id);

    return `
      <div class="breadcrumb"><a href="#/">Dashboard</a> / <a href="#/path/${path.id}">${esc(path.title)}</a> / ${esc(lesson.title)}</div>
      <section class="lesson-hero">
        <div>
          <span class="eyebrow">${esc(path.title)} • Lesson ${lesson.order}</span>
          <h1>${esc(lesson.title)}</h1>
          <p class="lead">${esc(lesson.intro)}</p>
          <div class="lesson-tags">
            <span class="tag ${tagClass(lesson.difficulty)}">${lesson.difficulty}</span>
            <span class="tag">${lesson.duration}</span>
            <span class="tag">+${lesson.xp} XP</span>
            ${completed ? '<span class="tag beginner">Completed ✓</span>' : ''}
          </div>
        </div>
        <div class="lesson-side-info">
          <div class="info-line"><small>Learning Aim</small><strong>${esc(lesson.aim)}</strong></div>
          <div class="info-line"><small>Mode</small><strong>Learn → Build → Apply</strong></div>
          <div class="info-line"><small>Independent Work</small><strong>Stretch + Challenge + Homework</strong></div>
        </div>
      </section>

      <div class="lesson-layout">
        <article class="lesson-content">
          <section class="content-card" id="aims">
            <span class="eyebrow">01 • Know the goal</span>
            <h2>What you should be able to do</h2>
            <div class="learning-goals">${lesson.goals.map(g=>`<div class="goal">${esc(g)}</div>`).join("")}</div>
          </section>

          <section class="content-card" id="learn">
            <span class="eyebrow">02 • Learn</span>
            <h2>Core ideas</h2>
            <p>Get the idea first. The node names matter less than understanding what problem each tool solves.</p>
            ${conceptCards(lesson)}
            <div class="media-placeholder">
              <div><strong>📷 Lesson media slot</strong><small>Drop a screenshot, GIF or short teacher video here later. V1 deliberately keeps media separate from lesson logic so we can replace it without rebuilding the site.</small></div>
            </div>
          </section>

          <section class="content-card" id="guided">
            <span class="eyebrow">03 • Guided Build</span>
            <h2>Follow me</h2>
            <p>Work through this once with the idea visible. Do not race the steps—predict what should happen before pressing Play.</p>
            <ol class="steps">${lesson.guided.map(s=>`<li>${esc(s)}</li>`).join("")}</ol>
          </section>

          <section class="content-card" id="check">
            <span class="eyebrow">04 • Quick Check</span>
            <h2>Check your understanding</h2>
            <p>These are about the idea, not whether you can remember where a button lives.</p>
            ${quizHtml(lesson)}
          </section>

          <section class="content-card" id="stretch">
            <span class="eyebrow">05 • Apply</span>
            <h2>Stretch & Challenge</h2>
            ${taskCard("stretch","★ Stretch",lesson.stretch,lesson)}
            ${taskCard("challenge","🔥 Challenge",lesson.challenge,lesson)}
          </section>

          <section class="content-card" id="experience">
            <span class="eyebrow">06 • Experience it in Games</span>
            <h2>Play it or watch it</h2>
            <div class="task-card experience">
              <span class="task-label">🎮 Game analysis • ${esc(lesson.experience.focus)}</span>
              <h3>${esc(lesson.experience.game)}</h3>
              <div class="analysis-grid">
                <div class="analysis-option"><small>Play it</small><strong>Use the real game</strong><p>${esc(lesson.experience.play)}</p></div>
                <div class="analysis-option"><small>Watch it</small><strong>No game? No problem.</strong><p>${esc(lesson.experience.watch)}</p></div>
              </div>
              <h3>What to look for</h3>
              <div class="requirements">${lesson.experience.observe.map(x=>`<div class="requirement">${esc(x)}</div>`).join("")}</div>
              <a class="button small ghost" target="_blank" rel="noopener" href="${youtubeSearchUrl(lesson.experience.search)}">▶ Find gameplay on YouTube</a>
            </div>
          </section>

          <section class="content-card" id="homework">
            <span class="eyebrow">07 • Homework</span>
            <h2>Take it outside the lesson</h2>
            <div class="task-card homework">
              <span class="task-label">⌂ Homework</span>
              <h3>${esc(lesson.homework.title)}</h3>
              <p>${esc(lesson.homework.task)}</p>
              <div class="callout"><strong>Evidence:</strong> ${esc(lesson.homework.evidence)}</div>
              <div class="callout good"><strong>Stretch:</strong> ${esc(lesson.homework.stretch)}</div>
              <button class="button small copy-homework" data-lesson="${lesson.id}">Copy homework for Teams</button>
            </div>
          </section>

          <section class="content-card" id="help">
            <span class="eyebrow">08 • Debug & Improve</span>
            <h2>Common problems</h2>
            <ul>${lesson.common.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
            <div class="callout good"><strong>Good practice:</strong> ${esc(lesson.goodPractice)}</div>
          </section>
        </article>

        <aside class="lesson-nav">
          <a href="#aims">01 Learning aims</a>
          <a href="#learn">02 Learn</a>
          <a href="#guided">03 Guided build</a>
          <a href="#check">04 Quick check</a>
          <a href="#stretch">05 Stretch & challenge</a>
          <a href="#experience">06 Play / watch</a>
          <a href="#homework">07 Homework</a>
          <a href="#help">08 Debug & improve</a>
          <hr>
          <button class="button ${completed ? "success" : "primary"} full complete-button" data-complete="${lesson.id}">
            ${completed ? "✓ Completed" : `Mark complete • +${lesson.xp} XP`}
          </button>
        </aside>
      </div>
    `;
  }

  function challengesPage() {
    const lessons = DATA.lessons.filter(l=>l.challenge);
    return `
      <div class="page-header">
        <div class="breadcrumb"><a href="#/">Dashboard</a> / Challenges</div>
        <span class="eyebrow">Independent practice</span>
        <h1>🔥 Challenge Board</h1>
        <p>No full walkthroughs. Use what you know, return to lessons as reference, and prove you can transfer the skill to a new problem.</p>
      </div>
      <div class="challenge-grid">
        ${lessons.map(l=>`
          <div class="challenge-card">
            <div class="challenge-icon">🔥</div>
            <span class="eyebrow">${esc(pathById(l.path).title)}</span>
            <h3>${esc(l.challenge.title)}</h3>
            <p>${esc(l.challenge.task)}</p>
            <div class="challenge-meta">
              <span class="tag ${tagClass(l.difficulty)}">${l.difficulty}</span>
              <span class="tag">Lesson ${l.order}</span>
              <span class="tag">${l.xp} XP lesson</span>
            </div>
            <a class="button small" href="#/lesson/${l.id}">Open challenge →</a>
          </div>`).join("")}
      </div>
    `;
  }

  function homeworkPage() {
    return `
      <div class="page-header">
        <div class="breadcrumb"><a href="#/">Dashboard</a> / Homework</div>
        <span class="eyebrow">Play • Watch • Analyse • Apply</span>
        <h1>⌂ Homework Board</h1>
        <p>Homework is not just “do more Unreal”. These tasks ask students to analyse games, design systems, explain choices and bring the thinking back into Unreal.</p>
      </div>
      <div class="homework-grid">
        ${DATA.lessons.map(l=>`
          <div class="homework-card">
            <span class="eyebrow">${esc(l.title)}</span>
            <h3>${esc(l.homework.title)}</h3>
            <p>${esc(l.homework.task)}</p>
            <div class="homework-actions">
              <button class="button small copy-homework" data-lesson="${l.id}">Copy for Teams</button>
              <a class="button small ghost" href="#/lesson/${l.id}">View lesson</a>
            </div>
          </div>`).join("")}
      </div>
    `;
  }

  function glossaryPage() {
    return `
      <div class="page-header">
        <div class="breadcrumb"><a href="#/">Dashboard</a> / Glossary</div>
        <span class="eyebrow">${DATA.glossary.length} starter terms</span>
        <h1>? UE5 Glossary</h1>
        <p>Short definitions students can actually use while working. We can expand this continuously as new lessons are added.</p>
      </div>
      <div class="filter-row">
        <input id="glossarySearch" type="search" placeholder="Filter glossary..." style="min-width:260px;background:#0e131b;color:white;border:1px solid var(--line);border-radius:9px;padding:9px 11px;outline:none">
      </div>
      <div class="glossary-grid" id="glossaryGrid">
        ${DATA.glossary.map(([term,def])=>`<div class="glossary-item" data-term="${esc(term.toLowerCase())} ${esc(def.toLowerCase())}"><strong>${esc(term)}</strong><p>${esc(def)}</p></div>`).join("")}
      </div>
    `;
  }

  function notFound() {
    return `<div class="empty-state"><h2>That page escaped the level.</h2><p>Head back to the dashboard.</p><a class="button" href="#/">Dashboard</a></div>`;
  }

  function route() {
    const app = document.querySelector("#app");
    const hash = location.hash || "#/";
    const parts = hash.replace(/^#\//,"").split("/").filter(Boolean);

    document.querySelectorAll(".main-nav a").forEach(a=>a.classList.remove("active"));

    if (!parts.length) {
      app.innerHTML = dashboard();
      activateNav("home");
    } else if (parts[0] === "path") {
      app.innerHTML = pathPage(parts[1]);
      activateNav(parts[1]);
    } else if (parts[0] === "lesson") {
      app.innerHTML = lessonPage(parts[1]);
      const l = lessonById(parts[1]);
      if (l) activateNav(l.path);
    } else if (parts[0] === "challenges") {
      app.innerHTML = challengesPage();
      activateNav("challenges");
    } else if (parts[0] === "homework") {
      app.innerHTML = homeworkPage();
      activateNav("homework");
    } else if (parts[0] === "glossary") {
      app.innerHTML = glossaryPage();
      activateNav("glossary");
    } else {
      app.innerHTML = notFound();
    }

    bindDynamic();
    updateChrome();
    window.scrollTo(0,0);
    document.querySelector("#app").focus({preventScroll:true});
    document.querySelector("#sidebar").classList.remove("open");
  }

  function activateNav(key) {
    const el = document.querySelector(`[data-nav="${key}"]`);
    if (el) el.classList.add("active");
  }

  function bindDynamic() {
    document.querySelectorAll("[data-complete]").forEach(btn=>{
      btn.addEventListener("click", () => {
        const id = btn.dataset.complete;
        const lesson = lessonById(id);
        if (!state.completed.includes(id)) {
          state.completed.push(id);
          saveState();
          showToast(`Lesson complete! +${lesson.xp} XP`);
        } else {
          state.completed = state.completed.filter(x=>x!==id);
          saveState();
          showToast("Lesson marked incomplete.");
        }
        route();
      });
    });

    document.querySelectorAll(".quiz-option").forEach(btn=>{
      btn.addEventListener("click", () => {
        const lesson = lessonById(btn.dataset.lesson);
        const qi = Number(btn.dataset.q);
        const oi = Number(btn.dataset.option);
        const qWrap = btn.closest(".quiz-question");
        qWrap.querySelectorAll(".quiz-option").forEach(b=>b.disabled=true);
        const correct = lesson.quickCheck[qi].answer;
        qWrap.querySelectorAll(".quiz-option").forEach((b,i)=>{
          if(i===correct) b.classList.add("correct");
          else if(i===oi && oi!==correct) b.classList.add("wrong");
        });
        qWrap.querySelector(".quiz-feedback").classList.add("visible");
        state.quiz[`${lesson.id}:${qi}`] = oi === correct;
        saveState();
      });
    });

    document.querySelectorAll(".hint-button").forEach(btn=>{
      btn.addEventListener("click", () => {
        const wrap = btn.closest(".hints");
        const next = [...wrap.querySelectorAll(".hint")].find(h=>!h.classList.contains("visible"));
        if (next) next.classList.add("visible");
        if (![...wrap.querySelectorAll(".hint")].some(h=>!h.classList.contains("visible"))) btn.textContent = "All hints revealed";
      });
    });

    document.querySelectorAll(".copy-homework").forEach(btn=>{
      btn.addEventListener("click", async () => {
        const l = lessonById(btn.dataset.lesson);
        const text = `${l.homework.title}

Task:
${l.homework.task}

Evidence:
${l.homework.evidence}

Stretch:
${l.homework.stretch}

Related UE5 lesson: ${l.title}`;
        try {
          await navigator.clipboard.writeText(text);
          showToast("Homework copied — ready for Teams.");
        } catch {
          showToast("Clipboard blocked by browser.");
        }
      });
    });

    const gs = document.querySelector("#glossarySearch");
    if (gs) {
      gs.addEventListener("input", () => {
        const q = gs.value.trim().toLowerCase();
        document.querySelectorAll(".glossary-item").forEach(item=>{
          item.style.display = item.dataset.term.includes(q) ? "" : "none";
        });
      });
    }
  }

  function showToast(message) {
    const t = document.querySelector("#toast");
    t.textContent = message;
    t.classList.add("show");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(()=>t.classList.remove("show"), 2200);
  }

  function setupSearch() {
    const input = document.querySelector("#globalSearch");
    const box = document.querySelector("#searchResults");

    input.addEventListener("input", () => {
      const q = input.value.trim().toLowerCase();
      if (!q) { box.hidden = true; box.innerHTML = ""; return; }

      const lessonResults = DATA.lessons.filter(l =>
        [l.title,l.short,l.aim,...l.goals,...l.concepts.flatMap(c=>[c.name,c.text])].join(" ").toLowerCase().includes(q)
      ).slice(0,6);

      const glossaryResults = DATA.glossary.filter(([t,d])=>`${t} ${d}`.toLowerCase().includes(q)).slice(0,4);

      const html = [
        ...lessonResults.map(l=>`<a class="search-result" href="#/lesson/${l.id}"><strong>${esc(l.title)}</strong><small>Lesson • ${esc(pathById(l.path).title)}</small></a>`),
        ...glossaryResults.map(([t,d])=>`<a class="search-result" href="#/glossary"><strong>${esc(t)}</strong><small>${esc(d)}</small></a>`)
      ].join("");

      box.innerHTML = html || `<div class="search-result"><strong>No results</strong><small>Try a broader UE5 term.</small></div>`;
      box.hidden = false;
    });

    document.addEventListener("click", e => {
      if (!e.target.closest(".search-wrap")) box.hidden = true;
    });

    document.addEventListener("keydown", e => {
      if (e.key === "/" && document.activeElement !== input) {
        e.preventDefault();
        input.focus();
      }
      if (e.key === "Escape") {
        input.blur();
        box.hidden = true;
      }
    });
  }

  document.querySelector("#menuButton").addEventListener("click",()=>document.querySelector("#sidebar").classList.add("open"));
  document.querySelector("#sidebarClose").addEventListener("click",()=>document.querySelector("#sidebar").classList.remove("open"));

  document.querySelector("#resetProgress").addEventListener("click",()=>{
    if (confirm("Reset all locally saved lesson progress and XP on this browser?")) {
      state.completed = [];
      state.quiz = {};
      state.lastLesson = null;
      saveState();
      route();
      showToast("Local progress reset.");
    }
  });

  window.addEventListener("hashchange", route);
  setupSearch();
  route();
})();