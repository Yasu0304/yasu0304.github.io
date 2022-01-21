$(document).ready(function() {
    // $(".navbar-dropdown").click(function(event) {
    //     event.preventDefault();
    //     $(".navbar-dropdown-open").slideToggle();
    //     $(".navbar-dropdown").toggleClass("active");
    // });
    $(".navbar-btn li").click(function(event) {
        event.preventDefault();
        $(this).find(".navbar-dropdown-open").slideToggle();
        $(this).find(".navbar-dropdown").toggleClass("active");
        $(this).siblings().find("ul").slideUp();
        $(this).siblings().find("a").removeClass("active");
    });
    // 9. 下拉選單一次只會出現一個，其餘的進行收合。建議可修改成當點擊 "關於我們" 的時候，"產品介紹" 的選單會自動收合起來。
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        effect: 'flip',


        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'positionFromTop': 400,
    })
    $(".top a").click(function(event) {
        event.preventDefault();
        $("html,body").animate({
                scrollTop: 0
            },
            1000
        );
    });
    function showBtnCondition() {
        if ($(this).scrollTop() > 500) {
          $('.top').fadeIn();
            } else {
             $('.top').fadeOut();
           }
         }
     $(window).scroll(showBtnCondition);
     // .top 在頁面最上方時可以改為不顯示，待頁面向下滾動一段距離後再顯示，
});