// ASYNC OPERATIONS IN JS

/**
 * an async operation will leave the synchronous processing stack and head to the event loop
 * they will wait for sync operations to cease before being processed
 * we cannot predict the exact timing of when they will process
 * PRIORITY = sync code, then Promises, then other async operations
 */

// setTimeout will execute an operation after a "fixed" period of time
// first param = a function to execute (callback), second param = the time in milliseconds

// setTimeout(() => {
//     console.log('Timeout Complete!');
// }, 1000);

// setTimeout(() => {
//     console.log('First Timeout Complete!');
//     setTimeout(() => {
//         console.log('Nested Timeout Complete!');
//     }, 3000)
// }, 1000);

// setTimeout(() => {
//     console.log('Last Timeout Complete!');
// }, 2000);

// setInterval will execute the callback function continuously, every time the time elapses

// let counter = 1;

// setInterval(() => {
//     console.log(`Interval Executed, Counter at ${counter}`);
//     counter++;
// }, 1000);

// let myInterval = setInterval(() => {
//     console.log(`Interval Executed, Counter at ${counter}`);
//     counter++;
// }, 1000);

// use clearInterval to stop execution of a setInterval
// to do this, you must assign the interval to a variable
// setTimeout(() => {
//     clearInterval(myInterval);
//     console.log('Interval CLEARED');
// }, 5500);

// note with the above that we can't predict exact timing!
// if you need something to execute at a specific time/location (i.e., AFTER something else has processed, use async/await)

// API calls are, by nature, asynchronous
// libraries/APIs that let us call to other APIs are basically always async-op-structured
// the fetch call is async and will execute whenever it makes it back unless we pack it into an async function and await it
// the await keyword ONLY works inside an async function
// any code inside the async function AFTER the await statement will not execute until the await is resolved
async function getData() {
    await fetch('https://reqres.in/api/users').then(response => response.json()).then(data => console.log(data));

    console.log('Sync Code after the await statement');
}

getData();




