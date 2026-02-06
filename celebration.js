// celebration.js
export const launchCelebration = (brandName) => {
    const overlay = document.getElementById('celeb-overlay');
    const brandDisplay = document.getElementById('congrats-brand');
    
    if (overlay && brandDisplay) {
        brandDisplay.innerText = brandName.toUpperCase();
        overlay.style.display = 'flex';

        // রঙিন কাগজ ছিটানোর লজিক
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 11000 };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);

            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);

        // ৫ সেকেন্ড পর অটো ক্লোজ হয়ে ফাইনাল স্টেপে যাবে
        setTimeout(() => {
            overlay.style.display = 'none';
            document.getElementById('final-modal').style.display = 'flex';
        }, 5000);
    }
};
