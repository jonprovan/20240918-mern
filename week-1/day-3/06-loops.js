// LOOPS IN JS

/**
 * loops in JS function very similarly to in other programs
 * with a small exception regarding objects
 * 
 * we have: standard for, enhanced for (foreach), while, do-while
 */

// while loop -- executes as long as a condition is true
// may never execute, if the condition starts false!

// while (condition) {
//     some code
// }
let counter = 0;

while (counter < 5) {
    console.log(`While counter value is: ${counter}`);
    counter++;
}

// do-while loop -- does the code once ALWAYS, then checks to see if the condition is true
// if it is, it loops again

counter = 0;
do {
    console.log(`Do-while counter value is: ${counter}`);
    counter++;
} while (counter < 0)

// standard for -- loops through some code a fixed number of times
// number can be based on items in an array, a number we give it, or whatever
// big advantage is we don't need an external counter
// we also can set ourselves up to have access to the index value of an array, for instance

// for (counter setup; condition; post-action) {
//     some code
// }

for (let i = 0; i < 3; i++) {
    console.log(`For loop index value is: ${i}`);
}

let nums = [ 10, 20, 30, 40, 50 ];

for (let i = 0; i < nums.length; i++) {
    console.log(`Array value at index ${i} = ${nums[i]}`);
}

// careful with this! easy path to an infinite loop!
// but, technically, each of the three parameters for the for loop is optional
counter = 0;
for (;;) {
    counter++;
    console.log(counter);
    if (counter == 5)
        break;
}


// enhanced for (foreach) -- goes through each element of an array (a list in other languages)
// and does something for each one
// we don't have to specify a counter or worry about how long the array is

let names = [ 'Riley', 'Benjamin', 'Davis', 'Kevin', 'Daniel', 'Joeny' ];

// creates a local variable via which we can refer to the currently-looked-at name
// for each name of the names array, do this code
for (let name of names) {
    console.log(name);
}

// this does NOT work the same way for object properties
const student = {
    id: 123,
    name: 'Jim Test Student',
    grade: 'D-'
}

console.log(student);

// this doesn't work for objects, because they are not iterable like arrays
// for (let property of student) {
//     console.log(property);
// }

// to get access to the properties, I have to enumerate it
// use let prop IN instead of let prop OF

// doesn't quite return what we want...we get the property keys, not the values
for (let property in student) {
    console.log(property);
}

// to access the values...
// think of each property as an index value in a student "array"
for (let property in student) {
    console.log(`Key: ${property}, Value: ${student[property]}`);
}

// another example
const teacher = {
    name: 'Caroline',
    classes: [ 'JavaScript', 'Spring', 'React' ]
}

for (let prop in teacher) {
    if (typeof teacher[prop] == "object") {
        for (let subprop of teacher[prop]) {
            console.log(subprop);
        }
    } else {
        console.log(`Key: ${prop}, Value: ${teacher[prop]}`);
    }
}
