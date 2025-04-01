// Placeholder JS – you can hook up PayPal links or quantity logic later
console.log("Page loaded");
 
// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Image Hover Effect with Animation Delay
    const images = document.querySelectorAll('.image');
    images.forEach((image, index) => {
        image.style.transitionDelay = `${index * 0.05}s`;
    });

    // Slide Up Title Animation on Hover
    const tabCards = document.querySelectorAll('.tab-card');
    tabCards.forEach(card => {
        const title = card.querySelector('h3');
        card.addEventListener('mouseenter', () => {
            title.style.transform = 'translateY(0)';
            title.style.opacity = '1';
        });
        card.addEventListener('mouseleave', () => {
            title.style.transform = 'translateY(20px)';
            title.style.opacity = '0';
        });
    });

    // Fade-In Animation for Tab Cards
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    tabCards.forEach(card => {
        observer.observe(card);
    });
});


