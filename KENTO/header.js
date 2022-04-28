// GET DOM
const header = document.querySelector("header");
console.log(header);

function handleCheckScrollY() {
  if (window.scrollY > 0 && header.classList.contains("active")) return;
  header.classList.add("active");
  if (window.scrollY === 0) header.classList.remove("active");
}

window.addEventListener("scroll", handleCheckScrollY);
