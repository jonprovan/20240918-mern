// HIGHER-ORDER FUNCTIONS IN JS

/**
 * we can store a function as a variable
 * we can return a function from a function
 * we can also use a function as a parameter in another function
 */

// storing a function as a variable
let storedFunction = function () {
    console.log('This is my stored function.');
}

storedFunction();

let storedFunction2 = () => console.log('This is my second stored function.');

storedFunction2();

/**
 * for lambda syntax [parameters]:
 * if you have no parameters, you MUST use empty parentheses
 * if you have one parameter, parentheses are OPTIONAL
 * if you have more than one parameter, you MUST use parentheses
 * 
 * for the function code:
 * if you only have one line, you don't need the curly braces
 * if you have more than one line, you MUST use the braces
 * if your function returns something, and you only have one line, you DO NOT need to use the return keyword
 * if your function returns something, and you have more than one line, or if you decide to use the curly braces, you MUST use the return keyword
 */

function returnFunction() {
    return () => console.log('This function was returned.');
}

let myReturnedFunction = returnFunction();

myReturnedFunction();

// a closure is a returned function that contains some sort of context from the function that returned it
function timesX(num) {
    return (x) => x * num;
}

// these functions have the "num" value baked in already from the original function's context
let times10 = timesX(10);
let times5 = timesX(5);

console.log(times10(9));
console.log(times5(9));

// there are a series of higher-order functions for processing arrays that can make your life easier
// similar to the Java Stream API, but we don't need streams in JS
// each of these requires a function as a parameter

// forEach()
// forEach takes each element of an array, does something, returns nothing
// it takes a Consumer function as a parameter

let nums = [ 1, 2, 3, 4, 5 ]

nums.forEach(num => {
    num = num * num;
    console.log(num);
});

// map()
// map takes each element, does something with it, then returns it to an array that gets passed on
// it takes a Supplier function as a parameter

nums.map(num => {
    return num * 10;
}).forEach(num => {
    console.log(num);
})

// same thing, streamlined
// nums.map(num => num * 10)
//     .forEach(num => console.log(num));

// filter()
// filter takes each element, assesses whether it meets certain criteria, then returns it to an array ONLY if it "passes"
// it takes a Predicate function as a parameter
nums.filter(num => {
    return num % 2 === 0;
}).forEach(num => {
    console.log(num);
});

// reduce()
// reduce takes the entire array and returns a single element (could be an object, array, number, string, etc.)
// it takes a function which requires two parameters, as well as an optional starting value or "accumulator"
let sum = nums.reduce((num1, num2) => {
    return num1 + num2;
}, 0);

console.log(sum);

let names = [ 'Kevin', 'Benjamin', 'Joeny', 'Daniel', 'Riley', 'Davis' ];

let longestName = names.reduce((name1, name2) => {
    if (name1.length > name2.length)
        return name1;
    return name2;
});

console.log(longestName);

// a more in-depth example
let cars = [
    {
        make: 'Toyota',
        model: 'Corolla',
        cost: 22000
    },
    {
        make: 'Dodge',
        model: 'Challenger',
        cost: 65000
    },
    {
        make: 'Mitsubishi',
        model: 'Mirage',
        cost: 18000
    },
    {
        make: 'Ford',
        model: 'Festiva',
        cost: 7000
    },
    {
        make: 'Chevrolet',
        model: 'Blazer',
        cost: 39000
    },   
]

// USING HIGHER-ORDER FUNCTIONS ONLY!!
// add a color property to each car -- CHECK
// only look at cars whose make or model starts with C -- CHECK
// return the color of the most expensive car

let colors = [ 'Red', 'Blue', 'Green', 'Purple', 'Black' ];

console.log("Before:");
for (let car of cars)
    console.log(car);

let finalColor = cars.map(car => {
    car.color = colors.pop();
    console.log(car);
    return car;
}).filter(car => {
    if (car.make.charAt(0) === 'C' || car.model.charAt(0) === 'C') {
        console.log(car);
        return true;
    }
    return false;
}).reduce((car1, car2) => {
    return (car1.cost > car2.cost) ? car1 : car2;
}).color;

console.log(finalColor);

let finalColor2 = cars.map(car => { car.color = colors.pop(); return car; })
                      .filter(car => car.make.charAt(0) === 'C' || car.model.charAt(0) === 'C')
                      .reduce((car1, car2) => (car1.cost > car2.cost) ? car1 : car2)
                      .color;