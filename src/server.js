'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routes/router.js');
const recipeRouter = require('./routes/recipeRouter.js');
const { response } = require('express');
app.use(express.json());
app.use(cors());


app.use('/api', router);
app.use('/api', recipeRouter);


function start(port) {

    app.listen(port, () => {

        console.log(`Server running on PORT: ${port}`);

    });

};

module.exports = {
    start,
    server: app,
}
