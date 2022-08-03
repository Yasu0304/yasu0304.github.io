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
});