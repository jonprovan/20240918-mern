// VARIABLES IN JS

/**
 * variables in JS (not TS) are not typed
 * i.e., they can store any value, and that value's type can change after the fact
 */

var temp = 1;
console.log(temp);
temp = "abc";
console.log(temp);
temp = [ 1, 2, 3 ];
console.log(temp);

// three main ways to declare a variable in JS -- var, let, const

console.log(a);

var a = 1;
let b = 2;
const c = 3;

// var declares a global variable
// its declaration is accessible ANYWHERE in our program, even before the declaration
// bottom line -- DON'T USE IT!!!

// when I print here, it works as intended
// when I print above, it's undefined -- the declaration was hoisted, the initialization was not

console.log(a);

console.log(buriedVar);

// here, we have access to the buried var, even before the block in which it was declared
// also, the redeclared a replaces the original one, even though they're in a different scope
if (true) {
    if (true) {
        var a = 10;
        console.log(a);
        if (true) {
            var buriedVar = 10;
        }
    }
}

changeA();

console.log(a);

function changeA() {
    var a = 20;
}

// better to use let instead of var
// like var, let can be reassigned with a new value
// however, let works like a variable ought to, in that its declaration is not accessible prior
// also, it follows scope rules, in that it ceases to exist when it's out of scope

// can't do this, because x has yet to be declared
// console.log(x);
let x = 11;
x = 12;

let y;
console.log(y);

// can't redeclare x in the same scope
// let x = 13;

let z = 200;
console.log(z);

// you CAN redeclare via let at a new scope, but might end up being confusing, to try to avoid
if (true) {
    let z = 100;
    console.log(z);
}

console.log(z);


// const -- works just like let, but once initialized, the value can't be changed
const myConst = 4;
// myConst = 5; // can't do this!!

// you CAN change array values or object properties
const myArray = [ 1, 2, 3, 4, 5 ];
console.log(myArray);
myArray[0] = 11;
console.log(myArray);

const myObject = { id: 6, name: "Sally Mae" };
console.log(myObject);
myObject.id = 7;
console.log(myObject);
// myObject = { else: "abc" }; // can't do this, though!
