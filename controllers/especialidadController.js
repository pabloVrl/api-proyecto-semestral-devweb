const Especialidad = require('../models/Especialidad')

const crear = (req, res) => {
  const { nombre } = req.body

  const nuevaEspecialidad = new Especialidad({
    nombre
  })

  nuevaEspecialidad.save((err, especialidad) => {
    if (err) return res.status(400).send({ message: "Error al intentar guardar" })
    res.status(201).send(especialidad)
  })
}

const listar = (req, res) => {
  Especialidad.find({}, (err, especialidades) => {
    if (err) return res.status(400).send({ message: "Error al intentar listar especialidades" })
    res.send(especialidades)
  })
}

module.exports = {
  crear,
  listar
}