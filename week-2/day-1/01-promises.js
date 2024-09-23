// PROMISES IN JS

/**
 * What is a promise?
 * 
 * A Promise represents the eventual success or failure of an async operation
 * We don't know what the data will be
 * We don't even know if the request (whatever that request might be) will work!
 * 
 * Handler -- a method that "handles" or deals with whatever data (or lack of data) comes back
 * API = Application Programming Interface
 * 
 * A Promise can have up to three handlers, for success, failure, and "finally" (either success or failure)
 * 
 */

// creating a Promise manually
// let promise1 = new Promise((resolve, reject) => {
//     // usually, you'd have some async code in here
//     let x = Math.random();

//     // the value in the resolve/reject parentheses is what will be passed along to then/catch for them to process/handle
//     if (x > 0.5) {
//         resolve("Number was > 0.5 -- SUCCESS!");
//     } else {
//         reject("Number was <= 0.5 -- FAILURE!")
//     }
// });

// handling the various states of our Promise
// .then() is what we do if successful -- it takes in the unpacked data of our Promise
// .catch() is what we do if the Promise failed -- it takes in the unpacked data of the error
// .finally() is what we do regardless -- it doesn't take in anything
// promise1.then(data => console.log(data))
//         .catch(error => console.log(error))
//         .finally(() => console.log('Promise fully processed.'));  // finally blocks process whether the program errored out or not!

// there are some static methods for Promise that allow to process multiple Promises at once

// Promise.all() -- takes some sort of iterable, like an array of Promises
// this resolves if ALL the Promises are successful
// it rejects if ANY of the Promises fail
let allPromise1 = Promise.resolve('P1 resolved');
let allPromise2 = Promise.reject('P2 rejected');
let allPromise3 = Promise.reject('P3 rejected');

// we handle Promise.all() just like any other Promise, with then/catch/finally
// Promise.all([ allPromise1, allPromise2, allPromise3 ]).then(data => console.log(data))
//                                                       .catch(error => console.log(error));

// Promise.allSettled() -- also takes an iterable
// this waits until ALL Promises are settled, whether they succeed or fail
// the data included is an array of Promise objects, showing their status and either their unpacked value or the reason they failed
Promise.allSettled([ allPromise1, allPromise2, allPromise3 ]).then(data => {
    data.forEach(promise => {
        console.log(`Promise Status = ${promise.status}, Promise Value/Reason = ${promise.value || promise.reason}`);
    })
});

// Promise.race() -- also takes an iterable
// this waits for the first Promise to come back, then processes it and ignores the others
let racePromise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'racePromise1 Resolved');
});

let racePromise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'racePromise2 Resolved');
});

Promise.race([ racePromise1, racePromise2 ]).then(data => console.log(data));

Promise.race([ racePromise1, racePromise2, fetch('https://reqres.in/api/users') ]).then(data => console.log(data)).catch(error => console.log('BAD REQUEST'));