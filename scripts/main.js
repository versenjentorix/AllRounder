$(document).ready(function() {
    slickSlider();
});

function slickSlider() {

    $('.sliderImages').slick({
      infinite: true,
      dots: true,
      arrows: true,
      autoplay: true
    });
  }