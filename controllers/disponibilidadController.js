const Disponibilidad = require('../models/Disponibilidad')

const crear = (req, res) => {
  const { especialista, disponible, horario  } = req.body

  const nuevaDisponibilidad = new Disponibilidad({
    especialista,
    disponible,
    horario
  })

  nuevaDisponibilidad.save((err, disponibilidad) => {
    if (err) return res.status(400).send({ message: "Error al intentar guardar" })
    res.status(201).send(disponibilidad)
  })
}

const listar = (req, res) => {

  filtro = {}

  if(req.query.especialista) filtro = {especialista: req.query.especialista}

  Disponibilidad.find(filtro).sort({horario: 1}).exec((err, disponibilidad) => {
    if (err) return res.status(400).send({ message: "Error al intentar listar disponibilidades" })
    res.send(disponibilidad)
  })
}

module.exports = {
  crear,
  listar
}