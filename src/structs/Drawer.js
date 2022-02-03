export default class Drawer {

  /**
   * @param {HTMLCanvasElement} canvasElem
   * @param {Number} width
   * @param {Number} height
   * @param {Number} cellRadius
   */
  constructor(canvasElem, width, height, cellRadius) {
    this.canvasElem = canvasElem;
    this.ctx = canvasElem.getContext('2d');
    this.width = null;
    this.height = null;
    this.cellRadius = cellRadius;
    this.setCanvasWidth(width);
    this.setCanvasHeight(height);
  }

  setCanvasWidth(value) {
    this.width = value;
    this.canvasElem.setAttribute('width', String(this.width * this.cellRadius));
  }

  /**
   * @param {Number} value
   */
  setCanvasHeight(value) {
    this.height = value;
    this.canvasElem.setAttribute('height', String(this.height * this.cellRadius));
  }

  clearField() {
    this.ctx.clearRect(0, 0, this.width*this.cellRadius, this.height*this.cellRadius);
  }

  drawCell(cell) {
    const posX = cell.x * this.cellRadius + this.cellRadius * (cell.x + 1);
    const posY = cell.y * this.cellRadius + this.cellRadius * (cell.y + 1);

    this.ctx.beginPath();
    this.ctx.arc(posX, posY, this.cellRadius, 0, Math.PI * 2);
    this.ctx.fillStyle = cell.alive ? 'black' : 'white';
    this.ctx.fill();
    this.ctx.closePath();
  }
}
