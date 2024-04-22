const express = require('express');

const pacienteController = require('./controller/paciente.controller');

const app = express();

app.use(express.json());

app.get('/pacientes', pacienteController.getAll);

module.exports = app;