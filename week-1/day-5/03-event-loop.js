// SIMPLE EVENT LOOP EXAMPLE IN JS

/**
 * processing order:
 * 
 * 1. sync code
 * 2. Promises (event loop)
 * 3. other async operations (event loop)
 */

console.log('First log');

// setTimeout lays out a function to execute after a certain period of time
setTimeout(() => {
    console.log('TIMEOUT COMPLETE');
}, 0);

console.log('Second log');

Promise.resolve('PROMISE RESOLVED').then(data => {
    console.log(data);
});

console.log('Third log');
