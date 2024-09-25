require('dotenv').config();

// this file will contain all the methods that actually access database records of type salesperson
// we need to set up a database connection first
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

const Salesperson = require('../models/salesperson');

// getting all salespeople
// we pass in req and res here, so we can process the request
// we don't need to send results back to the calling function
const getAllSalespersons = (req, res) => {
    connection.connect();   // this opens the connection to our DB
    // this queries the DB
    // first parameter is a string of the SQL query
    // second parameter is what to do with the response
    connection.query('SELECT * FROM salesperson', (error, rows, fields) => {
        if (error)          // any DB errors will get logged here, if they occur
            throw error;

        // we model the DB response using our object models to ensure that everything checks out
        let salespeople = rows.map(row => new Salesperson(row.id, row.first_name, row.last_name, row.department, row.hire_date, row.salary));

        // we can just send the response back to the user from here
        res.status(200).send(salespeople);
    });
}

// getting one by ID
const getSalespersonById = (req, res, id) => {
    connection.connect();
    // any ? characters in the SQL string, will get filled in by values from the values array, in order
    connection.query('SELECT * FROM salesperson WHERE id = ?', [ id ], (error, rows, fields) => {
        if (error)
            throw error;

        if (rows.length === 0)
            res.status(404).send({ error: `Salesperson with ID ${id} not found!`});

        let salesperson = rows.map(row => new Salesperson(row.id, row.first_name, row.last_name, row.department, row.hire_date, row.salary))[0];

        if (res.statusCode != 201)
            res.status(200);
        res.send(salesperson);
    })
}

// creating one
const createSalesperson = (req, res) => {
    const { first_name, last_name, department, hire_date, salary } = req.body;

    connection.connect();
    connection.query('INSERT INTO salesperson(first_name, last_name, department, hire_date, salary) ' +
                     'VALUES(?,?,?,?,?)', [ first_name, last_name, department, hire_date, salary ], (error, rows, fields) => {
        if (error)
            throw error;

        // we COULD do this here, but it's not a full confirmation of what's in the database for their created record, just a mockup
        // res.send({...req.body, id: rows.insertId});

        // could do this manually...
        // connection.query('SELECT * FROM salesperson WHERE id = ?', [ rows.insertId ], (error, rows, fields) => {
        //     if (error)
        //         throw error;
        //     let salesperson = rows.map(row => new Salesperson(row.id, row.first_name, row.last_name, row.department, row.hire_date, row.salary))[0];
        //     res.status(200).send(salesperson);
        // })

        // but we'll just use our existing method (gold stars for Riley!!)
        res.status(201);
        getSalespersonById(req, res, rows.insertId);
    });
}

// updating one
const updateSalesperson = (req, res, id) => {
    const { first_name, last_name, department, hire_date, salary } = req.body;

    connection.connect();
    connection.query('UPDATE salesperson SET first_name = ?, last_name = ?, department = ?, hire_date = ?, salary = ? WHERE id = ?', 
        [ first_name, last_name, department, hire_date, salary, id ], (error, rows, fields) => {
        if (error)
            throw error;
        console.log(rows);

        getSalespersonById(req, res, id);
    });
}

// deleting one
const deleteSalesperson = (req, res, id) => {
    connection.connect();
    connection.query('DELETE FROM salesperson WHERE id = ?', [ id ], (error, rows, fields) => {
        if (error)
            throw error;
        res.status(204).send();
    })
}

// we export all the methods in an object on which we can call them
module.exports = { getAllSalespersons, 
                   getSalespersonById, 
                   createSalesperson, 
                   updateSalesperson, 
                   deleteSalesperson };