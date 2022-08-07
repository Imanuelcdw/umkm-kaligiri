const mongoose = require('mongoose')

const scheduleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Masukan nama acara'],
    },
    venue: {
      type: String,
      required: [true, 'Masukan tempat acara'],
    },
    description: {
      type: String,
    },
    start: {
      type: String,
      required: [true, 'Masukan waktu mulai acara'],
    },
    end: {
      type: String,
      required: [true, 'Masukan waktu selesai acara'],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Schedule', scheduleSchema)
