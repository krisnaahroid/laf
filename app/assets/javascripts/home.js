//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require swiper/dist/js/swiper.min
//= require owl.carousel/dist/owl.carousel.min
//= require main

$(document).ready(function () {
  //initialize swiper when document ready
  var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
        delay: 2500,
        disableOnInteraction: false,
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


    $('#menu-responsive').click(function(e){
      e.stopPropagation();
      $('.wrapper-rwd-menu').addClass('show-menu');
    });
    $('.wrapper-rwd-menu').click(function(e){
      e.stopPropagation();
    });

    $('body').click(function(e){
      $('.wrapper-rwd-menu').removeClass('show-menu');
    });

    $('#just-in').click(function(){
      $('ul.sub-justin').toggleClass('visible-nav');
    });

    $('#designer-laf').click(function(){
      $('ul.sub-designer-slider').toggleClass('visible-nav');
    });

    $('#sale-laf').click(function(){
      $('ul.sub-sale-slider').toggleClass('visible-nav');
    });


    var owl = $('.owl-one');
      owl.owlCarousel({
        loop:true,
        margin:10,
        dots: false,
        autoplay:true,
        autoplayTimeout: 5000,
        autoplaySpeed: 8000,
        autoplayHoverPause:true,
        nav:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            1000:{
                items:6
            }
        }
      });

      // Custom Button
      $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
      });
      $('.customPreviousBtn').click(function() {
        owl.trigger('prev.owl.carousel');
      });



      var owl4 = $('.owl-four');
        owl4.owlCarousel({
          loop:true,
          margin:10,
          dots: false,
          autoplay:false,
          autoplayTimeout: 3000,
          nav:false,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:4
              },
              1000:{
                  items:4
              }
          }
        });

        // Custom Button
        $('.productnext').click(function() {
          owl4.trigger('next.owl.carousel');
        });
        $('.productprev').click(function() {
          owl4.trigger('prev.owl.carousel');
        });




      var owl2 = $('.owl-two');
        owl2.owlCarousel({
          loop:true,
          margin:10,
          dots: false,
          autoplay:true,
          autoplayTimeout: 3000,
          nav:false,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:2
              },
              1000:{
                  items:4
              }
          }
        });

        // Custom Button
        $('.shopignext').click(function() {
          owl2.trigger('next.owl.carousel');
        });
        $('.shopigprev').click(function() {
          owl2.trigger('prev.owl.carousel');
        });


        var owl3 = $('.owl-three');
          owl3.owlCarousel({
            loop:true,
            margin:10,
            dots: true,
            nav:false,
            autoplay:true,
            autoplayTimeout: 5000,
            autoplaySpeed: 8000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:4
                }
            }
          });




});
