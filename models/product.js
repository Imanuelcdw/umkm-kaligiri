const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Masukan Nama Produk'],
    },
    description: {
      type: String,
    },
    image: {
      type: String,
      required: [true, 'Masukan Gambar'],
    },
    size: {
      type: String,
      required: [true, 'Masukan Ukuran'],
    },
    price: {
      type: Number,
      required: [true, 'Masukan Harga'],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Product', productSchema)
