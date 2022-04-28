// GET DOM
const header = document.querySelector("header");
const hero = document.querySelector(".hero");
const heroTitle = document.querySelector(".hero__container");

const triggerIcons = document.querySelectorAll(".triggerIcon");
const triggerIconsMinus = document.querySelectorAll(".triggerIcon-minus");

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

function handleShowAccordion() {
  this.parentNode.parentNode.classList.add("showing");
}

function handleHideAccordion() {
  this.parentNode.parentNode.classList.remove("showing");
}

window.addEventListener("scroll", handleCheckScrollY);
window.addEventListener("DOMContentLoaded", handleAnimateHero);
triggerIcons.forEach((icon) =>
  icon.addEventListener("click", handleShowAccordion)
);
triggerIconsMinus.forEach((icon) =>
  icon.addEventListener("click", handleHideAccordion)
);
