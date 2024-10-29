document.addEventListener('DOMContentLoaded', function () {
    // Анимация при скролле
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Оптимизация загрузки логотипа
    const logoImg = document.querySelector('.logo img');
    if (logoImg) {
        logoImg.loading = 'eager';

        logoImg.onerror = function () {
            console.error('Ошибка загрузки логотипа');
            this.style.display = 'none';
        };
    }
});

// Функции для модальных окон
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    if (!modal) return;

    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

// Инициализация обработчиков событий для модальных окон
document.addEventListener('DOMContentLoaded', () => {
    // Открытие модальных окон при клике на проекты
    document.querySelectorAll('[data-modal]').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = item.getAttribute('data-modal');
            openModal(modalId);
        });
    });

    // Закрытие по клику на кнопку или фон
    document.querySelectorAll('.modal').forEach(modal => {
        const closeButton = modal.querySelector('button');
        if (closeButton) {
            closeButton.addEventListener('click', () => closeModal(modal));
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('fixed')) {
                closeModal(modal);
            }
        });
    });

    // Закрытие по Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal:not(.hidden)');
            if (activeModal) closeModal(activeModal);
        }
    });
});