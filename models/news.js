const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Masukan judul pengumuman'],
    },
    body: {
      type: String,
      required: [true, 'Masukan isi pengumuman'],
    },
  },
  { timestamps: true }
)
