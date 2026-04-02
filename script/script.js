/* ============================================================
   NEYMAR JR — Enhanced JavaScript
   ScrollReveal Advanced + Navbar Controller + Mobile Menu
   ============================================================ */

// ======================
// 1. SCROLL REVEAL — Advanced Animations
// ======================
window.sr = ScrollReveal({
    reset: false,
    distance: '40px',
    duration: 1000,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    viewFactor: 0.15,
});

// Hero titles — dramatic scale-up entrance
sr.reveal('.area-1', {
    duration: 1200,
    scale: 0.85,
    opacity: 0,
    origin: 'bottom',
    distance: '0px',
});

sr.reveal('.area-2', {
    duration: 1400,
    rotate: { x: 0, y: 20, z: 0 },
    origin: 'left',
    distance: '60px',
});

sr.reveal('.area-3', {
    duration: 1400,
    rotate: { x: 0, y: -20, z: 0 },
    origin: 'right',
    distance: '60px',
});

// Content sections — staggered reveals
sr.reveal('.sr-texto', {
    duration: 1000,
    origin: 'bottom',
    distance: '30px',
    interval: 150,
});

// Page badge
sr.reveal('.page-badge', {
    duration: 800,
    origin: 'top',
    distance: '20px',
    delay: 300,
});

// Grid cards — cascade effect
sr.reveal('.grid-card', {
    duration: 800,
    origin: 'bottom',
    distance: '30px',
    interval: 120,
});

// Timeline items — alternating sides
sr.reveal('.timeline-item', {
    duration: 900,
    origin: 'left',
    distance: '40px',
    interval: 200,
});

// Stat items — pop in
sr.reveal('.stat-item', {
    duration: 700,
    scale: 0.8,
    origin: 'bottom',
    distance: '20px',
    interval: 100,
});

// ======================
// 2. NAVBAR — Scroll-driven glassmorphism
// ======================
(function() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    let ticking = false;

    function updateNavbar() {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }, { passive: true });

    // Initial check
    updateNavbar();
})();

// ======================
// 3. MOBILE MENU — Hamburger Toggle
// ======================
(function() {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    if (!toggle || !links) return;

    toggle.addEventListener('click', function() {
        links.classList.toggle('open');
        // Animate hamburger to X
        toggle.classList.toggle('active');
    });

    // Close menu on link click
    links.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            links.classList.remove('open');
            toggle.classList.remove('active');
        });
    });

    // Close menu on outside click
    document.addEventListener('click', function(e) {
        if (!links.contains(e.target) && !toggle.contains(e.target)) {
            links.classList.remove('open');
            toggle.classList.remove('active');
        }
    });
})();

// ======================
// 4. SMOOTH PARALLAX DEPTH (Mouse-driven on desktop)
// ======================
(function() {
    if (window.matchMedia('(hover: none)').matches) return;

    const parallaxSections = document.querySelectorAll('.modulo.parallax h1');

    document.addEventListener('mousemove', function(e) {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;

        parallaxSections.forEach(function(h1) {
            const rect = h1.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                h1.style.transform = 'translate(' + (x * 8) + 'px, ' + (y * 5) + 'px)';
            }
        });
    });
})();

// ======================
// 5. TYPED EFFECT — Stat numbers count-up
// ======================
(function() {
    const statNumbers = document.querySelectorAll('.stat-number');
    if (!statNumbers.length) return;

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                animateNumber(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(function(el) {
        observer.observe(el);
    });

    function animateNumber(el) {
        const text = el.textContent.trim();
        // Extract numeric part
        const match = text.match(/^([\d,.]+)/);
        if (!match) return;

        const numStr = match[1].replace(/\./g, '').replace(/,/g, '');
        const target = parseInt(numStr, 10);
        if (isNaN(target) || target === 0) return;

        const suffix = text.replace(match[0], '');
        const duration = 1500;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out curve
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(target * eased);

            // Format with dot separator for thousands (Brazilian format)
            el.textContent = current.toLocaleString('pt-BR') + suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }
})();