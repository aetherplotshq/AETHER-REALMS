/* K ARCHIVE - Sovereign Digital Logic 2026 */
document.addEventListener('DOMContentLoaded', () => {

    const dot = document.getElementById('cursor-dot');
    const outline = document.getElementById('cursor-outline');

    // 1. Smooth Cursor Trail
    document.addEventListener('mousemove', (e) => {
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';
        
        outline.animate({
            left: `${e.clientX}px`,
            top: `${e.clientY}px`
        }, { duration: 600, fill: "forwards" });
    });

    // 2. Interaction Scaling (No Text - Subtle RR Look)
    const targets = document.querySelectorAll('.hover-target');
    targets.forEach(item => {
        item.addEventListener('mouseenter', () => {
            outline.style.width = '65px';
            outline.style.height = '65px';
            outline.style.background = 'rgba(158, 126, 69, 0.05)';
        });
        item.addEventListener('mouseleave', () => {
            outline.style.width = '30px';
            outline.style.height = '30px';
            outline.style.background = 'none';
        });
    });

    // 3. Scroll Reveal Logic
    const reveal = () => {
        const elements = document.querySelectorAll('.reveal');
        elements.forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < window.innerHeight - 150) el.classList.add('active');
        });
    };
    window.addEventListener('scroll', reveal);
    reveal();

    // 4. Modal Controls
    const modal = document.getElementById('submission-modal');
    document.getElementById('openConcierge').onclick = () => modal.style.display = "flex";
    document.getElementById('closeConcierge').onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };
});

// 5. Global Utility Functions
window.copyV = (text) => {
    navigator.clipboard.writeText(text);
    notifyElite("DATA SECURED TO CLIPBOARD");
};

window.notifyElite = (msg) => {
    const n = document.createElement('div');
    n.style = `position:fixed; bottom:40px; left:50%; transform:translateX(-50%); background:#000; color:#fff; padding:15px 40px; border:1px solid #9E7E45; font-size:10px; letter-spacing:3px; z-index:10001; text-transform:uppercase;`;
    n.innerText = msg;
    document.body.appendChild(n);
    setTimeout(() => n.remove(), 3000);
};

window.contactConcierge = () => {
    window.location.href = "https://wa.me/8801576940717?text=PROTOCOL_READY";
};

window.calculateUpdateFee = (currentPrice) => currentPrice + 9;
