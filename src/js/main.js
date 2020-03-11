$(function () {


	$('.portfolio-product__slider').slick({
		arrows: true,
		dots: false,
		prevArrow: '.portfolio-product-arrow-left',
		nextArrow: '.portfolio-product-arrow-right'
	});

	$('ul.product-tab__caption').on('click', 'li:not(.active)', function () {
		$(this)
			.addClass('product-tab__link--active').siblings().removeClass('product-tab__link--active')
			.closest('div.product-tab__inner').find('div.product-tab__content').removeClass('product-tab__content--active').eq($(this).index()).addClass('product-tab__content--active');
	});

	$('.product__subimg').click(function (e) {
		e.preventDefault();
		var src = $(this).attr('src');
		$('.product__subimg').removeClass('product__subimg--active');
		$(this).addClass('product__subimg--active');

		$('.product__img').attr('src', src);
	});
	let filter = $("[data-filter]");

	filter.on("click", function (event) {
		event.preventDefault();

		$('.filter-item').removeClass('filter-item--active');
		$(this).addClass('filter-item--active');

		let cat = $(this).data('filter');

		if (cat == 'all') {
			$("[data-cat]").removeClass("hide");
		} else {
			$("[data-cat]").each(function () {
				let workCat = $(this).data('cat');

				if (workCat != cat) {
					$(this).addClass('hide');
				} else {
					$(this).removeClass('hide');
				}
			});
		}
	});




	$(document).ready(function () {
		$("#lightgallery").lightGallery();
	});


	var a = document.querySelector('#blog-main__sidebar'),
		b = null,
		P = 100; // если ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента. Может быть отрицательным числом
	window.addEventListener('scroll', Ascroll, false);
	document.body.addEventListener('scroll', Ascroll, false);

	function Ascroll() {
		if (b == null) {
			var Sa = getComputedStyle(a, ''),
				s = '';
			for (var i = 0; i < Sa.length; i++) {
				if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
					s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; ';
				}
			}
			b = document.createElement('div');
			b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
			a.insertBefore(b, a.firstChild);
			var l = a.childNodes.length;
			for (var i = 1; i < l; i++) {
				b.appendChild(a.childNodes[1]);
			}
			a.style.height = b.getBoundingClientRect().height + 'px';
			a.style.padding = '0';
			a.style.border = '0';
		}
		var Ra = a.getBoundingClientRect(),
			R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('.pagination-blog').getBoundingClientRect().top + 40); // селектор блока, при достижении верхнего края которого нужно открепить прилипающий элемент;  Math.round() только для IE; если ноль заменить на число, то блок будет прилипать до того, как нижний край элемента дойдёт до футера
		if ((Ra.top - P) <= 0) {
			if ((Ra.top - P) <= R) {
				b.className = 'stop';
				b.style.top = -R + 'px';
			} else {
				b.className = 'sticky';
				b.style.top = P + 'px';
			}
		} else {
			b.className = '';
			b.style.top = '';
		}
		window.addEventListener('resize', function () {
			a.children[0].style.width = getComputedStyle(a, '').width;
		}, false);
	}



	$('.timepicker').timepicker({
		timeFormat: 'h:mm p',
		interval: 60,
		minTime: '10',
		maxTime: '6:00pm',
		defaultTime: '11',
		startTime: '10:00',
		dynamic: false,
		dropdown: true,
		scrollbar: false
	});

	$(".datepicker").flatpickr({
		dateFormat: "Y/m/d",
		minDate: "today",
		maxDate: new Date().fp_incr(14),
		defaultDate: "today"
	});

	$(function () {

		$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
		});

	});

	var lastScrollTop = 0;
	$(window).scroll(function (event) {
		var st = $(this).scrollTop();

		if (st > lastScrollTop) {
			$(".header__inner").css('padding', '10px 0');
			$(".sub-menu__list").css('top', '10px');
			$(".cart__dropdown").css('top', '10px');
		} else {
			$(".header__inner").css('padding', '36px 0');
			$(".sub-menu__list").css('top', '15px');
			$(".cart__dropdown").css('top', '18px');
		}

		if (st > 450) {
			$('#header-trans').removeClass('header-trans');

		} else {
			$('#header-trans').addClass('header-trans');
		}

		lastScrollTop = st;
	});

	$('#header-trans').addClass('header-trans');

	$(function () {
		var location = window.location.href;
		var cur_url = '/' + location.split('/').pop();

		$('.nav__item').each(function () {
			var link = $(this).find('a').attr('href');
			if (cur_url == link) {
				$(this).addClass('page-active');
			}
		});
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

	$('.search').click(function () {
		$('.container-none').css('display', 'none');
		$('.header-search').css('display', 'block');
	});

	$('.header-search__close').click(function () {
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

		fadeIn: 600,
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

		keyboard: false,
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