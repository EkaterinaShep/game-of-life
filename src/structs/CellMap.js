import Cell from "./Cell";

export default class CellMap {
  constructor(width, height, CellConstructor = Cell) {
    this.width = width;
    this.height = height;
    this.cells = [];
    this.CellConstructor = CellConstructor;
    this.createCells();
  }

  createCells() {
    for (let y=0; y<this.height; y++) {
      for (let x=0; x<this.width; x++) {
        this.cells.push(new this.CellConstructor(x, y, 0));
      }
    }

    for (let y=0; y<this.height; y++) {
      for (let x=0; x<this.width; x++) {
        this.getCell(x, y).neighbors = [
          this.getCell(x-1, y-1),
          this.getCell(x, y-1),
          this.getCell(x+1, y-1),
          this.getCell(x-1, y),
          this.getCell(x+1, y),
          this.getCell(x-1, y+1),
          this.getCell(x, y + 1),
          this.getCell(x+1, y+1),
        ];
      }
    }

    return this;
  }

  randomizeCellStates(aliveProbability) {
    for(let cell of this.cells) {
      cell.alive = Number(Math.random() < aliveProbability);
    }
    return this;
  }

  getCell(x, y) {
    return this.cells[this.getCellIndex(x, y)];
  }

  getCellIndex(x, y) {
    if(x < 0) {
      x = this.width - 1;
    } else if(x >= this.width) {
      x = x - this.width;
    }
    if(y < 0) {
      y = this.height - 1;
    } else if(y >= this.height) {
      y = y - this.height;
    }

    return y*this.width + x;
  }
}
