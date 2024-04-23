const medicService  = require ('../service/medico.service');

const allMedics = async (_req, res) => {
  try{
    const Medicos = await medicService.allMedics();
    return res.status(200).json(Medicos);
  }catch(e){
    console.log(e.message)
    res.status(500).json({ message: 'Erro ao buscar médicos' })
  }
};

const getMedicById = async(req, res) => {
  try {
    const { id } = req.params;
    const Medicos = await medicService.getMedicById(id);
    if(!Medicos) return res.status(404).json({ message: 'Erro ao achar médico!' })
    return res.status(200).json(Medicos)
  }catch(e){
    console.log(e.message)
    res.status(500).json({ message: 'Erro ao procurar médico' })
  }
};

const createMedic = async(req, res) =>{
  try{
    const { medicName } = req.body;
    const newMedic = await medicService.createMedic(medicName);
    return res.status(201).json(newMedic)
  }catch(e){
    console.log(e.message)
    res.status(500).json({ message: 'Erro ao criar médico!' })
  }
};

const updateMedic = async(req, res) => {
  try{ 
    const { id } = req.params;
    const { medicName } = req.body;
    const updateMedic = await medicService.updateMedic(id, medicName);
    if(!updateMedic) return res.status(404).json({ message: 'Erro ao atualizar médico' })
    res.status(200).json({ message: 'Medico atualizado com sucesso!' })
  }catch(e){
    console.log(e.message)
    res.status(500).json({ message: 'Erro ao atualizar!' })
  }
};

const deleteMedic = async(req, res) => {
  try { 
    const { id } = req.params;

    await medicService.deleteMedic(id)
    res.status(200).json({ message: 'Medico deletado com sucesso!' })
  }catch(e){
    console.log(e.message)
    res.status(500).json({ message: 'erro ao deletar médico' })
  }
}

module.exports = {
allMedics,
getMedicById,
createMedic,
updateMedic,
deleteMedic,
}