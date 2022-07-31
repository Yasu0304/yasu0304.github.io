$(document).ready(function() {
    $('.phoneNav').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('show');
    });
});