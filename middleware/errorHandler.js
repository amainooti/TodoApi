// this is going to be a middleware for general errors
const { InternalServerError } = require('../errors')

const errorHandler = (err, req, res) => {
    if (err) {
        throw new InternalServerError("Something went wrong.")
    }
}



module.exports = errorHandler