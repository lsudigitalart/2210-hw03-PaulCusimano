function setup() {
  createCanvas(600, 600);
  background(255);
  
  // Draw circle 1000 times with random parameters
  for (let i = 0; i < 1000; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 50); //circle radius between 10 and 5
    let circleColor = [random(255), random(255), random(255)]; 
    drawCustomCircle(x, y, r, circleColor);
  }
}

function drawCustomCircle(x, y, r, circleColor) {
  noStroke();

  // shadow
  for (let i = r; i > 0; i--) {
    let inter = map(i, 0, r, 0, 1);
    let shadowColor = lerpColor(color(50, 50, 50, 100), color(50, 50, 50, 0), inter);
    fill(shadowColor);
    ellipse(x + 10, y + 10, i * 2, i * 2);
  }
  
  // circle
  for (let i = r; i > 0; i--) {
    let inter = map(i, 0, r, 0, 1);
    let c = lerpColor(color(255), color(circleColor[0], circleColor[1], circleColor[2]), inter);
    fill(c);
    ellipse(x - (r - i) / 2, y - (r - i) / 2, i * 2, i * 2);
  }
}