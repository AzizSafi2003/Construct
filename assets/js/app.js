/*========== SHOW MENU ==========*/
const navMenu = document.getElementById("nav-menu"),
  navClose = document.getElementById("nav-close"),
  navToggle = document.getElementById("nav-toggle");

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

/*======== REMOVE MOBILE MENU WHILE CLICKED ========*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*======== ADD HEADER BLUR ========*/
const bgHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", bgHeader);
bgHeader();

/*========== SWIPER JS ==========*/
let swiperCards = new Swiper(".services__swiper", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    540: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

/*========== SHOW SCROLL UP ==========*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
scrollUp();

/*======== SCROLL SECTIONS ACTIVE LINK ========*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href *= " + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*========== SCROLL REVEAL ANIMATIONS ==========*/
const sr = ScrollReveal({
  origin: "top",
  distance: "100px",
  duration: 2500,
  delay: 400,
});
sr.reveal(
  `.home__content, .services__data, .services__swiper, .footer__container`
);
sr.reveal(`.home__images`, { origin: "bottom", delay: 1000 });
sr.reveal(`.about__images, .contact__img`, { origin: "left" });
sr.reveal(`.about__data, .contact__data`, { origin: "right" });
sr.reveal(`.projects__card`, { interval: 100 });
