const asyncHandler = require('express-async-handler')
const User = require('../models/user')
const bcryptjs = require('bcryptjs')

class AuthController {
  static login = asyncHandler(async (req, res) => {
    const { username, password } = req.body
    const data = await User.findOne({ username })

    if (data && (await bcryptjs.compare(password, data.password))) {
      req.session.loggedIn = true
      const { _id, name, username } = data
      req.session.user = { _id, name, username }
      res.redirect('/dashboard')
    } else {
      res.redirect('/auth/login')
    }
  })

  static view_login = asyncHandler(async (req, res) => {
    if (req.session.user) {
      res.redirect('/dashboard')
    } else {
      res.render('login', { active: 'user' })
    }
  })

  static logout = asyncHandler(async (req, res) => {
    await req.session.destroy()
    res.clearCookie('secretName')
    res.redirect('/auth/login')
  })
}

module.exports = AuthController
