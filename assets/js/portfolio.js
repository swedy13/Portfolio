// ---- FILTERS ---- //
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
				$('.filters li').click(function() {
								if (!$(event.target).is('input')) {
												var checkbox = $(this).find('input');
												checkbox.prop('checked', !checkbox.prop('checked'));
								}
				});
}

function filterItems() {
				$('li').click(function() {
								// Removes all active classes
								$('.project').removeClass('active');

								// Returns the names of each checked category
								const checked = $('.checkbox:checkbox:checked').map(function() {
												const getText = $(this).next('p').text();
												const toString = getText.replace(/\s+/g, '-').toLowerCase();
												return toString;
								}).get();

								// Returns portfolio items based on the filters
								$('.project').map(function() {
												const classes = $(this).prop('class');
												const matches = [];

												// Activates portfolio items that match all filter tags
												for (var i = 0; i < checked.length; i++) {
																if (classes.match(checked[i])) {
																				matches.push($(this));
																}
												}

												/*console.log(matches[checked.length -1]);*/

												// for (each checked item) {
												//					if (class matches checked item name)
												//         add item to list
												// }

												// for (each item in list) {
												//     if (classes match all checked item names)
												//									show item
												// }
												var test = matches[checked.length-1];

												for (var i = 0; i < matches.length; i++) {
																if (test != undefined) {
																				test.addClass('active');
																}
												}

												/*for (var i = 0; i < matches.length; i++) {
															if (classes.match(checked)) {
															matches[checked.length-1].addClass('active');
															}
															if (classes.match(checked[])) {
															matches[checked.length-1].addClass('active');
															$(this).addClass('active')
															}
															}*/

												// Redraws canvas
												initPortfolio($(window).width(), $(window).height());
								});
				});
}


// ---- CANVAS ---- //
// Portfolio Circles
function initPortfolio(width, height){
				var canvas	= document.getElementsByTagName('canvas')[0];
				var c = canvas.getContext('2d');

				// Container
				// container dimensions to scale with screen size
				var x = width;
				var y = height - 65;
				canvas.width = x;
				canvas.height = y;
				var container = {x:0,y:0,width:x,height:y};

				// Circles
				var circles = [];

				// Portrait Variables
				var cPos    = 200;
				var cMargin = 70;
				var cSpeed		= 3;
				var r							= x*.075;

				if (y > x && x >= 500) {
								cPos    = x * (x / y) - 150;
								cMargin = 150;
				}

				// Landscape Variables
				if (x > y) {
								cPos    = y * (y / x) - 50;
								cMargin = 150;
								cSpeed		= 3;
								r							= x*.05;
				}

				// Generating "circles" based on # of portfolio items
				// x/y = starting coordinates, r = ball size, vx/vy = velocity
				var posts = document.getElementsByClassName('active').length;
				for (var i = 0; i < posts; i++) {
								circles.push({
												x:Math.random() * cPos + cMargin,
												y:Math.random() * cPos + cMargin,
												r:r,
												color:Math.random()*3000,
												vx:Math.random() * cSpeed + .25,
												vy:Math.random() * cSpeed + .25
								});
				}

				requestAnimationFrame(draw);

				function draw(){
								c.fillStyle = 'white';
								c.fillRect(container.x,container.y,container.width,container.height);

								for (var i=0; i <circles.length; i++){
												c.fillStyle = 'hsl(' + circles[i].color + ',100%,50%)';
												c.beginPath();
												c.arc(circles[i].x,circles[i].y,circles[i].r,0,2*Math.PI,false);
												c.fill();

												if((circles[i].x + circles[i].vx + circles[i].r > container.x + container.width) || (circles[i].x - circles[i].r + circles[i].vx < container.x)){
																circles[i].vx = - circles[i].vx;
												}
												if((circles[i].y + circles[i].vy + circles[i].r > container.y + container.height) || (circles[i].y - circles[i].r + circles[i].vy < container.y)){
																circles[i].vy = - circles[i].vy;
												}
												circles[i].x +=circles[i].vx;
												circles[i].y +=circles[i].vy;
								}

								requestAnimationFrame(draw);
				}
}
