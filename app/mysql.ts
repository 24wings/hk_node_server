import mysql = require('mysql2');

// create the connection to database
export const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "lwm740130",
    database: 'dotnetcore',
});
