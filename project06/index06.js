const header = document.querySelector(".header"),
  hideHeader = document.querySelector(".js-hideHeader"),
  headerIcon = document.querySelector(".js-headerIcon"),
  hideMe = document.querySelectorAll(".hide-me");

function scrollHandler(event) {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    header.classList.add("header-made");
  } else {
    header.classList.remove("header-made");
  }
}

window.addEventListener("scroll", scrollHandler);

$(document).ready(function () {
  $(window).scroll(function () {
    $(".hide-me").each(function (i) {
      var top_of_object = $(this).offset().top - 220;
      var top_of_window = $(window).scrollTop();
      if (top_of_window > top_of_object) {
        $(this).addClass("hide");
      }
      if (top_of_window < top_of_object) {
        $(this).removeClass("hide");
      }
    });
  });
});

let screenSize = window.matchMedia("(max-width: 768px)");

function screenHandler() {
  if (screenSize.matches) {
    hideHeader.classList.add("none");
    headerIcon.innerHTML = '<i class="fas fa-bars"></i>';
  } else {
    hideHeader.classList.remove("none");
    headerIcon.innerHTML = '<i class="fas fa-search"></i>';
  }
}
screenHandler();

screenSize.addEventListener("change", screenHandler);
