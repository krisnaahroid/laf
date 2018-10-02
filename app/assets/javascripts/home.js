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

// filter by index abc

    $('#filter-by>span>a').click(function(){
        var key = $(this).text();
        if(key == 'All') {
            $('#filtered>.persons>ul>li>a').show();
            return;
        }
        $('#filtered>.persons>ul>li>a').hide();
        $('#filtered>.persons>ul>li>a:content(^' + key +')').show()
    })

    $.extend($.expr[':'], {
       'content': function(elem, i, attr){
         return( RegExp(attr[3]).test($(elem).text()) );
       }
    });

});
