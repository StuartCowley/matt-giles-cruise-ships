/* globals describe it expect */
const { Ship } = require("../src/Ship.js");
const { Port } = require("../src/Port.js");
const { Itinerary } = require("../src/Itinerary.js");

describe("Itinerary", () => {
  it("Can be instantiated", () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });
});

describe("I want a ship to take an itinerary which determines at which port it next docks.", () => {
  it("Check the Itinerary", () => {
    const dover = new Port("Dover");
    const calais = new Port("Calais");
    const itinerary = new Itinerary([dover, calais]);
    expect(itinerary.ports).toEqual([dover, calais]);
  });
});
