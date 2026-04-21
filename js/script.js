document.addEventListener('DOMContentLoaded', () => {
    // Simple active link adjustment based on URL
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if(link.getAttribute('href') !== '/' && currentLocation.includes(link.getAttribute('href'))){
            link.classList.add('active');
        } else if (currentLocation === '/' && link.getAttribute('href') === 'index.html') {
            link.classList.add('active');
        }
    });

    // Mobile menu toggle (skeleton for future use)
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-links');

    if(mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});
