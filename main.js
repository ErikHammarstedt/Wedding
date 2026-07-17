@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,500&family=Jost:wght@300;400;500;600&display=swap');

:root {
  --cream: #F5EEDF;
  --cream-deep: #EAE0C6;
  --card: #FBF7EE;
  --rust: #AE5230;
  --rust-soft: #C97F5B;
  --olive: #4B5A3C;
  --gold: #B08A42;
  --gold-soft: #D9C08B;
  --ink: #3A3226;
  --ink-soft: #6b6152;
  --shadow: 0 10px 40px rgba(58, 50, 38, 0.08);
  --radius: 2px;
  --max-w: 1080px;
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  background: var(--cream);
  color: var(--ink);
  font-family: 'Jost', sans-serif;
  font-weight: 400;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, .display {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 500;
  letter-spacing: 0.01em;
  margin: 0;
  color: var(--ink);
}

a { color: inherit; text-decoration: none; }

img { max-width: 100%; display: block; }

.eyebrow {
  display: inline-block;
  font-family: 'Jost', sans-serif;
  font-size: 0.72rem;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--rust);
  font-weight: 500;
}

.container {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 32px;
}

/* ---------- Ornaments ---------- */
.corner-orn {
  position: absolute;
  width: 120px;
  height: 120px;
  opacity: 0.55;
  pointer-events: none;
}
.corner-orn.tl { top: 18px; left: 18px; }
.corner-orn.tr { top: 18px; right: 18px; transform: scaleX(-1); }
.corner-orn.bl { bottom: 18px; left: 18px; transform: scaleY(-1); }
.corner-orn.br { bottom: 18px; right: 18px; transform: scale(-1, -1); }
@media (max-width: 640px) {
  .corner-orn { width: 70px; height: 70px; }
}

.lotus-divider {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 28px 0;
  color: var(--gold);
}
.lotus-divider svg { width: 46px; height: 46px; }

.hairline {
  border: none;
  border-top: 1px solid var(--gold-soft);
  width: 64px;
  margin: 18px auto;
}

/* ---------- Nav ---------- */
header.site-header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background: rgba(245, 238, 223, 0.88);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(176, 138, 66, 0.25);
}
.nav-inner {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 18px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.monogram {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 1.35rem;
  letter-spacing: 0.03em;
  color: var(--rust);
}
nav.links {
  display: flex;
  gap: 36px;
}
nav.links a {
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink);
  position: relative;
  padding-bottom: 4px;
}
nav.links a.active,
nav.links a:hover {
  color: var(--rust);
}
nav.links a.active::after {
  content: '';
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 1px;
  background: var(--rust);
}
.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
}
.nav-toggle span {
  width: 22px;
  height: 1px;
  background: var(--ink);
  display: block;
}
@media (max-width: 720px) {
  nav.links {
    position: fixed;
    top: 62px; left: 0; right: 0;
    background: var(--cream);
    flex-direction: column;
    align-items: center;
    padding: 24px 0 32px;
    gap: 20px;
    border-bottom: 1px solid rgba(176,138,66,0.25);
    transform: translateY(-130%);
    transition: transform 0.35s ease;
  }
  nav.links.open { transform: translateY(0); }
  .nav-toggle { display: flex; }
}

/* ---------- Hero ---------- */
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 50% 0%, var(--cream-deep) 0%, var(--cream) 65%);
}
.hero-content {
  position: relative;
  z-index: 2;
  padding: 0 24px;
  opacity: 0;
  animation: rise 1.1s ease forwards 0.2s;
}
@keyframes rise {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}
.hero .eyebrow { margin-bottom: 18px; }
.hero h1 {
  font-size: clamp(2.6rem, 12vw, 5.4rem);
  line-height: 1.05;
}
.hero h1 .amp {
  display: block;
  font-style: italic;
  color: var(--rust);
  font-size: 0.55em;
  margin: 6px 0;
}
.hero .date-line {
  margin-top: 22px;
  font-size: 1.05rem;
  letter-spacing: 0.08em;
  color: var(--ink-soft);
  text-transform: uppercase;
}
.hero .date-line strong { color: var(--ink); }

