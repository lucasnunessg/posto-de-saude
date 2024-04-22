'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Pacientes', [
      {
        full_name: 'Lucas Pacheco Nunes',
        address: 'Rua Acioli Vaz de Andrade, 51, bairro Andrade',
        contact: '55 9 9990 9852'
      },
      {
        full_name: 'Julia Trindade Modernel',
        address: 'Rua Acioli Vaz de Andrade, 52, bairro Andrade',
        contact: '55 9 9990 1452'
      },
      {
        full_name: 'Kevin de Bruyne',
        address: 'Manchester Street, Center, n 149',
        contact: '0631 9 9241 3245'
      },
    ])
  },

  async down (queryInterface, Sequelize) {
 await queryInterface.bulkDelete('Pacientes', null, {})
  }
};
