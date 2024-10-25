document.addEventListener('DOMContentLoaded', function() {
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

    // Функции для работы с модальными окнами
    function openModal(modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        if (modal.classList.contains('project-modal')) {
            setTimeout(() => {
                modal.querySelector('.project-modal-content').style.transform = 'translateY(0)';
                modal.querySelector('.project-modal-content').style.opacity = '1';
            }, 10);
        }
    }

    function closeModal(modal) {
        if (modal.classList.contains('project-modal')) {
            modal.querySelector('.project-modal-content').style.transform = 'translateY(20px)';
            modal.querySelector('.project-modal-content').style.opacity = '0';
            
            setTimeout(() => {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }, 300);
        } else {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // Обработка модальных окон портфолио
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const projectModals = document.querySelectorAll('.project-modal');
    const closeProjectButtons = document.querySelectorAll('.close-project-modal');

    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            const modalId = item.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            openModal(modal);
        });
    });

    closeProjectButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const modal = e.target.closest('.project-modal');
            closeModal(modal);
        });
    });

    projectModals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });

    // Обработка контактной формы
    const contactModal = document.querySelector('.modal');
    const contactBtn = document.querySelector('.contact-btn');
    const closeContactModal = document.querySelector('.close-modal');
    const contactForm = document.getElementById('contact-form');

    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            openModal(contactModal);
        });
    }

    if (closeContactModal) {
        closeContactModal.addEventListener('click', () => {
            closeModal(contactModal);
        });
    }

    if (contactModal) {
        contactModal.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                closeModal(contactModal);
            }
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            console.log('Form data:', formData);
            
            closeModal(contactModal);
            contactForm.reset();
        });
    }

    // Общий обработчик Escape для всех модальных окон
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const activeProjectModal = document.querySelector('.project-modal.active');
            if (activeProjectModal) {
                closeModal(activeProjectModal);
            }
            
            if (contactModal && contactModal.classList.contains('active')) {
                closeModal(contactModal);
            }
        }
    });
});