const mongoose = require('mongoose')
const { Schema, model } = mongoose

const especialistaSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  especialidad: {
    type: String,
    required: true
  },
})

module.exports = model('Especialista', especialistaSchema)