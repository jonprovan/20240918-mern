// FUNCTION OVERLOADING IN JS

/**
 * overloading = more than one function with the same name but different parameters
 * 
 * THERE IS NO OVERLOADING IN JS!!
 */

function overload(x) {
    console.log("My one parameter was: " + x);
}

// this no longer gives us the proper result after declaring the second version
overload(10);

// ...because this one overwrites the first one
// remember, this is like saying overload = function (x, y) {}
function overload(x, y) {
    console.log("My two parameters were: " + x + " " + y);
}

overload(3, 4);

// so, it doesn't work how we want, but there are some workarounds
// one is to supply default values for parameters

function add(x, y, z) {
    return x + y + z;
}

console.log(add(1, 2, 3));
console.log(add(5));

// here, we're supplying default values for variables in the parameter list
// if the user supplies one, we'll use that
// otherwise, we'll use the default
function addWithDefaultValues(x = 5, y = 10, z = 20) {
    return x + y + z;
}

console.log(addWithDefaultValues());
console.log(addWithDefaultValues(5));
console.log(addWithDefaultValues(5, 6));
console.log(addWithDefaultValues(5, 6, 7));

// this still goes to the first variable
console.log(addWithDefaultValues(z = 100));
// we can "skip" variables by using undefined in their place
console.log(addWithDefaultValues(undefined, undefined, 100));

function quadArea(h, w) {
    if (w == undefined)
        return h * h;
    else
        return h * w;
}

console.log(quadArea(2, 4));
console.log(quadArea(2));

// here, we use the first parameter value to assign the second, if it's not supplied
function quadAreaRedux(h, w = h) {
    return h * w;
}

console.log(quadAreaRedux(4));

// the rest operator ...
// this operator collects the "rest" of the parameters into an array

function addAll(x, y, ...z) {
    console.log("x = " + x);
    console.log("y = " + y);
    console.log("z = ");
    console.log(z);
}

addAll(1, 2, 3, 4, 5);
addAll(1, 2, 3);
addAll(1, 2);
addAll();

// this function adds all the parameters together, no matter how many we have
// it also checks against type for each one and discards it if it's not a number
function addAllRedux(x, y, ...z) {
    let sum = 0;
    if (typeof x == "number")
        sum += x;
    if (typeof y == "number")
        sum += y;
    if (z.length > 0) {
        for (let num of z) {
            if (typeof num == "number")
                sum += num;
        }
    }

    console.log(sum);
}

// notice how it's safeguarded against the string and the array
addAllRedux(3, 10, "asdfasdf", 7, [1, 2, 3]);