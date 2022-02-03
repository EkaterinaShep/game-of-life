export default class Simulation {
    constructor(map, drawer, interval = 30) {
        this.map = map;
        this.drawer = drawer;
        this.interval = interval;
        this.ticker = null;
    }

    start() {
        this.ticker = setInterval(() => {
            this.step();
        }, this.interval);
        return this;
    }

    stop() {
        clearInterval(this.ticker);
        this.ticker = null;

        return this;
    }

    step() {
        // TODO обернуть тестами, drawer === null
        this.modifyCells();
        this.draw();

        return this;
    }

    draw() {
        if(!this.drawer) {
            return this;
        }

        this.drawer.clearField();
        this.map.cells.forEach((cell) => this.drawer.drawCell(cell));

        return this;
    }

    modifyCells() {
        for (let x=0; x<this.map.width; x++) {
            for (let y=0; y<this.map.height; y++) {
                const currentCell = this.map.getCell(x, y);
                const aliveCount = currentCell.countAliveNeighbors();

                if (aliveCount === 3) {
                    currentCell.nextAlive = true;
                } else if (aliveCount < 2 || aliveCount > 3) {
                    currentCell.nextAlive = false;
                } else {
                    currentCell.nextAlive = currentCell.alive;
                }
            }
        }

        this.map.cells.forEach((cell) => {
            cell.alive = cell.nextAlive;
        });

        return this;
    }
}
