require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const especialistaRoute = require('./routes/especialistaRoute')
const disponibilidadRoute = require('./routes/disponibilidadRoute')
const agendamientoRoute = require('./routes/agendamientoRoute')
const usuarioRoute = require('./routes/usuarioRoute')

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/especialista', especialistaRoute)
app.use('/api/disponibilidad', disponibilidadRoute)
app.use('/api/agendamiento', agendamientoRoute)
app.use('/api/usuario', usuarioRoute)

mongoose.connect(process.env.MONGO_URI, (error) => {
  if(error) console.log(error)
  else console.log("Conectado a la base de datos :)")
})

app.listen(process.env.PORT, () => {
  console.log("Server running on PORT " + process.env.PORT)
})