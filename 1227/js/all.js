$(document).ready(function () {
  $(".addcart").click(function (e) { 
      $(this).parent().toggleClass('active');
  });
  //點擊.addcart的時候，自己就會自動偵測active的時機，連動父階層
});