
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


    });
      $(window).scroll(function(){
        var vpTop = $(this).scrollTop();
        if ( $(document).scrollTop() > 0 ) {
          btnUp.fadeIn('fast');
          if ( vpTop < 900) {
            btnUp.css({
              position: 'fixed'
            });
          } else {
            btnUp.css({
              position: 'absolute'
            });
          }
        } else {
          btnUp.fadeOut('fast');
       }
      });

    btnUp.on("click", function (event) {
      event.preventDefault();
    $('body, html').animate({
        scrollTop: 0
      }, 1000);
    });

    accordeon.on("click", function (event) {
        event.preventDefault();
        var accordeon = $(this);
        $(".accordeon__item").find(".accordeon__trigger").removeClass("accordeon__trigger_active");
        accordeon.find(".accordeon__trigger").toggleClass("accordeon__trigger_active");
        accordeon.find("#accordeon__inner").toggleClass("accordeon__inner");
    });
  });
