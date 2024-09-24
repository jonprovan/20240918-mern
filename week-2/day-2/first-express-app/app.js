const express = require('express'); // this takes the dependency and brings it into this program
const app = express(); // this returns an object we can run critical methods on for app functionality
const port = 8080; // this is the port on which our app will listen

// we need to tell our app to handle incoming JSON appropriately
app.use(express.json());

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

// changing the first parameter routes the request to a different handler based on the suffix
app.get('/pokemon', (req, res) => {
    res.send(pokemon);
})

app.get('/number', (req, res) => {
    res.send({ number: Math.random() });
});

// a delete request
app.delete('/delete', (req, res) => {
    console.log(req.headers['user-agent']);
    res.status(204).send();
});

// a post request
// we need the app to use express.json() for this incoming JSON to work
app.post('/post', (req, res) => {
    console.log(req.body);

    let outgoingBody = { ...req.body, message: 'POST body received!' };

    res.status(201).send(outgoingBody);
});

const putObject = {
    id: 5,
    name: 'Franco Von Tweezers',
    favoriteSport: 'Pickleball'
}

// a put request
app.put('/put', (req, res) => {
    let temp = { ...req.body };
    if(temp.id)
        putObject.id = temp.id;
    if(temp.name)
        putObject.name = temp.name;
    if(temp.favoriteSport)
        putObject.favoriteSport = temp.favoriteSport;
    
    res.status(200).send(putObject);
});

// USING ROUTE PARAMETERS AND QUERY PARAMETERS
/**
 * a route parameter might look like http://baseurl.com/dogs/5 (5 is the parameter in this case)
 * a query parameter might look like http://baseurl.com/dogs?name=Fido&color=tan (name and color are the parameters here)
 */

const dogs = [
    {
        id: 1,
        name: 'Frank',
        breed: 'Golden Retriever'
    },
    {
        id: 2,
        name: 'Pickles',
        breed: 'Pug'
    },
    {
        id: 3,
        name: 'Larry',
        breed: 'Labradoodle'
    }
]

// using route parameters
app.get('/dogs/:id', (req, res) => {
    for (let dog of dogs) {
        if(dog.id == req.params.id) {
            res.status(200).send(dog);
            return;
        }
    }

    res.status(404).send({ errorMessage: `No dog with id ${req.params.id}!` });
});

// using query parameters
app.get('/dogs', (req, res) => {
    if (req.query.id) {
        for (let dog of dogs) {
            if(dog.id == req.query.id) {
                res.status(200).send(dog);
                return;
            }
        }
    }

    if (req.query.name) {
        for (let dog of dogs) {
            if(dog.name == req.query.name) {
                res.status(200).send(dog);
                return;
            }
        }
    }

    res.status(404).send({ errorMessage: `No dog with id ${req.query.id} or name ${req.query.name}!` });
});

// you can group methods with the same route together using .route()
// can be a little cleaner/more organized than separate methods
app.route('/uniroute').get((req, res) => {
                        res.send('GET method of Uniroute reached!');
                    })
                      .post((req, res) => {
                        res.send('POST method of Uniroute reached!');                      
                    })
                      .put((req, res) => {
                        res.send('PUT method of Uniroute reached!');                      
                    })
                      .delete((req, res) => {
                        res.send('DELETE method of Uniroute reached!');                      
                    });


// setting up our app to accept requests on a particular port
// the callback function here will run when the app starts
app.listen(port, () => {
    console.log(`My First Express App is up and running on Port ${port}! Huzzah!`);
});