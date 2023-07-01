const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
})

// static signup method for signup controller
userSchema.statics.signup = async function (email, password) {
  //validation
  if (!email || !password) {
    throw Error('Please fill out all fields')
  }
  if (!validator.isEmail(email)) {
    throw Error('Please provide a valid email')
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Weak password')
  }

  const exists = await this.findOne({ email })

  if (exists) {
    throw Error('The provided email is taken')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ email, password: hash })

  return user
}

module.exports = mongoose.model('User', userSchema)