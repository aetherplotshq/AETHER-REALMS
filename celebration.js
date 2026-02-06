/**
 * K ARCHIVE - Universal Celebration & Next Steps Logic
 */

export const launchCelebration = (brandName) => {
    const celebOverlay = document.getElementById('celeb-overlay');
    const brandDisplay = document.getElementById('celeb-brand-name');
    const finalModal = document.getElementById('final-modal');

    if (celebOverlay && brandDisplay) {
        // ১. অভিনন্দন স্ক্রিন দেখানো
        brandDisplay.innerText = brandName.toUpperCase();
        celebOverlay.style.display = 'flex';

        // ২. বার্থডে স্টাইল রঙিন ও লম্বা কাগজ (Confetti) ছিটানো
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;

        const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);

            // বাম পাশ থেকে রঙিন লম্বা কাগজ
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0, y: 0.6 },
                colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'],
                ticks: 300 // এটি কাগজকে লম্বা ও দীর্ঘস্থায়ী করে
            });
            // ডান পাশ থেকে রঙিন লম্বা কাগজ
            confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1, y: 0.6 },
                colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'],
                ticks: 300
            });
        }, 60);

        // ৩. ৫ সেকেন্ড পর অভিনন্দন স্ক্রিন সরিয়ে ৪টি তথ্যের তালিকা দেখানো
        setTimeout(() => {
            celebOverlay.style.display = 'none';
            if(finalModal) finalModal.style.display = 'flex';
        }, 5000);
    }
};
