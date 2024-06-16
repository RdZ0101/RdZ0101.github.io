function scrollToProjects() {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
}

let currentIndex = 0;
const cards = document.querySelectorAll('.carousel-card');

function showCard(index) {
    cards.forEach((card, i) => {
        card.classList.remove('active', 'next', 'prev');
        if (i === index) {
            card.classList.add('active');
        } else if (i === (index + 1) % cards.length) {
            card.classList.add('next');
        } else if (i === (index - 1 + cards.length) % cards.length) {
            card.classList.add('prev');
        }
        card.style.transform = `translateX(${(i - index) * 130}%) scale(${i === index ? 1 : 0.8})`;
        card.style.opacity = i === index ? 1 : 0.2;
    });
}

function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
}

function prevCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
}

showCard(currentIndex);