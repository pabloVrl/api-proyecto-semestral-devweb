const mongoose = require('mongoose')
const { Schema, model } = mongoose

const agendamientoSchema = new Schema({
  especialista: {
    type: Schema.Types.ObjectId,
    ref: 'Especialista',
    required: true
  },
  disponibilidad: {
    type: Schema.Types.ObjectId,
    ref: 'Disponibilidad',
    required: true
  },
  rutCliente: {
    type: String,
    required: true
  }
})

module.exports = model('Agendamiento', agendamientoSchema)