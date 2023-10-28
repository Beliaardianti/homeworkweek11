// models/todos.js
const { DataTypes } = require('sequelize');
const db = require('../config/db');

const todos = db.define('todos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
  },
}, {
  modelName: 'todos',
  tableName: 'todos',
  timestamps: true,
});

module.exports = todos;
