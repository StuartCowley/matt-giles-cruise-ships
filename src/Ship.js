class Ship {
    constructor(currentPort) {
        this.currentPort = currentPort;
        this.previousPort = null;
    }
    setSail() {
        this.previousPort = this.currentPort;
        this.currentPort = false;
    }
    dock(port) {
        this.currentPort = port;
    }
}

class Port {
    constructor(name) {
        this.name = name;
    }
}

class Itinerary {
    constructor(ports) {
        this.ports = ports;
    }
}

module.exports = {
    Ship,
    Port,
    Itinerary
};