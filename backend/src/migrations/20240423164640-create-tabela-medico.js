'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.createTable('Medicos', {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: Sequelize.INTEGER,
  },
  medicName: {
    type: Sequelize.STRING,
    field: 'medic_name'
  }
})
  },

  async down (queryInterface, Sequelize) {
await queryInterface.dropTable('Medicos')
  }
};
