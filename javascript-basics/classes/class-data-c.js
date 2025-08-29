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
class SUV extends Car {
    constructor(doors, engine, color){
        super(doors,engine,color);
        this.doors = doors;
        this.engine = engine;
        this.color = color;
        this.wheels = 4;
        this.brand = 'no brand set yet!';
    }

    get getBrand(){
        return this.brand;
    }

    set setBrand(brand){
        this.brand = brand;
    }
}

const carData = new SUV(4, 'V6', 'grey');
console.log(carData.getBrand);
carData.setBrand = 'Tata';
console.log(carData.getBrand);