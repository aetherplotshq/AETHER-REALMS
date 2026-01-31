// ১. Firebase Configuration (সহজ কানেকশনের জন্য কম্প্যাট মোড ব্যবহার করা হয়েছে)
const firebaseConfig = {
    databaseURL: "https://aether-realms-default-rtdb.firebaseio.com" 
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();

// ২. ইউআরএল থেকে গেমের নাম (Realm) খুঁজে বের করা
const params = new URLSearchParams(window.location.search);
const gameRealm = params.get('g') || 'FreeFire'; // যদি কিছু না থাকে তবে FreeFire ডিফল্ট

// ৩. ম্যাপ সেটআপ (১০x১০ = ১০০ প্লট)
const container = document.getElementById('map');
const totalPlots = 100;

// ৪. ১০০টি খালি প্লট তৈরি করা
function createGrid() {
    if(!container) return; // শুধু ড্যাশবোর্ড পেজে কাজ করবে
    
    container.innerHTML = ""; // আগের ডাটা পরিষ্কার করা
    for (let i = 1; i <= totalPlots; i++) {
        const plot = document.createElement('div');
        plot.className = 'plot';
        plot.id = `plot-${i}`;
        plot.innerHTML = `<span>#${i}</span>`;
        
        // প্লটে ক্লিক করলে অর্ডার পেজে নিয়ে যাবে
        plot.onclick = () => {
            location.href = `order.html?g=${gameRealm}&id=${i}`;
        };
        
        container.appendChild(plot);
    }
}

// ৫. ডাটাবেস থেকে লাইভ প্লটগুলো এনে ম্যাপে বসানো
function loadLivePlots() {
    const liveRef = db.ref('live/' + gameRealm);
    
    liveRef.on('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
            Object.values(data).forEach(item => {
                const plotEl = document.getElementById(`plot-${item.id}`);
                if (plotEl) {
                    // প্লটে ইমেজ এবং লিংক বসানো
                    plotEl.innerHTML = `
                        <a href="${item.url}" target="_blank" onclick="event.stopPropagation();">
                            <img src="${item.img}" title="${item.name}" alt="${item.name}">
                        </a>`;
                    plotEl.style.border = "1px solid gold"; // লাইভ প্লট হাইলাইট
                }
            });
        }
    });
}

// ৬. ইউটিলিটি ফাংশন (কপি করার জন্য)
window.copyVal = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied: " + text);
};

// পেজ লোড হলে ফাংশনগুলো কল করা
document.addEventListener('DOMContentLoaded', () => {
    if(container) {
        createGrid();
        loadLivePlots();
    }
});
