const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const carousel = document.querySelector('.carousel');
let currentIndex = 0;

function updateCarousel() {
    const width = carousel.clientWidth;
    carousel.style.transform = `translateX(-${currentIndex * width}px)`;

    // Disable buttons at the ends
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === document.querySelectorAll('.carousel-item').length - 1;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < document.querySelectorAll('.carousel-item').length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

window.addEventListener('resize', updateCarousel);
