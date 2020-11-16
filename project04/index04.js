const headerList = document.querySelector(".js-header"),
  headerItem = headerList.querySelectorAll(".header__item"),
  hide = document.querySelector(".js-hide");

let screenSize = window.matchMedia("(max-width: 890px)");

function screenHandler() {
  if (screenSize.matches) {
    headerItem.forEach((item) => item.classList.add("none"));
    hide.classList.add("none");
  } else {
    headerItem.forEach((item) => item.classList.remove("none"));
    hide.classList.remove("none");
  }
}
screenHandler();

screenSize.addEventListener("change", screenHandler);
