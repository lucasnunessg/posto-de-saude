const { Paciente } = require('../models');

const getAll = async () => {
  const pacientes = await Paciente.findAll();
  
  return pacientes
};

const getById = async (id) => {
  const pacientes = await Paciente.findByPk(id);

  return pacientes
}
/// O JAVASCRIPT SEMPRE LÊ PELA ORDEM, EU NAO PASSEI ID NO SERVICE, 
/// NAO DEVO PASSAR NO CONTROLLER PRA NAO ALTERAR A ORDEM. CASO PASSE NO SERVICE, TAMBEM PASSAR NO CONTROLLER
  const createPaciente = async (fullName, address, contact) => {
  const newPaciente = await Paciente.create({fullName, address, contact });

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