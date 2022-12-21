/* globals describe it expect */
const Ship = require('../src/Ship.js');

describe("Ship", () => {
    it('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
});

describe("I want a ship to have a starting port.", () => {
    it('has a starting port', () => {
        const ship = new Ship('Dover');
        expect(ship.startingPort).toBe('Dover');
    });
});