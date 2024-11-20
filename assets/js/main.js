
/**
 * Begain Toggle Button
 */
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const hamBurger = document.getElementById("hamburger");

// console.log('ok 11');
// console.log(navMenu);
// console.log(navLinks);
// console.log(hamBurger);

// End Toggle Button
hamBurger.addEventListener ("click", () => {
    navMenu.classList.toggle("left-[0]");
    hamBurger.classList.toggle("ri-close-large-line");
});

navLinks.forEach (link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]");
        hamBurger.classList.toggle("ri-close-large-line");
    });
});

/**
 * Begain Show Scroll Up
 */
// End Show Scroll Up




/**
 * Begain Change Background Header
 */
// End Change Background Header




/**
 * Begain Swiper
 */
// End Swiper




/**
 * Begain Scroll Section Active link
 */
// End Scroll Section Active link




/**
 * Begain Scroll Revail Animation
 */
// End Scroll Revail Animation



