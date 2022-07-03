$(document).ready(function () {
  $(".carousel").slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 1300,
    arrows: false,
  });

  $(".creationsCarousel").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    fade: false,
    adaptiveHeight: true,
  });

  $(".inspirationsCarousel").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    fade: true,
    adaptiveHeight: true,
  });
});
