const mongoose = require('mongoose')
const { Schema, model } = mongoose

const especialistaSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  especialidades: [{
    type: Schema.Types.ObjectId,
    ref: "Especialidad",
    required: true
  }],
})

module.exports = model('Especialista', especialistaSchema)