(() => {
'use strict';

const BACKEND = window.UE5_BACKEND;
if (!BACKEND) return;

const STYLE_ID = 'ue5-roster-controls-style';
let renderSeq = 0;
let timer = null;

function esc(value){
  return String(value ?? '').replace(/[&<>"']/g, ch => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'
  }[ch]));
}

function isTeacher(){
  return BACKEND.profile?.role === 'teacher';
}

function currentClassId(){
  const match = String(location.hash || '').match(/^#\/teacher\/class\/([^/?#]+)/);
  if (!match) return '';
  try { return decodeURIComponent(match[1]); } catch (e) { return match[1]; }
}

function injectStyles(){
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    .roster-tools-panel{margin:0 0 22px;padding:20px;border:1px solid rgba(112,235,255,.22);border-radius:18px;background:linear-gradient(145deg,rgba(10,24,36,.96),rgba(8,17,28,.96));box-shadow:0 18px 45px rgba(0,0,0,.2)}
    .roster-tools-head{display:flex;align-items:flex-start;justify-content:space-between;gap:18px;margin-bottom:16px}
    .roster-tools-head h2{margin:3px 0 6px}.roster-tools-head p{margin:0;max-width:760px;color:var(--muted,#9cb0c2)}
    .roster-tools-badge{white-space:nowrap;border:1px solid rgba(112,235,255,.22);border-radius:999px;padding:7px 10px;color:#a9f5ff;background:rgba(45,188,214,.08);font-size:.78rem;font-weight:800}
    .roster-tools-list{display:grid;gap:10px}
    .roster-tools-row{display:grid;grid-template-columns:minmax(150px,1fr) minmax(190px,1.15fr) auto auto;align-items:center;gap:9px;padding:11px 12px;border:1px solid rgba(255,255,255,.08);border-radius:13px;background:rgba(255,255,255,.025)}
    .roster-tools-name{min-width:0}.roster-tools-name strong{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.roster-tools-name small{display:block;color:var(--muted,#91a4b7);margin-top:2px}
    .roster-tools-row select,.class-member .roster-inline-select{min-width:0;width:100%;border:1px solid rgba(255,255,255,.13);border-radius:9px;background:#0b1824;color:#e9f6ff;padding:8px 9px}
    .roster-tools-row button,.class-member .roster-inline-move{white-space:nowrap}
    .roster-tools-status{min-height:1.3em;margin:12px 0 0;color:#a9f5ff;font-weight:700}
    .roster-tools-status.error{color:#ff9f9f}
    .class-member.roster-enhanced{display:grid;grid-template-columns:minmax(120px,1fr) minmax(165px,.9fr) auto auto;gap:8px;align-items:center}
    .class-member.roster-enhanced>button[data-action="remove-class-member"]{width:auto;height:auto;border-radius:9px;padding:7px 10px;font-size:.78rem}
    @media (max-width:900px){.roster-tools-row{grid-template-columns:1fr}.roster-tools-head{display:block}.roster-tools-badge{display:inline-block;margin-top:10px}.class-member.roster-enhanced{grid-template-columns:1fr}.class-member.roster-enhanced>button[data-action="remove-class-member"]{justify-self:start}}
  `;
  document.head.appendChild(style);
}

function setStatus(panel, message, error=false){
  const el = panel?.querySelector('[data-roster-status]');
  if (!el) return;
  el.textContent = message || '';
  el.classList.toggle('error', Boolean(error));
}

function schedule(delay=120){
  clearTimeout(timer);
  timer = setTimeout(renderForRoute, delay);
}

function rerenderCurrentRoute(){
  // app.js already listens for hashchange; dispatching the event refreshes the current route
  // without changing the address or wiping any Learning Hub data.
  window.dispatchEvent(new Event('hashchange'));
  schedule(250);
}

async function moveStudent({fromClassId,toClassId,studentId,name,panel}){
  if (!toClassId) throw new Error('Choose the class to move the student to.');
  if (fromClassId === toClassId) throw new Error('Choose a different class.');
  if (!confirm(`Move ${name} to the selected class?\n\nTheir account, XP and completed learning will be kept.`)) return false;

  setStatus(panel, `Moving ${name}…`);
  await BACKEND.addClassMember(toClassId, studentId);
  try {
    await BACKEND.removeClassMember(fromClassId, studentId);
  } catch (err) {
    // Best-effort rollback so a failed source removal does not silently duplicate a move.
    try { await BACKEND.removeClassMember(toClassId, studentId); } catch (rollbackErr) {}
    throw err;
  }
  setStatus(panel, `${name} moved successfully.`);
  setTimeout(rerenderCurrentRoute, 350);
  return true;
}

async function removeStudent({classId,studentId,name,className,panel}){
  if (!confirm(`Remove ${name} from ${className || 'this class'}?\n\nThis only removes them from the teaching group. Their account, XP and completed learning are NOT deleted.`)) return false;
  setStatus(panel, `Removing ${name}…`);
  await BACKEND.removeClassMember(classId, studentId);
  setStatus(panel, `${name} removed from the class.`);
  setTimeout(rerenderCurrentRoute, 350);
  return true;
}

function destinationOptions(classes, currentId){
  const available = (classes || []).filter(c => c && !c.archived && c.id !== currentId);
  if (!available.length) return '<option value="">No other active class</option>';
  return `<option value="">Move to another class…</option>${available.map(c => `<option value="${esc(c.id)}">${esc(c.name)}${c.academic_year ? ` — ${esc(c.academic_year)}` : ''}</option>`).join('')}`;
}

async function renderDetailPanel(){
  const classId = currentClassId();
  if (!classId || !isTeacher()) return;
  const app = document.getElementById('app');
  if (!app || app.querySelector(`[data-roster-tools="${CSS.escape(classId)}"]`)) return;

  const seq = ++renderSeq;
  try {
    const [overview, classes] = await Promise.all([
      BACKEND.teacherClassOverview(classId, {force:true}),
      BACKEND.getTeachingClassCards({force:true})
    ]);
    if (seq !== renderSeq || currentClassId() !== classId || !isTeacher()) return;

    const classInfo = overview?.classes?.[0];
    if (!classInfo) return;
    const students = [...(overview?.profiles || [])].sort((a,b) => String(a.display_name||'').localeCompare(String(b.display_name||'')));
    const options = destinationOptions(classes, classId);
    const otherCount = (classes || []).filter(c => c && !c.archived && c.id !== classId).length;

    const panel = document.createElement('section');
    panel.className = 'roster-tools-panel';
    panel.dataset.rosterTools = classId;
    panel.innerHTML = `
      <div class="roster-tools-head">
        <div><span class="eyebrow">STUDENT MANAGEMENT</span><h2>Move or remove students</h2><p>Move a student between your active teaching groups or remove them from this class. Their Learning Hub account, XP and completed learning stay untouched.</p></div>
        <span class="roster-tools-badge">${students.length} student${students.length===1?'':'s'}</span>
      </div>
      <div class="roster-tools-list">
        ${students.length ? students.map(st => `
          <div class="roster-tools-row" data-roster-student="${esc(st.id)}">
            <div class="roster-tools-name"><strong>${esc(st.display_name || 'Student')}</strong><small>${esc(classInfo.name || 'Current class')}</small></div>
            <select data-roster-target ${otherCount ? '' : 'disabled'} aria-label="Move ${esc(st.display_name || 'student')} to another class">${options}</select>
            <button class="button small primary" type="button" data-roster-move data-class="${esc(classId)}" data-student="${esc(st.id)}" data-name="${esc(st.display_name || 'Student')}" ${otherCount ? '' : 'disabled'}>Move</button>
            <button class="button small danger" type="button" data-roster-remove data-class="${esc(classId)}" data-student="${esc(st.id)}" data-name="${esc(st.display_name || 'Student')}" data-class-name="${esc(classInfo.name || '')}">Remove</button>
          </div>`).join('') : '<div class="empty">No students are currently in this class.</div>'}
      </div>
      <p class="roster-tools-status" data-roster-status aria-live="polite"></p>`;

    app.prepend(panel);
  } catch (err) {
    console.warn('Roster controls', err?.message || err);
  }
}

async function enhanceTeacherDashboard(){
  if (String(location.hash || '') !== '#/teacher' || !isTeacher()) return;
  const app = document.getElementById('app');
  if (!app) return;
  const rows = [...app.querySelectorAll('.class-member:not(.roster-enhanced)')];
  if (!rows.length) return;

  let classes;
  try { classes = await BACKEND.getTeachingClassCards(); }
  catch (err) { return; }
  if (String(location.hash || '') !== '#/teacher') return;

  rows.forEach(row => {
    const remove = row.querySelector('button[data-action="remove-class-member"]');
    if (!remove) return;
    const fromClassId = remove.dataset.class || '';
    const studentId = remove.dataset.student || '';
    const options = destinationOptions(classes, fromClassId);
    const otherCount = (classes || []).filter(c => c && !c.archived && c.id !== fromClassId).length;

    const select = document.createElement('select');
    select.className = 'roster-inline-select';
    select.dataset.rosterTarget = '';
    select.innerHTML = options;
    select.disabled = !otherCount;

    const move = document.createElement('button');
    move.type = 'button';
    move.className = 'button small primary roster-inline-move';
    move.dataset.rosterMove = '';
    move.dataset.class = fromClassId;
    move.dataset.student = studentId;
    move.dataset.name = row.querySelector('span')?.textContent?.trim() || 'Student';
    move.disabled = !otherCount;
    move.textContent = 'Move';

    remove.textContent = 'Remove';
    remove.title = 'Remove student from this class';
    remove.classList.add('button','small','danger');

    row.classList.add('roster-enhanced');
    row.insertBefore(select, remove);
    row.insertBefore(move, remove);
  });
}

async function renderForRoute(){
  injectStyles();
  if (!isTeacher()) return;
  if (currentClassId()) await renderDetailPanel();
  else if (String(location.hash || '') === '#/teacher') await enhanceTeacherDashboard();
}

document.addEventListener('click', async event => {
  const moveBtn = event.target.closest('[data-roster-move]');
  if (moveBtn) {
    event.preventDefault();
    const row = moveBtn.closest('.roster-tools-row,.class-member');
    const select = row?.querySelector('[data-roster-target],.roster-inline-select');
    const panel = moveBtn.closest('.roster-tools-panel') || document.querySelector('.roster-tools-panel');
    moveBtn.disabled = true;
    try {
      await moveStudent({
        fromClassId:moveBtn.dataset.class || '',
        toClassId:select?.value || '',
        studentId:moveBtn.dataset.student || '',
        name:moveBtn.dataset.name || 'Student',
        panel
      });
    } catch (err) {
      setStatus(panel, err?.message || 'Could not move the student.', true);
    } finally {
      moveBtn.disabled = false;
    }
    return;
  }

  const removeBtn = event.target.closest('[data-roster-remove]');
  if (removeBtn) {
    event.preventDefault();
    const panel = removeBtn.closest('.roster-tools-panel');
    removeBtn.disabled = true;
    try {
      await removeStudent({
        classId:removeBtn.dataset.class || '',
        studentId:removeBtn.dataset.student || '',
        name:removeBtn.dataset.name || 'Student',
        className:removeBtn.dataset.className || '',
        panel
      });
    } catch (err) {
      setStatus(panel, err?.message || 'Could not remove the student.', true);
    } finally {
      removeBtn.disabled = false;
    }
  }
});

window.addEventListener('hashchange', () => schedule(80));
BACKEND.onChange?.(() => schedule(100));

const app = document.getElementById('app');
if (app) {
  new MutationObserver(() => schedule(120)).observe(app, {childList:true,subtree:true});
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => schedule(100));
else schedule(100);

})();
