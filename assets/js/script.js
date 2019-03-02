var vid = document.querySelector('#home-bg-video');
vid.playbackRate = 2;

$(window).on('load', function(){
    setTimeout(function(){
        $('#status').fadeOut('slow');
        $('#preloader').fadeOut('slow');
    }, 2000);
});

$(function () {
    $('#sponsors-list').owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoPlayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    })
});

$(function(){
    $('#events-list').fadeIn('fast');
  });
  $(document).ready(function() {
      $(window).scroll( function(){
          $('.event').each( function(i){
              var medium_of_object = $(this).position().top + $(this).outerHeight()/2;
              var bottom_of_window = $(window).scrollTop() + $(window).height();
              var bottom_of_object = $(this).position().top + $(this).outerHeight();
              if( bottom_of_window > medium_of_object ){
                  $(this).animate({'opacity':'1'},500);   
              }
          }); 
      }); 
  });
    