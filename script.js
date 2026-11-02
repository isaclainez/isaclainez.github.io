// Translation helper from i18n.js (falls back to English if that file is missing)
var t = window.t || function (key, english) { return english; };

// ---------- Footer year ----------
document.querySelectorAll('[data-year]').forEach(function (el) {
  el.textContent = new Date().getFullYear();
});

// ---------- Local time in Mayagüez (useful for scheduling calls) ----------
(function () {
  function tick() {
    var el = document.getElementById('localTime');   // looked up each time: the language switch rebuilds it
    if (!el) return;
    el.textContent = new Date().toLocaleTimeString(window.siteLang === 'es' ? 'es-PR' : 'en-US', {
      hour: 'numeric', minute: '2-digit', timeZone: 'America/Puerto_Rico'
    });
  }
  tick();
  setInterval(tick, 30000);
  document.addEventListener('langchange', tick);
})();

// ---------- Pulse at a real pulsar's period ----------
(function () {
  var pulse = document.querySelector('.pulse[data-period]');
  if (!pulse) return;
  var PULSES_PER_LOOP = 16;   // the drawn pulse train repeats every 16 pulses
  var period = parseFloat(pulse.getAttribute('data-period')) || 1.3373;
  var slowdown = parseFloat(pulse.getAttribute('data-slowdown')) || 1;
  pulse.style.setProperty('--pulse-speed', (period * slowdown * PULSES_PER_LOOP).toFixed(3) + 's');

  // pause while the banner is off screen, to save battery
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      pulse.classList.toggle('offscreen', !entries[0].isIntersecting);
    }).observe(pulse);
  }
})();

// ---------- Mobile navigation ----------
(function () {
  var nav = document.querySelector('.nav');
  if (!nav) return;
  var toggle = nav.querySelector('.nav-toggle');
  if (!toggle) return;

  function label() {
    var open = nav.classList.contains('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? t('ui.menuClose', 'Close menu') : t('ui.menuOpen', 'Open menu'));
  }
  toggle.addEventListener('click', function () { nav.classList.toggle('open'); label(); });
  nav.querySelectorAll('.nav-links a').forEach(function (a) {
    a.addEventListener('click', function () { nav.classList.remove('open'); label(); });
  });
  document.addEventListener('langchange', label);
  label();
})();

// ---------- Carousel ----------
(function () {
  var root = document.querySelector('.carousel');
  if (!root) return;

  var DELAY = 6000;
  var track = root.querySelector('.carousel-track');
  var slides = Array.prototype.slice.call(track.querySelectorAll('.slide'));
  var dotsWrap = root.querySelector('.dots');
  var count = root.querySelector('.count');
  var toggle = root.querySelector('[data-toggle]');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var index = 0;
  var timer = null;
  var userPaused = reduce;   // no autoplay for people who prefer reduced motion
  var hovering = false;
  var focused = false;

  root.style.setProperty('--delay', DELAY + 'ms');

  slides.forEach(function (slide, i) {
    slide.setAttribute('role', 'group');
    slide.setAttribute('aria-roledescription', 'slide');
    var dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'dot';
    dot.addEventListener('click', function () { go(i); });
    dotsWrap.appendChild(dot);
  });
  var dots = Array.prototype.slice.call(dotsWrap.children);

  function labels() {
    var of = t('ui.of', 'of');
    slides.forEach(function (s, i) { s.setAttribute('aria-label', (i + 1) + ' ' + of + ' ' + slides.length); });
    dots.forEach(function (d, i) { d.setAttribute('aria-label', t('ui.showSlide', 'Show slide') + ' ' + (i + 1)); });
    if (toggle) toggle.setAttribute('aria-label', userPaused ? t('ui.play', 'Play slideshow') : t('ui.pause', 'Pause slideshow'));
  }

  function isPlaying() {
    return !userPaused && !hovering && !focused && !document.hidden;
  }

  function schedule() {
    clearTimeout(timer);
    root.classList.remove('playing');
    void root.offsetWidth; // restart the progress animation
    if (isPlaying()) {
      root.classList.add('playing');
      timer = setTimeout(function () { go(index + 1); }, DELAY);
    }
  }

  function render() {
    dots.forEach(function (d, i) { d.setAttribute('aria-current', i === index ? 'true' : 'false'); });
    if (count) count.textContent = (index + 1) + ' / ' + slides.length;
    schedule();
  }

  function go(i, instant) {
    index = (i + slides.length) % slides.length;
    track.scrollTo({ left: index * track.clientWidth, behavior: instant ? 'auto' : 'smooth' });
    render();
  }

  // keep index in sync when someone swipes or scrolls the track
  var scrollTimer;
  track.addEventListener('scroll', function () {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(function () {
      var i = Math.round(track.scrollLeft / track.clientWidth);
      if (i !== index) { index = i; render(); }
    }, 80);
  }, { passive: true });

  root.querySelector('[data-prev]').addEventListener('click', function () { go(index - 1); });
  root.querySelector('[data-next]').addEventListener('click', function () { go(index + 1); });

  function updateToggle() {
    if (!toggle) return;
    toggle.setAttribute('aria-pressed', userPaused ? 'false' : 'true');
    toggle.querySelector('.icon-pause').style.display = userPaused ? 'none' : '';
    toggle.querySelector('.icon-play').style.display = userPaused ? '' : 'none';
    labels();
  }
  if (toggle) {
    toggle.addEventListener('click', function () {
      userPaused = !userPaused;
      updateToggle();
      schedule();
    });
  }

  track.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(index - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); go(index + 1); }
  });

  // pause while someone is looking at or interacting with it
  root.addEventListener('mouseenter', function () { hovering = true; schedule(); });
  root.addEventListener('mouseleave', function () { hovering = false; schedule(); });
  root.addEventListener('focusin', function () { focused = true; schedule(); });
  root.addEventListener('focusout', function (e) {
    if (!root.contains(e.relatedTarget)) { focused = false; schedule(); }
  });
  document.addEventListener('visibilitychange', schedule);
  document.addEventListener('langchange', labels);
  window.addEventListener('resize', function () { go(index, true); });

  updateToggle();
  render();
})();

// ---------- Photo lightbox (photography page) ----------
(function () {
  var box = document.getElementById('lightbox');
  if (!box) return;
  var photos = Array.prototype.slice.call(document.querySelectorAll('.photo'));
  var img = box.querySelector('img');
  var cap = box.querySelector('.lightbox-caption');
  var current = 0;

  function show(i) {
    current = (i + photos.length) % photos.length;
    var p = photos[current];
    var thumb = p.querySelector('img');
    img.src = thumb.getAttribute('src');
    img.alt = thumb.getAttribute('alt');
    cap.innerHTML = '';
    var meta = document.createElement('small');
    meta.textContent = p.getAttribute('data-meta') || '';
    cap.appendChild(meta);
    cap.appendChild(document.createTextNode(p.getAttribute('data-caption') || thumb.alt));
  }

  photos.forEach(function (p, i) {
    p.addEventListener('click', function () {
      show(i);
      if (typeof box.showModal === 'function') box.showModal();
      else box.setAttribute('open', '');
    });
  });

  box.querySelector('[data-prev]').addEventListener('click', function () { show(current - 1); });
  box.querySelector('[data-next]').addEventListener('click', function () { show(current + 1); });
  box.querySelector('[data-close]').addEventListener('click', function () { box.close(); });
  box.addEventListener('click', function (e) { if (e.target === box) box.close(); });
  box.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });
})();
