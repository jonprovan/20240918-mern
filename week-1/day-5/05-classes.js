// CLASSES IN JS

/**
 * classes are a relatively new feature of JS
 * they introduce a lot of familiar class syntax/concepts from other OOP languages
 * they make inheritance (and understanding what's going on) MUCH easier
 */

// creating our Vehicle class
class Vehicle {

    // properties/members/member variables of our class
    // no need to indicate a type or assign a value (unless we want to)
    // when referring to a member variable elsewhere, you MUST use this. beforehand
    color;

    // the # beforehand makes this variable "private"
    // we can no longer see it or change it
    #year;
    isCool;

    // static properties/methods belong to the class itself, NOT an instance
    // there's only ever ONE of each
    static vehicleCount = 0;

    static getVehicleCount() {
        console.log(`Vehicle Count is: ${Vehicle.vehicleCount}`);
    }

    // the constructor allows us to set up how we build the object
    constructor(color, year, isCool) {
        this.color = color;
        this.#year = year;
        this.isCool = isCool;

        // updating our static property
        // you MUST use the class syntax, even within the class <class name>.<prop name>
        Vehicle.vehicleCount++;
    }

    // we can have methods, too
    declareCoolness() {
        if(this.isCool) {
            console.log(`${this.#year} was a cool year...`);
        } else {
            console.log(`${this.#year} was a drag...`);
        }
    }

    // to access private values properly, or to add logic for retrieving or updating variables
    // we use getters and setters
    get year() {
        return this.#year;
    }

    set year(year) {
        if(typeof year === 'number' && year >= 1910 && year <= 2024 && year === Math.floor(year))
            this.#year = year;
        else
            throw new Error('Your number stinks!!');
    }

}

console.log(Vehicle.vehicleCount);

let vehicle = new Vehicle('Orange', 1974, true);
console.log(vehicle);

console.log(Vehicle.vehicleCount);

vehicle.declareCoolness();

console.log(vehicle);

console.log(vehicle.year);
vehicle.year = 1980;
console.log(vehicle.year);

let vehicleArray = [ new Vehicle('', 0, true), new Vehicle('', 0, true), new Vehicle('', 0, true) ];

// accessing some static properties and methods
console.log(Vehicle.vehicleCount);
Vehicle.getVehicleCount();

// INHERITING FROM OUR VEHICLE CLASS
class Car extends Vehicle {
    make;
    model;

    constructor(color, year, isCool, make, model) {
        super(color, year, isCool);
        this.make = make;
        this.model = model;
    }
}

let car = new Car('Chartreuse', 1960, true, 'Volkswagen', 'Beetle');

console.log(car);
Vehicle.getVehicleCount();

// you can keep extending
class UsedCar extends Car {
    mileage;

    constructor(color, year, isCool, make, model, mileage) {
        super(color, year, isCool, make, model);
        this.mileage = mileage;
    }
}

let usedCar = new UsedCar('Black', 1910, false, 'Ford', 'Model T', 560000);

console.log(usedCar);
Vehicle.getVehicleCount();