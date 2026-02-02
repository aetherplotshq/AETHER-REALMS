// Custom Cursor Movement
const cursor = document.getElementById('custom-cursor');
document.addEventListener('mousemove', e => {
    cursor.style.top = e.clientY - 10 + 'px';
    cursor.style.left = e.clientX - 10 + 'px';
});

// Menu Toggle Function
function toggleMenu() {
    const menu = document.getElementById('menu-overlay');
    if(menu) menu.classList.toggle('open');
}

// Hover Effect for Cursor
document.querySelectorAll('button, li, .plot-unit, .vip-plot').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.style.transform = 'scale(2)');
    el.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
});
