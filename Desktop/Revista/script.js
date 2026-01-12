/* ========================================
   REVISTA INNOVUS - JAVASCRIPT INTERATIVO
   ======================================== */

// ========================================
// NAVEGAÇÃO COM SCROLL
// ========================================

class NavbarScroll {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.handleScroll());
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleNavClick(e));
        });
    }

    handleScroll() {
        if (window.scrollY > 100) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }
    }

    handleNavClick(e) {
        e.preventDefault();
        const section = e.target.getAttribute('data-section');
        const element = document.querySelector(`#${section}`);
        
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

// ========================================
// ANIMAÇÕES AO ROLAR (AOS)
// ========================================

class ScrollAnimations {
    constructor() {
        this.elements = document.querySelectorAll('[data-aos]');
        this.init();
    }

    init() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                    this.observer.unobserve(entry.target);
                }
            });
        }, this.observerOptions);

        this.elements.forEach(el => {
            this.observer.observe(el);
        });
    }

    animateElement(element) {
        const delay = element.getAttribute('data-aos-delay') || '0';
        
        setTimeout(() => {
            element.classList.add('aos-animate');
        }, parseInt(delay));
    }
}

// ========================================
// EFEITO PARALLAX
// ========================================

class ParallaxEffect {
    constructor() {
        this.headerBg = document.querySelector('.header-background');
        this.init();
    }

    init() {
        if (!this.headerBg) return;

        window.addEventListener('scroll', () => this.handleParallax());
    }

    handleParallax() {
        const scrolled = window.scrollY;
        if (this.headerBg) {
            this.headerBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    }
}

// ========================================
// ANIMAÇÃO DE NÚMEROS
// ========================================

class NumberAnimation {
    constructor(element, target, duration = 2000) {
        this.element = element;
        this.target = parseInt(target);
        this.duration = duration;
        this.current = 0;
        this.start = null;
    }

    animate(timestamp) {
        if (!this.start) this.start = timestamp;
        const progress = (timestamp - this.start) / this.duration;

        if (progress < 1) {
            this.current = Math.floor(this.target * progress);
            this.element.textContent = this.current;
            requestAnimationFrame((ts) => this.animate(ts));
        } else {
            this.element.textContent = this.target;
        }
    }

    start() {
        requestAnimationFrame((ts) => this.animate(ts));
    }
}

// ========================================
// SMOOTH SCROLL PARA LINKS
// ========================================

class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href === '#' || href === '') return;

                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// ========================================
// EFEITO DE HOVER NAS CARTAS
// ========================================

class CardHoverEffect {
    constructor() {
        this.cards = document.querySelectorAll('.about-article, .edition-card, .archive-item');
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            card.addEventListener('mouseenter', (e) => this.handleHover(e));
            card.addEventListener('mousemove', (e) => this.handleMouseMove(e));
            card.addEventListener('mouseleave', (e) => this.handleLeave(e));
        });
    }

    handleHover(e) {
        e.currentTarget.style.position = 'relative';
    }

    handleMouseMove(e) {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        // Aplicar um efeito 3D suave
        card.style.boxShadow = `
            ${(centerX - x) / 50}px ${(centerY - y) / 50}px 20px rgba(0, 61, 122, 0.15)
        `;
    }

    handleLeave(e) {
        const card = e.currentTarget;
        card.style.boxShadow = '';
    }
}

// ========================================
// CONTADOR DE SEÇÕES
// ========================================

class SectionCounter {
    constructor() {
        this.sections = document.querySelectorAll('section');
        this.init();
    }

    init() {
        this.sections.forEach((section, index) => {
            section.setAttribute('data-section-index', index + 1);
        });
    }
}

// ========================================
// MODO ATIVAÇÃO DE LINKS NAVEGAÇÃO
// ========================================

class ActiveNavLink {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-link');
        this.sections = document.querySelectorAll('section');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.updateActiveLink());
    }

    updateActiveLink() {
        let current = '';

        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === current) {
                link.classList.add('active');
            }
        });
    }
}

// ========================================
// ANIMAÇÃO DE ENTRADA DO HEADER
// ========================================

