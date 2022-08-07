const asyncHandler = require('express-async-handler')
const News = require('../models/news')

class NewsController {
  static getAll = asyncHandler(async (req, res) => {
    const data = await News.find()
    res.render('./news/index', { data, active: 'news' })
  })

  static get = asyncHandler(async (req, res) => {
    const { id } = req.params
    const data = await News.findOne({ _id: id })
    res.render('./news/view', { data, active: 'news' })
  })

  static create = asyncHandler(async (req, res) => {
    const data = await News.create(req.body)
    res.redirect('/news')
  })

  static update = asyncHandler(async (req, res) => {
    const { id } = req.params
    const data = await News.findOneAndUpdate({ _id: id }, req.body, { new: true })
    res.redirect('/news')
  })

  static remove = asyncHandler(async (req, res) => {
    const { id } = req.params
    const data = await News.findOneAndDelete({ _id: id })
    res.redirect('/news')
  })

  static add = asyncHandler(async (req, res) => {
    res.render('./news/add', { active: 'news' })
  })

  static edit = asyncHandler(async (req, res) => {
    const { id } = req.params
    const data = await News.findOne({ _id: id })
    res.render('./news/edit', { data, active: 'news' })
  })
}

module.exports = NewsController
