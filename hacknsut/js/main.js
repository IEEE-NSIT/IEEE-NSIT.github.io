 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: true
 });


 /*$(document).ready(function() {
  
  
  })*/

jQuery(document).ready(function($) {

	
  var name = 'a.jpg';
  var index = 0;
  var image_address, list, loop, last_index;
  var scroll_position = 0;
  var temp = 0;
  var status = 'on';
  
  $('#thumbs').niceScroll();
  
  $('.thumbs_style img').first().css('border', '3px solid #fff');
  $('#image').html(" <img class='gallery_img_style' src='hacknsut/images/" + name + "' > ");
  
  loop = setInterval(slider, 3000);
  
  function slider() {
      last_index = $('.thumbs_style').last().index();
  
      if (index == last_index) {
          index = $('.thumbs_style').first().index();
  
      } else {
          index = index + 1;
  
      }
  
      image_address = $('.thumbs_style').eq(index).find('img').attr('src');
      list = image_address.split('/', 4);
      name = list[3];
  
      $('#image img').fadeOut(300, function() {
          $('#image').html(" <img class='gallery_img_style' src='hacknsut/images/" + name + "' > ");
          $('#image img').fadeOut(0);
          $('#image img').fadeIn(300);
  
      });
  
      $('#large_img').fadeOut(300, function() {
  
          $(this).attr('src', 'hacknsut/images/' + name);
          $(this).fadeIn(300);
  
      });
  
      $('.thumbs_style img').css('border', '3px solid rgba(0,0,0,0.4)');
      $('.thumbs_style').eq(index).find('img').css('border', '3px solid #fff');
  
      if (index >= 4) {
  
          scroll_position = $('#thumbs').scrollLeft() + 115;
  
          $('#thumbs').animate({
  
              scrollLeft: scroll_position
  
          }, 500);
  
      }
  
      if (temp == 1) {
  
          $('#thumbs').animate({
  
              scrollLeft: 0
  
          }, 500);
  
          temp = 0;
      }
  
      if (index == last_index) {
  
          temp = 1;
      }
  
  }
  
  $('.thumbs_style img').click(function() {
  
      clearInterval(loop);
  
      index = $(this).parent().index();
  
      $('.thumbs_style img').css('border', '3px solid rgba(0,0,0,0.4)');
      $(this).css('border', '3px solid #fff');
  
      image_address = $(this).attr('src');
      list = image_address.split('/', 4);
      name = list[3];
  
      $('#image img').fadeOut(300, function() {
          $('#image').html(" <img class='gallery_img_style' src='hacknsut/images/" + name + "' > ");
          $('#image img').fadeOut(0);
          $('#image img').fadeIn(300);
  
      });
  
      if (status == 'on') {
          loop = setInterval(slider, 3000);
      }
  
  });
  
  name = $('.gallery_img_style').attr('src');
  
  $('body').append("<div id='enlarge'><div> <img id='large_img' src='" + name + "'> <img id='large_close' src='hacknsut/images/icons/close.png'> <img id='large_left' src='hacknsut/images/icons/left.png'> <img id='large_right' src='hacknsut/images/icons/right.png'> <img id='large_pause' src='hacknsut/images/icons/pause.png'> <img id='large_play' src='hacknsut/images/icons/play.png'>  </div></div> ");
  
  $('#enlarge').hide();
  
  $('#expand').click(function() {
  
      $('#enlarge').fadeIn(250);
  
  });
  
  $('#enlarge').css({
  
      'background': 'rgb(0,0,0)',
      'width': '100%',
      'height': '100%',
      'position': 'fixed',
      'top': '0',
      'left': '0'
  });
  
  $('#enlarge div').css({
  
      'width': '1000px',
      'height': '700px',
      'margin': '0px auto',
      'margin-top': '35px',
      'position': 'relative'
  
  });
  
  $('#large_img').css({
  
      'width': '1000px',
      'height': '700px'
  });
  
  $('#large_close').css({
  
      'width': '13px',
      'position': 'absolute',
      'top': '8px',
      'right': '8px'
  
  });
  
  $('#large_left').css({
  
      'width': '23px',
      'position': 'absolute',
      'top': '314px',
      'left': '10px'
  
  });
  
  $('#large_right').css({
  
      'width': '23px',
      'position': 'absolute',
      'top': '314px',
      'right': '10px'
  
  });
  
  $('#large_pause,#large_play').css({
  
      'width': '12px',
      'position': 'absolute',
      'top': '318px',
      'right': '40px'
  });
  
  $('#large_play').css({
  
      'display': 'none'
  });
  
  $('#large_close').click(function() {
  
      $('#enlarge').fadeOut(250, function() {
  
          $(this).hide();
  
      });
  });
  
  $('#pause,#large_pause').click(function() {
  
      status = 'off';
      $('#pause,#large_pause').fadeOut();
      $('#play,#large_play').fadeIn();
      clearInterval(loop);
  });
  
  $('#play,#large_play').click(function() {
  
      status = 'on';
      $('#play,#large_play').fadeOut();
      $('#pause,#large_pause').fadeIn();
      loop = setInterval(slider, 3000);
  });
  
  $('#righty,#large_right').click(function() {
  
      clearInterval(loop);
  
      last_index = $('.thumbs_style').last().index();
  
      if (index == last_index) {
          index = $('.thumbs_style').first().index();
  
      } else {
          index = index + 1;
  
      }
  
      image_address = $('.thumbs_style').eq(index).find('img').attr('src');
      llist = image_address.split('/', 4);
      name = list[3];
  
      $('#image img').fadeOut(250, function() {
          $('#image').html(" <img class='gallery_img_style' src='hacknsut/images/" + name + "' > ");
          $('#image img').fadeOut(0);
          $('#image img').fadeIn(250);
  
      });
  
      $('#large_img').fadeOut(250, function() {
  
          $(this).attr('src', 'hacknsut/images/' + name);
          $(this).fadeIn(250);
  
      });
  
      $('.thumbs_style img').css('border', '3px solid rgba(0,0,0,0.4)');
      $('.thumbs_style').eq(index).find('img').css('border', '3px solid #fff');
  
      if (status == 'on') {
          loop = setInterval(slider, 3000);
      }
  
  });
  
  $('#lefty,#large_left').click(function() {
  
      clearInterval(loop);
  
      if (index == $('.thumbs_style').first().index()) {
          index = $('.thumbs_style').last().index();
  
      } else {
          index = index - 1;
  
      }
  
      image_address = $('.thumbs_style').eq(index).find('img').attr('src');
      list = image_address.split('/', 4);
      name = list[3];
  
      $('#image img').fadeOut(300, function() {
          $('#image').html(" <img class='gallery_img_style' src='hacknsut/images/" + name + "' > ");
          $('#image img').fadeOut(0);
          $('#image img').fadeIn(300);
  
      });
  
      $('#large_img').fadeOut(250, function() {
  
          $(this).attr('src', 'hacknsut/images/' + name);
          $(this).fadeIn(250);
  
      });
  
      $('.thumbs_style img').css('border', '3px solid rgba(0,0,0,0.4)');
      $('.thumbs_style').eq(index).find('img').css('border', '3px solid #fff');
  
      if (status == 'on') {
          loop = setInterval(slider, 3000);
      }
  
  });

	"use strict";

	

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();


	var siteMagnificPopup = function() {
		$('.image-popup').magnificPopup({
	    type: 'image',
	    closeOnContentClick: true,
	    closeBtnInside: false,
	    fixedContentPos: true,
	    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
	     gallery: {
	      enabled: true,
	      navigateByImgClick: true,
	      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	    },
	    image: {
	      verticalFit: true
	    },
	    zoom: {
	      enabled: true,
	      duration: 300 // don't foget to change the duration also in CSS
	    }
	  });

	  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	    disableOn: 700,
	    type: 'iframe',
	    mainClass: 'mfp-fade',
	    removalDelay: 160,
	    preloader: false,

	    fixedContentPos: false
	  });
	};
	siteMagnificPopup();


	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
		    margin: 0,
		    autoplay: true,
		    nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 0,
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 3
	        },
	        1200:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 4
	        }
		    }
			});
		}

		$('.slide-one-item').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    autoplay: true,
	    pauseOnHover: false,
	    nav: true,
	    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
	  });
	};
	siteCarousel();

	var siteStellar = function() {
		$(window).stellar({
	    responsive: false,
	    parallaxBackgrounds: true,
	    parallaxElements: true,
	    horizontalScrolling: false,
	    hideDistantElements: false,
	    scrollProperty: 'scroll'
	  });
	};
	siteStellar();

	var siteCountDown = function() {

		$('#date-countdown').countdown('2020/10/10', function(event) {
		  var $this = $(this).html(event.strftime(''
		    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
		    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
		    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
		    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
		    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});
				
	};
	siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

});