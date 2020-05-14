const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
      min: 6,
      max: 255,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      min: 8,
      max: 1024,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', UserSchema)
