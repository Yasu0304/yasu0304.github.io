$(document).ready(function () {

    $('.phoneNav').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('show');
    });


    $(".top a").click(function (event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: 0
        },
            1000
        );

    });
        // function showBtnCondition() {
        //     if ($(this).scrollTop() > 1000) {
        //         $('.top').fadeIn();
        //     } else {
        //         $('.top').fadeOut();
        //     }
        // }

    $(".open").click(function () {
        $(".none").slideDown();
    });
    $(".toClose").click(function () {
        $(".none").slideUp();
    });

    $("a[href$='mailto:blackcat7134@gmail.com']").addClass("bi bi-envelope-fill");
    $("a[href$='https://twitter.com/ladesign34']").addClass("bi bi-twitter");
    $("a[href$='https://github.com/Yasu0304/yasu0304.github.io']").addClass("bi bi-github");

});