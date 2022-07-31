const mongoose = require('mongoose')

const scheduleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Masukan nama acara'],
    },
    description: {
      type: String,
    },
    time_length: {
      type: String,
      required: [true, 'Masukan lama waktu acara'],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Schedule', scheduleSchema)
