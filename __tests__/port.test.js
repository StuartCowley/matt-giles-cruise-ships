/* globals describe it expect */
const { Ship } = require("../src/Ship.js");
const { Port } = require("../src/Port.js");
const { Itinerary } = require("../src/Itinerary.js");

describe("Port", () => {
  it("Can be instantiated", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  it("Can add a Ship", () => {
    const port = new Port("Dover");
    const ship = {};

    port.addShip(ship);

    expect(port.ships).toContain(ship);
  });
  it("Can be instantiated", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  it("Can remove a Ship", () => {
    const port = new Port("Dover");
    const titanic = {};
    const queenMary = {};

    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(queenMary);

    expect(port.ships).toEqual([titanic]);
  });
});
