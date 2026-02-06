/**
 * K ARCHIVE - Universal Celebration Logic
 * This file handles the vibrant confetti effects and transitions.
 */

export const launchCelebration = (brandName) => {
    const celebOverlay = document.getElementById('celeb-overlay');
    const brandDisplay = document.getElementById('congrats-brand');
    const finalModal = document.getElementById('final-modal'); // আপনার HTML এর সাথে ম্যাচ করা হয়েছে

    if (celebOverlay && brandDisplay) {
        // ১. কাস্টমারের ব্র্যান্ডের নাম বড় অক্ষরে দেখানো
        brandDisplay.innerText = brandName.toUpperCase();
        celebOverlay.style.display = 'flex';

        // ২. বার্থডে স্টাইল রঙিন লম্বা কাগজ (Confetti) ছিটানোর লজিক
        const duration = 5 * 1000; // ৫ সেকেন্ড চলবে
        const animationEnd = Date.now() + duration;

        const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);

            const particleCount = 4;
            
            // স্ক্রিনের বাম পাশ থেকে রঙিন কাগজ ছোড়া
            confetti({
                particleCount,
                angle: 60,
                spread: 55,
                origin: { x: 0, y: 0.6 },
                colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'],
                ticks: 300
            });
            
            // স্ক্রিনের ডান পাশ থেকে রঙিন কাগজ ছোড়া
            confetti({
                particleCount,
                angle: 120,
                spread: 55,
                origin: { x: 1, y: 0.6 },
                colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'],
                ticks: 300
            });
        }, 60);

        // ৩. ঠিক ৫ সেকেন্ড পর অভিনন্দন স্ক্রিন বন্ধ করে প্রয়োজনীয় তথ্যের পপ-আপ দেখানো
        setTimeout(() => {
            celebOverlay.style.display = 'none';
            if(finalModal) finalModal.style.display = 'flex';
        }, 5000);
    }
};
