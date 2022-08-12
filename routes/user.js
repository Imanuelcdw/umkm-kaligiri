const express = require('express')
const router = express.Router()

const { getAll, create, get, edit, remove, login, view_login, logout } = require('../controllers/user')

router.route('/').get(getAll).post(create)
// router.route('/login').get(view_login).post(login)
// router.route('/logout').get(logout)
router.route('/:id').get(get).patch(edit).delete(remove)

module.exports = router
