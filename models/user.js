const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Masukan nama'],
    },
    username: {
      type: String,
      required: [true, 'Masukan username'],
    },
    password: {
      type: String,
      required: [true, 'Masukan password'],
    },
  },
  { timestamps: true }
)
