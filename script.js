document.addEventListener("DOMContentLoaded", function() {
    const carouselCards = document.querySelectorAll('.carousel-card');
    const nextButton = document.getElementById('next-card-btn');
    const prevButton = document.getElementById('prev-card-btn');
    let currentIndex = 0;

    function updateCarousel() {
        carouselCards.forEach((card, index) => {
            card.classList.remove('active', 'prev', 'next');
            if (index === currentIndex) {
                card.classList.add('active');
            } else if (index === (currentIndex - 1 + carouselCards.length) % carouselCards.length) {
                card.classList.add('prev');
            } else if (index === (currentIndex + 1) % carouselCards.length) {
                card.classList.add('next');
            }
        });
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % carouselCards.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + carouselCards.length) % carouselCards.length;
        updateCarousel();
    });

    updateCarousel(); // Initial call to set up the carousel

    // Ensure visibility of the carousel cards
    carouselCards.forEach(card => {
        card.style.visibility = 'visible';
    });
});
