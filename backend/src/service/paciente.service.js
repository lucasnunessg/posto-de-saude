const { Paciente } = require('../models');

const getAll = async () => {
  const pacientes = await Paciente.findAll();
  
  return pacientes
};

const getById = async (id) => {
  const pacientes = await Paciente.findByPk(id);

  return pacientes
}

const createPaciente = async (full_name, address, contact) => {
  const newPaciente = await Paciente.create({ full_name, address, contact });

  return newPaciente
};

const updatePaciente = async (id, full_name, address, contact) => {
  const pacientes = await Paciente.update(
    {
      full_name, address, contact
    }, { where:  { id } },
  );

  return pacientes;
}

const deletePaciente = async (id) => {
  const pacientes = await Paciente.destroy({  where: { id }});

  return pacientes;
}

module.exports = {
  getAll,
  getById,
  createPaciente,
  updatePaciente,
  deletePaciente,
}