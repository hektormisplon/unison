const mongoose = require('mongoose')

const HubSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 1,
      max: 64,
    },
    address: {
      type: String,
    },
    location: {
      type: {
        type: String,
        enum: ['Point'],
      },
      coordinates: {
        type: [Number],
      },
      formattedAddress: String,
    },
    created_by: mongoose.Schema.Types.ObjectId,
  },
  { timestamps: true }
)

module.exports = mongoose.model('Hub', HubSchema)
