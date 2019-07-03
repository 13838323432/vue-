
    var mySwiper = new Swiper('.swiper-container', {
            autoplay: true,
            loop: true,
        }) 
        
$(".attention h1").on('click', function () {
    $(this).toggleClass("attention_");
    $(this).siblings('h1').removeClass("attention_");
})  
$('.right li').eq(0).on('click', function () {
          window.location.href="my.html"
      })
$('.picture').on('click', function(){
    window.location.href = 'list.html';
})