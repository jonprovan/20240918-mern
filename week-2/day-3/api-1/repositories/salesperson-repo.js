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
const getAllSalespersons = async () => {
    let salespersons;  // a holder for our eventual DB response

    connection.connect();   // this opens the connection to our DB
    // this queries the DB
    // first parameter is a string of the SQL query
    await connection.promise().query('SELECT * FROM salesperson')
        .then(rows => {
            salespersons = rows[0].map(row => new Salesperson(row.id, row.first_name, row.last_name, row.department, row.hire_date, row.salary));
        }).catch(error => console.log(error.sqlMessage));

    return salespersons;
}

// getting one by ID
const getSalespersonById = async (id) => {
    let salesperson;

    connection.connect();
    // any ? characters in the SQL string, will get filled in by values from the values array, in order
    await connection.promise().query('SELECT * FROM salesperson WHERE id = ?', [ id ])
        .then(rows => {
            let sp = rows[0][0];
            if (sp)
                salesperson = new Salesperson(sp.id, sp.first_name, sp.last_name, sp.department, sp.hire_date, sp.salary);
        })

    return salesperson;
}

// creating one
const createSalesperson = async (body) => {
    const { first_name, last_name, department, hire_date, salary } = body;
    let newSalesperson;

    connection.connect();
    await connection.promise().query('INSERT INTO salesperson(first_name, last_name, department, hire_date, salary) ' +
                                     'VALUES(?,?,?,?,?)', [ first_name, last_name, department, hire_date, salary ])
        .then(async response => newSalesperson = await getSalespersonById(response[0].insertId));
    
    return newSalesperson;
}

// updating one
const updateSalesperson = async (body, idToUpdate) => {
    const { id, first_name, last_name, department, hire_date, salary } = body;
    let updatedSalesperson;

    connection.connect();
    await connection.promise().query('UPDATE salesperson SET id = ?, first_name = ?, last_name = ?, department = ?, hire_date = ?, salary = ? WHERE id = ?', 
        [ id, first_name, last_name, department, hire_date, salary, idToUpdate ])
        .then(async response => updatedSalesperson = await getSalespersonById(id));

    return updatedSalesperson;
}

// deleting one
const deleteSalesperson = async (id) => {
    connection.connect();

    await connection.promise().query('DELETE FROM salesperson WHERE id = ?', [ id ])
        .then(response => console.log(response));
}

// we export all the methods in an object on which we can call them
module.exports = { getAllSalespersons, 
                   getSalespersonById, 
                   createSalesperson, 
                   updateSalesperson, 
                   deleteSalesperson };