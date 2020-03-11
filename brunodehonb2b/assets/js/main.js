jQuery(function ($) {
    function headerFixed(x) {
        if (x.matches) {
            $('.header-main').addClass('fixed');
        } else {
            $('.header-main').removeClass('fixed');
        }
    }
    var x = window.matchMedia("(max-width: 768px)")
    headerFixed(x) 
    x.addListener(headerFixed)

})