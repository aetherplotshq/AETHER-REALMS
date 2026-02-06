/**
 * K ARCHIVE - Universal Celebration & Info System
 * রঙিন কাগজ এবং প্রিমিয়াম পপ-আপের জন্য এই ফাইলটি ব্যবহার হবে।
 */

// কনফেটি লাইব্রেরি লোড করার জন্য এটি প্রয়োজন
const script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
document.head.appendChild(script);

export function showCongrats(brandName, plotID, price, canvasColors) {
    // ১. অভিনন্দন স্ক্রিন (Rolls Royce Style)
    const celebOverlay = document.createElement('div');
    celebOverlay.id = 'celeb-overlay';
    celebOverlay.style = `position:fixed; top:0; left:0; width:100%; height:100%; background:#000; z-index:30000; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; color:#fff; font-family:'Times New Roman', serif;`;
    celebOverlay.innerHTML = `
        <h1 style="font-size: 45px; letter-spacing: 12px; margin:0; font-weight:900;">CONGRATULATIONS!</h1>
        <h2 style="font-size: 30px; color: #9E7E45; margin: 25px 0; letter-spacing: 5px; border-top: 1px solid #222; padding-top: 20px; text-transform:uppercase;">${brandName}</h2>
        <p style="font-size: 14px; letter-spacing: 4px; color: #444;">ACQUIRED PLOT #${plotID} | INVESTMENT: $${price}</p>
    `;
    document.body.appendChild(celebOverlay);

    // ২. রঙিন কাগজ ছিটানো (সব রঙের মিশ্রণ)
    const end = Date.now() + 4000;
    const colors = canvasColors || ['#00d2ff', '#1e90ff', '#3a7bd5', '#f9d423', '#f83600'];

    (function frame() {
        if (typeof confetti !== 'undefined') {
            confetti({ particleCount: 10, spread: 60, origin: { x: 0 }, colors: colors });
            confetti({ particleCount: 10, spread: 60, origin: { x: 1 }, colors: colors });
        }
        if (Date.now() < end) requestAnimationFrame(frame);
    }());

    // ৩. ৩.৫ সেকেন্ড পর ফাইনাল স্টেপস দেখানো
    setTimeout(() => {
        celebOverlay.remove();
        showFinalSteps();
    }, 3500);
}

function showFinalSteps() {
    const modal = document.createElement('div');
    modal.style = `position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.98); z-index:30000; display:flex; align-items:center; justify-content:center;`;
    modal.innerHTML = `
        <div style="background:#fff; color:#000; padding:50px; width:450px; text-align:center; border-radius:2px; position:relative; font-family:'Times New Roman', serif; box-shadow: 0 40px 100px rgba(0,0,0,0.5);">
            <h2 style="letter-spacing: 4px; margin:0 0 30px 0; font-weight:bold;">FINAL STEPS</h2>
            <div style="text-align: left; background: #f9f9f9; padding: 25px; margin-bottom: 25px; font-size: 13px; line-height: 2; border-left: 5px solid #000;">
                <b>Please send to Support:</b><br>
                1. Transaction Proof (Screenshot)<br>
                2. Brand Name & Plot Number<br>
                3. Brand Logo (PNG)<br>
                4. Redirect URL
            </div>
            <button onclick="window.open('https://wa.me/8801576940717')" style="background:#000; color:#fff; width:100%; padding:20px; border:none; font-weight:bold; letter-spacing:5px; cursor:pointer; text-transform:uppercase; transition:0.3s;">WHATSAPP SUPPORT</button>
            <button onclick="location.reload()" style="background:#eee; color:#000; width:100%; padding:15px; border:none; margin-top:10px; font-weight:bold; cursor:pointer; text-transform:uppercase;">BACK TO CANVAS</button>
        </div>
    `;
    document.body.appendChild(modal);
}
