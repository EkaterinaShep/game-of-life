import Field from './Field.js';
import Drawer from './Drawer.js';
import Cell from './Cell.js';

const drawer = new Drawer();
const field = new Field({ rowsNum: 35, columnsNum: 50, drawer, Cell });
field.createLife();
