/**
 * K ARCHIVE - Universal Celebration Engine
 * Handles Confetti and Congratulatory Messages
 */

export const launchCelebration = (brandName) => {
    // ক্যানভাসে থাকা সেলিব্রেশন ওভারলে খুঁজে বের করা
    const overlay = document.getElementById('celeb-overlay');
    const brandDisplay = document.getElementById('congrats-brand');
    
    if (overlay && brandDisplay) {
        brandDisplay.innerText = brandName.toUpperCase();
        overlay.style.display = 'flex';

        // Confetti Effect (রঙিন কাগজ)
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 11000 };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);

            const particleCount = 50 * (timeLeft / duration);
            // দুই পাশ থেকে কাগজ ছোড়া
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);

        // ৫ সেকেন্ড পর অভিনন্দন বার্তা সরিয়ে ফাইনাল পেমেন্ট ইনস্ট্রাকশন দেখানো
        setTimeout(() => {
            overlay.style.display = 'none';
            const finalModal = document.getElementById('final-modal');
            if(finalModal) finalModal.style.display = 'flex';
        }, 5000);
    }
};
