$(document).ready(function () {
    var swiper = new Swiper(".dogSwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var swiper = new Swiper(".cartSwiper", {
        slidesPerView: 2,
        centeredSlides: false,
        slidesPerGroupSkip: 3,
        grabCursor: true,
        keyboard: {
            enabled: true,
        },
        breakpoints: {
            769: {
                slidesPerView: 5,
                slidesPerGroup: 5,
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
            delay: 2500,
            disableOnInteraction: false,
        },
    });
});