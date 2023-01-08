/* globals describe it expect */
const { Ship } = require("../src/Ship.js");
const { Port } = require("../src/Port.js");
const { Itinerary } = require("../src/Itinerary.js");

describe("Ship", () => {
  it("Can be instantiated", () => {
    const port = new Port("Dover");
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    expect(ship).toBeInstanceOf(Object);
  });
  it('gets added to port on instantiation', () => {
    const dover = new Port('Dover');
    const itinerary = new Itinerary([dover]);
    const ship = new Ship(itinerary);
  
    expect(dover.ships).toContain(ship);
  });
});

describe("Port", () => {
  it("Can be instantiated", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
});

describe("Itinerary", () => {
  it("Can be instantiated", () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });
});

describe("I want a ship to have a starting port.", () => {
  it("Has a starting port", () => {
    const port = new Port("Dover");
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    expect(ship.currentPort).toBe(port);
  });
});

describe("I want a ship to be able to set sail from a port.", () => {
  it("Set Sail from port", () => {
    const dover = new Port("Dover");
    const calais = new Port("Calais");
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
    expect(ship.previousPort).toBe(dover);
  });
});

describe("I want a ship to be able to dock at a different port.", () => {
  it("Dock at new port", () => {
    const dover = new Port("Dover");
    const calais = new Port("Calais");
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toBe(calais);
  });

  it("can't sail further than its itinerary", () => {
    const dover = new Port("Dover");
    const calais = new Port("Calais");
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect(() => ship.setSail()).toThrowError("End of itinerary reached");
  });
});
