/* globals describe it expect */
const {
    Ship,
    Port,
    Itinerary
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

describe("Itinerary", () => {
    it('Can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });
});

describe("I want a ship to have a starting port.", () => {
    it('Has a starting port', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(port);
        expect(ship.currentPort).toBe(port);
    });
});

describe("I want a ship to be able to set sail from a port.", () => {
    it('Set Sail from port', () => {
        const dover = new Port('Dover');
        const ship = new Ship(dover);
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
        expect(ship.previousPort).toBe(dover);
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

describe("I want a ship to take an itinerary which determines at which port it next docks.", () => {
    it('Check the Itinerary', () => {
    const dover = new Port('Dover');
    const ship = new Ship(dover);    
    });
});