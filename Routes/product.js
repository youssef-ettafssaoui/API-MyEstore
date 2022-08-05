const  express = require('express');
const product = express();
const database = require('../Database');

product.get('/getCategories', (req, res) => {
    let appData = {
        isError:false,
        data:[]
    };

    database.connection.getConnection((err, connection) => {
        if(err) {
            appData.isError = true;
            appData.data = err;
            res.status(500).json(appData);
        } else {
            connection.query('select * from categories', (error, rows) => {
                if(error) {
                    appData.isError = true;
                    appData.data = err;
                    res.status(500).json(appData);
                } else {
                    appData.data = rows;
                    res.status(200).json(appData);
                }
            })
        }
    })

    res.status(204).json(appData);
});

module.exports = product;