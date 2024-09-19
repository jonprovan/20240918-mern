// BOOLEANS AND EQUALITY IN JS

let myBoolean = true;

console.log(myBoolean);
console.log(!myBoolean);

console.log(2 == 2);
console.log(2 != 2);

// what will this return?
console.log(2 == '2');

// JS uses coercion to make assumptions about what we're trying to compare
// e.g. is the URL parameter (string) equal to the numerical database ID for an object?

// strict equality operator ===
// compares not only the value but also the type
console.log(2 === '2');

console.log(2 == '2' && typeof 2 == typeof '2');

console.log(2 != '2');
console.log(2 !== '2');

// to do this with <, >, <=, >=, you need the type comparison manually

/**
 * COMPARISON OPERATORS
 * < less than
 * > greater than
 * <= less than or equal to
 * >= greater than or equal to
 * == loosely equal
 * === strictly equal
 * != loosely not equal
 * !== strictly not equal
 * 
 * LOGICAL OPERATORS
 * && and
 * || or
 * & bitwise and
 * | bitwise or
 */

if (3 == '3' && false === !true) {
    console.log('True!');
} else {
    console.log('False!');
}

if (45 % 9 === 1 || 'abc'.charAt(1) === 'a' || !(true || false)) {
    console.log('True!');
} else {
    console.log('False!');
}

let myOtherBool = new Boolean('false');
console.log(myOtherBool);

// what about this?
if ('false') {
    console.log('Condition was true.');
}

// TRUTHY AND FALSY

/**
 * everything in JS evaluates to either truthy or falsy
 * 
 * FALSY VALUES
 * false (boolean)
 * null
 * undefined
 * 0
 * -0
 * 0n
 * -0n
 * 0.0
 * "" or '' or ``
 * NaN
 * !(anything that's true)
 * 
 * TRUTHY VALUES
 * anything that's not falsy
 * this includes ANY object or ANY array, whether they're empty or not
 */

// can just check against values directly, and if they're not falsy, they'll return true
let userName = 'Mariana McTrench';

if (userName) {
    console.log('Display the block!');
}

// we have some shorthand operations we can do using booleans
// some are for returning values or assessing boolean questions

// TERNARY OPERATOR
let value;

if (2 > 1)
    value = 'Yes';
else
    value = 'No';

console.log(value);

// (condition) ? <value to return if true> : <value to return if false>
let value2 = (2 > 1) ? 'Yes' : 'No';

console.log(value2);

// these can stack, so be careful how you evaluate them!
let value3 = (false) ? 'First' : (true) ? 'Second' : 'Third';

console.log(value3);

let value4 = (true) ? (false) ? (true) ? 'One' : 'Two' : 'Three' : 'Four';
// let value4 = (true) ? (false) ? 'One' : 'Three' : 'Four';
// let value4 = (true) ? 'Three' : 'Four';

console.log(value4);

// a few other shorthands
let currentName = 'Alberto';

// this is saying if the first value is truthy, assign that; otherwise, assign the second
let newName = currentName || 'Default';

console.log(newName);

// one problem -- can't check against empty objects/arrays, if we consider them "false"
// another problem -- if some falsy values are okay, we can't assign them this way

// NULLISH COALESCING OPERATOR ??
// falsy values in the first position WILL BE ASSIGNED
// as long as they're neither null nor undefined
let okayNumber = 0;

let newNumber = okayNumber ?? NaN; // mmm, naan...

console.log(newNumber);