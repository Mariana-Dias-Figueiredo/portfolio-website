// All the interactive bits of the website, shared by every page.
// Each part only runs if its elements exist on the current page.

// True on computers with a mouse, false on phones and tablets (touch screens)
const canHover = window.matchMedia('(hover: hover)').matches;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Treats Enter and Space like a click on elements that act as buttons
function onActivate(element, handler) {
    element.addEventListener('click', handler);
    element.addEventListener('keydown', (event) => {
        if (event.target !== element) return;
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handler(event);
        }
    });
}

// On touch screens, swap "Hover to..." hints for "Tap to..."
if (!canHover) {
    document.querySelectorAll('[data-hint-tap]').forEach((hint) => {
        hint.textContent = hint.dataset.hintTap;
    });
}

/* ---------- Mobile menu ---------- */
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
if (menuToggle && navLinks) {
    const label = menuToggle.querySelector('.menu-toggle-label');
    const icon = menuToggle.querySelector('.material-symbols-outlined');
    const setOpen = (open) => {
        navLinks.classList.toggle('show', open);
        menuToggle.setAttribute('aria-expanded', String(open));
        label.textContent = open ? menuToggle.dataset.labelClose : menuToggle.dataset.labelOpen;
        icon.textContent = open ? 'close' : 'menu';
    };
    menuToggle.addEventListener('click', (event) => {
        event.stopPropagation();
        setOpen(!navLinks.classList.contains('show'));
    });
    // Close when a link is chosen, when clicking elsewhere, or with Escape
    navLinks.addEventListener('click', (event) => {
        if (event.target.closest('a')) setOpen(false);
    });
    document.addEventListener('click', (event) => {
        if (!navLinks.contains(event.target)) setOpen(false);
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && navLinks.classList.contains('show')) {
            setOpen(false);
            menuToggle.focus();
        }
    });
}

/* ---------- Copy email button ---------- */
document.querySelectorAll('[data-copy]').forEach((button) => {
    const text = button.querySelector('.btn-copy-hint');
    const icon = button.querySelector('.material-symbols-outlined');
    const status = document.getElementById('copyStatus');
    const original = text.textContent;
    let timer;

    button.addEventListener('click', async () => {
        const value = button.dataset.copy;
        try {
            await navigator.clipboard.writeText(value);
        } catch {
            // Older browsers: copy through a temporary text box
            const box = document.createElement('textarea');
            box.value = value;
            box.setAttribute('readonly', '');
            box.style.position = 'fixed';
            box.style.opacity = '0';
            document.body.appendChild(box);
            box.select();
            document.execCommand('copy');
            box.remove();
        }
        button.classList.add('copied');
        text.textContent = button.dataset.copiedLabel;
        icon.textContent = 'check';
        if (status) status.textContent = button.dataset.copiedLabel;
        clearTimeout(timer);
        timer = setTimeout(() => {
            button.classList.remove('copied');
            text.textContent = original;
            icon.textContent = 'content_copy';
            if (status) status.textContent = '';
        }, 2200);
    });
});

/* ---------- Fade-in on scroll + number count-up ---------- */
function countUp(element) {
    const target = Number(element.dataset.count);
    const suffix = element.dataset.suffix || '';
    if (reducedMotion || !target) return;
    const duration = 1200;
    const start = performance.now();
    const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = Math.round(target * eased) + suffix;
        if (progress < 1) requestAnimationFrame(step);
    };
    element.textContent = '0' + suffix;
    requestAnimationFrame(step);
}

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealItems.length) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            entry.target.querySelectorAll('[data-count]').forEach(countUp);
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.15 });
    revealItems.forEach((item) => observer.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
}

/* ---------- Featured research pipeline (home page) ---------- */
document.querySelectorAll('[data-pipeline]').forEach((pipeline) => {
    const tabs = [...pipeline.querySelectorAll('[role="tab"]')];
    const panels = [...pipeline.querySelectorAll('[role="tabpanel"]')];
    const progress = pipeline.querySelector('.pipeline-progress span');
    let current = 0;
    let autoplay = null;

    const select = (index, moveFocus = false) => {
        current = (index + tabs.length) % tabs.length;
        tabs.forEach((tab, i) => {
            const active = i === current;
            tab.setAttribute('aria-selected', String(active));
            tab.tabIndex = active ? 0 : -1;
            tab.classList.toggle('is-done', i < current);
        });
        panels.forEach((panel, i) => { panel.hidden = i !== current; });
        if (progress) progress.style.width = (current / (tabs.length - 1)) * 100 + '%';
        if (moveFocus) tabs[current].focus();
    };

    const stopAutoplay = () => {
        clearInterval(autoplay);
        autoplay = null;
    };

    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => { stopAutoplay(); select(i); });
        tab.addEventListener('keydown', (event) => {
            const keys = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
            if (event.key in keys) {
                event.preventDefault();
                stopAutoplay();
                select(current + keys[event.key], true);
            }
        });
    });

    // Walks through the steps by itself while visible, until someone interacts
    if (!reducedMotion && 'IntersectionObserver' in window) {
        new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && autoplay === null && !pipeline.dataset.touched) {
                    autoplay = setInterval(() => select(current + 1), 4000);
                } else if (!entry.isIntersecting) {
                    stopAutoplay();
                }
            });
        }, { threshold: 0.5 }).observe(pipeline);
        pipeline.addEventListener('pointerdown', () => { pipeline.dataset.touched = '1'; stopAutoplay(); });
        pipeline.addEventListener('focusin', () => { pipeline.dataset.touched = '1'; stopAutoplay(); });
    }
    select(0);
});

