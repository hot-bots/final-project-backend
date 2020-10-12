'use strict';

const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

/** Middleware */




















function start(port) {

    app.listen(port, () => {

        console.log(`Server running on PORT: ${port}`);

    });

};

module.exports = {
start,
server: app,
}
