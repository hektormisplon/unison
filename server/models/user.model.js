const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    min: 6,
    max: 255,
    unique: true,
    // TODO: match
  },
  password: {
    type: String,
    required: false,
    min: 8,
    max: 1024,
  },
})

module.exports = mongoose.model('User', UserSchema)
