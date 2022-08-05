const express = require('express');

const app = express();

const product = require('./Routes/product');
app.use('/product/api/', product);

const PORT =5000;
const server = app.listen(PORT, () => {
    console.log('App is running on port - ' +PORT);
});
