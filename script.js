// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Fade-in Animation on Scroll
const sections = document.querySelectorAll("section");

function revealSections() {
    const trigger = window.innerHeight * 0.8;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < trigger) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
}

// Initial Style
sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 1s ease";
});

window.addEventListener("scroll", revealSections);
revealSections();

// Button Click Effect
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    alert("Welcome! Thanks for visiting my Landing Page.");
});

// Navbar Background Change on Scroll
window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#084298";
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
    } else {
        header.style.background = "#0d6efd";
        header.style.boxShadow = "none";
    }

});

// Card Hover Animation
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-12px) scale(1.05)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });

});