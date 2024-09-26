// this class is a controller that routes requests to various handler methods
// those methods can be fully implemented here, but often are handled in other classes
// ideally, a controller doesn't have much/any logic in it, just the "dispatcher"-type behavior
const express = require('express');
// this creates a router which allows us to route incoming requests
const router = express.Router();

// importing our repo
const repo = require('../repositories/salesperson-repo');

// this method now points to the repository method and does nothing else!
// get all
router.get('/', async (req, res) => {
    res.status(200).send(await repo.getAllSalespersons());
});

// reaching out to our other API
router.get('/otherapi', async (req, res) => {
    let response;
    await fetch('http://localhost:8085').then(fetchdata => fetchdata.json()).then(json => response = json);
    res.send(response);
})

// get by ID
router.get('/:id', async (req, res) => {
    let response = await repo.getSalespersonById(req.params.id);
    if (response)
        res.status(200).send(response);
    else
        res.status(404).send(`No Salesperson with ID ${req.params.id} exists!`);
});

// create
router.post('/', async (req, res) => {
    res.status(201).send(await repo.createSalesperson(req.body));
})

// update
router.put('/:id', async (req, res) => {
    res.status(200).send(await repo.updateSalesperson(req.body, req.params.id));
});

// delete
router.delete('/:id', async (req, res) => {
    await repo.deleteSalesperson(req.params.id);
    res.status(204).send();
});



module.exports = router;