// DATA TYPES IN JS

/**
 * Numerical Types
 * 
 * number -- whole and decimal numbers, positive or negative (all Java-type number primitives in one)
 * - 1, 5.6, -12134
 * bigint -- same thing but with essentially no cap on its value, impractical for most purposes
 * 6n, 1.234n, 2305982740598273459082734590287349058234n, 0n
 * 
 * Alphanumeric Types
 * string -- zero or more alphanumeric characters, 'c' "345" '4n1+_94890'
 * - there's no "char" in JS
 * - strings are arrays, so you can use array-like functions to substring them, find characters at certain indices, etc.
 * - single or double quotes work! 'a' "a"
 * - "Jon's Code" works (double-quotes to indicate the string, so single-quotes are okay inside it)
 * 
 * Other Types
 * boolean -- true/false, "true" is NOT a boolean
 * null -- object type, means an object with no assigned value
 * undefined -- a variable has been declared but not instantiated
 * object -- any JS object, including arrays
 * Symbol -- creates an object in memory we can retrieve via key
 * 
 */

console.log(typeof 123);
console.log(typeof '123');
console.log(typeof false);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof [ 1, 2, 3 ]);
console.log(typeof { objectName: 'Bert' });
console.log(typeof NaN);