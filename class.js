class Person {
    constructor(name) {
        this.name = name;
    }

    hello() {
        return 'Hello, name ' + this.name;
    }
}

class Actor extends Person {
    hello() {
        return super.hello() + ' actors';
    }
}

var tomCruise = new Actor('Tom Cruise');
console.log(tomCruise.hello());