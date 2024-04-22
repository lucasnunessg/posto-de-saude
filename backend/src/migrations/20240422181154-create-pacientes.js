'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.createTable('Pacientes', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  fullName: {
    allowNull: false,
    type: Sequelize.STRING,
    field: 'full_name'
  },
  address: {
    type: Sequelize.STRING
  },
  contact: {
    type: Sequelize.STRING
  },
})
  },

  async down (queryInterface, Sequelize) {
await queryInterface.dropTable('Pacientes')
  }
};
