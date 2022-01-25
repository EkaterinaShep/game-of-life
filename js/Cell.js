export default class Cell {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.alive = Math.random() < 0.5;
    this.setColor();
  }

  setColor() {
    this.color = this.alive ? 'black' : 'white';
  }
}
