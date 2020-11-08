(function ($) {
	"use strict";
	$(document).ready(function() {

	//------------------------------------//
	//Add active link to nav//
	//------------------------------------//
	$( '#overlay .overlay-menu ul li a' ).on( 'click', function () {
	$( '#overlay .overlay-menu' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
	});
		
	//------------------------------------//
	//Mobile Half Screen Navigation//
	//------------------------------------//
	$('#toggle').click(function() {
	 $(this).toggleClass('active');
	 $('#overlay').toggleClass('open');
	 $('body').toggleClass('overflow-hidden');
	});

	//------------------------------------//
  	//Header Animation//
  	//------------------------------------//
  	$(window).scroll(function(){
    $("header").css("opacity", 1 - $(window).scrollTop() / 150);
  	});
	
	//------------------------------------//
	//Scroll Animations//
	//------------------------------------//
	var $animation_elements = $('.moveUp, .fadeIn');
		var $window = $(window);

		function check_if_in_view() {
		  var window_height = $window.height();
		  var window_top_position = $window.scrollTop();
		  var window_bottom_position = (window_top_position + window_height);

		  $.each($animation_elements, function() {
		    var $element = $(this);
		    var element_height = $element.outerHeight();
		    var element_top_position = $element.offset().top;
		    var element_bottom_position = (element_top_position + element_height);

		    //check to see if this current container is within viewport
		    if ((element_bottom_position >= window_top_position) &&
		        (element_top_position <= window_bottom_position)) {
		      $element.addClass('in-view');
		    }
		  });
		}

	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');


	});
}(jQuery));	