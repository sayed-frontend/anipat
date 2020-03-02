$(function() {
  // sticky header when scroll page down
  $(window).scroll(function() {
    if ($(window).scrollTop() >= 300) {
      $(".sticky-header").addClass("sticky");
    } else {
      $(".sticky-header").removeClass("sticky");
    }
  });

  // dropdown menu in mobile screen
  $("nav.mobile-menu div").click(function() {
    $(".mobile-menu > ul").slideToggle();
    $(".mobile-menu ul ul").css("display", "none");
    $(".mobile-menu ul li")
      .siblings()
      .removeClass("list-open");
  });

  $(".mobile-menu ul li").click(function() {
    $(this)
      .siblings()
      .find("ul")
      .slideUp();
    $(this)
      .find("ul")
      .slideToggle();
    $(this)
      .siblings()
      .removeClass("list-open");
    $(this).toggleClass("list-open");
  });

  // trigger owl carousel
  $(".owl-carousel").owlCarousel({
    center: true,
    items: 2,
    loop: true,
    margin: 100,
    dots: false,
    nav: true,
    navText: [
      '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
      '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 50
      },
      768: {
        items: 1,
        margin: 50
      }
    }
  });
});
