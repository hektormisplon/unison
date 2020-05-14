const mongoose = require('mongoose')

const HubSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 1,
      max: 64,
    },
    created_by: mongoose.Schema.Types.ObjectId,
  },
  { timestamps: true }
)

module.exports = mongoose.model('Hub', HubSchema)
