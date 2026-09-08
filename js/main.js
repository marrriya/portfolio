// ============================================
// ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА
// ============================================
const langSwitch = document.getElementById('langSwitch');
let currentLang = 'ru';

// Словарь переводов
const translations = {
    ru: {
        'nav.works': 'Проекты',
        'nav.about': 'Обо мне',
        'nav.contact': 'Связаться',
        'hero.tag': 'Разработка цифровых продуктов',
        'hero.title': 'Привет, я <span class="accent">Мария</span><br>UX/UI Дизайнер',
        'hero.desc': 'Создаю веб-приложения и бренды, которые запоминаются. Люблю сложные задачи и не боюсь экспериментировать',
        'hero.btn_works': 'Смотреть работы',
        'hero.btn_contact': 'Написать мне',
        'hero.stat1': 'года в дизайне',
        'hero.stat2': 'интерфейсов',
        'hero.stat3': 'проектов',
        'works.eyebrow': 'Портфолио',
        'works.title': 'Мои проекты',
        'works.filter_all': 'Все',
        'works.filter_web': 'Веб-сайты',
        'works.filter_branding': 'Брендинг',
        'works.filter_games': 'Игры',
        'works.filter_illustration': 'Иллюстрации',
        'about.eyebrow': 'Обо мне',
        'about.title': 'UX/UI Дизайнер',
        'about.desc': 'Я выбрала дизайн, потому что люблю создавать порядок из хаоса.<br><br>За плечами 4+ года работы над проектами разного масштаба: от мобильных приложений до настольных игр и AR-плакатов для института РАН.<br><br>В работе ценю ясность, честность и вкус. Умею слушать и слышать — как клиентов, так и пользователей. В свободное время фотографирую и занимаюсь рукоделием, это помогает мне видеть красоту в деталях.',
        'about.skills_title': 'Навыки',
        'about.skill1': 'Фотография',
        'about.skill2': 'Верстка',
        'about.skill3': 'UX/UI дизайн',
        'about.skill4': 'Айдентика',
        'about.skill5': 'Иллюстрации',
        'about.skill6': 'Гайдлайны',
        'about.skill7': 'Логотипы',
        'about.skill8': '3D моделирование',
        'about.tools_title': 'Программы',
        'footer.eyebrow': 'Связь',
        'footer.title': 'Давайте создадим что-то крутое вместе',
        'footer.sub': 'Пишите — всегда на связи',
        'footer.phone_label': 'Телефон',
        'footer.email_label': 'E-mail',
        'footer.vk_label': 'VK',
        'footer.telegram_label': 'Telegram',
        'footer.languages_title': 'Языки',
        'footer.lang_ru': 'Русский',
        'footer.lang_ru_level': 'родной',
        'footer.lang_en': 'Английский',
        'footer.lang_en_level': 'B1-B2',
        'footer.lang_it': 'Итальянский',
        'footer.lang_it_level': 'A1-A2',
        'footer.form_name': 'Ваше имя',
        'footer.form_email': 'Ваш email',
        'footer.form_subject': 'Тема проекта',
        'footer.form_message': 'Расскажите о вашем проекте...',
        'footer.form_submit': 'Отправить сообщение'
    },
    en: {
        'nav.works': 'Projects',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'hero.tag': 'Digital Product Design',
        'hero.title': 'Hi, I\'m <span class="accent">Maria</span><br>UX/UI Designer',
        'hero.desc': 'I create web apps and brands that are memorable. I love complex challenges and enjoy experimenting.',
        'hero.btn_works': 'View Work',
        'hero.btn_contact': 'Contact Me',
        'hero.stat1': 'years in design',
        'hero.stat2': 'interfaces',
        'hero.stat3': 'projects',
        'works.eyebrow': 'Portfolio',
        'works.title': 'My Projects',
        'works.filter_all': 'All',
        'works.filter_web': 'Websites',
        'works.filter_branding': 'Branding',
        'works.filter_games': 'Games',
        'works.filter_illustration': 'Illustrations',
        'about.eyebrow': 'About Me',
        'about.title': 'UX/UI Designer',
        'about.desc': 'I chose design because I love creating order from chaos.<br><br>Over 4+ years of experience working on projects of various scales — from mobile apps to board games and AR posters for the Russian Academy of Sciences.<br><br>I value clarity, honesty, and taste in my work. I listen carefully — both to clients and users. In my free time, I do photography and crafts, which helps me notice beauty in details.',
        'about.skills_title': 'Skills',
        'about.skill1': 'Photography',
        'about.skill2': 'Layout',
        'about.skill3': 'UX/UI Design',
        'about.skill4': 'Brand Identity',
        'about.skill5': 'Illustrations',
        'about.skill6': 'Guidelines',
        'about.skill7': 'Logos',
        'about.skill8': '3D Modeling',
        'about.tools_title': 'Tools',
        'footer.eyebrow': 'Contact',
        'footer.title': 'Let\'s Create Something Great Together',
        'footer.sub': 'I\'m always available',
        'footer.phone_label': 'Phone',
        'footer.email_label': 'E-mail',
        'footer.vk_label': 'VK',
        'footer.telegram_label': 'Telegram',
        'footer.languages_title': 'Languages',
        'footer.lang_ru': 'Russian',
        'footer.lang_ru_level': 'native',
        'footer.lang_en': 'English',
        'footer.lang_en_level': 'B1-B2',
        'footer.lang_it': 'Italian',
        'footer.lang_it_level': 'A1-A2',
        'footer.form_name': 'Your name',
        'footer.form_email': 'Your email',
        'footer.form_subject': 'Project topic',
        'footer.form_message': 'Tell me about your project...',
        'footer.form_submit': 'Send message'
    }
};

