function canvas() {
    // Display Text
    var c = document.getElementById("text");
    var ctx = c.getContext("2d");
    ctx.font = "50px Arial";
    ctx.fillStyle = "blue";
    ctx.textAlign = "center";
    ctx.fillText("CANVAS!!!", c.width/2, c.height/2); 
    
    // Display Image
    var c = document.getElementById("image");
    var ctx = c.getContext("2d");
    var image = document.getElementById("comic");
    ctx.drawImage(image, 10, 10);
    
    // Animation
    var canvas;  
    var ctx;
    var x = 800;
    var y = 500;
    var dx = 2;
    var dy = 4;
    var WIDTH = 800;
    var HEIGHT = 500; 

// Set circle
function circle(x,y,r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI*2, true);
  ctx.fill();
}

// Set rectangle
function rect(x,y,w,h) {
  ctx.beginPath();
  ctx.rect(x,y,w,h);
  ctx.closePath();
  ctx.fill();
}

// Clear current canvas
function clear() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

// Initialize canvas, set refresh rate
function init() {
  canvas = document.getElementById("animate");
  ctx = canvas.getContext("2d");
  return setInterval(draw, 1);
}

// Draw each new canvas
function draw() {
  clear();
  // Creat the background gradient
  var gradient = ctx.createLinearGradient(0,0,800,0);
  gradient.addColorStop(0, 'red');
  gradient.addColorStop(1 / 6, 'orange');
  gradient.addColorStop(2 / 6, 'yellow');
  gradient.addColorStop(3 / 6, 'green')
  gradient.addColorStop(4 / 6, 'aqua');
  gradient.addColorStop(5 / 6, 'blue');
  gradient.addColorStop(1, 'purple');
  ctx.fillStyle = gradient;
  ctx.fillRect(10,10,150,80);
  rect(0,0,WIDTH,HEIGHT);
  // Draw the circle
  ctx.fillStyle = "#000000";
  circle(x, y, 20);

  // Have ball switch direction when it reaches the edge
  if (x + dx > WIDTH || x + dx < 0)
    dx = -dx;
  if (y + dy > HEIGHT || y + dy < 0)
    dy = -dy;

  // Move the ball one unit in each direction
  x += dx;
  y += dy;
}

init();
}