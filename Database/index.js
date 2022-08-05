const mysql = require('mysql');

const connection = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"estore",
    port:8889,
    multipleStatements:true
})

module.exports.connection = connection;