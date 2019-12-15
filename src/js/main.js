$(function () {
	
	$('.dropdown-button').click(function() {
		$('.sub-menu__list').toggle();
		$('.nav-mobile__list').toggle();
	});

	$('.humburger').click(function() {
		$('.nav-mobile__list').toggle();
		if($('.sub-menu__list').css('display') == "block"){
			$('.nav-mobile__list').css('display', 'none');
			$('.sub-menu__list').css('display', 'none');
		}
	});

	

	$('.nav__item').hover(function () {
		$(this).children('ul').stop(false, true).fadeIn(300);
	}, function () {
		$(this).children('ul').stop(false, true).fadeOut(300);
	});
	$('.cart').hover(function () {
		$(this).children('ul').stop(false, true).fadeIn(300);
	}, function () {
		$(this).children('ul').stop(false, true).fadeOut(300);
	});

	$('.search').click(function (){
		$('.container-none').css('display', 'none');
		$('.header-search').css('display', 'block');
	});

	$('.header-search__close').click(function (){
		$('.header-search').css('display', 'none');
		$('.container-none').css('display', 'block');
	});

	$('.home-slider__inner').slick({
		arrows: true,
		dots: false,
		prevArrow: '.home-slider-arrow-left',
		nextArrow: '.home-slider-arrow-right'
	});

	$('.lunch__slider').flipster({
		itemContainer: '.lunch__slider-inner',
		// [string|object]
		// Selector for the container of the flippin' items.

		itemSelector: '.lunch__slider-item',
		// [string|object]
		// Selector for children of `itemContainer` to flip
		start: 0,


		fadeIn: 400,
		// [milliseconds]
		// Speed of the fade in animation after items have been setup

		loop: false,
		// [true|false]
		// Loop around when the start or end is reached

		autoplay: false,
		// [false|milliseconds]
		// If a positive number, Flipster will automatically advance to next item after that number of milliseconds

		pauseOnHover: false,
		// [true|false]
		// If true, autoplay advancement will pause when Flipster is hovered

		style: 'coverflow',
		// [coverflow|carousel|flat|...]
		// Adds a class (e.g. flipster--coverflow) to the flipster element to switch between display styles
		// Create your own theme in CSS and use this setting to have Flipster add the custom class

		spacing: -0.95,
		// [number]
		// Space between items relative to each item's width. 0 for no spacing, negative values to overlap

		click: true,
		// [true|false]
		// Clicking an item switches to that item

		keyboard: true,
		// [true|false]
		// Enable left/right arrow navigation

		scrollwheel: false,
		// [true|false]
		// Enable mousewheel/trackpad navigation; up/left = previous, down/right = next

		touch: false,
		// [true|false]
		// Enable swipe navigation for touch devices

		nav: false,
		// [true|false|'before'|'after']
		// If not false, Flipster will build an unordered list of the items
		// Values true or 'before' will insert the navigation before the items, 'after' will append the navigation after the items

		buttons: true,
		// [true|false|'custom']
		// If true, Flipster will insert Previous / Next buttons with SVG arrows
		// If 'custom', Flipster will not insert the arrows and will instead use the values of `buttonPrev` and `buttonNext`

		buttonPrev: '<i class="fas fa-chevron-left"></i>',
		// [text|html]
		// Changes the text for the Previous button

		buttonNext: '<i class="fas fa-angle-right"></i>',
		// [text|html]
		// Changes the text for the Next button

		onItemSwitch: false
		// [function]
		// Callback function when items are switched
		// Arguments received: [currentItem, previousItem],
	});

});
