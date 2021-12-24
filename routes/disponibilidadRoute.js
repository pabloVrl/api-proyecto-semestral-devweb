const express = require('express')
const api = express.Router()

const disponibilidadController = require('../controllers/disponibilidadController')

api.get('/:especialista?', disponibilidadController.listar)
api.post('/', disponibilidadController.crear)

module.exports = api