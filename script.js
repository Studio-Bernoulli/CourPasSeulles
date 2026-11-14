// CourPasSeulles · petits bouts d'interactivité

// Menu mobile
const burger = document.querySelector('.topbar__burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(open));
});
nav.addEventListener('click', (e) => {
  if (e.target.closest('a')) {
    nav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }
});

// Compte à rebours jusqu'au premier départ (dimanche 16 mai 2027, 9h, heure de Paris)
const RACE_START = new Date('2027-05-16T09:00:00+02:00');
const cd = {
  d: document.querySelector('[data-cd="d"]'),
  h: document.querySelector('[data-cd="h"]'),
  m: document.querySelector('[data-cd="m"]'),
  s: document.querySelector('[data-cd="s"]'),
};
const pad = (n) => String(n).padStart(2, '0');
function tick() {
  const diff = Math.max(0, RACE_START - Date.now());
  const s = Math.floor(diff / 1000);
  cd.d.textContent = Math.floor(s / 86400);
  cd.h.textContent = pad(Math.floor((s % 86400) / 3600));
  cd.m.textContent = pad(Math.floor((s % 3600) / 60));
  cd.s.textContent = pad(s % 60);
}
tick();
setInterval(tick, 1000);

// Onglets des parcours
const tabs = document.querySelectorAll('[data-tab]');
const panels = document.querySelectorAll('[data-panel]');
function showRoute(name) {
  tabs.forEach((t) => t.setAttribute('aria-selected', String(t.dataset.tab === name)));
  panels.forEach((p) => { p.hidden = p.dataset.panel !== name; });
}
tabs.forEach((t) => t.addEventListener('click', () => showRoute(t.dataset.tab)));
document.querySelectorAll('[data-route]').forEach((a) =>
  a.addEventListener('click', () => showRoute(a.dataset.route))
);

// Quiz « quel format pour toi ? »
const quiz = document.getElementById('quiz');
const steps = quiz.querySelectorAll('.quiz__q');
const result = quiz.querySelector('.quiz__result');
const verdict = quiz.querySelector('.quiz__verdict');
let score = 0;
let step = 0;

quiz.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-score]');
  if (!btn) return;
  score += Number(btn.dataset.score);
  steps[step].hidden = true;
  step += 1;
  if (step < steps.length) {
    steps[step].hidden = false;
  } else {
    verdict.textContent =
      score <= 1 ? "Verdict : supporter en chef. Le ravito a besoin de toi (et le 12 km t'attend si tu changes d'avis)."
      : score <= 4 ? 'Verdict : le 12 km ! Assez pour mériter la bière, pas trop pour la savourer.'
      : 'Verdict : le 30 km. Tu le savais déjà, avoue.';
    result.hidden = false;
  }
});
quiz.querySelector('.quiz__reset').addEventListener('click', () => {
  score = 0;
  step = 0;
  steps.forEach((s, i) => { s.hidden = i !== 0; });
  result.hidden = true;
});
