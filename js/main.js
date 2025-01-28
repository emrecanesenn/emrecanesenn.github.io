// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Mobile Menu Toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    
    // Burger Animation
    burger.classList.toggle('toggle');
    
    // Links Animation
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Proje Kartları Data
const projects = [
    {
        title: 'E-Ticaret Sitesi',
        description: 'React ve Node.js ile geliştirilmiş tam kapsamlı e-ticaret projesi',
        image: 'proje1.jpg',
        technologies: ['React', 'Node.js', 'MongoDB'],
        link: '#'
    },
    {
        title: 'Blog Platformu',
        description: 'Kişisel blog platformu',
        image: 'proje2.jpg',
        technologies: ['Vue.js', 'Firebase'],
        link: '#'
    }
];

// Proje Kartlarını Oluştur
const projectGrid = document.querySelector('.project-grid');

projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card');
    card.innerHTML = `
        <img src="images/${project.image}" alt="${project.title}">
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="technologies">
                ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <a href="${project.link}" class="btn primary">Projeyi Gör</a>
        </div>
    `;
    projectGrid.appendChild(card);
});

// Form Validasyonu
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Form verilerini al
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Basit validasyon
    if (!name || !email || !message) {
        alert('Lütfen tüm alanları doldurun!');
        return;
    }
    
    // Form gönderimi simülasyonu
    console.log('Form gönderildi:', { name, email, message });
    contactForm.reset();
    alert('Mesajınız başarıyla gönderildi!');
});

// ScrollReveal Animasyonları
ScrollReveal().reveal('.hero-content', {
    delay: 200,
    distance: '50px',
    origin: 'bottom'
});

ScrollReveal().reveal('.about-content', {
    delay: 300,
    distance: '50px'
});

ScrollReveal().reveal('.project-card', {
    delay: 200,
    interval: 200,
    distance: '30px',
    origin: 'bottom'
});