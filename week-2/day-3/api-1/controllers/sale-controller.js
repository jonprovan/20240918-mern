const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Sale router request received!');
});

module.exports = router;