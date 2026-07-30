const hamburger=document.getElementById("hamburger");

const mobileMenu=document.querySelector(".mobile-menu");

const closeBtn=document.querySelector(".mobile-close");

hamburger.addEventListener("click",()=>{

    hamburger.classList.add("active");

    mobileMenu.classList.add("active");

    document.body.style.overflow="hidden";

});



document.querySelectorAll(".mobile-menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        hamburger.classList.remove("active");

        mobileMenu.classList.remove("active");

        document.body.style.overflow="";

    });

});

closeBtn.addEventListener("click",()=>{

    hamburger.classList.remove("active");

    mobileMenu.classList.remove("active");

    document.body.style.overflow="";

});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });
});

const sections = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => {
    observer.observe(section);
});


const links = document.querySelectorAll("a");

links.forEach(link=>{

    link.addEventListener("click",function(e){

        const href=this.getAttribute("href");

        if(

            href &&
            !href.startsWith("#") &&
            !href.startsWith("http")

        ){

            e.preventDefault();

            document.body.classList.add("fade-out");

            setTimeout(()=>{

                window.location.href=href;

            },350);

        }

    });

});

const buttons = document.querySelectorAll("");

buttons.forEach(button => {

    button.addEventListener("click", function(e){

        const circle = document.createElement("span");

        circle.classList.add("ripple");

        const rect = button.getBoundingClientRect();

        circle.style.left = `${e.clientX - rect.left}px`;
        circle.style.top = `${e.clientY - rect.top}px`;

        button.appendChild(circle);

        setTimeout(() => {
            circle.remove();
        }, 600);

    });

});

const addButtons = document.querySelectorAll(".add-cart");

const cartItems = document.querySelector(".cart-items");

const total = document.getElementById("cart-total");

const count = document.getElementById("cart-count");

let totalPrice = 0;

let totalItems = 0;

addButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        document.querySelector(".empty-cart")?.remove();

        const name = button.dataset.name;

        const price = Number(button.dataset.price);

        const item = document.createElement("div");

        item.className = "cart-item";

        item.innerHTML = `
            <h4>${name}</h4>
            <p>$${price}</p>
        `;

        cartItems.appendChild(item);

        totalPrice += price;

        totalItems++;

        total.textContent = "$" + totalPrice.toFixed(2);

        count.textContent = totalItems;

    });

});

const hero = document.querySelector(".cover-v1");

const heroContent = document.querySelector(".hero-content");

hero.addEventListener("mousemove",(e)=>{

    const rect = hero.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const moveX = (x / rect.width - 0.5) * 30;

    const moveY = (y / rect.height - 0.5) * 30;

    heroContent.style.transform =
    `translate(${moveX}px, ${moveY}px)`;

});

hero.addEventListener("mouseleave",()=>{

    heroContent.style.transform="translate(0,0)";

});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(255,255,255,.95)";
        navbar.style.backdropFilter = "blur(10px)";
    } else {
        navbar.style.background = "transparent";
        navbar.style.backdropFilter = "none";
    }
});