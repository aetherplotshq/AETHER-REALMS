function toggleMenu() {
    document.getElementById('menu-overlay').classList.toggle('open');
}

// মাউস দিয়ে উপরে উঠালে (Scroll) লোগো ইফেক্ট যদি চান
window.onscroll = function() {
    let header = document.querySelector(".main-header");
    if (window.pageYOffset > 50) {
        header.style.height = "70px";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.02)";
    } else {
        header.style.height = "90px";
        header.style.boxShadow = "none";
    }
};
