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
router.get('/', (req, res) => {
    repo.getAllSalespersons(req, res);
});

// get by ID
router.get('/:id', (req, res) => {
    repo.getSalespersonById(req, res, req.params.id);
});

// create
router.post('/', (req, res) => {
    repo.createSalesperson(req, res);
})

// update
router.put('/:id', (req, res) => {
    repo.updateSalesperson(req, res, req.params.id);
});

// delete
router.delete('/:id', (req, res) => {
    repo.deleteSalesperson(req, res, req.params.id);
});

module.exports = router;