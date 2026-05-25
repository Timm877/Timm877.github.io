// theme toggle, scroll animations, reading progress, tag filter

(function () {
  // ---------- theme ----------
  const KEY = 'tdb-theme';
  const saved = localStorage.getItem(KEY);
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', initial);

  function paintToggle() {
    const btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    btn.innerHTML = isDark
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  document.addEventListener('DOMContentLoaded', function () {
    paintToggle();

    const btn = document.querySelector('.theme-toggle');
    if (btn) {
      btn.addEventListener('click', function () {
        const cur = document.documentElement.getAttribute('data-theme');
        const next = cur === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem(KEY, next);
        paintToggle();
      });
    }

    // ---------- fade-in observer ----------
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' });
      document.querySelectorAll('.fade-in').forEach(function (el) { io.observe(el); });
    } else {
      document.querySelectorAll('.fade-in').forEach(function (el) { el.classList.add('is-visible'); });
    }

    // ---------- reading progress (post pages only) ----------
    const prose = document.querySelector('.prose');
    if (prose) {
      const bar = document.createElement('div');
      bar.className = 'read-progress';
      document.body.appendChild(bar);
      function tick() {
        const r = prose.getBoundingClientRect();
        const total = r.height - window.innerHeight;
        const passed = -r.top;
        const pct = Math.max(0, Math.min(1, total > 0 ? passed / total : 0));
        bar.style.width = (pct * 100) + '%';
      }
      window.addEventListener('scroll', tick, { passive: true });
      window.addEventListener('resize', tick);
      tick();
    }

    // ---------- blog tag filter ----------
    const chips = document.querySelectorAll('[data-chip]');
    if (chips.length) {
      chips.forEach(function (chip) {
        chip.addEventListener('click', function () {
          const tag = chip.getAttribute('data-chip');
          chips.forEach(function (c) { c.classList.toggle('active', c === chip); });
          document.querySelectorAll('[data-tag-group]').forEach(function (group) {
            if (tag === 'all') {
              group.style.display = '';
            } else {
              group.style.display = group.getAttribute('data-tag-group') === tag ? '' : 'none';
            }
          });
        });
      });
    }
  });
})();
