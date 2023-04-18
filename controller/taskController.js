const Task = require('../models/Task');
const { StatusCodes } = require('http-status-codes');
const { BadRequest, NotFound } = require('../errors')

const getAllTask = async (req, res) => {
    const tasks = await Task.find({}).sort('createdAt');
    if (!tasks) {
    throw new BadRequest('Tasks not found') // TODO: will change this to a more generic error
    }
    res.status(StatusCodes.OK).json(tasks );
}


const getSingleTask = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        throw new BadRequest('Task not found')
    }
    const task = await Task.findById(id);
    res.status(StatusCodes.OK).json({ msg: task });

}
const createTask = async (req, res) => {
    if (!req.body) {
        throw new NotFound("Please provide a task.")
    }
    const task = await Task.create({...req.body})
    res.status(StatusCodes.OK).json({msg: task})

}
const updateTask = async (req, res) => {
    res.status(200).json({msg: "update tasks"})

}
const deleteTask = async (req, res) => {
    res.status(200).json({msg: "delete task"})

}



module.exports = {
    getAllTask,
    getSingleTask,
    createTask,
    updateTask,
    deleteTask
}