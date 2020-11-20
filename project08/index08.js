// const header = document.querySelector(".js-header"),
//   logoImg = document.querySelector(".logo"),
//   headerBtn = document.querySelectorAll(".button"),
//   hideMe = document.querySelectorAll(".hide-me");

// window.addEventListener("scroll", scrollHandler);

// function scrollHandler(event) {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     logoImg.classList.add("shrinkImg");
//     header.classList.add("shrinkHeader");
//   } else {
//     header.classList.remove("shrinkHeader");
//     logoImg.classList.remove("shrinkImg");
//   }
// }
// let headerSize = window.matchMedia("(max-width: 1025px)");
// function resizeHeader() {
//   if (headerSize.matches) {
//     journalBtn.classList.add("none");
//     shopBtn.classList.add("none");
//     studioBtn.innerHTML = "<i class='fas fa-bars'></i>";
//   } else {
//     journalBtn.classList.remove("none");
//     shopBtn.classList.remove("none");
//     studioBtn.innerHTML = "Nail Studio";
//   }
// }
// resizeHeader();

// headerSize.addEventListener("change", resizeHeader);

// let carouselSize = window.matchMedia("(max-width: 700px)");
// function carouselHandler() {
//   if (carouselSize.matches) {
//     carousel.forEach(function (caro) {
//       caro.classList.add("slide");
//     });
//   } else {
//     carousel.forEach(function (caro) {
//       caro.classList.remove("slide");
//     });
//   }
// }
// carouselHandler();

// carouselSize.addEventListener("change", carouselHandler);

// prodImg01.addEventListener("mouseenter", function (e) {
//   prodImg01.setAttribute("src", "images/shop04-01.webp");
// });
