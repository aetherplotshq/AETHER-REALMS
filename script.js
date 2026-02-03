/**
 * K ARCHIVE - Official Global Logic
 * Theme: Rolls Royce Minimalist Architecture
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // ১. স্মার্ট কার্সর লজিক (Double Element Trail)
    const dot = document.getElementById('cursor-dot');
    const outline = document.getElementById('cursor-outline');

    if (dot && outline) {
        document.addEventListener('mousemove', (e) => {
            // ডট সরাসরি মাউসের সাথে থাকবে
            dot.style.left = e.clientX + 'px';
            dot.style.top = e.clientY + 'px';

            // আউটলাইনটি আলতো করে অনুসরণ করবে (Smooth Glide)
            outline.animate({
                left: `${e.clientX}px`,
                top: `${e.clientY}px`
            }, { duration: 600, fill: "forwards" });
        });

        // ইন্টারেক্টিভ এলিমেন্টে গেলে বড় হওয়া
        const targets = document.querySelectorAll('a, button, .game-item, .plot-unit');
        targets.forEach(item => {
            item.addEventListener('mouseenter', () => {
                outline.style.transform = 'translate(-50%, -50%) scale(2)';
                outline.style.background = 'rgba(158, 126, 69, 0.1)';
                outline.innerHTML = 'VIEW'; // হোভার করলে ছোট করে টেক্সট দেখাবে
            });
            item.addEventListener('mouseleave', () => {
                outline.style.transform = 'translate(-50%, -50%) scale(1)';
                outline.style.background = 'none';
                outline.innerHTML = 'K';
            });
        });
    }

    // ২. স্ক্রল রিভিল এনিমেশন (লেখা নিচ থেকে উপরে উঠা)
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const revealPoint = 100;
            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // পেজ লোড হওয়ার সাথে সাথে একবার চেক করবে

    // ৩. হেডার স্ক্রল ইফেক্ট
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.style.height = '70px';
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
            } else {
                header.style.height = '90px';
                header.style.background = 'rgba(255, 255, 255, 0.9)';
                header.style.boxShadow = 'none';
            }
        });
    }
});

// ৪. চ্যাট সিস্টেম - অটো ডিলিট লজিক (প্রতি ৪ ঘণ্টা)
window.handleChatAutoClear = () => {
    const lastClear = localStorage.getItem('lastChatClear');
    const now = new Date().getTime();
    const fourHours = 4 * 60 * 60 * 1000;

    if (!lastClear || (now - lastClear) > fourHours) {
        console.log("Archive Notice: Chat History Cleared.");
        // এখানে আপনার চ্যাট ডিলিট করার ফাংশনটি কল হবে
        localStorage.setItem('lastChatClear', now);
        return true; // ক্লিয়ার হয়েছে
    }
    return false;
};

// ৫. প্রাইস ইনক্রিমেন্ট লজিক (আপডেট প্রতি $৯ চার্জ)
window.calculateUpdateFee = (currentPrice) => {
    const fee = 9;
    const newPrice = currentPrice + fee;
    return newPrice;
};

// ৬. সাকসেস নোটিফিকেশন (Luxury Style)
window.notifyElite = (msg) => {
    const notification = document.createElement('div');
    notification.style = `
        position: fixed; bottom: 40px; left: 50%; transform: translateX(-50%);
        background: #000; color: #fff; padding: 15px 40px; border: 1px solid #9E7E45;
        font-size: 10px; letter-spacing: 3px; z-index: 10001; text-transform: uppercase;
    `;
    notification.innerText = msg;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 4000);
};

// ৭. কন্টাক্ট সাপোর্ট (WhatsApp Redirect)
window.contactConcierge = () => {
    const message = encodeURIComponent("Hello HQ, I am ready with my Plot ID, Logo, and Payment Proof.");
    window.location.href = `https://wa.me/8801576940717?text=${message}`;
};
