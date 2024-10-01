// this should only execute for requests to /sale
const express = require('express');
const router = express.Router();

const log = (req, res, next) => {
    console.log('Sale request received!');
    next();
}

router.use(log);

module.exports = router;