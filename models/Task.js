const mongoose = require('mongoose')


const Task = mongoose.model('Task',{
    content: String,
    status: String,
    userId: String,
    createdAt: String,
})

module.exports = Task;