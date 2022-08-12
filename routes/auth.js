const express = require('express')
const router = express.Router()

const { view_login, login, logout } = require('../controllers/auth')

router.route('/login').get(view_login).post(login)
router.route('/logout').get(logout)

module.exports = router
