const express = require('express')
const api = express.Router()

const disponibilidadController = require('../controllers/disponibilidadController')
const isAuth = require('../middlewares/isAuth')

api.get('/', disponibilidadController.listar)
api.post('/', isAuth, disponibilidadController.crear)

module.exports = api