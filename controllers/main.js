const asyncHandler = require('express-async-handler')
const Product = require('../models/product')
const Schedule = require('../models/schedule')

class MainController {
  static getProducts = asyncHandler(async (req, res) => {
    const data = await Product.find()
    res.render('products', { data })
  })

  static getProduct = asyncHandler(async (req, res) => {
    const { id } = req.params
    const data = await Product.findOne({ _id: id })
    res.render('detail', { data })
  })

  static index = asyncHandler(async (req, res) => {
    const product = await Product.find().limit(3)
    const schedule = await Schedule.find().sort('start')
    res.render('index', { product, schedule })
  })
}

module.exports = MainController
