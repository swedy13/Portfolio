$(document).ready(function() {
				// Hero Methods
				/*randomizeVideo();
							scaleVideoContainer();

							initBannerVideoSize('.video-container .poster img');
							initBannerVideoSize('.video-container .filter');
							initBannerVideoSize('.video-container video');

							$(window).on('resize', function() {
							scaleVideoContainer();
							scaleBannerVideoSize('.video-container .poster img');
							scaleBannerVideoSize('.video-container .filter');
							scaleBannerVideoSize('.video-container video');
							});*/

				// Portfolio Methods
				toggleFilters();
				toggleCheckBoxes();
				filterItems();
				runAnimation(width, height, 'all');
});

$(window).load(function() {
				$(window).resize(function() {
								runAnimation($(window).width(), $(window).height(), 'canvas');
					});
});


// Global dimensions
var height = $(window).height() + 5;
var unitHeight = parseInt(height) + 'px';
var width = $(window).width() + 5;
var unitWidth = parseInt(width) + 'px';
