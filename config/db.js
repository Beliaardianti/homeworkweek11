// const Sequelize = require('sequelize');
// const db = new Sequelize('todos', 'postgres', 'admin',{
//     dialect: "postgres",
//     host: 'localhost'
// })
// module.exports = db



const Sequelize = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize(
    process.env.PG_DB,
    process.env.PG_USER,
    process.env.PG_PASSWORD,
    {
        host: process.env.PG_HOST,
        dialect: 'postgres',
    }
);

module.exports = sequelize;