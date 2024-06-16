document.addEventListener("DOMContentLoaded", () => {
    const viewProjectsBtn = document.getElementById("view-projects-btn");
    const prevCardBtn = document.getElementById("prev-card-btn");
    const nextCardBtn = document.getElementById("next-card-btn");

    viewProjectsBtn.addEventListener("click", scrollToProjects);
    prevCardBtn.addEventListener("click", prevCard);
    nextCardBtn.addEventListener("click", nextCard);
});

function scrollToProjects() {
    const projectsSection = document.getElementById("projects");
    projectsSection.scrollIntoView({ behavior: "smooth" });
}

function prevCard() {
    const carousel = document.querySelector(".carousel");
    const activeCard = carousel.querySelector(".carousel-card.active");
    const prevCard = activeCard.previousElementSibling || carousel.lastElementChild;

    activeCard.classList.remove("active");
    activeCard.classList.add("next");

    prevCard.classList.remove("prev");
    prevCard.classList.add("active");
}

function nextCard() {
    const carousel = document.querySelector(".carousel");
    const activeCard = carousel.querySelector(".carousel-card.active");
    const nextCard = activeCard.nextElementSibling || carousel.firstElementChild;

    activeCard.classList.remove("active");
    activeCard.classList.add("prev");

    nextCard.classList.remove("next");
    nextCard.classList.add("active");
}
