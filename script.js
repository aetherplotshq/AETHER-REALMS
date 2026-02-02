const cursor = document.getElementById('custom-cursor');
document.addEventListener('mousemove', e => {
    cursor.style.top = e.clientY - 10 + 'px';
    cursor.style.left = e.clientX - 10 + 'px';
});

// যখনই কোনো বাটন বা প্লটের ওপর যাবে, কার্সর বড় হবে
document.querySelectorAll('button, .plot-unit, .vip-plot, li').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2.5)';
        cursor.style.backgroundColor = 'rgba(158, 126, 69, 0.1)';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.backgroundColor = 'transparent';
    });
});

function toggleMenu() {
    // আগের মেনু টগল লজিক
}
