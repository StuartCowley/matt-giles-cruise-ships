/* globals describe it expect */
const {
    Ship,
    Port,
    Itinerary
} = require('../src/Ship.js');

describe("I want a ship to take an itinerary which determines at which port it next docks.", () => {
    it('Check the Itinerary', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover, calais]);
    expect(itinerary.ports).toEqual([dover, calais]); 
    });
});