const menu = document.querySelector("#menu");
const open_menu = document.querySelector(".open-menu");
const close_menu = document.querySelector(".close-menu");
const overlay = document.querySelector(".bg-overlay");
open_menu.addEventListener("click", function () {
  menu.classList.add("active");
});
close_menu.addEventListener("click", function () {
  menu.classList.remove("active");
});
overlay.addEventListener("click", function () {
  menu.classList.remove("active");
});
