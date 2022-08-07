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
    $("a[href$='https://github.com/Yasu0304/yasu0304.github.io']").addClass("bi bi-github");
    $("a[href$='https://yasu0304.github.io/anyu_resume/past_design.html']").addClass("bi bi-box2-heart");


});