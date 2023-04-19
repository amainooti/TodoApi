const Task = require('../models/Task');
const { StatusCodes } = require('http-status-codes');
const { BadRequest, NotFound } = require('../errors')

const getAllTask = async (req, res) => {
    const tasks = await Task.find({}).sort('createdAt');
    if (!tasks) {
    throw new BadRequest('Tasks not found') // TODO: will change this to a more generic error
    }
    res.status(StatusCodes.OK).json({tasks, length: tasks.length });
}


const getSingleTask = async (req, res) => {
    const { id } = req.params;
    // if (!id) {
    //     throw new NotFound("Id is required")
    // }
    const task = await Task.findById(id);
    if (!task) {
        throw new BadRequest('Task not found')
    }

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
    // find a way to get the id and then the body
    const {
        params: { id: taskId },
        body: { description }
    } = req
    if (description === "") {
        throw new BadRequest("description not included please add description.")
    }
    const task = await Task.findByIdAndUpdate(
        { _id: taskId },
        req.body,
        {
            new: true,
            runValidators: true
        }

    )
    if (!task) throw new NotFound("task not found")
    res.status(StatusCodes.OK).json(task)
}

const deleteTask = async (req, res) => {
    // const { params: taskId } = req;
    const id = req.params.id
    const task = await Task.findByIdAndDelete(id);
    if (!task) throw new NotFound("task not found")
    res.status(StatusCodes.OK).json({msg: `${id} deleted`})

}



module.exports = {
    getAllTask,
    getSingleTask,
    createTask,
    updateTask,
    deleteTask
}