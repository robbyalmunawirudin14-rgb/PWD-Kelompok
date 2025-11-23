// Fade-in saat scroll
const elements = document.querySelectorAll('.fade');

function fadeScroll() {
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', fadeScroll);
fadeScroll();

// Form Contact
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("form-status").innerText =
        "Pesan Anda berhasil dikirim! ✔️";
});