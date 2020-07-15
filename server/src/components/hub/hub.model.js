const mongoose = require('mongoose')

const HubSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 1,
      max: 64,
    },
    location: {
      type: {
        type: String,
        enum: ['Point'],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
      formattedAddress: String,
    },
    created_by: mongoose.Schema.Types.ObjectId,
  },
  { timestamps: true }
)

module.exports = mongoose.model('Hub', HubSchema)
