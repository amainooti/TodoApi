const mongoose = require('mongoose')



const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: [true, 'Please add a name']
    },

})





module.exports = mongoose.model('Task', taskSchema)