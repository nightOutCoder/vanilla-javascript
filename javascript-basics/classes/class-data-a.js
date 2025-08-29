carTestFunction();

class Car {
    constructor(doors, engine, color){
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

    carStart() {
        return `This car has ${this.doors} doors, a ${this.engine} and a in ${this.color} color`;
    }
}

// Uncaught ReferenceError: Cannot access 'Car' before initialization

const carData = new Car(4, 'V6', 'grey');
console.log(carData);
console.log(carData.engine);


function carTestFunction() {
    console.log('car functions'); // return console('car functions');
}






