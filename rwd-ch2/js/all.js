$(document).ready(function() {
    $(".mainbra-dropdown").click(function(event) {
        event.preventDefault();
        $(".mainbra-dropdown-open").slideToggle();
        $(".mainbra-dropdown").toggleClass("active");
    });
});