$(document).ready(function() {
				// Hero Methods
				randomizeVideo();
				scaleVideoContainer();

				initBannerVideoSize('.video-container .poster img');
				initBannerVideoSize('.video-container .filter');
				initBannerVideoSize('.video-container video');

				$(window).on('resize', function() {
								scaleVideoContainer();
								scaleBannerVideoSize('.video-container .poster img');
								scaleBannerVideoSize('.video-container .filter');
								scaleBannerVideoSize('.video-container video');
				});

				// Portfolio Methods
				toggleFilters();
				toggleCheckBoxes();
				initPortfolio(width, height);
});

$(window).load(function() {

				//invoke function init once document is fully loaded
				window.addEventListener('load',initPortfolio,false);

				$(window).resize(function() {
								initPortfolio($(window).width(), $(window).height());
				});
});


// Global dimensions
var height = $(window).height() + 5;
var unitHeight = parseInt(height) + 'px';
var width = $(window).width() + 5;
var unitWidth = parseInt(width) + 'px';
