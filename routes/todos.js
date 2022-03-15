const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos')

router.get('/', todosController.getTodos)

router.post('/createTodo', todosController.createTodo)

router.post('/updateTodo', todosController.updateTodo)

router.post('/deleteTodo', todosController.deleteTodo)

module.exports = router