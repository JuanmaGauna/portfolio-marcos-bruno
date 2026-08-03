/*=========================================
            AOS
=========================================*/

AOS.init({
    duration: 900,
    once: true
});

/*=========================================
        NAVBAR SCROLL
=========================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

/*=========================================
    CERRAR MENÚ EN MÓVILES
=========================================*/

const navLinks = document.querySelectorAll(".nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navbarCollapse.classList.contains("show")) {

            bootstrap.Collapse.getInstance(navbarCollapse).hide();

        }

    });

});