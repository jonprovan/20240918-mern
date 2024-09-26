require('dotenv').config();

const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// get all
// in this case, we're sending back the whole Promise and unpacking the success/failure in the controller
const getAllSales = async () => {
    connection.connect();
    return await connection.promise().query('SELECT * FROM sale');
}

module.exports = { getAllSales };