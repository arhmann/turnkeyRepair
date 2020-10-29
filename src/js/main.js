'use strict';

// Загрузка библиотек
// require('slick-carousel');


(function($) {
  const App = {
    init: function() {
      console.time('Time');
      const that = this;
      that.test();
      that.resize(that);
      console.timeEnd('Time');
    },
    test: function() {
      const $btn = $('.test');
      if ($btn.length) {
        $btn.on('click', function() {
          const self = $(this);
          console.log('test');
        })
      }
    },

    resize: function (that) {
      let timer = 0;
      $(window).on('resize', function () {
        clearTimeout(timer);
        timer = setTimeout(function () {

          console.log('resize');
        }, 250);
      });
    },
  };
  App.init();

})(jQuery);


