const header = document.querySelector(".js-header"),
  headerGather = document.querySelector(".js-gather"),
  hideMe = document.querySelector(".js-hide");

window.addEventListener("scroll", scrollHandler);

function scrollHandler(event) {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    hideMe.classList.add("edit-logo");
    header.classList.add("shrinkHeader");
    headerGather.classList.add("gatherHeader");
  } else {
    hideMe.classList.remove("edit-logo");
    header.classList.remove("shrinkHeader");
    headerGather.classList.remove("gatherHeader");
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  const scrollpos = localStorage.getItem("scrollpos");
  if (scrollpos) window.scrollTo(0, scrollpos);
});

window.onbeforeunload = function (e) {
  localStorage.setItem("scrollpos", window.scrollY);
};

// if ("scrollRestoration" in history) {
//   history.scrollRestoration = "manual";
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
//     prodList.forEach(function (list) {
//       list.classList.add("carousel-inner");
//     });
//     prodItem.forEach(function (item) {
//       item.classList.add("carousel-item");
//     });
//     prodDesc.forEach(function (desc) {
//       desc.classList.add("carousel-caption");
//     });
//     indicator.classList.remove("none");
//   } else {
//     carousel.forEach(function (caro) {
//       caro.classList.remove("slide");
//     });
//     prodList.forEach(function (list) {
//       list.classList.remove("carousel-inner");
//     });
//     prodItem.forEach(function (item) {
//       item.classList.remove("carousel-item");
//     });
//     prodDesc.forEach(function (desc) {
//       desc.classList.remove("carousel-caption");
//     });
//     indicator.classList.add("none");
//   }
// }
// carouselHandler();

// carouselSize.addEventListener("change", carouselHandler);

// prodImg01.addEventListener("mouseenter", function (e) {
//   prodImg01.setAttribute("src", "images/shop04-01.webp");
// });
// prodImg01.addEventListener("mouseleave", function (e) {
//   prodImg01.setAttribute("src", "images/shop04.webp");
// });
// prodImg02.addEventListener("mouseenter", function (e) {
//   prodImg02.setAttribute("src", "images/shop05-01.webp");
// });
// prodImg02.addEventListener("mouseleave", function (e) {
//   prodImg02.setAttribute("src", "images/shop05.webp");
// });
// prodImg03.addEventListener("mouseenter", function (e) {
//   prodImg03.setAttribute("src", "images/shop06-01.webp");
// });
// prodImg03.addEventListener("mouseleave", function (e) {
//   prodImg03.setAttribute("src", "images/shop06.webp");
// });

// // prodPrice.addEventListener("mouseenter", function (e) {
// //   prodPrice.forEach(function(price) {
// //     price.innerText = "VIEW DETAIL";
// //   });
// // prodPrice.addEventListener("mouseleave", function (e) {
// //   prodPrice.forEach(function(price) {
// //     price.innerText = "$40.00";
// // });
