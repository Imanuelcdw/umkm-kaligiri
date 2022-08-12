const asyncHandler = require('express-async-handler')
const User = require('../models/user')
const bcryptjs = require('bcryptjs')

class UserController {
  static getAll = asyncHandler(async (req, res) => {
    const data = await User.find()
    res.render('./user/index', { data, active: 'user' })
  })

  static get = asyncHandler(async (req, res) => {
    const { id } = req.params
    const data = await User.findOne({ _id: id })
    res.render('./user/view', { data, active: 'user' })
  })

  static create = asyncHandler(async (req, res) => {
    const salt = await bcryptjs.genSalt()
    req.body.password = await bcryptjs.hash(req.body.password, salt)
    const data = await User.create(req.body)
    res.redirect('/user')
  })

  static update = asyncHandler(async (req, res) => {
    const { id } = req.params
    const data = await User.findOneAndUpdate({ _id: id }, req.body, { new: true })
    res.redirect('/user')
  })

  static remove = asyncHandler(async (req, res) => {
    const { id } = req.params
    const data = await User.findOneAndDelete({ _id: id })
    res.redirect('/user')
  })

  static edit = asyncHandler(async (req, res) => {
    const { id } = req.params
    const data = await User.findOne({ _id: id })
    res.render('./user/edit', { data, active: 'user' })
  })

  static add = asyncHandler(async (req, res) => {
    res.render('./user/add', { active: 'user' })
  })
}

module.exports = UserController
