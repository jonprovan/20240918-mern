// CONSTRUCTOR FUNCTIONS IN JS

/**
 * it can be helpful to "type" our objects
 * or at least to have a structure for them
 * if we want to produce objects with similar properties/functionality
 * 
 * however, since objects don't work the same way as in actual OOP languages
 * we have to think of them more like products of functions
 * 
 * we'll look at an abstraction later that makes them easier to understand
 * but constructor functions lay out more directly how they're created
 */

let object = { name: 'Laura', age: 44 };

// a constructor function
function Animal(species, color, noise) {
    this.species = species;
    this.color = color;
    this.noise = noise;
    this.speak = () => console.log(this.noise);
}

let animal1 = new Animal('Lion', 'Tan', 'Roar!');

console.log(object);
console.log(animal1);

let animal2 = new Animal('Zebra', 'Black & White', "Let me out of this lion's mouth!");

console.log(animal1);
console.log(animal2);

animal2.age = 3;

console.log(animal1);
console.log(animal2);

animal1.speak();
animal2.speak();

// inheritance in JS is done via prototypes
// attaching a constructor function's prototype to another function's prototype establishes a relationship
function Dog(breed) {
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

let dog = new Dog('Husky');

console.log(dog);