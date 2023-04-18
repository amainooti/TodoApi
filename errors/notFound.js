const {StatusCodes} = require('http-status-codes');
const CustomError = require('./customError')

class notFound extends CustomError {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.NOT_FOUND;
    }
}


module.exports = notFound