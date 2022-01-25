export default class Drawer {
  canvasElem = document.querySelector('.canvas');
  ctx = this.canvasElem.getContext('2d');

  constructor() {
    this.ctx.translate(0.5, 0.5);

    this.setCanvasHeight();
    this.setCanvasWidth();
    this.canvasHeight = this.canvasElem.height;
    this.canvasWidth = this.canvasElem.width;
  }

  setCanvasWidth() {
    const width = this.canvasElem.clientWidth;
    this.canvasElem.setAttribute('width', width);
  }

  setCanvasHeight() {
    const height = this.canvasElem.clientHeight;
    this.canvasElem.setAttribute('height', height);
  }

  setPaddingsToCanvas({fieldWidth, fieldHeight}) {
    this.paddingLeft =
      (this.canvasWidth - fieldWidth) / 2;
    this.paddingTop =
      (this.canvasHeight - fieldHeight) / 2;
  }

  clearField() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  }

  drawCell(cell) {
    this.ctx.beginPath();
    this.ctx.arc(
      this.paddingLeft + cell.x * cell.radius + cell.radius * (cell.x + 1),
      this.paddingTop + cell.y * cell.radius + cell.radius * (cell.y + 1),
      cell.radius,
      0,
      Math.PI * 2
    );
    this.ctx.fillStyle = cell.color;
    this.ctx.fill();
    this.ctx.closePath();
  }
}
