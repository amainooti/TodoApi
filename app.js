const express = require('express');
const app = express();
require('dotenv').config()

const PORT = process.env.PORT || 3500




const start = async () => {
    try {

        app.listen(PORT, () => {
            console.log('listening on http://localhost:%d', PORT);
        })

    } catch (error) {
        console.error(error);
    }
}

start()