$("#filters :checkbox").click(function () {
  var check = $("#filters :checkbox:checked").length;
  if (!check) return $(".card").show();
  $(".card").hide();
  $("#filters :checkbox:checked").each(function () {
    $("." + $(this).val()).show();
  });
});

// $("#filters :checkbox").click(function (event) {
//   var checked = $("#filters :checkbox:not(:checked)");
//   console.log(checked);
//   if (checked.length > 0) return checked.siblings().children().addClass("gray");
//   if (checked.length > 0)
//     $(checked).each(function () {
//       $(this).siblings().children().addClass("gray");
//     });
//   else $(checked).siblings().children().removeClass("gray");
// });

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
