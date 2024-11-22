
/**
 * Begain Toggle Button
 */
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const hamBurger = document.getElementById("hamburger");

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
const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");
  if (this.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-4");
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");
    scrollUpBtn.classList.remove("bottom-4");
  }
}

window.addEventListener('scroll', scrollUp);

// End Show Scroll Up



/**
 * Begain Change Background Header
 */
const scrollHeader = () => {
  const header = document.getElementById("navbar");
  
  if (this.scrollY >= 50) {
    header.classList.add("border-b","border-yellow-500","shadow-md","shadow-yellow-500");
  } else {
    header.classList.remove("border-b","border-yellow-500","shadow-md","shadow-yellow-500");
  }
}

window.addEventListener('scroll', scrollHeader);
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
const activeLink = () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = "home";
  // console.log(sections);
  // console.log(navLinks);
  // console.log(current);

  sections.forEach ((section) => {
    const sectionTop = section.offsetTop;

    if (this.scrollY >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((item) => {
    item.classList.remove("active");

    if (item.href.includes(current)) {
      item.classList.add("active");
    }
  });
}

window.addEventListener('scroll', activeLink);
// End Scroll Section Active link




/**
 * Begain Scroll Revail Animation
 */
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  reset: true
});

sr.reveal(`.home__data, .about__top, .populer__top, .review__top, .review__swiper, .footer__icon, .footer__content, .footer__right`);
sr.reveal(`.home__image`, { delay: 500, scale: 0.5 });
sr.reveal(`.service__card, .popular_card`, { interval: 300 });

sr.reveal(`.about__leaf`, { delay:1000, origin: "right" });
sr.reveal(`.about_item_1-img, .about_item_2-content`, { origin: "left" });
sr.reveal(`.about_item_2-img, .about_item_1-content`, { origin: "right" });

sr.reveal(`.review__leaf, .footer__floral`, { delay:1000, origin: "left" });
// End Scroll Revail Animation



