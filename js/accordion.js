$(function(){
  $('.accordion_title').click(function(){ 
    $(this).next('.accordion_inner').slideToggle();
    $(this).toggleClass("open");
    $('.accordion_title').not($(this)).next('.accordion_inner').slideUp();
    $('.accordion_title').not($(this)).removeClass("open");
  });
});