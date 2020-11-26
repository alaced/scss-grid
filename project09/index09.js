const header = document.querySelector(".js-header"),
  headerWrapper = document.querySelector(".header__wrapper"),
  logo = header.querySelector(".logo"),
  jeanBtn = header.querySelector(".jeans"),
  journalBtn = header.querySelector(".journal"),
  headerColumn = header.querySelectorAll(".header__column"),
  cartBtn = header.querySelector(".js-bag"),
  searchBtn = header.querySelector(".js-search"),
  women = header.querySelector(".women"),
  men = header.querySelector(".men");

window.addEventListener("scroll", scrollHandler);

var prevScrollpos = window.pageYOffset;

function scrollHandler(event) {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    logo.classList.add("none");
    jeanBtn.classList.add("none");
    journalBtn.classList.add("none");
    headerColumn.forEach(function (item) {
      item.classList.add("grid-row");
    });
    header.classList.add("header-height");
    headerWrapper.classList.add("header-padding");
  } else {
    logo.classList.remove("none");
    jeanBtn.classList.remove("none");
    journalBtn.classList.remove("none");
    headerColumn.forEach(function (item) {
      item.classList.remove("grid-row");
    });
    header.classList.remove("header-height");
    headerWrapper.classList.remove("header-padding");
  }
  prevScrollpos = currentScrollPos;
}

let headerSize = window.matchMedia("(max-width: 770px)");
function resizeHeader() {
  window.addEventListener("scroll", scrollHandler);
  var prevScrollpos = window.pageYOffset;
  function scrollHandler(event) {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos < currentScrollPos && headerSize.matches) {
      logo.classList.add("display");
      women.classList.add("none");
      men.classList.add("none");
      journalBtn.innerHTML = "";
      jeanBtn.innerHTML = "";
    }
    prevScrollpos = currentScrollPos;
  }
  if (headerSize.matches) {
    searchBtn.innerHTML = '<i class="fas fa-bars"></i>';
    cartBtn.innerHTML = '<i class="fas fa-shopping-cart"></i>';
    women.classList.add("none");
    men.classList.add("none");
    logo.classList.add("display");
    journalBtn.innerHTML = "";
    jeanBtn.innerHTML = "";
  } else {
    searchBtn.innerHTML = "Search";
    cartBtn.innerHTML = "Bag (0)";
    women.classList.remove("none");
    men.classList.remove("none");
    journalBtn.innerHTML = "Jeans";
    jeanBtn.innerHTML = "Journal";
    logo.classList.remove("display");
  }
}
resizeHeader();
headerSize.addEventListener("change", resizeHeader);
