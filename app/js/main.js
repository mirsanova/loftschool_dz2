
  $(document).ready(function() {
    var viewerSwitcher = $('#viewer-switcher__inner'),
        btnUp = $(".btn-up"),
        accordeon = $("#accordeon__list li");

    viewerSwitcher.on('change', function () {

      var descBox = $(".desc__box");

      descBox.toggleClass("desc-grid");

      if ($(".second-nav").find(".second-nav__right").length > 0)
      {
          $(".second-nav__right").appendTo(".nav_full");
          $(".second-nav__right").toggleClass("second-nav__full");
      } else if ($(".nav_full").find(".second-nav__right").length > 0) {
          $(".second-nav__right").appendTo(".second-nav");
          $(".second-nav__right").toggleClass("second-nav__full");
      }
      document.getElementById("viewer-switcher__inner").focus();

    });

    btnUp.on("click", function (event) {
      event.preventDefault();
    $('body, html').animate({
        scrollTop: 0
      }, 1000);
    });

    accordeon.on("click", function (event) {
        event.preventDefault();
        $(".accordeon__item").find(".accordeon__trigger").removeClass("accordeon__trigger_active");
        $(this).find(".accordeon__trigger").toggleClass("accordeon__trigger_active");
        $(this).find("#accordeon__inner").toggleClass("accordeon__inner");
    });
  });