if (langSwitch) {
    const langSpans = langSwitch.querySelectorAll('[data-lang]');

    langSwitch.addEventListener('click', function() {
        // Переключаем активный класс
        langSpans.forEach(span => {
            span.classList.toggle('active');
        });

        const isRu = document.querySelector('[data-lang="ru"]').classList.contains('active');
        currentLang = isRu ? 'ru' : 'en';

        // Меняем язык
        translatePage(currentLang);
    });
}

function translatePage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                // Для полей ввода — меняем placeholder
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    // Отдельно для placeholder в полях с data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
}

// ============================================
// ПЛАВНЫЙ СКРОЛЛ
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        if (this.classList.contains('lang-switch')) return;

        e.preventDefault();

        const targetId = href;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// ФИЛЬТРЫ ПРОЕКТОВ
// ============================================
const filterGroups = document.querySelectorAll('.filter-row');

filterGroups.forEach(group => {
    const buttons = group.querySelectorAll('.filter-btn');
    const grid = document.querySelector('.works-grid');
    const items = grid ? grid.querySelectorAll('.work-item') : [];

    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            buttons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.dataset.filter;

            items.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
});

// ============================================
// ОТПРАВКА ФОРМЫ
// ============================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;

        if (!name || !email || !message) {
            const alertMsg = currentLang === 'ru'
                ? 'Пожалуйста, заполните все обязательные поля 🙏'
                : 'Please fill in all required fields 🙏';
            alert(alertMsg);
            return;
        }

        const submitBtn = this.querySelector('.btn-submit');
        const originalText = submitBtn.textContent;

        const loadingText = currentLang === 'ru' ? 'Отправка...' : 'Sending...';
        submitBtn.textContent = loadingText;
        submitBtn.disabled = true;

        setTimeout(() => {
            const successMsg = currentLang === 'ru'
                ? 'Спасибо! Я свяжусь с вами в ближайшее время 💌'
                : 'Thanks! I\'ll get back to you soon 💌';
            alert(successMsg);
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// ============================================
// АНИМАЦИЯ СТАТИСТИКИ
// ============================================
const stats = document.querySelectorAll('.stat-num');
let animated = false;

function animateStats() {
    if (animated) return;

    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;

    const rect = heroSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (isVisible) {
        stats.forEach(stat => {
            const originalText = stat.textContent;
            const number = parseInt(originalText);

            if (!isNaN(number)) {
                let current = 0;
                const target = number;
                const increment = target / 40;
                const stepTime = 1200 / 40;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    stat.textContent = Math.floor(current) + '+';
                }, stepTime);
            }
        });
        animated = true;
    }
}

window.addEventListener('load', animateStats);
window.addEventListener('scroll', animateStats);

// ============================================
// АНИМАЦИЯ ПОЯВЛЕНИЯ КАРТОЧЕК
// ============================================
const workItems = document.querySelectorAll('.work-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, {
    threshold: 0.15
});

workItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1)`;
    observer.observe(item);
});