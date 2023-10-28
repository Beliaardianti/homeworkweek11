'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('todos', [
      {
        title: 'Memahami unit testing dan docker',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Mengerjakan homework',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
 
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('todos', null, {});
  },
};
