;(function($) {

	$(function() {

		//Init WOW
		new WOW().init({   
            mobile: false 
		});

		//Init smoothscroll
		SmoothScroll({
			touchpadSupport: true
		});
	});

})(jQuery);