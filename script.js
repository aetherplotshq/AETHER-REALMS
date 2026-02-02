/**
 * AETHER PLOTS - Global Logic
 * Brand: AK (Aether Plots)
 */

document.addEventListener('DOMContentLoaded', () => {
    // ১. কাস্টম মাউস কার্সর লজিক
    const cursor = document.getElementById('custom-cursor');
    
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            // কার্সরকে মাউসের সেন্টারে রাখা
            cursor.style.top = (e.clientY - 10) + 'px';
            cursor.style.left = (e.clientX - 10) + 'px';
        });

        // ক্লিকেবল এলিমেন্টের ওপর গেলে কার্সর বড় হওয়া
        const interactiveElements = document.querySelectorAll('button, a, .plot-unit, input, select');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(2)';
                cursor.style.backgroundColor = 'rgba(158, 126, 69, 0.1)'; // গোল্ডেন শ্যাডো
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.backgroundColor = 'transparent';
            });
        });
    }

    // ২. হেডার স্ক্রল ইফেক্ট (স্ক্রল করলে হেডার হালকা স্বচ্ছ হবে)
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)';
            header.style.height = '80px';
        } else {
            header.style.boxShadow = 'none';
            header.style.height = '100px';
        }
    });
});

// ৩. সাউন্ড নোটিফিকেশন ফাংশন
// এটি চ্যাট বা অন্য প্রয়োজনে কল করা যাবে
window.playNotifySound = () => {
    const audio = new Audio('notify.mp3');
    audio.play().catch(error => {
        console.log("Audio play blocked by browser. User interaction required.");
    });
};

// ৪. ডাটাবেস আপডেট করার পর সাকসেস মেসেজ (Global)
window.showSuccess = (message) => {
    alert("ESTATE NOTICE: " + message);
};

// ৫. কপি টু ক্লিপবোর্ড (অর্ডার পেজের জন্য)
window.copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied to clipboard: " + text);
    });
};

// ৬. মোবাইল মেনু টগল (ভবিষ্যতের জন্য রাখা হয়েছে)
window.toggleMenu = () => {
    console.log("Menu toggled");
    // আপনার মেনু ডিজাইন অনুযায়ী এখানে কোড যোগ করা যাবে
};
