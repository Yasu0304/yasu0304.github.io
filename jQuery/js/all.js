$(document).ready(function () {
    $(".dropdown").click(function (event) {
        event.preventDefault();
        $(".dropdown-open").slideToggle();
        $(".dropdown").toggleClass("active");
    });
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
});