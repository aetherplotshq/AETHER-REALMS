document.addEventListener('DOMContentLoaded', () => {
    const dot = document.getElementById('cursor-dot');
    const outline = document.getElementById('cursor-outline');

    // 1. Cursor Movement Logic
    document.addEventListener('mousemove', (e) => {
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';
        
        outline.animate({
            left: e.clientX + 'px',
            top: e.clientY + 'px'
        }, { duration: 400, fill: "forwards" });
    });

    // 2. Hover Effect for Cursor
    document.querySelectorAll('.interactive, .game-link, a, .copy-trigger, code, .vault-btn').forEach(item => {
        item.addEventListener('mouseenter', () => document.body.classList.add('hover-target'));
        item.addEventListener('mouseleave', () => document.body.classList.remove('hover-target'));
    });

    // 3. Scroll Reveal Logic
    function reveal() {
        document.querySelectorAll(".reveal").forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                el.classList.add("active");
            }
        });
    }
    window.addEventListener("scroll", reveal);
    reveal();

    // 4. Payment Modal Logic
    window.toggleModal = function(show) {
        document.getElementById('payment-modal').style.display = show ? 'flex' : 'none';
    };

    // 5. Copy to Clipboard
    window.copyV = function(text) {
        navigator.clipboard.writeText(text);
        alert("SECURED: ADDRESS COPIED TO CLIPBOARD");
    };
});
