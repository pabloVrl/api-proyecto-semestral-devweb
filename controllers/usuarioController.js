const Usuario = require('../models/Usuario')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const crear = async (req, res) => {
  const { mail, password } = req.body
  const passwordHash = await bcrypt.hash(password, 10)

  const nuevoUsuario = new Usuario({
    mail,
    password: passwordHash
  })

  nuevoUsuario.save((err, usuario) => {
    if(err) return res.status(400).send({message: "Error al intentar guardar"})
    res.status(201).send(usuario)
  })
}

const validar = async (req, res) => {
  const {mail, password} = req.body
  const usuario = await Usuario.findOne({mail})
  const usuarioValidado = usuario === null ? false : await bcrypt.compare(password, usuario.password)

  if(!(usuario && usuarioValidado)) return res.status(401).send({message: "Usuario o contraseña no válida"})

  const token = jwt.sign(
    {id: usuario._id}, 
    process.env.SECRET,
    {expiresIn: 60 * 60 * 24 * 7} // * 7 días
  )

  res.send({
    token
  })

  console.log(usuarioValidado)
}

const listar = (req, res) => {
  Usuario.find({}, (err, usuarios) => {
    if(err) return res.status(400).send({message: "Error al intentar listar"})
    res.status(201).send(usuarios)
  })
}

module.exports = {
  crear,
  validar,
  listar
}