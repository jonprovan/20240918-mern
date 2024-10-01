// this middleware will execute for every request
const express = require('express');
const router = express.Router();

// this function takes in three parameters -- req, res, and next
// the next function will pass the request on to whichever middleware or handler comes next in the list
// we have access to the request to grab information
// we also have access to the response to edit it however we need
// if we res.send() the request here, it'll return to the user and not continue down the chain
// but when we call next(), it moves on
function log(req, res, next) {
    // this line accesses a property of the request
    console.log(`Request received from ${req.headers['user-agent']} at ${new Date().toISOString()}`);

    // this adds a header to the response
    res.append("Content-Type", "application/json");
    
    next();
}

router.use(log);

module.exports = router;