.countdown {
  display: flex;
  gap: 28px;
  justify-content: center;
  margin-top: 40px;
  flex-wrap: wrap;
}
.countdown .unit {
  min-width: 68px;
}
.countdown .num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.4rem;
  color: var(--rust);
  display: block;
}
.countdown .label {
  font-size: 0.66rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink-soft);
}

.btn {
  display: inline-block;
  margin-top: 42px;
  padding: 14px 40px;
  border: 1px solid var(--rust);
  color: var(--rust);
  font-size: 0.78rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  transition: background 0.3s ease, color 0.3s ease;
}
.btn:hover { background: var(--rust); color: var(--card); }
.btn.filled {
  background: var(--rust);
  color: var(--card);
}
.btn.filled:hover { background: var(--olive); border-color: var(--olive); }

/* ---------- Sections ---------- */
section { padding: 100px 0; position: relative; }
.section-head {
  text-align: center;
  max-width: 620px;
  margin: 0 auto 56px;
}
.section-head h2 {
  font-size: clamp(2rem, 4vw, 2.8rem);
  margin-top: 10px;
}
.section-head p { color: var(--ink-soft); margin-top: 14px; }

.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.reveal.in { opacity: 1; transform: translateY(0); }

/* cards */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 28px;
}
.card {
  background: var(--card);
  border: 1px solid rgba(176,138,66,0.28);
  padding: 40px 30px;
  text-align: center;
  box-shadow: var(--shadow);
}
.card .icon { width: 40px; height: 40px; margin: 0 auto 18px; color: var(--olive); }
.card h3 { font-size: 1.5rem; margin-bottom: 10px; }
.card p { color: var(--ink-soft); font-size: 0.95rem; }
.card a.card-link {
  display: inline-block;
  margin-top: 16px;
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--rust);
  border-bottom: 1px solid var(--rust);
}

/* timeline */
.timeline {
  max-width: 640px;
  margin: 0 auto;
  position: relative;
  padding-left: 34px;
  border-left: 1px solid var(--gold-soft);
}
.timeline .item {
  position: relative;
  padding-bottom: 44px;
}
.timeline .item:last-child { padding-bottom: 0; }
.timeline .item::before {
  content: '';
  position: absolute;
  left: -39px;
  top: 4px;
  width: 9px; height: 9px;
  border-radius: 50%;
  background: var(--rust);
}
.timeline .time {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  color: var(--rust);
  font-size: 1.15rem;
}
.timeline h3 { margin-top: 4px; font-size: 1.4rem; }
.timeline p { color: var(--ink-soft); margin-top: 6px; font-size: 0.95rem; }

/* info block */
.info-block {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}
.info-block .hairline { margin: 26px auto; }

/* rsvp embed */
.rsvp-frame-wrap {
  max-width: 680px;
  margin: 0 auto;
  background: var(--card);
  border: 1px solid rgba(176,138,66,0.28);
  box-shadow: var(--shadow);
  padding: 10px;
}
.rsvp-placeholder {
  border: 1px dashed var(--gold);
  padding: 60px 24px;
  text-align: center;
  color: var(--ink-soft);
  font-size: 0.92rem;
}
.rsvp-placeholder code {
  display: block;
  margin-top: 14px;
  background: var(--cream-deep);
  padding: 10px 14px;
  font-size: 0.78rem;
  color: var(--ink);
  overflow-x: auto;
}

/* footer */
footer.site-footer {
  padding: 60px 0 40px;
  text-align: center;
  color: var(--ink-soft);
  border-top: 1px solid rgba(176,138,66,0.25);
}
footer.site-footer .monogram { display: block; margin-bottom: 10px; }
footer.site-footer .fine { font-size: 0.78rem; letter-spacing: 0.06em; }

@media (max-width: 640px) {
  section { padding: 64px 0; }
  .container { padding: 0 22px; }
  .card { padding: 32px 22px; }
  .section-head { margin-bottom: 40px; }
  .hero .date-line { font-size: 0.92rem; }
  .countdown { gap: 18px; }
  .countdown .unit { min-width: 56px; }
  .countdown .num { font-size: 1.9rem; }
}

@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.001ms !important; transition-duration: 0.001ms !important; }
}

:focus-visible {
  outline: 2px solid var(--rust);
  outline-offset: 3px;
}
