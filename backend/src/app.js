const express = require('express');

const pacienteController = require ('./controller/paciente.controller')
const medicoController = require('./controller/medico.controller');

const app = express();

app.use(express.json());

/// ROTAS DE PACIENTES
app.get('/pacientes', pacienteController.getAll);
app.get('/pacientes/:id', pacienteController.getById);
app.post('/pacientes', pacienteController.createPaciente);
app.put('/pacientes/:id', pacienteController.updatePaciente);
app.delete('/pacientes/:id', pacienteController.deletePaciente);

/// ROTAS DE MEDICOS

app.get('/medicos', medicoController.allMedics);
app.get('/medicos/:id', medicoController.getMedicById);
app.post('/medicos', medicoController.createMedic);
app.put('/medicos/:id', medicoController.updateMedic);
app.delete('/medicos/:id', medicoController.deleteMedic);


module.exports = app;