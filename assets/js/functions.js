//---- MAIN METHODS ----//
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
});


//---- HERO METHODS ----//
function randomizeVideo() {
				var videos = ['birdcatcher', 'Hello-World', 'One-Swan', 'Up'];

				for (let video of videos) {
								var randomize = Math.floor(Math.random() * 4);
								var src = `assets\\video\\${videos[randomize]}\\${videos[randomize]}`;

								$('video source:nth-child(1)').attr('src', `${src}.mp4`);
								$('video source:nth-child(2)').attr('src', `${src}.ogv`);
								$('video source:nth-child(3)').attr('src', `${src}.webm`);
								$('video img:nth-child(4)').attr('src', `${src}.jpg`);
								return;
				}
}

function scaleVideoContainer() {
    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';

    $('.homepage-hero-module').css('height',unitHeight);
}

function initBannerVideoSize(element){
    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);
}

function scaleBannerVideoSize(element){
    var windowWidth = $(window).width(),
								windowHeight = $(window).height() + 5,
								videoWidth,
								videoHeight;

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
    });
}


//---- PORTFOLIO METHODS ----//
function toggleFilters() {
				$('.filters > div').click(function(e) {
								e.stopPropagation();
								var list = $(this).find('ul');
								var target = $(event.target);

								$(this).siblings().find('ul').slideUp(75);

								if (list.css('display') === 'block') {
												if (target.is('button') || target.parent().is('button')) {
																list.slideUp(75);
												}
								}
								else {
												list.slideDown(75);
								}
				});

				$(document).click(function() {
								$('ul').slideUp(75);
				});
}

function toggleCheckBoxes() {
				$('.filters li').click(function(e) {
								if (!$(event.target).is('input')) {
												$(this).find('input').click();
								}
				});
}




