export default class Field {
  cells = [];

  constructor({ rowsNum, columnsNum, drawer, Cell }) {
    this.rowsNum = rowsNum;
    this.columnsNum = columnsNum;
    this.drawer = drawer;
    this.Cell = Cell;
  }

  createLife() {
    this.generateCells();
    this.cellWidth = this.getCellRadius() * 2;
    this.alignField();

    this.runIteration();
  }

  generateCells() {
    const cellRadius = this.getCellRadius();

    for (let y = 0; y < this.rowsNum; y++) {
      for (let x = 0; x < this.columnsNum; x++) {
        this.cells.push(new this.Cell(x, y, cellRadius));
      }
    }
  }

  getCellRadius() {
    const radiusByX = this.drawer.canvasWidth / this.columnsNum / 2;
    const radiusByY = this.drawer.canvasHeight / this.rowsNum / 2;

    return Math.min(radiusByX, radiusByY);
  }

  alignField() {
    this.drawer.setPaddingsToCanvas({
      fieldWidth: this.getFieldWidth(),
      fieldHeight: this.getFieldHeight(),
    });
  }

  getFieldWidth() {
    return this.columnsNum * this.cellWidth;
  }

  getFieldHeight() {
    return this.rowsNum * this.cellWidth;
  }

  runIteration() {
    this.modifyCells();
    this.drawer.clearField();
    this.cells.forEach((cell) => this.drawer.drawCell(cell));

    setTimeout(() => this.runIteration(), 100);
  }

  modifyCells() {
    for (let x = 0; x < this.columnsNum; x++) {
      for (let y = 0; y < this.rowsNum; y++) {
        const currentCell = this.cells[this.getCellIndex(x, y)];

        const aliveNum = this.getLivingNeighborsNum(currentCell);

        if (aliveNum === 3) {
          currentCell.nextAlive = true;

          continue;
        }

        if (aliveNum < 2 || aliveNum > 3) {
          currentCell.nextAlive = false;

          continue;
        }

        currentCell.nextAlive = currentCell.alive;
      }
    }

    this.cells.forEach((cell) => {
      cell.alive = cell.nextAlive;
      cell.setColor();
    });
  }

  getCellIndex(x, y) {
    return this.cells.findIndex((cell) => cell.x === x && cell.y === y);
  }

  getLivingNeighborsNum(cell) {
    const x = cell.x;
    const y = cell.y;

    const aliveNum =
      +this.isAlive(x - 1, y - 1) +
      +this.isAlive(x, y - 1) +
      +this.isAlive(x + 1, y - 1) +
      +this.isAlive(x - 1, y) +
      +this.isAlive(x + 1, y) +
      +this.isAlive(x - 1, y + 1) +
      +this.isAlive(x, y + 1) +
      +this.isAlive(x + 1, y + 1);

    return aliveNum;
  }

  isAlive(x, y) {
    if (x < 0 || x >= this.columnsNum || y < 0 || y >= this.rowsNum) {
      return false;
    }

    return this.cells[this.getCellIndex(x, y)].alive;
  }
}
