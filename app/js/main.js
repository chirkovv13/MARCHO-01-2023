$(function () {

  $('.top-slider__list').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.product-item__star').rateYo({
    readOnly: true,
    starWidth: '17px',
    normalFill: '#ccccce',
    ratedFill: '#ffc35b',
  });

});