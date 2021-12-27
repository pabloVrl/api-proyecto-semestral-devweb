const express = require('express')
const api = express.Router()

const usuarioController = require('../controllers/usuarioController')

api.get('/', usuarioController.listar)
api.post('/', usuarioController.crear)
api.post('/login', usuarioController.validar)

module.exports = api