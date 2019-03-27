$(function () {
    $('.slide').slick({
        slidesToShow: window.innerWidth > 320 ? 3 : 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000
    });
}); 