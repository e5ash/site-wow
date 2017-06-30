$(document).ready(function($) {
	$('.trusted__list').slick({
		responsive: [{
			breakpoint: 960,
			settings: {
				autoplay: true
			}
		}]
	});

	$('.team__list').slick({
		slidesToShow: 2,
		responsive: [{
			breakpoint: 960,
			settings: {
				autoplay: true,
				autoplaySpeed: 2500
			}
		}, {
			breakpoint: 540,
			settings: {
				slidesToShow: 1,
				autoplay: true,
				autoplaySpeed: 2500
			}
		}]
	});

	$('.reviews__list').slick({
		responsive: [{
			breakpoint: 960,
			settings: {
				autoplay: true
			}
		}]
	});

	// w - window
	var w = $(window),
		panel = $('.panel'),
		panelClass = 'panel_fixed';

	function scrollFun() {
		var scrollPosition = w.scrollTop(),
			windowWidth = w.width();
		if (scrollPosition > 0 && windowWidth >= 945) {
			panel.addClass(panelClass);
		} else{
			panel.removeClass(panelClass);
		}
	}

	w.resize(function() {
		var windowWidth = w.width();
		if (windowWidth < 945) {
			panel.removeClass(panelClass);
		} else if (windowWidth >= 945){
			panel.addClass(panelClass);
		}
	});




	scrollFun();

	w.scroll(function() {
		scrollFun();
	});



	var order = $('#order');
	$('.link-order').click(function() {
		var orderPosition = order.offset().top;
		$('html, body').animate({scrollTop: orderPosition - 85}, 800);
	});

	jQuery('.input-phone').mask("+7 (999) 999-99-99")
});