$(document).ready(function () {
    $('.phoneNav').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('show');
    });

    // $("body").on("click", "resume", function (event) {
    //     //範圍裡.on("甚麼動作","哪個人")
    //     event.preventDefault();
    //     alert("有效喔!");
    //     //執行事件
    //   });

    // $(".resume").click(function (event) {
    //     event.preventDefault();
    //     //取消a原本的預設動作
    //     $("html, body").animate(
    //         {
    //             scrollTop: 0
    //             //回到網頁的某點
    //         },
    //         1000
    //         //速度控制
    //     );
    // });

    $(".open").click(function () {
        $(".none").slideDown();
    });
    $(".toClose").click(function () {
        $(".none").slideUp();
    });

    $("a[href$='mailto:blackcat7134@gmail.com']").addClass("bi bi-envelope-fill");
    $("a[href$='https://twitter.com/ladesign34']").addClass("bi bi-twitter");
    $("a[href$='https://github.com/Yasu0304/yasu0304.github.io']").addClass("bi bi-github");

    $(".top a").click(function(event) {
        event.preventDefault();
        $("html,body").animate({
                scrollTop: 0
            },
            1000
        );
    });
    function showBtnCondition() {
        if ($(this).scrollTop() > 1000) {
          $('.top').fadeIn();
            } else {
             $('.top').fadeOut();
           }
         }
     $(window).scroll(showBtnCondition);
     // .top 在頁面最上方時可以改為不顯示，待頁面向下滾動一段距離後再顯示，
});