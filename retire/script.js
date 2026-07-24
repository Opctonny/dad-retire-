/* ===========================================
   Retirement Website
   Mr. Stanley Njoroge Mburu
=========================================== */

// ================================
// Fade-in animation on scroll
// ================================

const sections = document.querySelectorAll("section");

const revealSection = () => {
    const trigger = window.innerHeight * 0.85;

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < trigger) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
};

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealSection);
window.addEventListener("load", revealSection);


// ================================
// Active Navigation
// ================================

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ================================
// Simple Gallery Click Effect
// ================================

const images = document.querySelectorAll(".gallery img");

images.forEach(image => {

    image.addEventListener("click", () => {

        window.open(image.src, "_blank");

    });

});


// ================================
// Back To Top Button
// ================================

const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#D4AF37";
topButton.style.color = "#000";
topButton.style.fontSize = "20px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";
topButton.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ================================
// Footer Year (Optional)
// ================================

const yearSpan = document.getElementById("year");

if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}


// ================================
// Welcome Message
// ================================

window.addEventListener("load", () => {

    console.log(
        "Welcome to the Retirement Website of Mr. Stanley Njoroge Mburu."
    );

});