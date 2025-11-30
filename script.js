document.addEventListener('DOMContentLoaded', function() {
    // Fade-in saat scroll (hanya jika ada elemen .fade)
    const elements = document.querySelectorAll('.fade');
    if (elements.length > 0) {
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
    }

    // Form Contact (hanya jika ada di halaman)
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            document.getElementById("form-status").innerText = "Pesan Anda berhasil dikirim! ✔️";
        });
    }

    // Form Order (hanya jika ada di halaman)
    const orderForm = document.getElementById("orderForm");
    if (orderForm) {
        orderForm.addEventListener("submit", function(event) {
            event.preventDefault();
            document.getElementById("order-status").innerText = "Pesanan Anda telah diterima! Kami akan segera memproses. ☕";
        });
    }
});