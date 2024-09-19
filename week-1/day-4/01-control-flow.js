// CONTROL FLOW IN JS

/**
 * control flow refers to how the processor moves through our program
 * what lines of code it executes next
 * does it skip around, make choices, etc.
 * 
 * if, else, else if, break, continue, return, switch
 * 
 * function calls control flow to some extent as well
 */

// if will execute the next line or block of code ONCE if the condition is true
if (2 > 1) {
    console.log('It was greater.');
    console.log('Indeed...it was.');
}

// if there's only one line conditional on the condition, you don't need the curly braces
// you can even include it on the same line
if (2 > 1)
    console.log('Yep, still greater');

// you don't need an else and can put several ifs in a row
// but else provides you an "either but not both" option

let myName = 'Owen Wilson';

// only ONE of these will ever execute
if (myName == 'Marley')
    console.log('...and me.');
else
    console.log(`Just ${myName}.`);

// same here
// you can have as many else if's as you want but only one else
if (myName == 'Marley')
    console.log('Option A');
else if (myName == 'Owen Wilson')
    console.log('Option B');
else
    console.log('Option C');
// else if // can't do anything after "else", because all remaining options were caught with the first else

// guard clauses use ifs to eliminate errors and "outs" before getting into the main code of a function
function printString(str) {
    if (typeof str != "string")
        throw new Error('Not a string!');
    if (str.length < 5)
        throw new Error('Not long enough!');
    if (str.charAt(0) != 'A')
        throw new Error("Doesn't start with 'A'!");
    console.log('Valid String!!');
}

printString('Abcde');


// switch statement
// we check the value of something non-boolean (e.g. value of a number, string, array)
// depending on its value, we take any of several "cases" (branches)

let num = 0;

switch (num) {
    case 0:
        console.log('num is 0');
        break;
    case 5:
        console.log('num is 5');
        break;
    case 17:
        console.log('num is 17');
        break;
    default:
        console.log('num is something else');
        break;
}

// break ends the loop or current block of code and moves on to whatever's next
// continue ends the CURRENT ITERATION of a loop and moves on to the next iteration
// return exits a function and CAN but doesn't have to return a value

// break in a loop
let counter = 0;

while (counter < 20) {
    counter++;
    if (counter == 12)
        break;
    console.log(counter);
}

counter = 0;

// continue
while (counter < 20) {
    counter++;
    if (counter == 12)
        continue;
    console.log(counter);
}

// return
// returning a value
function doStuff(num) {
    if (num == 0)
        return num;
    else
        return 'Num is not zero!'; 
}

console.log(doStuff(1));

// exiting the function without returning a value
// equivalent to a "void" function in other languages
// we use return to exit when the first condition is true
function dontDoStuff(num) {
    if (num == 100) {
        console.log('It was 100.');
        return;
    }
    console.log("It wasn't 100.");
}

dontDoStuff(100);