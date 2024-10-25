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

// Модальное окно
const modal = document.querySelector('.modal');
const contactBtn = document.querySelector('.contact-btn');
const closeModal = document.querySelector('.close-modal');

contactBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Запрещаем скролл при открытом модальном окне
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Возвращаем скролл
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
});

// Обработка формы
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Собираем данные формы
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Здесь будет логика отправки формы
    console.log('Form data:', formData);
    
    // Закрываем модальное окно
    modal.style.display = 'none';
    document.body.style.overflow = '';
    
    // Очищаем форму
    contactForm.reset();
});