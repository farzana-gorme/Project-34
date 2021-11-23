class SlingShot {
    constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.sling = loadImage("/Assets/SlingShot.png");


    }

    display() {
        if (keyIsDown(RIGHT_ARROW) && this.angle<70  ) {
          this.angle += 1;
        }
    
        if (keyIsDown(LEFT_ARROW) && this.angle>-30 ) {
          this.angle -= 1;
        }
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.sling, 0, 0, this.width, this.height);
    pop();
    noFill();
    }
}