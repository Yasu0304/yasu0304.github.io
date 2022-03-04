$(document).ready(function() {
    // 打開左側選單
    $('.header-nav-bnt').click(function(event) {
        $('body').addClass('open');
    });
    // 關閉左側選單
    $('.aside-nav-bnt').click(function(event) {
        $('body').removeClass('open');
    });
});