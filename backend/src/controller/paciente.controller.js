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
    res.status(500).json({ message: Erro })
  }
}


module.exports = {
  getAll,
  getById,
}