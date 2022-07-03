$(document).ready(function () {
  $(".carousel").slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 1200,
    arrows: false,
    mobileFirst: true,
  });

  $(".creationsCarousel").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    fade: false,
    adaptiveHeight: true,
    mobileFirst: true,
  });

  $(".inspirationsCarousel").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    fade: true,
    adaptiveHeight: true,
    mobileFirst: true,
  });
});
