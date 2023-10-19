$(function () {

  // слaйдер index
  $('.top-slider__list').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  // рейтинг
  $('.star').rateYo({
    readOnly: true,
    starWidth: '17px',
    normalFill: '#ccccce',
    ratedFill: '#ffc35b',
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 576 512">'+
    '<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />'+
  '</svg>'
  });

  // таймер
  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  };

  function initializeClock(id, endtime) {
    const clock = document.querySelector('.time');
    const daysSpan = clock.querySelector('.promo__days');
    const hoursSpan = clock.querySelector('.promo__hours');
    const minutesSpan = clock.querySelector('.promo__minutes');
    const secondsSpan = clock.querySelector('.promo__seconds');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      };
    };

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  };
  $(function () { //если таймер не будет работать, то удалить фанкшн и скобки
    const deadline = $('.time').attr('data-time');
    initializeClock('time', deadline);
  });

  // ion.rangeSlider
  $('.filter__price-input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter__price-from').text(data.from);
      $('.filter__price-to').text(data.to);
    },
    onChange: function (data) {
      $('.filter__price-from').text(data.from);
      $('.filter__price-to').text(data.to);
    },
  });

  // styler shop-page, product-card
  $('.select-style, .product-one__filter-number').styler();

  //catalog__filter - grid > list > grid
  $('.catalog__filter-btn').on('click', function () {
    $('.catalog__filter-btn').removeClass('catalog__filter-btn--active');
    $(this).addClass('catalog__filter-btn--active');
  });
  $('.button-list').on('click', function () {
    $('.product-item').addClass('product-item--list');
  })
  $('.button-grid').on('click', function () {
    $('.product-item').removeClass('product-item--list');
  });

  // слфйдер product-card
  $('.product-one__thumb').slick({
    asNavFor: '.product-one__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    vertical: true,
  });
  $('.product-one__big').slick({
    asNavFor: '.product-one__thumb',
    draggable: false,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

  // product-card tabs
  $('.product-tabs__top-link').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-link').removeClass('product-tabs__top-link--active');
    $(this).addClass('product-tabs__top-link--active');
    
    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

});