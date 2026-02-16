// BIDCSA Website JavaScript

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
    
    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                nombre: document.getElementById('nombre').value,
                email: document.getElementById('email').value,
                telefono: document.getElementById('telefono').value,
                empresa: document.getElementById('empresa').value,
                servicio: document.getElementById('servicio').value,
                mensaje: document.getElementById('mensaje').value
            };
            
            // Display message element
            const formMessage = document.getElementById('formMessage');
            
            // Simulate form submission
            // In production, you would send this to a server endpoint
            console.log('Form Data:', formData);
            
            // Show success message
            formMessage.textContent = '¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.';
            formMessage.className = 'form-message success';
            
            // Reset form
            contactForm.reset();
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
            
            /* 
            PRODUCTION IMPLEMENTATION:
            
            To make the form functional, you need to:
            
            1. Use a form service like Formspree, Web3Forms, or EmailJS
            2. Or create your own backend endpoint to handle form submissions
            
            Example with Formspree:
            
            fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => {
                if (response.ok) {
                    formMessage.textContent = '¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.';
                    formMessage.className = 'form-message success';
                    contactForm.reset();
                } else {
                    throw new Error('Error en el envío');
                }
            })
            .catch(error => {
                formMessage.textContent = 'Hubo un error al enviar el mensaje. Por favor intenta nuevamente.';
                formMessage.className = 'form-message error';
            });
            */
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add animation on scroll (optional)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements with animation
    document.querySelectorAll('.service-card, .feature-card, .sector-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
