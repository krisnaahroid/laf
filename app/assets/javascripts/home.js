//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require swiper/dist/js/swiper.min

$(document).ready(function () {
  //initialize swiper when document ready
  var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
});
