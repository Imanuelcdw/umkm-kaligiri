const asyncHandler = require('express-async-handler')
const User = require('../models/user')

const profile = asyncHandler(async (req, res, next) => {
  res.locals.user = req.session.user
  next()
})

module.exports = profile
