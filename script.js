document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth"
        });
    });
});

// ==========================
// Active Navbar
// ==========================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", function(){

        navLinks.forEach(nav => nav.classList.remove("active"));

        this.classList.add("active");

    });

});

// ==========================
// Scroll Animation
// ==========================

const cards = document.querySelectorAll(".card, .skill-card, .project-card");

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const position = card.getBoundingClientRect().top;

        const screen = window.innerHeight;

        if(position < screen - 100){

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.8s";

});

// ==========================
// Hero Image Animation
// ==========================

const heroImage = document.querySelector(".hero-image img");

if(heroImage){

setInterval(()=>{

heroImage.classList.toggle("floating");

},1500);

}

// ==========================
// Welcome Message
// ==========================

window.onload=function(){

console.log("Welcome to Dhanusiya Portfolio");

};

// ==========================
// Button Hover Effect
// ==========================

const buttons=document.querySelectorAll(".btn");

buttons.forEach(button=>{

button.addEventListener("mouseover",()=>{

button.style.transform="scale(1.05)";

});

button.addEventListener("mouseout",()=>{

button.style.transform="scale(1)";

});

});