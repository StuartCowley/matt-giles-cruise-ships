/* globals describe it expect */
const Ship = require('../src/Ship.js');

describe("Ship", () => {
    it('Can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
});

describe("I want a ship to have a starting port.", () => {
    it('Has a starting port', () => {
        const ship = new Ship('Dover');
        expect(ship.startingPort).toBe('Dover');
    });
});

describe("I want a ship to be able to set sail from a port.", () => {
    it('Set Sail from port', () => {
        const ship = new Ship('Dover');
        ship.setSail();
        expect(ship.startingPort).toBeFalsy();
    });
});