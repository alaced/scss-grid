const header = document.querySelector(".js-header"),
  hideMe = document.querySelectorAll(".hide-me"),
  menu = document.querySelector(".js-menu");

let headerSize = window.matchMedia("(max-width: 700px)");
function resizeHeader() {
  if (headerSize.matches) {
    hideMe.forEach((btn) => {
      btn.classList.add("none");
    });
    menu.classList.add("header-menu");
    menu.innerHTML = "Menu";
  } else {
    hideMe.forEach((btn) => {
      btn.classList.remove("none");
    });
    menu.classList.remove("header-menu");
    menu.innerHTML = "Contact";
  }
}
resizeHeader();

headerSize.addEventListener("change", resizeHeader);
