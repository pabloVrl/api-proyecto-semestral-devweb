const mongoose = require('mongoose')
const { Schema, model } = mongoose

const disponibilidadSchema = new Schema({
  especialista: {
    type: Schema.Types.ObjectId,
    ref: 'Especialista',
    required: true
  },
  disponible: {
    type: Boolean,
    default: true
  },
  horario: {
    type: Date,
    required: true
  },
})

module.exports = model('Disponibilidad', disponibilidadSchema)