
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
    navMenu.classList.toggle("left-[-100%]");
    navMenu.classList.toggle("left-0");
    hamBurger.classList.toggle("ri-close-large-line");
});

navLinks.forEach (link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[-100%]");
        navMenu.classList.toggle("left-0");
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
const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    grabCursor: true,
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
  });
// End Swiper




/**
 * Begain Scroll Section Active link
 */
// End Scroll Section Active link




/**
 * Begain Scroll Revail Animation
 */
// End Scroll Revail Animation



