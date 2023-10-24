$(document).ready(function() {

	$('.first-screen-slider').slick({
		dots: true,
		infinite: true,
		appendArrows: '.first-screen-slider-arrows',
		responsive: [{
				breakpoint: 992,
				settings: {
					arrows: false,
				}
			},
  
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});
  
	mobileOnlySlider("#advantages-slider", true, false, 991);
	function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
	var slider = $($slidername);
	var settings = {
		mobileFirst: true,
		dots: $dots,
		arrows: $arrows,
		responsive: [
		{
			breakpoint: $breakpoint,
			settings: "unslick"
		}
		]
	};
  
	slider.slick(settings);
  
	$(window).on("resize", function () {
		if ($(window).width() > $breakpoint) {
		return;
		}
		if (!slider.hasClass("slick-initialized")) {
		return slider.slick(settings);
		}
	});
	} // Mobile Only Slider
  
  });
  