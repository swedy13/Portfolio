function runAnimation(width, height, type){
				var canvas	= document.getElementsByTagName('canvas')[0];
				var c = canvas.getContext('2d');

				// ---- DIMENSIONS ---- //
				// Container
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


				// ---- CIRCLES ---- //
				// Generating "circles" based on # of portfolio items
				// x/y = starting coordinates, r = ball size, vx/vy = velocity
				var posts = document.getElementsByClassName('active').length;
				for (var i = 0; i < posts; i++) {
								// 100 = green
								// 200 = light blue
								// 300 = pink
								// 400 = orange
								// 600 = blue
								// 700 = red
								var colors = [100, 200, 300, 400, 600, 700];
								circles.push({
												x:Math.random() * cPos + cMargin,
												y:Math.random() * cPos + cMargin,
												r:r,
												color:colors[i],
												vx:Math.random() * cSpeed + .25,
												vy:Math.random() * cSpeed + .25
								});
				}


				// ---- DRAW ---- //
				// Variables for the last known x/y coordinates for each object
				var lastX = [];
				var lastY = [];

				requestAnimationFrame(draw);
				function draw(){
								c.fillStyle = 'white';
								c.fillRect(container.x,container.y,container.width,container.height);

								for (var i = 0; i <circles.length; i++){
												c.fillStyle = 'hsl(' + circles[i].color + ', 100%, 50%)';
												c.beginPath();

												// This only redraws
												if (type === 'canvas') {
																c.arc(circles[i].lastX,circles[i].lastY,circles[i].r,0,2*Math.PI,false);
												}

												c.arc(circles[i].x,circles[i].y,circles[i].r,0,2*Math.PI,false);
												c.fill();

												// Saves x/y coordinates to outside variables
												lastX[i] = circles[i].x;
												lastY[i] = circles[i].y;

												// If the circle size/position is greater than the canvas width, bounce x
												if ((circles[i].x + circles[i].vx + circles[i].r > container.x + container.width) || (circles[i].x - circles[i].r + circles[i].vx < container.x)) {
																circles[i].vx = - circles[i].vx;
												}

												// If the circle size/position is greater than the canvas width, bounce y
												if ((circles[i].y + circles[i].vy + circles[i].r > container.y + container.height) || (circles[i].y - circles[i].r + circles[i].vy < container.y)){
																circles[i].vy = - circles[i].vy;
												}

												// Generates circle motion by adding position and velocity each frame
												circles[i].x += circles[i].vx;
												circles[i].y += circles[i].vy;
								}
								requestAnimationFrame(draw);
				}
}
