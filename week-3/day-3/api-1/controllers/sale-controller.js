const express = require('express');
const router = express.Router();
const repo = require('../repositories/sale-repo');
const Sale = require('../models/sale');

// get all
router.get('/', async (req, res) => {
    await repo.getAllSales()
        .then(rows => res.status(200).send(rows[0].map(row => new Sale(row.id, 
                                                                       row.customer_first_name, 
                                                                       row.customer_last_name, 
                                                                       row.date, 
                                                                       row.total, 
                                                                       row.salesperson_id))))
        .catch(error => {
            res.status(500).send(error.sqlMessage);
        });
});

// get by ID
router.get('/:id', async (req, res) => {
    await repo.getSaleById(req.params.id)
        .then(row => res.status(200).send(new Sale(row[0][0].id,
                                                   row[0][0].customer_first_name,
                                                   row[0][0].customer_last_name,
                                                   row[0][0].date,
                                                   row[0][0].total,
                                                   row[0][0].salesperson_id)))
        .catch(error => {
            res.status(404).send({
                details: `No Sale with ID ${req.params.id} found!`
            });
        })
});

// create one
router.post('/', async (req, res) => {
    await repo.createSale(req.body)
        .then(response => res.status(201).send({ message: `Sale created with ID ${response[0].insertId}!` }))
        .catch(error => res.status(400).send({ errorMessage: 'Sale improperly formatted!'}))
})

// update one
router.put('/:id', async (req, res) => {
    let temp;
    await repo.getSaleById(req.params.id).then(row => temp = new Sale(row[0][0].id,
                                                                      row[0][0].customer_first_name,
                                                                      row[0][0].customer_last_name,
                                                                      row[0][0].date,
                                                                      row[0][0].total,
                                                                      row[0][0].salesperson_id));
                                                                      
    if (req.body.id) temp.id = req.body.id;
    if (req.body.customer_first_name) temp.customer_first_name = req.body.customer_first_name;
    if (req.body.customer_last_name) temp.customer_last_name = req.body.customer_last_name;
    if (req.body.date) temp.date = req.body.date;
    if (req.body.total) temp.total = req.body.total;
    if (req.body.salesperson_id) temp.salesperson_id = req.body.salesperson_id;

    await repo.updateSale(req.params.id, temp)
        .then(async data => {
            let temp2;
            await repo.getSaleById(temp.id).then(row => temp2 = new Sale(row[0][0].id,
                                                                         row[0][0].customer_first_name,
                                                                         row[0][0].customer_last_name,
                                                                         row[0][0].date,
                                                                         row[0][0].total,
                                                                         row[0][0].salesperson_id));
            res.status(200).send(temp2);
        })
        .catch(error => res.status(400).send({ errorMessage: 'Update body improperly formatted!'}))
    
});

// delete one
router.delete('/:id', async (req, res) => {
    await repo.deleteSale(req.params.id)
        .then(() => res.status(204).send())
        .catch(error => res.status(500).send({ errorMessage: 'Something went wrong...' }));
})

module.exports = router;