import CellMap from './structs/CellMap.js';
import Drawer from './structs/Drawer.js';
import Cell from './structs/Cell.js';
import Simulation from "./structs/Simulation";

const WIDTH = 1000;
const HEIGHT = 1000;
const CELL_RADIUS = 3;
const START_ALIVE_PROBABILITY = 0.5;
const STEP_DURATION = 30;

const canvas = document.querySelector('.canvas');

const drawer = new Drawer(canvas, WIDTH, HEIGHT, CELL_RADIUS);
const cellMap = new CellMap(WIDTH, HEIGHT, Cell);
const simulation = new Simulation(cellMap, drawer, STEP_DURATION);

cellMap.randomizeCellStates(START_ALIVE_PROBABILITY);

simulation.start();
console.log(simulation);
