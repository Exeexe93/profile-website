$(document).ready(function () {
  $('.header-middle a[href*="#"]').on("click", function (event) {
    event.preventDefault();
    if ($(this).attr("href") === "#home") {
      $("html, body").stop(true).animate(
        {
          scrollTop: 0,
        },
        500
      );
    } else {
      $("html, body")
        .stop(true)
        .animate(
          {
            scrollTop: $($(this).attr("href")).offset().top - 10,
          },
          500
        );
    }
    return false;
  });
});

$(window).scroll(function () {
  var width = $(window).width();
});