/* ---------- Expertise flip cards ---------- */
document.querySelectorAll('.flip-card').forEach((card) => {
    onActivate(card, (event) => {
        // With a mouse, hovering already flips the card; clicks only matter on touch screens
        if (event.type === 'click' && canHover) return;
        const flipped = card.classList.toggle('flipped');
        card.setAttribute('aria-pressed', String(flipped));
    });
});

/* ---------- About page journey timeline ---------- */
document.querySelectorAll('[data-timeline]').forEach((timeline) => {
    const items = [...timeline.querySelectorAll('.ht-item')];
    const scroller = timeline.querySelector('.horizontal-timeline-wrapper');
    const hint = timeline.querySelector('.scroll-hint');

    items.forEach((item) => {
        onActivate(item, (event) => {
            if (event.type === 'click' && canHover) return;
            const open = !item.classList.contains('open');
            items.forEach((other) => {
                other.classList.remove('open');
                other.setAttribute('aria-expanded', 'false');
            });
            item.classList.toggle('open', open);
            item.setAttribute('aria-expanded', String(open));
            if (open) item.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'nearest', inline: 'center' });
        });
    });

    // Shows "scroll to see more" only while there is more to the right
    const updateHint = () => {
        const more = scroller.scrollWidth - scroller.clientWidth - scroller.scrollLeft > 8;
        timeline.classList.toggle('has-more', more);
        if (hint) hint.hidden = scroller.scrollWidth <= scroller.clientWidth + 8;
    };
    scroller.addEventListener('scroll', updateHint, { passive: true });
    window.addEventListener('resize', updateHint);
    updateHint();
});

/* ---------- Hobby pop-up windows ---------- */
document.querySelectorAll('[data-dialog]').forEach((button) => {
    const dialog = document.getElementById(button.dataset.dialog);
    if (!dialog) return;
    button.addEventListener('click', () => dialog.showModal());
});
document.querySelectorAll('dialog.modal').forEach((dialog) => {
    dialog.querySelector('[data-close]').addEventListener('click', () => dialog.close());
    // Clicking the dark background around the window closes it
    dialog.addEventListener('click', (event) => {
        if (event.target === dialog) dialog.close();
    });
});

/* ---------- Experience accordion ---------- */
const accordionItems = document.querySelectorAll('.accordion-item');
function setAccordion(item, open) {
    const button = item.querySelector('.accordion-header');
    const body = item.querySelector('.accordion-body');
    item.classList.toggle('active', open);
    button.setAttribute('aria-expanded', String(open));
    body.style.maxHeight = open ? body.scrollHeight + 'px' : '0px';
}
accordionItems.forEach((item) => {
    item.querySelector('.accordion-header').addEventListener('click', () => {
        const open = !item.classList.contains('active');
        accordionItems.forEach((other) => setAccordion(other, false));
        setAccordion(item, open);
    });
    setAccordion(item, item.classList.contains('active'));
});
window.addEventListener('resize', () => {
    accordionItems.forEach((item) => {
        if (item.classList.contains('active')) setAccordion(item, true);
    });
});

/* ---------- Education photo panel ---------- */
const galleryLayout = document.querySelector('.edu-split-layout');
if (galleryLayout) {
    const degrees = galleryLayout.querySelectorAll('.v-timeline-item');
    const defaultGallery = document.getElementById('gallery-default');
    const galleries = galleryLayout.querySelectorAll('.edu-gallery');

    const showGallery = (degree) => {
        degrees.forEach((d) => d.classList.toggle('is-selected', d === degree));
        galleries.forEach((g) => g.classList.toggle('active', g.id === degree.dataset.gallery));
        defaultGallery.classList.add('is-hidden');
    };
    const reset = () => {
        degrees.forEach((d) => d.classList.remove('is-selected'));
        galleries.forEach((g) => g.classList.remove('active'));
        defaultGallery.classList.remove('is-hidden');
    };

    degrees.forEach((degree) => {
        degree.addEventListener('mouseenter', () => { if (canHover) showGallery(degree); });
        degree.addEventListener('focus', () => showGallery(degree));
        degree.addEventListener('click', () => showGallery(degree));
    });
    galleryLayout.addEventListener('mouseleave', () => { if (canHover) reset(); });
}
