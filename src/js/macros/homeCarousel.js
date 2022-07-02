const HomeCarousel = (function() {

  const init = function() {

    new Swiper('.home__carousel .swiper', {
      loop: false,
      speed: 1250,
      slidesPerView: 1,
      spaceBetween: 0,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      // pagination: {
      //   el: '.reviews__carousel .swiper-pagination',
      //   type: 'bullets',
      //   clickable: true
      // },
      navigation: {
        nextEl: '.home__nav--next',
        prevEl: '.home__nav--prev',
      },
    });

  };
  return {
    init: init
  };

})();

export default HomeCarousel;
