/* globals describe it expect */
const {
    Ship,
    Port
} = require('../src/Ship.js');

describe("Ship", () => {
    it('Can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
});

describe("Port", () => {
    it('Can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
});

describe("I want a ship to have a starting port.", () => {
    it('Has a starting port', () => {
        const dover = new Port('Dover');
        const ship = new Ship(dover);
        expect(ship.currentPort).toBe(dover);
    });
});

describe("I want a ship to be able to set sail from a port.", () => {
    it('Set Sail from port', () => {
        const dover = new Port('Dover');
        const ship = new Ship(dover);
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
    });
});

describe("I want a ship to be able to dock at a different port.", () => {
    it('Dock at new port', () => {
    const dover = new Port('Dover');
    const ship = new Ship(dover);
    const calais = new Port('Calais');
        ship.setSail();
        ship.dock(calais);
        expect(ship.currentPort).toBe(calais);
    });
});