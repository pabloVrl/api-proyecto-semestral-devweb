const express = require('express')
const api = express.Router()

const agendamientoController = require('../controllers/agendamientoController')

api.get('/', agendamientoController.listar)
api.post('/', agendamientoController.crear)

module.exports = api