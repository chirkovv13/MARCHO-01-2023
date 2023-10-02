$(function () {

  // слфйдер
  $('.top-slider__list').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  // рейтинг
  $('.product-item__star').rateYo({
    readOnly: true,
    starWidth: '17px',
    normalFill: '#ccccce',
    ratedFill: '#ffc35b',
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

  // styler
  $('.select-style').styler();

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
  })

});