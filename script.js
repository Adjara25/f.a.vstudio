// Menu burger pour mobile
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animation du burger
    burger.classList.toggle('active');
});

// Fermer le menu au clic sur un lien
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        burger.classList.remove('active');
    });
});

// Smooth scroll pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Changer l'apparence de la navbar au scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(26, 26, 46, 0.98)';
        navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.background = 'rgba(26, 26, 46, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Animation au scroll pour les éléments
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
        }
    });
}, observerOptions);

// Observer les cartes de services
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Observer les items du portfolio
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.style.opacity = '0';
    observer.observe(item);
});

// Gestion du formulaire de contact
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Récupérer les valeurs du formulaire
    const formData = new FormData(contactForm);
    const name = e.target[0].value;
    const email = e.target[1].value;
    const phone = e.target[2].value;
    const message = e.target[3].value;
    
    // Afficher un message de confirmation
    alert(`Merci ${name} ! Votre message a été envoyé avec succès. Nous vous contacterons bientôt.`);
    
    // Réinitialiser le formulaire
    contactForm.reset();
    
    // En production, vous enverriez ces données à un serveur
    console.log('Données du formulaire:', { name, email, phone, message });
});

// Effet parallax subtil sur le hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Animation du compteur (optionnel - pour ajouter des statistiques)
function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Ajouter des effets de hover personnalisés
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Préloader (optionnel)
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Effet de typage pour le titre (optionnel)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Log pour confirmer que le script est chargé
console.log('F.A.V Studio - Portfolio chargé avec succès ✨');