// ==========================
// NAVBAR & SECTIONS
// ==========================

const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

// ==========================
// SMOOTH SCROLL
// ==========================

navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ==========================
// STICKY NAVBAR + ACTIVE LINK
// ==========================

window.addEventListener("scroll", () => {

    // Sticky Navbar
    if(window.scrollY > 50){

        navbar.classList.add("sticky");

    }else{

        navbar.classList.remove("sticky");

    }

    // Active Navigation
    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if(
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ){

            current = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

// ==========================
// ROADMAP BUTTON
// ==========================

const roadmapBtn = document.querySelector(".primary");

if(roadmapBtn){

    roadmapBtn.addEventListener("click", () => {

        alert("🚀 Roadmap Generator Coming Soon!");

    });

}

// ==========================
// REVEAL ANIMATION
// ==========================

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight - 120){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();