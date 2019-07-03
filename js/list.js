
 $.ajax({
     url: "./json/list.json",
     success: function (data) {
         //dot.js 模板引擎
         var sy_ = doT.template($('#sy').text());
         $('#list_num').html(sy_(data));
     }
 });
$(".cate button").eq(0).on('click', function () {
    $(this).addClass('color');
    $(this).siblings().removeClass('color');
    $('.one').toggleClass('block')
    $('.one').siblings('div').removeClass('block');
 })
$(".cate button").eq(1).on('click', function () {
    $(this).addClass('color');
    $(this).siblings().removeClass('color');
      $('.two').toggleClass('block')
   $('.two').siblings('div').removeClass('block');
 })
$(".cate button").eq(2).on('click', function () {
    $(this).addClass('color');
    $(this).siblings().removeClass('color');
      $('.three').toggleClass('block')
    $('.three').siblings('div').removeClass('block');
 })
$(".cate button").eq(3).on('click', function () {
    $(this).addClass('color');
    $(this).siblings().removeClass('color');
      $('.four').toggleClass('block')
     $('.four').siblings('div').removeClass('block');
})
 
$('.right li').eq(0).on('click', function () {
  window.location.href='my.html'
})
$('.left').on('click', function () {
  window.location.href='index.html'
})