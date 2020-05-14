$(document).ready(function () {
  $('.header-middle a[href*="#"]').on("click", function () {
    if ($(this).attr("href") === "#home") {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        2000
      );
    } else {
      $("html, body").animate(
        {
          scrollTop: $($(this).attr("href")).offset().top - 10,
        },
        2000
      );
    }
  });
});
