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
