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
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '100%';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
            navMenu.style.background = '#2a2a2a';
            navMenu.style.padding = '20px';
            navMenu.style.zIndex = '1000';
        });
    }
});
