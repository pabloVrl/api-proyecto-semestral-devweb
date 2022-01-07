const mongoose = require('mongoose')
const { Schema, model } = mongoose

const especilidadSchema = new Schema({
  nombre: {
    type: String,
    required: true
  }
})

module.exports = model('Especialidad', especilidadSchema)