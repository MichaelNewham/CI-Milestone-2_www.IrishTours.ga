(function ($) {
    'use strict';

    if ($.fn.init) {
        new WOW().init();
    }

    var $window = $(window);

    $window.on('scroll', function () {
        if ($window.scrollTop() > 0) {
            $('body').addClass('sticky');
        } else {
            $('body').removeClass('sticky');
        }
    });

    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });
    
})(jQuery);