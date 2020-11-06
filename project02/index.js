const header = document.querySelector(".js-header"),
  logoImg = document.querySelector(".logo"),
  headerBtn = document.querySelectorAll(".button"),
  journalBtn = document.querySelector(".js-journal"),
  shopBtn = document.querySelector(".shopBtn"),
  studioBtn = document.querySelector(".studioBtn"),
  hideMe = document.querySelectorAll(".hide-me");

window.addEventListener("scroll", scrollHandler);

function scrollHandler(event) {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    logoImg.classList.add("shrinkImg");
    header.classList.add("shrinkHeader");
  } else {
    header.classList.remove("shrinkHeader");
    logoImg.classList.remove("shrinkImg");
  }
}
let screen = window.matchMedia("(max-width: 1025px)");
function resizeScreen() {
  if (screen.matches) {
    journalBtn.classList.add("none");
    shopBtn.classList.add("none");
    studioBtn.innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    journalBtn.classList.remove("none");
    shopBtn.classList.remove("none");
    studioBtn.innerHTML = "Nail Studio";
  }
}
resizeScreen();

screen.addEventListener("change", resizeScreen);
