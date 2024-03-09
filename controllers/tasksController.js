const tasksModel = require('../models/tasksModel')

const getTasks = async (req,res) => {
    const { id } = req.query

    const tasks = await tasksModel.getTasks(id)

    if(tasks.length < 1){
        return res.status(404).json({success: false, message: "There is no task with this ID"})
    }

    return res.status(200).json({success: true, data: tasks})
}

const createTask = async (req,res) => {
    const { title } = req.body

    const newTask = await tasksModel.createTask(title)

    return res.status(201).json({success: true, data: newTask})
}

const updateTask = async (req,res) => {
    const { id } = req.params

    const updatedTask = await tasksModel.updateTask(id, req.body)

    return res.status(200).json({success:true, data: updatedTask})
}

const deleteTask = async (req,res) => {
    const { id } = req.params

    await tasksModel.deleteTask(id)

    return res.status(204).json({success: true})
}

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask
}