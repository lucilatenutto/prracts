class Dipper {
  constructor() {
    this.x = width / 2;
    this.y = height - 50;
    this.diam = 30;
    this.velocidad = 5;
  }
  
  mover() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.velocidad;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.velocidad; 
    }
       if (this.x < this.diam / 2) {
      this.x = this.diam / 2; 
    }
    if (this.x > width - this.diam / 2) {
      this.x = width - this.diam / 2;
    }
  }
  toca(obj) {
    let distancia = dist(this.x, this.y, obj.x, obj.y);
    return distancia < (this.diam / 2 + obj.diam / 2);
  }
  mostrar() {
    fill(0, 0, 255);
    ellipse(this.x, this.y, this.diam);
  }
}
