const asyncHandler = require('express-async-handler')
const Article = require('../models/article')

class ArticleController {
  static getAll = asyncHandler(async (req, res) => {
    const data = await Article.find()
    res.json(data)
  })

  static get = asyncHandler(async (req, res) => {
    const { id } = req.params
    const data = await Article.findOne({ _id: id })
    res.json(data)
  })

  static create = asyncHandler(async (req, res) => {
    const data = await Article.create(req.body)
    res.json(data)
  })

  static edit = asyncHandler(async (req, res) => {
    const { id } = req.params
    const data = await Article.findOneAndUpdate({ _id: id }, req.body, { new: true })
    res.json(data)
  })

  static remove = asyncHandler(async (req, res) => {
    const { id } = req.params
    const data = await Article.findOneAndDelete({ _id: id })
    res.json(data)
  })
}

module.exports = ArticleController
