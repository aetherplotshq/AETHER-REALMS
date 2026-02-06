/**
 * K ARCHIVE - Universal Celebration Logic
 */

export const launchCelebration = (brandName) => {
    const celebOverlay = document.getElementById('celeb-overlay');
    const brandDisplay = document.getElementById('congrats-brand');
    const finalModal = document.getElementById('final-info-modal');

    if (celebOverlay && brandDisplay) {
        brandDisplay.innerText = brandName.toUpperCase();
        celebOverlay.style.display = 'flex';

        // ১. বার্থডে স্টাইল রঙিন লম্বা কাগজ ছিটানো
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;

        const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);

            const particleCount = 4;
            // বাম পাশ থেকে
            confetti({
                particleCount,
                angle: 60,
                spread: 55,
                origin: { x: 0, y: 0.6 },
                colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'],
                ticks: 300
            });
            // ডান পাশ থেকে
            confetti({
                particleCount,
                angle: 120,
                spread: 55,
                origin: { x: 1, y: 0.6 },
                colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'],
                ticks: 300
            });
        }, 60);

        // ২. ৫ সেকেন্ড পর অভিনন্দন শেষ করে ফাইনাল তথ্যের পপ-আপ দেখানো
        setTimeout(() => {
            celebOverlay.style.display = 'none';
            if(finalModal) finalModal.style.display = 'flex';
        }, 5000);
    }
};
