'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.addColumn('Pacientes', 'medic_id', {
    allowNull: true,
    type: Sequelize.INTEGER,
    references: {
      model: 'Medicos',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  },

  async down (queryInterface, Sequelize) {
await queryInterface.removeColumn('Pacientes', 'medic_id', {})
  }
};
