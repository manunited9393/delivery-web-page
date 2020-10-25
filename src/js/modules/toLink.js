import $ from "jquery";

function goToLink() {
    $("a[href^='#']").on('click', function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        $('.header__menu').removeClass('header__menu_active');
        $('.main__overlay').removeClass('main__overlay');
        $('body').removeClass('main__overflow');
        $('.hamburger').removeClass('hamburger_active');
        return false;
    });
}

export default goToLink;