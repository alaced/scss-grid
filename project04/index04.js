const logo = document.querySelector(".js-logo"),
  headerList = document.querySelector(".js-header"),
  headerItem = headerList.querySelectorAll(".header__item"),
  hide = document.querySelector(".js-hide");

logo.addEventListener("mouseenter", function (e) {
  headerItem.forEach((list) => list.classList.add("header-change"));
});
logo.addEventListener("mouseleave", function (e) {
  headerItem.forEach((list) => list.classList.remove("header-change"));
});

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
