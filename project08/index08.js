const header = document.querySelector(".js-header");

// let headerSize = window.matchMedia("(max-width: 1050px)");
// function resizeHeader() {
//   if (headerSize.matches) {
//     label.forEach(function (text) {
//       text.innerText = "";
//     });
//   } else {
//     label.forEach(function (text) {
//       text.innerText = "";
//     });
//   }
// }
// resizeHeader();

// headerSize.addEventListener("change", resizeHeader);

// prodImg01.addEventListener("mouseenter", function (e) {
//   prodImg01.setAttribute("src", "images/shop04-01.webp");
// });

$("#filters :checkbox").click(function () {
  var check = $("#filters :checkbox:checked").length;
  if (!check) return $(".card").show();
  $(".card").hide();
  $("#filters :checkbox:checked").each(function () {
    $("." + $(this).val()).show();
  });
});

(function ($) {
  function mediaSize() {
    if (window.matchMedia("(max-width: 1050px)").matches) {
      $("label").children("div").hide();
    } else {
      $("label").children("div").show();
    }
  }
  mediaSize();
  window.addEventListener("resize", mediaSize, false);
})(jQuery);
