const express = require('express');
const app = express();
require('express-async-errors');
const notFound = require('./middleware/notFound')
const taskRoute = require('./routes/task')
const connectDB = require('./config/db')
require('dotenv').config()

const PORT = process.env.PORT || 3500

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/api/v1/task', taskRoute)
// error page not found
app.use(notFound);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => {
            console.log(`listening on http://localhost:${PORT}`);
        })

    } catch (error) {
        console.error(error);
    }
}

start()