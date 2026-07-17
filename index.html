// Nav toggle (mobile)
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('nav.links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });
  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => links.classList.remove('open'))
  );
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
}

// Countdown — edit WEDDING_DATE if the date changes
const WEDDING_DATE = new Date('2027-07-24T15:00:00+02:00');
const countdownEl = document.querySelector('.countdown');
if (countdownEl) {
  const daysEl = countdownEl.querySelector('.days');
  const hoursEl = countdownEl.querySelector('.hours');
  const minsEl = countdownEl.querySelector('.mins');
  const secsEl = countdownEl.querySelector('.secs');

  function tick() {
    const now = new Date();
    let diff = WEDDING_DATE - now;
    if (diff <= 0) {
      countdownEl.innerHTML = '<span class="num" style="font-size:1.4rem">I dag är den stora dagen \u2014 vi ses där!</span>';
      clearInterval(timer);
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    if (daysEl) daysEl.textContent = d;
    if (hoursEl) hoursEl.textContent = String(h).padStart(2, '0');
    if (minsEl) minsEl.textContent = String(m).padStart(2, '0');
    if (secsEl) secsEl.textContent = String(s).padStart(2, '0');
  }
  tick();
  const timer = setInterval(tick, 1000);
}
