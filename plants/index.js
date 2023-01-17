const burgerMenu = document.querySelector(".burger-menu");
const navList = document.querySelector(".nav-list");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  navList.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(elem => elem.addEventListener("click", () => {
  burgerMenu.classList.remove("active");
  navList.classList.remove("active");
}))