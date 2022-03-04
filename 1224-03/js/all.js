$(document).ready(function () {
    //大字級
    $(".b").click(function (event) { 
        event.preventDefault();
        $(".content p").css('font-size', '20pt');
    });
    //中字級
    $(".m").click(function (event) { 
        event.preventDefault();
        $(".content p").css('font-size', '16pt');
    });
    //小字級
    $(".s").click(function (event) { 
        event.preventDefault();
        $(".content p").css('font-size', '12pt');
    });
    //關閉廣告
    $(".ad-close").click(function (event) { 
        event.preventDefault();
        $(".ad").hide();
        //hide可以改其它消失的指令
    });
});