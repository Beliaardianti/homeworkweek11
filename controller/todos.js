const todos = require('../models/todos'); 

// List All Todo 
exports.listAllTodo = async (req, res) => {
  try {
    const allTodos = await todos.findAll();
    res.json(allTodos);
  } catch (error) {
    res.status(500).json({ message: 'todo gagal', error: error.message });
  }
};


// Detail Todo 
exports.getTodoById = async (req, res) => {
  try {
    const todoId = req.params.id;
    const todo = await todos.findByPk(todoId);
    
    if (todo) {
      res.json(todo);
    } else {
      res.status(404).json({ message: 'Todo tidak ditemukan' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil detail todo', error: error.message });
  }
};

// Create todo 
exports.createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) {
      return res.status(400).json({ message: 'Data title tidak diterima dengan benar' });
    }
    const newTodo = await todos.create({ title });
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: 'Gagal membuat todo', error: error.message });
  }
};




// Delete Todo (Soft Delete)
exports.deleteTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const todo = await todos.findByPk(todoId);
    
    if (todo) {
      // Lakukan soft delete dengan menandai todo sebagai dihapus
      await todo.update({ deletedAt: new Date() });
      res.json({ message: 'Todo berhasil dihapus (soft delete)' });
    } else {
      res.status(404).json({ message: 'Todo tidak ditemukan' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Gagal menghapus todo', error: error.message });
  }
};

module.exports = controller;