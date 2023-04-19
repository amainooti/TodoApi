const mongoose = require('mongoose')


const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: [true, 'Please add a name']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    // userId: {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'User'
    // }

})



module.exports = mongoose.model('Task', taskSchema)