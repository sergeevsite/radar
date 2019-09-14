$(document).ready(function(){

// Мобильное меню
$('#menuButton').on('click', menuMobile);

function menuMobile(event){
  event.preventDefault();
  $('#menuButton').toggleClass('header-mobile__button_active');
  $('#menuList').slideToggle(200);
  if($('#menuButton').hasClass('header-mobile__button_active')) {
    $('html, body').css('overflow', 'hidden');
  } else {
    $('html, body').css('overflow', 'visible');
  }
}

});