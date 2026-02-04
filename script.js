const dot = document.getElementById('cursor-dot');
const outline = document.getElementById('cursor-outline');

// Cursor Movement Logic
document.addEventListener('mousemove', (e) => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    outline.animate({
        left: e.clientX + 'px', top: e.clientY + 'px'
    }, { duration: 400, fill: "forwards" });
});

// Hover Effect Logic
document.querySelectorAll('.interactive, .game-link, a, .copy-trigger').forEach(item => {
    item.addEventListener('mouseenter', () => {
        document.body.classList.add('hover-target');
    });
    item.addEventListener('mouseleave', () => {
        document.body.classList.remove('hover-target');
    });
});

// Scroll Reveal Logic
function reveal() {
    document.querySelectorAll(".reveal").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll", reveal);
reveal();

// Copy to Clipboard Function
function copyV(text) {
    navigator.clipboard.writeText(text);
    alert("Copied: " + text);
}
