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


// ---- CIRCLES ANIMATION ---- //
function initBouncingPortfolio(width, height){
				var canvas	= document.getElementsByTagName('canvas')[0];
				var c = canvas.getContext('2d');

				// ---- Container ---- //
				// container dimensions to scale with screen size
				var x = width;
				var y = height - 65;
				canvas.width = x-5;
				canvas.height = y-5;
				var container = {x:0,y:0,width:x-5,height:y-5};

				// ---- Circles ---- //
				var circles = [];

				// Portrait Variables
				var cPos    = 200;
				var cMargin = 55;
				var cSpeed		= 3;
				var r							= x*.15;

				if (x > 400) {
								cMargin = 100;
				}

				// Landscape Variables
				if (x > y) {

								cPos    = y * (y / x) - 50;
								cMargin = 100;
								cSpeed		= 3;
								r							= x*.075;
				}

				// Generating "circles" based on # of portfolio items
				// x/y = starting coordinates, r = ball size, vx/vy = velocity
				for (var i = 0; i < 5; i++) {
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
								c.strokeStyle = 'red';
								c.fillRect(container.x,container.y,container.width,container.height);

								for(var i=0; i <circles.length; i++){
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
