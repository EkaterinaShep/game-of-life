export default class Cell {
  constructor(x, y, alive) {
    this.x = x;
    this.y = y;
    this.alive = alive;
    this.nextAlive = alive;
    this.neighbors = null;
  }

  countAliveNeighbors() {
    let result = 0;
    for (let neighbor of this.neighbors) {
      result += neighbor.alive;
    }
    return result;
  }
}
