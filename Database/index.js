const mysql = require('mysql');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 8889,
    database: 'estore',
    multipleStatements: true
});

module.exports.connection = connection;