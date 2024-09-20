// ARRAYS IN JS

/**
 * arrays in JS combine the functionality of typical arrays with that of things like Lists/LinkedLists/ArrayLists in other languages
 * 
 * - zero-indexed
 * - they DO NOT have a fixed size, so you can add/remove items at will
 * - they are ordered, but not sorted by default
 * - they DO NOT have to contain all the same data type -- you can put ANYTHING in there
 * 
 * create arrays by simply declaring them with square brackets and separating items with commas
 * access indices via bracket notation
 */

let nums = [ 1, 2, 3, 4, 5 ];

console.log(nums);

// accessing an element
console.log(nums[2]);

// changing an element
nums[2] = 33;

console.log(nums);

nums[2] = 3;

// add an element to the end (right-hand side)
nums.push(6);

console.log(nums);

// remove an element from the end
let poppedElement = nums.pop();

console.log(poppedElement);
console.log(nums);

// add an element to the beginning (left-hand side)
nums.unshift(0);

console.log(nums);

// remove an element from the beginning
let shiftedElement = nums.shift();

console.log(shiftedElement);
console.log(nums);

// you can treat your array like a queue (FIFO)
// using push/shift here, could also use unshift/pop
console.log(`Now serving Customer #${nums.shift()}!`);
nums.push(6);
console.log(`Customer #${nums[nums.length - 1]} has joined the line!`);

// again, arrays can hold ANYTHING
let wackyArray = [ 1, 'a', false, { id: 6 }, [ 5, 6, 7 ] ]

// array destructuring

// if I do this, both variables point to the same array
let nums2 = [ 1, 2, 3 ];
let nums3 = nums2;

nums2[2] = 50;
console.log(nums2);
console.log(nums3);
nums2[2] = 3;

// you can spread an array to disconnect it from the original (adding other elements is possible but optional)
nums3 = [ ...nums2, 4, 5 ];

nums2[2] = 50;
console.log(nums2);
console.log(nums3);

const [ first, second, third ] = nums2;
// if I want to skip values, just leave an empty space after a comma, like const [ first, , third ] = nums2;

console.log(first);
console.log(second);
console.log(third);

const obj = {
    id: 5,
    name: 'Joe',
    age: 56
}

// no need to "skip" for objects, since there's no order; just list the ones you want!
const { name, age } = obj;

// a couple other ways to manipulate arrays
// to copy a portion of an array and disconnect that portion from the original array
// we use slice()

nums = [ 1, 2, 3, 4, 5 ];

console.log(nums);

// first param is the starting index (inclusive), second is the ending index (exclusive)
let slicedArray = nums.slice(1, 4);
console.log(slicedArray);

let sa2 = nums.slice();

console.log(sa2);

let sa3 = nums.slice(2);

console.log(sa3);


// to insert and/or remove elements at any spot in our array, we use splice()
// parameters -- first is the starting index (inclusive), second is the # of elements to remove, any others are things to add

let letters = [ 'a', 'b', 'c', 'd', 'e' ];
console.log(letters);

// removing only
letters.splice(2, 2);

console.log(letters);

// adding only
letters.splice(2, 0, 'c', 'd');

console.log(letters);

// adding and removing at the same time
letters.splice(0, 3, 'A', 'B', 'C');

console.log(letters);

letters = [ 'a', 'b', 'c', 'd', 'e' ];
console.log(letters);

// moving things around
// careful with your index numbers! order of operations makes the array shorter than we think for the outer splice!
letters.splice(3, 0, letters.splice(1, 1)[0]);
console.log(letters);
