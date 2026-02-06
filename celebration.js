/**
 * K ARCHIVE - Minimalist Vector Celebration System
 * ভেক্টর কার্টুন অভিনন্দন এবং কাস্টমার সার্ভিস পপ-আপ।
 */

export function startCelebration(brandName, plotID, price) {
    // ১. ওভারলে তৈরি
    const overlay = document.createElement('div');
    overlay.id = 'universal-congrats';
    overlay.style = `position:fixed; top:0; left:0; width:100%; height:100%; background:#fff; z-index:99999; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; color:#000; font-family:'Times New Roman', serif; transition: 0.8s ease-in-out;`;
    
    overlay.innerHTML = `
        <style>
            @keyframes liftUp { 0% { transform: translateY(50px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
            @keyframes bounceName { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
            .vector-man { width: 150px; height: auto; margin-bottom: 20px; animation: liftUp 1s ease-out; }
            .brand-lift { font-size: 24px; font-weight: bold; letter-spacing: 5px; text-transform: uppercase; margin-bottom: 5px; animation: bounceName 2s infinite ease-in-out; color: #000; }
            .congrats-text { font-size: 45px; letter-spacing: 15px; font-weight: 900; border-top: 1px solid #000; padding-top: 20px; }
            .plot-info { font-size: 10px; letter-spacing: 5px; color: #888; margin-top: 15px; }
        </style>

        <svg class="vector-man" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="25" r="10" stroke="black" stroke-width="2"/>
            <path d="M50 35V70" stroke="black" stroke-width="2"/>
            <path d="M20 20L50 40L80 20" stroke="black" stroke-width="2" stroke-linecap="round"/> <path d="M35 90L50 70L65 90" stroke="black" stroke-width="2" stroke-linecap="round"/>
        </svg>

        <div class="brand-lift">${brandName}</div>
        <div class="congrats-text">CONGRATULATIONS</div>
        <div class="plot-info">ESTATE SECURED: PLOT #${plotID}</div>
    `;
    
    document.body.appendChild(overlay);

    // ২. ৪ সেকেন্ড পর পপ-আপ দেখানো
    setTimeout(() => {
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.remove();
            showServicePopup();
        }, 800);
    }, 4500);
}

function showServicePopup() {
    const modal = document.createElement('div');
    modal.style = `position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(255,255,255,0.98); z-index:99999; display:flex; align-items:center; justify-content:center;`;
    
    modal.innerHTML = `
        <div style="background:#fff; color:#000; padding:60px; width:400px; text-align:center; border: 1px solid #eee; box-shadow: 0 30px 60px rgba(0,0,0,0.05); font-family:'Times New Roman', serif;">
            <h2 style="letter-spacing: 5px; margin-bottom: 30px; font-size: 18px;">CONCIERGE ACCESS</h2>
            <div style="text-align: left; font-size: 12px; line-height: 2; border-bottom: 1px solid #eee; padding-bottom: 25px; margin-bottom: 30px;">
                <b>Required Information:</b><br>
                1. Full Name/Brand Name for Display<br>
                2. High Resolution Asset (JPG/PNG)<br>
                3. Destination URL (Link)<br>
                4. Screenshot of Successful Payment
            </div>
            
            <button onclick="window.open('https://wa.me/8801576940717')" style="background:#000; color:#fff; width:100%; padding:18px; border:none; font-weight:bold; letter-spacing:4px; cursor:pointer; text-transform:uppercase; margin-bottom: 15px;">WhatsApp Support</button>
            <button onclick="location.reload()" style="background:none; color:#aaa; width:100%; padding:10px; border:none; font-size:9px; letter-spacing:2px; cursor:pointer;">[ BACK TO ESTATE ]</button>
        </div>
    `;
    document.body.appendChild(modal);
}
