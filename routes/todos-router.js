const express = require('express');
const router = express.Router();
const controller = require('../controller/todos')


router.get('/', controller.listAllTodo)
router.get('/:id', controller.getTodoById)
router.post('/', controller.createTodo)
router.delete('/:id', controller.deleteTodo)
module.exports = router;