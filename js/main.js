document.addEventListener('DOMContentLoaded', () => {
    // 1. Configuración del observador de intersección para scroll normal
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elementos a animar al entrar en pantalla
    const animatedElements = document.querySelectorAll(
        '.about-card, .review-card, .pricing-grid .card, .about-header'
    );

    animatedElements.forEach(el => {
        el.classList.add('fade-in-up');
        observer.observe(el);
    });

    // 2. Transición suave sin re-animación repetitiva al hacer clic en enlaces de ancla
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId === '#' || !targetId) return;

            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const cards = targetSection.querySelectorAll('.fade-in-up');
                cards.forEach(card => card.classList.add('visible'));
            }
        });
    });
});