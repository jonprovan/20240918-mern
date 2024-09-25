// this class is a controller that routes requests to various handler methods
// those methods can be fully implemented here, but often are handled in other classes
// ideally, a controller doesn't have much/any logic in it, just the "dispatcher"-type behavior
const express = require('express');
// this creates a router which allows us to route incoming requests
const router = express.Router();

router.get('/', (req, res) => {
    res.send({ message: 'Salesperson router request received!' });
});

router.get('/other', (req, res) => {
    res.send('Other Salesperson router request received!');
});

module.exports = router;