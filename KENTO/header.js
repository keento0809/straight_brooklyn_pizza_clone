// GET DOM
const header = document.querySelector("header");
const hero = document.querySelector(".hero");
const heroTitle = document.querySelector(".hero__container");

function handleCheckScrollY() {
  if (window.scrollY > 0 && header.classList.contains("active")) return;
  header.classList.add("active");
  if (window.scrollY === 0) header.classList.remove("active");
}

function handleAnimateHero() {
  hero.classList.remove("animating");
  setTimeout(() => {
    heroTitle.classList.remove("animating");
  }, 1000);
}

window.addEventListener("scroll", handleCheckScrollY);
window.addEventListener("DOMContentLoaded", handleAnimateHero);
