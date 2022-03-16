/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Vertical Slider
4. Init Parallax
5. Init Clients Slider
6. Init Scrolling


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var searchActive = false;
	var menuActive = false;
	var header = $('.header');
	var ctrl = new ScrollMagic.Controller();

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initSearchForm();
	initHamburger();
	initVSlider();
	initParallax();
	initClientsSlider();
	initScrolling();

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if(window.innerWidth < 992)
		{
			if($(window).scrollTop() > 100)
			{
				header.addClass('scrolled');
			}
			else
			{
				header.removeClass('scrolled');
			}
		}
		else
		{
			if($(window).scrollTop() > 100)
			{
				header.addClass('scrolled');
			}
			else
			{
				header.removeClass('scrolled');
			}
		}
		if(window.innerWidth > 991 && menuActive)
		{
			closeMenu();
		}
	}

	/*
	3. Init Vertical Slider
*/
	

	function initVSlider()
	{
		if($('.v_slider').length)
		{
			var vSlider = $('.v_slider');

			vSlider.slick(
			{
				infinite: false,
				vertical: true,
				arrows: false,
				draggable: false,
				dots: true,
				responsive:
				[
					{
						breakpoint: 575,
						settings: 
						{
							draggable: true,
							vertical: false,
							dots: false
						}
					}
				]
			});
		}
	}

	/* 

	4. Init Parallax

	*/

	function initParallax()
	{
		// Add parallax effect to home slider
		if($('.slider_prlx').length)
		{
			var homeBcg = $('.slider_prlx');

			var homeBcgScene = new ScrollMagic.Scene({
		        triggerElement: homeBcg,
		        triggerHook: 1,
		        duration: "100%"
		    })
		    .setTween(TweenMax.to(homeBcg, 1, {y: '15%', ease:Power0.easeNone}))
		    .addTo(ctrl);
		}

		// Add parallax effect to every element with class prlx
		// Add class prlx_parent to the parent of the element
		if($('.prlx_parent').length && $('.prlx').length)
		{
			var elements = $('.prlx_parent');

			elements.each(function()
			{
				var ele = this;
				var bcg = $(ele).find('.prlx');

				var slideParallaxScene = new ScrollMagic.Scene({
			        triggerElement: ele,
			        triggerHook: 1,
			        duration: "200%"
			    })
			    .setTween(TweenMax.from(bcg, 1, {y: '-30%', ease:Power0.easeNone}))
			    .addTo(ctrl);
			});
		}
	}

	/* 

	5. Init Clients Slider

	*/

	function initClientsSlider()
	{
		if($('.clients_slider').length)
		{
			var clientsSlider = $('.clients_slider');

			clientsSlider.owlCarousel(
			{
				loop: true,
				dots: false,
				responsive:
				{
					0:{items:1},
					575:{items:2},
					768:{items:3},
					992:{items:4},
					1199:{items:5}
					
				}
			});
		}
	}

	/*

	6. Init Scrolling

	*/

	function initScrolling()
    {
    	if($('.nav_links').length)
    	{
    		
			/* Clicking on any element with class .nav_links scrolls down to the element set in the data-scroll-to value */
			
    		var links = $('.nav_links');
	    	links.each(function()
	    	{
	    		var ele = $(this);
	    		var target = ele.data('scroll-to');
	    		ele.on('click', function(e)
	    		{
	    			e.preventDefault();
	    			$(window).scrollTo(target, 1500, {offset: -80, easing: 'easeInOutQuart'});
	    		});
	    	});
    	}	
    }
});