class HeaderAnimations {
    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('load', () => {
            this.animateHeaderElements();
        });
    }

    animateHeaderElements() {
        const title = document.querySelector('.magazine-title');
        const subtitle = document.querySelector('.magazine-subtitle');
        const badges = document.querySelectorAll('.publication-badge');

        if (title) {
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
        }

        if (subtitle) {
            subtitle.style.opacity = '1';
            subtitle.style.transform = 'translateY(0)';
        }

        badges.forEach((badge, index) => {
            setTimeout(() => {
                badge.style.opacity = '1';
                badge.style.transform = 'translateY(0) scale(1)';
            }, 300 + index * 100);
        });
    }
}

// ========================================
// LAZY LOADING DE IMAGENS
// ========================================

class LazyLoadImages {
    constructor() {
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }
}

// ========================================
// MEDIDOR DE PROGRESSO DE LEITURA
// ========================================

class ReadingProgress {
    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.updateProgress());
    }

    updateProgress() {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        
        // Adicionar uma linha de progresso ao topo se desejado
        let progressBar = document.querySelector('.reading-progress-bar');
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.className = 'reading-progress-bar';
            document.body.appendChild(progressBar);
        }
        
        progressBar.style.width = scrolled + '%';
    }
}

// ========================================
// VALIDAÇÃO E EFEITOS DE FORMA
// ========================================

class FormEnhancer {
    constructor() {
        this.init();
    }

    init() {
        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', (e) => this.handleFocus(e));
            input.addEventListener('blur', (e) => this.handleBlur(e));
        });
    }

    handleFocus(e) {
        e.target.parentElement.classList.add('focused');
    }

    handleBlur(e) {
        e.target.parentElement.classList.remove('focused');
    }
}

// ========================================
// INICIALIZAÇÃO GLOBAL
// ========================================

class AppInitializer {
    static init() {
        // Aguardar DOM estar pronto
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initializeAll();
            });
        } else {
            this.initializeAll();
        }
    }

    static initializeAll() {
        console.log('🚀 Revista Innovus - Inicializando...');

        try {
            new NavbarScroll();
            console.log('✓ Navegação inicializada');

            new ScrollAnimations();
            console.log('✓ Animações ao scroll inicializadas');

            new ParallaxEffect();
            console.log('✓ Efeito parallax inicializado');

            new SmoothScroll();
            console.log('✓ Smooth scroll inicializado');

            new CardHoverEffect();
            console.log('✓ Efeitos de hover inicializados');

            new SectionCounter();
            console.log('✓ Contador de seções inicializado');

            new ActiveNavLink();
            console.log('✓ Links de navegação ativos inicializados');

            new HeaderAnimations();
            console.log('✓ Animações do header inicializadas');

            new LazyLoadImages();
            console.log('✓ Lazy loading de imagens inicializado');

            new ReadingProgress();
            console.log('✓ Medidor de leitura inicializado');

            new FormEnhancer();
            console.log('✓ Enhancements de forma inicializados');

            console.log('✅ Revista Innovus carregada com sucesso!');
        } catch (error) {
            console.error('❌ Erro ao inicializar:', error);
        }
    }
}

// ========================================
// INICIAR QUANDO PÁGINA CARREGA
// ========================================

AppInitializer.init();

// ========================================
// FUNÇÕES UTILITÁRIAS
// ========================================

// Debounce para eventos de scroll/resize
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle para melhor performance
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Animar scroll para elemento
function smoothScrollTo(element, offset = 0) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollBy({
        top: offsetPosition - window.innerHeight / 2,
        behavior: 'smooth'
    });
}

// ========================================
// EFEITOS ADICIONAIS
// ========================================

// Ripple effect para botões
document.addEventListener('click', (e) => {
    const button = e.target.closest('.btn');
    if (!button) return;

    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    button.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
});

// Tema escuro automático
function initTheme() {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDark) {
        document.documentElement.style.colorScheme = 'dark';
    }
}

initTheme();

// ========================================
// SERVICE WORKER (Opcional para PWA)
// ========================================

if ('serviceWorker' in navigator) {
    // Descomentar se implementar service worker
    // navigator.serviceWorker.register('/sw.js').then(reg => {
    //     console.log('✓ Service Worker registrado');
    // }).catch(err => {
    //     console.warn('Service Worker não disponível:', err);
    // });
}
