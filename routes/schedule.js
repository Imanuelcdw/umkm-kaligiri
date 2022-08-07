const express = require('express')
const router = express.Router()

const { getAll, create, get, edit, remove, add, update } = require('../controllers/schedule')

router.route('/').get(getAll).post(create)
router.route('/view/:id').get(get)
router.route('/edit/:id').patch(update)
router.route('/delete/:id').delete(remove)

// view
router.route('/add').get(add)
router.route('/edit/:id').get(edit)

module.exports = router
