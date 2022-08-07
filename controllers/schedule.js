const asyncHandler = require('express-async-handler')
const Schedule = require('../models/schedule')

class ScheduleController {
  static getAll = asyncHandler(async (req, res) => {
    const data = await Schedule.find()
    res.render('./schedule/index', { data, active: 'schedule' })
  })

  static get = asyncHandler(async (req, res) => {
    const { id } = req.params
    const data = await Schedule.findOne({ _id: id })
    res.render('./schedule/view', { data, active: 'schedule' })
  })

  static create = asyncHandler(async (req, res) => {
    const data = await Schedule.create(req.body)
    res.redirect('/schedule')
  })

  static update = asyncHandler(async (req, res) => {
    const { id } = req.params
    const data = await Schedule.findOneAndUpdate({ _id: id }, req.body, { new: true })
    res.redirect('/schedule')
  })

  static remove = asyncHandler(async (req, res) => {
    const { id } = req.params
    const data = await Schedule.findOneAndDelete({ _id: id })
    res.redirect('/schedule')
    // res.json(data)
  })

  static add = asyncHandler(async (req, res) => {
    res.render('./schedule/add', { active: 'schedule' })
  })

  static edit = asyncHandler(async (req, res) => {
    const { id } = req.params
    const data = await Schedule.findOne({ _id: id })
    res.render('./schedule/edit', { data, active: 'schedule' })
  })
}

module.exports = ScheduleController
