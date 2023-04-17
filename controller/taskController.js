const getAllTask = async (req, res) => {
    res.status(200).json({msg: "all tasks"})
}


const getSingleTask = async (req, res) => {
    res.status(200).json({msg: "get task"})

}
const createTask = async (req, res) => {
    res.status(200).json({msg: "create task"})

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