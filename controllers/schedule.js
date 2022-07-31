const asyncHandler = require('express-async-handler')
const Schedule = require('../models/schedule')

class ScheduleController {
  static getAll = asyncHandler(async (req, res) => {
    const data = await Schedule.find()
    res.json(data)
  })

  static get = asyncHandler(async (req, res) => {
    const { id } = req.params
    const data = await Schedule.findOne({ _id: id })
    res.json(data)
  })

  static create = asyncHandler(async (req, res) => {
    const data = await Schedule.create(req.body)
    res.json(data)
  })

  static edit = asyncHandler(async (req, res) => {
    const { id } = req.params
    const data = await Schedule.findOneAndUpdate({ _id: id }, req.body, { new: true })
    res.json(data)
  })

  static remove = asyncHandler(async (req, res) => {
    const { id } = req.params
    const data = await Schedule.findOneAndDelete({ _id: id })
    res.json(data)
  })
}

module.exports = ScheduleController
