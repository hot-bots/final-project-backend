'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routes/router.js');
app.use(express.json());
app.use(cors());


app.use('/api', router);


function start(port) {

    app.listen(port, () => {

        console.log(`Server running on PORT: ${port}`);

    });

};

module.exports = {
    start,
    server: app,
}
