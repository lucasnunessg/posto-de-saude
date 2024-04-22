const { Paciente } = require('../models');

const getAll = async () => {
  const pacientes = await Paciente.findAll();
  
  return pacientes
};

const getById = async (id) => {
  const pacientes = await Paciente.findyByPk(id);

  return pacientes
}

module.exports = {
  getAll,
  getById,
}