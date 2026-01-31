// Menu Toggle Logic
window.toggleMenu = () => {
    const menu = document.getElementById('menu-overlay');
    menu.classList.toggle('open');
};

// Cookie Policy Logic
window.closeCookie = () => {
    document.getElementById('cookie-banner').style.display = 'none';
    localStorage.setItem('cookieAccepted', 'true');
};

// Check if cookies were already accepted
document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('cookieAccepted')) {
        const banner = document.getElementById('cookie-banner');
        if(banner) banner.style.display = 'none';
    }
});
