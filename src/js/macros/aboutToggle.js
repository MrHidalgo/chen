const AboutToggle = (function() {
  const init = function() {

    $('.about__nav a').on('click', (ev) => {

      const el = $(ev.currentTarget),
        elID = el.attr('data-id');

      if(el.hasClass('is-active')) {

      } else {
        $('.about__block').hide();
        $('.about__block[data-block-id="' + elID + '"]').css('display', 'grid');

        $('.about__nav a').removeClass('is-active');
        el.addClass('is-active');
      }
    });

  };
  return {
    init: init
  };

})();

export default AboutToggle;
