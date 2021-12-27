const Agendamiento = require('../models/Agendamiento')
const Disponibilidad = require('../models/Disponibilidad')
const crear = (req, res) => {
  const { especialista, disponibilidad, rutCliente  } = req.body
  const nuevoAgendamiento = new Agendamiento({
    especialista,
    disponibilidad,
    rutCliente
  })

  nuevoAgendamiento.save((err, agendamiento) => {
    if (err) return res.status(400).send({ message: "Error al intentar guardar" })

    // Cambiar a falso el parametro de disponible en Disponibilidad
    Disponibilidad.findByIdAndUpdate(disponibilidad, {disponible: false}, (err) => {
      if(err) console.log("no se pudo actualizar")
      else console.log("actualizado!")
    })
    res.status(201).send(agendamiento)
  })
}

const listar = (req, res) => {
  Agendamiento.find((err, agendamiento) => {
    if (err) return res.status(400).send({ message: "Error al intentar listar agendamientos" })
    res.send(agendamiento)
  })
}

module.exports = {
  crear,
  listar
}