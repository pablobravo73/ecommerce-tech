const { PORT } = require('./config/config');
const { db } = require('./config/database');

const express = require('express');
const server = express();


db.sync({ force: false })
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
