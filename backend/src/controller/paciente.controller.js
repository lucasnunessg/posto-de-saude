const pacienteService = require('../service/paciente.service');

const getAll = async (_req, res) => {
  try {
    const pacientes = await pacienteService.getAll();
    return res.status(200).json(pacientes)
  }catch(e){
    console.log(e.message)
    res.status(500).json({ message: 'Não foi possível encontrar paciente.' })
  }
};

const getById = async (req, res) => {
  try { 
  const { id } = req.params;
  const pacientes = await pacienteService.getById(id);
  if(!pacientes) return res.status(404).json({ message: 'Não foi possível encontrar o paciente em específico!' })
return res.status(200).json(pacientes)
  }catch(e){
    console.log(e.message)
    res.status(500).json({ message: 'Erro' })
  }
};

const createPaciente = async(req, res) => {
  try {
    const { fullName, address, contact } = req.body;

    const newPaciente = await pacienteService.createPaciente(fullName, address, contact);

    return res.status(201).json(newPaciente);
  }catch(e){
    console.log(e.message)
    return res.status(500).json({ message: 'Erro ao criar usuário!' })
  }
};

const updatePaciente = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName, address, contact } = req.body;

    const updatePaciente = await pacienteService.updatePaciente(id, fullName, address, contact)
    if (!updatePaciente) return res.status(404).json({ message: 'Erro ao atualizar o paciente' })
    return res.status(200).json({ message: 'Paciente atualizado com sucesso!' })
  }catch(e){
    console.log(e.message)
    res.status(500).json({ mesasge: 'Erro' })
  }
}

const deletePaciente = async (req, res) => {
  try {
    const { id } = req.params;
    await pacienteService.deletePaciente(id)
    res.status(200).json({ message: 'Paciente deletado com sucesso!' })
  }catch(e){
    console.log(e.message)
    res.status(500).json({ message: 'Erro ao deletar usuário!' })
  }
}


module.exports = {
  getAll,
  getById,
  createPaciente,
  updatePaciente,
  deletePaciente
}