/*=============== SHOW MENU ===============*/
const navToggle = document.querySelector(".nav__toggle");
const navClose = document.querySelector(".nav__close");
const navMenu = document.querySelector(".nav__menu");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__item");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");

  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== POPULAR SWIPER ===============*/
const swiperPopular = new Swiper(".popular__container", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: "auto",
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 48,
    },
  },
});
/*=============== MIXITUP FILTER FEATURED ===============*/
const mixerFeature = mixitup(".featured__content", {
  selectors: {
    target: ".featured__card",
  },
  animation: {
    duration: 300,
  },
});

/* Link active featured */

const featuredLink = document.querySelectorAll(".featured__item");

function linkActive() {
  featuredLink.forEach((current) => current.classList.remove("active-link"));
  this.classList.add("active-link");
}

featuredLink.forEach((current) =>
  current.addEventListener("click", linkActive)
);

/*=============== SHOW SCROLL UP ===============*/
const scrollbutton = document.getElementById("scroll-up");
window.addEventListener("scroll", () => {
  if (this.scrollY >= 350) {
    scrollbutton.classList.add("show-scroll");
  } else {
    scrollbutton.classList.remove("show-scroll");
  }
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("serction[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 400,
});

sr.reveal(".home__title, .popular__container, .featured__filters");
sr.reveal(".home__subtitle", { delay: 200 });
sr.reveal(".home__elec", { delay: 300 });
sr.reveal(".home__img", { delay: 400 });
sr.reveal(".home__car-data", { delay: 500, interval: 100, origin: "bottom" });
sr.reveal(".home__button", { delay: 600, origin: "bottom" });
sr.reveal(".about__group, .offer__data", { origin: "left" });
sr.reveal(".about__data, .offer__img", { origin: "right" });
sr.reveal(".features__card, .logos__content, .footer__content", {
  interval: 200,
});
sr.reveal(".featured__card", { interval: 100 });
