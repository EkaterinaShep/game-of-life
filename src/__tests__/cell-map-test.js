import CellMap from "../structs/CellMap";

test('cell map', () => {
    const map = new CellMap(100, 50);

    expect(map.width).toEqual(100);
    expect(map.height).toEqual(50);
    expect(map.cells.length).toEqual(5000);

    expect(map.getCell(0, 0).x).toEqual(0);
    expect(map.getCell(0, 0).y).toEqual(0);

    expect(map.getCell(23, 10).x).toEqual(23);
    expect(map.getCell(23, 10).y).toEqual(10);

    expect(map.getCell(-1, 10).x).toEqual(99);
    expect(map.getCell(-1, 10).y).toEqual(10);

    expect(map.getCell(23, -1).x).toEqual(23);
    expect(map.getCell(23, -1).y).toEqual(49);

    expect(map.getCell(-1, -1).x).toEqual(99);
    expect(map.getCell(-1, -1).y).toEqual(49);

    expect(map.getCell(100, 10).x).toEqual(0);
    expect(map.getCell(100, 10).y).toEqual(10);

    expect(map.getCell(23, 50).x).toEqual(23);
    expect(map.getCell(23, 50).y).toEqual(0);

    expect(map.getCell(100, 50).x).toEqual(0);
    expect(map.getCell(100, 50).y).toEqual(0);

    expect(map.getCell(100, 50)).toEqual(map.getCell(0, 0));
});