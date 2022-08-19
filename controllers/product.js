// model
const asyncHandler = require('express-async-handler')
const Product = require('../models/product')
const fs = require('fs')
const { google } = require('googleapis')
const stream = require('stream')
const { drive } = require('googleapis/build/src/apis/drive')

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
    const [file] = req.files
    console.log(file)
    const upload = await this.uploadFile(file)
    req.body.image = `https://drive.google.com/uc?id=${upload}`
    const data = await Product.create(req.body)

    res.redirect('/product')
  })

  static update = asyncHandler(async (req, res) => {
    const [file] = req.files
    const { id } = req.params
    if (!file) {
      delete req.body.image
    } else {
      const upload = await this.uploadFile(file)
      req.body.image = `https://drive.google.com/uc?id=${upload}`
    }
    const data = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true })
    res.redirect('/product')
  })

  static remove = asyncHandler(async (req, res) => {
    const { id } = req.params
    const data = await Product.findOne({ _id: id })
    await Product.deleteOne({ _id: id })
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

  static uploadFile = async (fileObject) => {
    const bufferStream = new stream.PassThrough()
    bufferStream.end(fileObject.buffer)
    const auth = new google.auth.GoogleAuth({
      keyFile: './googlekey.json',
      scopes: ['https://www.googleapis.com/auth/drive'],
    })
    const { data } = await google.drive({ version: 'v3', auth }).files.create({
      media: {
        mimeType: fileObject.mimeType,
        body: bufferStream,
      },
      requestBody: {
        name: fileObject.originalname,
        parents: [process.env.GOOGLE_DRIVE_FOLDER],
      },
      fields: 'id,name',
    })
    console.log(`Uploaded file ${data.name} ${data.id}`)
    return data.id
  }
}

module.exports = ProductController
