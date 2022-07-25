// model
const asycnHandler = require('express-async-handler')
const Product = require('../models/product')
const fileUpload = require('express-fileupload')

class ProductController {
  static getAll = asycnHandler(async (req, res) => {
    const data = await Product.find()
    res.render('product/index', { data })
    // res.json(data)
  })

  static get = asycnHandler(async (req, res) => {
    const { id } = req.params
    const data = await Product.find({ _id: id })
    res.json(data)
  })

  static create = asycnHandler(async (req, res) => {
    const data = await Product.create(req.body)
    res.redirect('/product')
  })

  static edit = asycnHandler(async (req, res) => {
    const { id } = req.params
    const data = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true })
    res.json(data)
  })

  static remove = asycnHandler(async (req, res) => {
    const { id } = req.params
    const data = await Product.findOneAndDelete({ _id: id })
    res.redirect('/product')
  })
}

module.exports = ProductController
