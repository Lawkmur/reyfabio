(function ($) {

	'use strict';	  

  var swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop: true,
  });

// Count Down JS

 $('#simple-timer').syotimer({
    year: 2021,
    month: 10,
    day: 5,
    hour: 9,
    minute: 30
});






})(jQuery);