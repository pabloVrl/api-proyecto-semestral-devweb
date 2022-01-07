const Especialista = require('../models/Especialista')

const crear = (req, res) => {
  const { nombre, especialidades } = req.body

  const nuevoEspecialista = new Especialista({
    nombre,
    especialidades
  })

  nuevoEspecialista.save((err, especialista) => {
    if (err) return res.status(400).send({ message: "Error al intentar guardar" })
    res.status(201).send(especialista)
  })
}

const listar = (req, res) => {
  Especialista.find({}).populate('especialidades').exec((err, especialistas) => {
    if (err) return res.status(400).send({ message: "Error al intentar listar especialistas" })
    res.send(especialistas)
  }) 
}

module.exports = {
  crear,
  listar
}