// this enables our application to draw from the .env file we create and get its properties
require('dotenv').config();

const express = require('express');
const app = express();
app.use(express.json());

// CORS = cross-origin resource sharing
// using CORS protection, you can ensure that frontend requests are only allowed from specific "whitelist" IP addresses
// you can enable this per endpoint or per router, but we're going to do it globally
// Postman bypasses this, as do other API backend servers, but it applies to frontend servers
const cors = require('cors');
app.use(cors({ origin: process.env.CORS_WHITELIST.split(',') }));

// we're going to use some middleware here to log the user-agent and the timestamp of each request
// middleware executes AFTER the request is received but BEFORE it gets handled
// if you have multiple middleware functions, they'll execute in the order they're used
// -- either line by line or in the use call, like app.use(mw1, mw2, mw3, etc.)
const logger = require('./middleware/request-logger')
app.use(logger);

const salespersonLogger = require('./middleware/salesperson-middleware');

// we're going to be routing requests to other files for processing
const salespersonRouter = require('./controllers/salesperson-controller');
// setting up our app to use this router for certain requests
app.use('/salesperson', salespersonLogger, salespersonRouter);

// our other router
const saleRouter = require('./controllers/sale-controller');
app.use('/sale', saleRouter);

// using the .env variable to initialize our port number
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App up and listening on Port ${port}!`);
});