const RealCarousel = (function() {
  const init = function() {

    new Swiper('.real__block-1 .swiper', {
      loop: false,
      speed: 1250,
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.real__block-1 .real__pagination',
        type: 'fraction',
        clickable: true,
        renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' +
            ' of ' +
            '<span class="' + totalClass + '"></span>';
        }
      },
      navigation: {
        nextEl: '.real__block-1 .real__block-nav--next',
        prevEl: '.real__block-1 .real__block-nav--prev',
      },
    });

    new Swiper('.real__block-2 .swiper', {
      loop: false,
      speed: 1250,
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.real__block-2 .real__pagination',
        type: 'fraction',
        clickable: true,
        renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' +
            ' of ' +
            '<span class="' + totalClass + '"></span>';
        }
      },
      navigation: {
        nextEl: '.real__block-2 .real__block-nav--next',
        prevEl: '.real__block-2 .real__block-nav--prev',
      },
    });

  };
  return {
    init: init
  };

})();

export default RealCarousel;
