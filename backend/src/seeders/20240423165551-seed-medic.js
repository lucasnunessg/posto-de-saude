'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.bulkInsert('Medicos', [
  {
    medic_name: 'Dr Fulano de Tal'
  },
  {
    medic_name: 'Dr Ciclaninho da Silva'
  },
  {
    medic_name: 'Dr Kevin'
  }
])
  },

  async down (queryInterface, Sequelize) {
await queryInterface.bulkDelete('Medicos', null, {});
  }
};
