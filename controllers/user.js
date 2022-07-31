const asyncHandler = require('express-async-handler')
const User = require('../models/user')

class UserController {
  static getAll = asyncHandler(async (req, res) => {
    const data = await User.find()
    res.json(data)
  })

  static get = asyncHandler(async (req, res) => {
    const { id } = req.params
    const data = await User.findOne({ _id: id })
    res.json(data)
  })

  static create = asyncHandler(async (req, res) => {
    const data = await User.create(req.body)
    res.json(data)
  })

  static edit = asyncHandler(async (req, res) => {
    const { id } = req.params
    const data = await User.findOneAndUpdate({ _id: id }, req.body, { new: true })
    res.json(data)
  })

  static remove = asyncHandler(async (req, res) => {
    const { id } = req.params
    const data = await User.findOneAndDelete({ _id: id })
    res.json(data)
  })
}

module.exports = UserController
