/**
 * K ARCHIVE - Universal Celebration & Info System
 * এটি সব সেকশনে অভিনন্দন এবং ফাইনাল স্টেপস দেখানোর জন্য ব্যবহৃত হবে।
 */

// কনফেটি বা রঙিন কাগজ ছিটানোর ফাংশন (সব রঙের মিশ্রণ)
export function launchConfetti(colors) {
    const end = Date.now() + 3500;
    (function frame() {
        confetti({
            particleCount: 8,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 8,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });
        if (Date.now() < end) requestAnimationFrame(frame);
    }());
}

// অভিনন্দন এবং ফাইনাল স্টেপস দেখানোর মেইন ফাংশন
export function showCongrats(brandName, plotID, price, colors) {
    // ১. অভিনন্দন স্ক্রিন তৈরি
    const celebOverlay = document.createElement('div');
    celebOverlay.style = `position:fixed; top:0; left:0; width:100%; height:100%; background:#000; z-index:20000; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; color:#fff; font-family:'Times New Roman', serif;`;
    celebOverlay.innerHTML = `
        <h1 style="font-size: 45px; letter-spacing: 12px; margin:0;">CONGRATULATIONS!</h1>
        <h2 style="font-size: 30px; color: #9E7E45; margin: 25px 0; letter-spacing: 5px; border-top: 1px solid #222; padding-top: 20px; text-transform:uppercase;">${brandName}</h2>
        <p style="font-size: 14px; letter-spacing: 4px; color: #555;">ACQUIRED PLOT #${plotID} FOR $${price}</p>
    `;
    document.body.appendChild(celebOverlay);

    // রঙিন কাগজ ছিটানো
    launchConfetti(colors);

    // ২. ৩.৫ সেকেন্ড পর অভিনন্দন স্ক্রিন সরিয়ে ফাইনাল স্টেপস দেখানো
    setTimeout(() => {
        celebOverlay.remove();
        showFinalSteps();
    }, 3500);
}

// কাস্টমার সার্ভিসের তথ্যের পপ-আপ (Rolls-Royce Style)
function showFinalSteps() {
    const modal = document.createElement('div');
    modal.style = `position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.98); z-index:20000; display:flex; align-items:center; justify-content:center;`;
    modal.innerHTML = `
        <div style="background:#fff; color:#000; padding:50px; width:450px; text-align:center; border-radius:2px; position:relative; font-family:'Times New Roman', serif;">
            <h2 style="letter-spacing: 3px; margin:0 0 20px 0;">FINAL STEPS</h2>
            <div style="text-align: left; background: #f9f9f9; padding: 25px; margin-bottom: 25px; font-size: 13px; line-height: 1.8; border-left: 5px solid #000;">
                <b>Please send to Support:</b><br>
                1. Transaction Proof (Screenshot)<br>
                2. Brand Name & Selected Plot Number<br>
                3. Brand Logo (High Quality PNG)<br>
                4. Redirect URL for your Plot
            </div>
            <button onclick="window.open('https://wa.me/8801576940717')" style="background:#000; color:#fff; width:100%; padding:20px; border:none; font-weight:bold; letter-spacing:4px; cursor:pointer; text-transform:uppercase;">WHATSAPP SUPPORT</button>
            <button onclick="location.reload()" style="background:#eee; color:#000; width:100%; padding:15px; border:none; margin-top:10px; font-weight:bold; cursor:pointer; text-transform:uppercase;">BACK TO CANVAS</button>
        </div>
    `;
    document.body.appendChild(modal);
}
