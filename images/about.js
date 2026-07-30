/* ==========================
   SCROLL REVEAL ANIMATION
========================== */

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

            // Animate only once
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.2
});

reveals.forEach((section) => {
    observer.observe(section);
});


/* ==========================
   TEAM CARD HOVER EFFECT
========================== */

const members = document.querySelectorAll(".member");

members.forEach((member) => {

    member.addEventListener("mouseenter", () => {

        member.style.transform = "translateY(-12px) scale(1.03)";
        member.style.boxShadow = "0 20px 40px rgba(0,0,0,.15)";

    });

    member.addEventListener("mouseleave", () => {

        member.style.transform = "";
        member.style.boxShadow = "";

    });

});


/* ==========================
   WHY BOX HOVER EFFECT
========================== */

const whyBoxes = document.querySelectorAll(".why-box");

whyBoxes.forEach((box) => {

    box.addEventListener("mouseenter", () => {

        box.style.transform = "translateY(-10px)";
        box.style.transition = ".4s";

    });

    box.addEventListener("mouseleave", () => {

        box.style.transform = "translateY(0)";

    });

});


/* ==========================
   ACTIVE NAVIGATION
========================== */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => item.classList.remove("active"));

        link.classList.add("active");

    });

});


/* ==========================
   SMOOTH SCROLL TO TOP
========================== */

window.addEventListener("load", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});