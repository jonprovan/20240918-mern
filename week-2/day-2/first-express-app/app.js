const express = require('express'); // this takes the dependency and brings it into this program
const app = express(); // this returns an object we can run critical methods on for app functionality
const port = 8080; // this is the port on which our app will listen

// import our functions from another file
const [ helloWorld, getPokemon ] = require('./functions');

helloWorld();
console.log(getPokemon());

// this is a function we can call from another server/API/browser/etc.
// all functions like this will use our app prefix from above
const sampleBody = { message: 'GET request processed successfully!' };

// first parameter is the URL suffix that routes to this handler
// second parameter is a lambda with two parameter for the request (req) and the response (res)
// res.send() will include whatever we want to go back to the client
app.get('/', (req, res) => {
    console.log(req.headers);

    res.status(200).send(sampleBody);
});

const pokemon = [ getPokemon(), getPokemon(), getPokemon() ];

app.get('/pokemon', (req, res) => {
    res.send(pokemon);
})

app.get('/number', (req, res) => {
    res.send({ number: Math.random() });
});

// setting up our app to accept requests on a particular port
// the callback function here will run when the app starts
app.listen(port, () => {
    console.log(`My First Express App is up and running on Port ${port}! Huzzah!`);
});