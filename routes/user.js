const express = require('express')
const router = express.Router()

const { getAll, create, get, remove, update, add, edit } = require('../controllers/user')

router.route('/').get(getAll).post(create)
router.route('/view/:id').get(get)
router.route('/edit/:id').patch(update)
router.route('/delete/:id').delete(remove)

// view
router.route('/add').get(add)
router.route('/edit/:id').get(edit)
module.exports = router
