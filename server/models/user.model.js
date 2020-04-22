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
    unique: true,
    // TODO: match
  },
  password: {
    type: String,
    required: false,
  },
})

module.exports = mongoose.model('User', UserSchema)
