const express = require('express')
const api = express.Router()

const disponibilidadController = require('../controllers/disponibilidadController')

api.get('/', disponibilidadController.listar)
api.post('/', disponibilidadController.crear)

module.exports = api