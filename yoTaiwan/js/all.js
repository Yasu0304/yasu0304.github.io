$(document).ready(function () {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    $('.phone-navbar').on('click', function (e) {
        e.preventDefault();
        $('.navbar').toggleClass('show');
    });

    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 400,
        itemMargin: 6,
        minItems: 2,
        maxItems: 4
    });
});
