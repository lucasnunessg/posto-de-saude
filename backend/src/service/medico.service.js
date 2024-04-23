const { Medico } = require('../models/');

const allMedics = async() => {
  const Medicos = await Medico.findAll();

  return Medicos
};

const getMedicById = async(id) => {
  const Medicos = await Medico.findByPk(id);

  return Medicos
};

const createMedic = async(medicName) => {
  const Medicos = await Medico.create({medicName});

  return Medicos
};

const updateMedic = async(id, medicName) => {
  const Medicos = await Medico.update({
    medicName 
  }, { where: { id } })

  return Medicos;
}

const deleteMedic = async(id) => {
  const Medicos = await Medico.destroy({ where: { id }})

  return Medicos;
}

module.exports = {
  allMedics,
  getMedicById,
  createMedic,
  updateMedic,
  deleteMedic,
}