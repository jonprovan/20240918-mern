const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({
        source: 'API-2',
        method: 'GET',
        message: 'API request to API-2 was successful!'
    })
})

app.listen(8085, () => {
    console.log('API-2 up and listening on port 8085!');
})