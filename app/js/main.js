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
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 576 512">' +
      '<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />' +
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

  // слaйдер blog-page
  $('.blog-page__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="9px" height="14px" viewBox="0 0 9 14"><g><path d="M 0.265625 6.382812 C -0.0859375 6.722656 -0.0859375 7.277344 0.265625 7.621094 L 5.664062 12.871094 C 6.015625 13.210938 6.585938 13.210938 6.9375 12.871094 C 7.289062 12.527344 7.289062 11.972656 6.9375 11.632812 L 2.175781 7 L 6.9375 2.367188 C 7.289062 2.027344 7.289062 1.472656 6.9375 1.128906 C 6.585938 0.789062 6.011719 0.789062 5.660156 1.128906 L 0.261719 6.378906 Z M 0.265625 6.382812 "/></g></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="9px" height="14px" viewBox="0 0 9 14"><g><path d="M 8.734375 6.382812 C 9.085938 6.722656 9.085938 7.277344 8.734375 7.621094 L 3.335938 12.871094 C 2.984375 13.210938 2.414062 13.210938 2.0625 12.871094 C 1.710938 12.527344 1.710938 11.972656 2.0625 11.632812 L 6.824219 7 L 2.0625 2.367188 C 1.710938 2.027344 1.710938 1.472656 2.0625 1.128906 C 2.414062 0.789062 2.988281 0.789062 3.339844 1.128906 L 8.738281 6.378906 Z M 8.734375 6.382812 "/></g></svg></button>',
    infinite: false,
  });

  // burger-menu btn for a tablet
  $('.header__menu-btn').on('click', function () {
    $('.header__menu-list').toggleClass('header__menu-list--active');
  });

  // footer-menu list for a tablet
  $('.footer__top-subtitle--active').on('click', function () {
    if (window.matchMedia('(max-width: 344px)').matches) {
      $(this).next().slideToggle();
    } else {
      $('.footer__top-navigation').slideToggle()
    }
  });

  // product-item "link-box" for a tablet
  $('.product-item').on('click', function () {
    if (window.matchMedia('(max-width: 1201px)').matches) {
      $(this).toggleClass('product-item--hover');
    } else {}
  });




});