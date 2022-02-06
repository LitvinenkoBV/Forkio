const menuBtn = document.querySelector(".header__menu-btn");
const menuBurger = document.querySelector(".header__burger");
const body = document.querySelector("body");

let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuBurger.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuBurger.classList.remove("open");
    menuOpen = false;
  }
});

body.onresize = (e) => {
  if (e.target.innerWidth >= 480) {
    menuBtn.classList.remove("open");
    menuBurger.classList.remove("open");
    menuOpen = false;
  }
};
