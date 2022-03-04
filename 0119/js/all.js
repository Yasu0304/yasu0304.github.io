$(document).ready(function() {
    $('.nav-phone').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('show');
    });
});