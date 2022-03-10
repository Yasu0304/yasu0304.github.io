$(document).ready(function () {
    //banner用
    var swiper = new Swiper(".banner-lg", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 3500,
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
    //推薦景點用
    var swiper = new Swiper(".togoSwiper", {
        slidesPerView: 1,
        centeredSlides: false,
        slidesPerGroupSkip: 1,
        grabCursor: true,
        keyboard: {
            enabled: true,
        },
        breakpoints: {
            769: {
                slidesPerView: 2,
                slidesPerGroup: 3,
            },
        },
        // scrollbar: {
        //     el: ".swiper-scrollbar",
        // },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
    });

    $('.phone-navbar').on('click', function (e) {
        e.preventDefault();
        $('.navbar').toggleClass('show');
    });

});
