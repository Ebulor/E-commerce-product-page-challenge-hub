const openNav = document.querySelector(".toggle-menu");
const closeNav = document.querySelector(".close-menu");
const nav = document.querySelector(".navbar");
const body = document.querySelector("body");

openNav.addEventListener("click", () => {
  nav.classList.add("nav-active");
  body.classList.add("nav-open");
});

closeNav.addEventListener("click", () => {
  nav.classList.remove("nav-active");
  body.classList.remove("nav-open");
});
