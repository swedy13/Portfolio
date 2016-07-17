// Global dimensions
var height = $(window).height() + 5;
var unitHeight = parseInt(height) + 'px';
var width = $(window).width() + 5;
var unitWidth = parseInt(width) + 'px';


$(document).ready(function() {

				// Hero Methods
				randomizeVideo();
				scaleVideoContainer();

				initBannerVideoSize('.video-container .poster img');
				initBannerVideoSize('.video-container .filter');
				initBannerVideoSize('.video-container video');

				$(window).resize(function() {
								scaleVideoContainer();
								scaleBannerVideoSize('.video-container .poster img');
								scaleBannerVideoSize('.video-container .filter');
								scaleBannerVideoSize('.video-container video');
				});

				// pauses the video if not visible
				$(window).scroll(function() {
								if (($('.hero').height() - $(window).scrollTop()) < 10) {
												$('.fillWidth').get(0).pause();
												return;
								}
								$('.fillWidth').get(0).play();
				});


				// Portfolio Methods
				toggleFilters();
				toggleCheckBoxes();
				filterItems();

				runAnimation(width, height, 'all');
				$(window).resize(function() {
								runAnimation($(window).width(), $(window).height(), 'canvas');
				});
});
