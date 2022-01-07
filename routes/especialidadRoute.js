const express = require('express')
const api = express.Router()

const especialistaController = require('../controllers/especialidadController')

api.get('/', especialistaController.listar)
api.post('/', especialistaController.crear)

module.exports = api