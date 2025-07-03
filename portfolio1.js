document.addEventListener('DOMContentLoaded', function() {
    // Custom cursor
    const cursor = document.querySelector('.cursor');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });
    
    // Social media links with event listeners
    const facebookLinks = document.querySelectorAll('.facebook');
    const instagramLinks = document.querySelectorAll('.instagram');
    const linkedinLinks = document.querySelectorAll('.linkedin');
    
    facebookLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://www.facebook.com/Amgad.ashraf4o4/', '_blank');
        });
    });
    
    instagramLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://www.instagram.com/agd_47/', '_blank');
        });
    });
    
    linkedinLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://www.linkedin.com/in/amjad-ashraf-978054359/', '_blank');
        });
    });
    
    // Sticky header on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });
    
    // Typing animation
    const typed = new Typed('.typing-text span', {
        strings: ['Web Developer', 'UI/UX Designer', 'App Developer', 'Freelancer'],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });
    
    // Scroll reveal animations
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
    });
    
    sr.reveal('.home-content h1', {delay: 200});
    sr.reveal('.home-content .typing-text', {delay: 300});
    sr.reveal('.home-content p', {delay: 400});
    sr.reveal('.btn-group', {delay: 500});
    sr.reveal('.home-img', {delay: 600});
    
    sr.reveal('.about-img', {delay: 200});
    sr.reveal('.about-content', {delay: 300});
    
    sr.reveal('.heading', {delay: 200});
    sr.reveal('.services-container .service-box', {delay: 300, interval: 200});
    sr.reveal('.portfolio-container .portfolio-box', {delay: 300, interval: 200});
    
    // Active link on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 300) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Mobile menu toggle (for responsive design)
    const menuToggle = document.createElement('div');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.header').appendChild(menuToggle);
    
    menuToggle.addEventListener('click', () => {
        document.querySelector('.navbar').classList.toggle('active');
        menuToggle.innerHTML = document.querySelector('.navbar').classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
});