const express = require('express');

const pacienteController = require('./controller/paciente.controller');

const app = express();

app.use(express.json());

app.get('/pacientes', pacienteController.getAll);
app.get('/pacientes/:id', pacienteController.getById);
app.post('/pacientes', pacienteController.createPaciente);
app.put('/pacientes/:id', pacienteController.updatePaciente);
app.delete('/pacientes/:id', pacienteController.deletePaciente);

module.exports = app;