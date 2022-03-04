$(document).ready(function () {
    $(".button").click(function (e) { 
        $(".th1").delay(0).slideDown();
        $(".th2").delay(1000).fadeIn();
        $(".th3").delay(2000).slideDown();
        $(".th4").delay(3000).show(0);
        //show會馬上出現，所以後面要寫上希望出現的時間，但前面有delay,所以要先把show的出現關起來
    });
});