$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true
        });

    $(".btn-nav").on("click", function() {
        var target = $(this).data("target");
        $(target).toggleClass("nav__list--open");
    })
});