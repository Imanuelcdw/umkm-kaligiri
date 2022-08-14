// model
const asyncHandler = require('express-async-handler')
const Product = require('../models/product')
const fs = require('fs')

class ProductController {
  static getAll = asyncHandler(async (req, res) => {
    const data = await Product.find()
    res.render('./product/index', { data, active: 'product' })
  })

  static get = asyncHandler(async (req, res) => {
    const { id } = req.params
    const data = await Product.findOne({ _id: id })
    res.render('./product/view', { data, active: 'product' })
  })

  static create = asyncHandler(async (req, res) => {
    const image = req.files.image
    const uploadPath = './public/' + image.name
    await image.mv(uploadPath)
    req.body.image = image.name
    const data = await Product.create(req.body)
    res.redirect('/product')
  })

  static update = asyncHandler(async (req, res) => {
    const file = req.files
    const { id } = req.params
    if (!file) {
      delete req.body.image
    } else {
      // const data = await Product.findOne({ _id: id })
      // fs.unlinkSync(`./public/${data.image}`)

      const image = file.image
      const uploadPath = './public/' + image.name
      await image.mv(uploadPath)
      req.body.image = image.name
    }
    const data = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true })
    res.redirect('/product')
  })

  static remove = asyncHandler(async (req, res) => {
    const { id } = req.params
    const data = await Product.findOne({ _id: id })
    await Product.deleteOne({ _id: id })
    fs.unlinkSync('./public/' + data.image)
    res.redirect('/product')
  })

  static add = asyncHandler(async (req, res) => {
    res.render('./product/add', { active: 'product' })
  })

  static edit = asyncHandler(async (req, res) => {
    const { id } = req.params
    const data = await Product.findOne({ _id: id })
    res.render('./product/edit', { data, active: 'product' })
  })
}

module.exports = ProductController
