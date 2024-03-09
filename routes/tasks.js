const express = require('express')
const router = express.Router()

const tasksController = require('../controllers/tasksController')
const { validateFieldStatus, validateFieldTitle, validateQueryId, validateParamId } = require('../middleware/tasksMidlleware')

router.get('/', validateQueryId, tasksController.getTasks)
router.post('/', validateFieldTitle ,tasksController.createTask)
router.put('/:id', validateFieldTitle, validateFieldStatus, tasksController.updateTask)
router.delete('/:id', validateParamId, tasksController.deleteTask)

module.exports = router