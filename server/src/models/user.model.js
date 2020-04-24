const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    min: 6,
    max: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    min: 8,
    max: 1024,
  },
})

module.exports = mongoose.model('User', UserSchema)
