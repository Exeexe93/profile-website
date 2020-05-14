$(document).ready(function () {
  $('.header-middle a[href*="#"]').on("click", function (event) {
    event.preventDefault();
    if ($(this).attr("href") === "#home") {
      $("html, body").stop(true).animate(
        {
          scrollTop: 0,
        },
        2000
      );
    } else {
      $("html, body")
        .stop(true)
        .animate(
          {
            scrollTop: $($(this).attr("href")).offset().top - 10,
          },
          2000
        );
    }
    return false;
  });
});
