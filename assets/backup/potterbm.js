

function nextSlide(selector) {
	return function() {
		var $base = $(selector);
		var $current = $base.filter(".visible");
		var $next = $current.next(selector);
	
		if($next.length < 1) {
			$next = $base.first();
		}
	
		$current.removeClass("visible");
		$next.addClass("visible");
	};
}


$(document).ready(function(e) {
	
	$(".j-hamburger-menu").click(function(e) {
		e.preventDefault();
		
		$("header").toggleClass("hamburger-open");
	});
	
	
	if($(".j-testimonial-slider").length > 0) {
		
		if($(".j-testimonial.visible").length < 1) {
			$(".j-testimonial").first().addClass("visible");
		}
		
		window.testimonial_interval = window.setInterval(nextSlide(".j-testimonial"), 5000);
		
		$(".j-testimonial-slider").click(function(e) {
			nextSlide(".j-testimonial")();
			
			window.clearInterval(window.testimonial_interval);
			window.testimonial_interval = window.setInterval(nextSlide(".j-testimonial"), 5000);
		});
		
		$(".j-testimonial-slider a").click(function(e) {
			e.stopPropagation();
			e.stopImmediatePropagation();
		});
	}
	
});


$(window).load(function(e) {
	$("header .hidden").removeClass("hidden");
});
