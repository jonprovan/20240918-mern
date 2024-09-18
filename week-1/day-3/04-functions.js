// FUNCTIONS IN JS

/**
 * a function is equivalent to a method in other languages
 * 
 * a function can take in parameter(s) and return values
 * it DOES NOT have to do either of those, but it can
 * 
 * functions in JS are always hoisted!
 * meaning, you can declare them ANYWHERE in your code and call them from ANYWHERE
 * 
 * there are a few ways to declare a function, all of which do the same thing
 */

print();

// basic function declaration
function print() {
    console.log("My function worked!");
}

print();

// taking parameters
function params(first, second) {
    console.log("First: " + first + ", Second: " + second);
}

params(1, 2);
params([ 1, 2, 3 ], { name: 'Melvinetta' });

// returning a value
function returning(num) {
    return 6 + num;
}

console.log(returning(5));

let returnValue = returning(34);
console.log(returnValue);

console.log(typeof returning);

// declaring functions different ways
function firstWay(param1, param2) {
    return param1 + param2;
}

console.log(firstWay(1, 2));

secondWay = function (param1, param2) {
    return param1 + param2;
}

console.log(secondWay(1, 2));

// using lambda notation
thirdWay = (param1, param2) => { return param1 + param2 };

console.log(thirdWay(1, 2));

// even shorter lambda notation
fourthWay = (param1, param2) => param1 + param2;

console.log(fourthWay(1, 2));

fifthWay = fourthWay;
console.log(fifthWay(1, 2));