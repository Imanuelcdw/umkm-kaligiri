const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Masukan judul'],
    },
    body: {
      type: String,
    },
  },
  { timestamps: true }
)
