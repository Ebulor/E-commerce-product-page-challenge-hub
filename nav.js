const openNav = document.querySelector(".toggle-menu");
const closeNav = document.querySelector(".close-menu");
const nav = document.querySelector(".navbar");

openNav.addEventListener("click", () => {
  nav.classList.add("nav-active");
});

closeNav.addEventListener("click", () => {
  nav.classList.remove("nav-active");
});
