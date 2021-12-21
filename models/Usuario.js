const mongoose = require('mongoose')

const UsuarioSchema = mongoose.Schema({
  mail: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Usuario', UsuarioSchema)