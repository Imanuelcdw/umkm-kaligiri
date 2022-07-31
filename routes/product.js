const express = require('express')
const router = express.Router()

const { getAll, create, get, edit, remove, vadd, vedit, vview } = require('../controllers/product')

router.route('/').get(getAll).post(create)
router.route('/delete/:id').delete(remove)
router.route('/view/:id').get(get)
router.route('/edit/:id').patch(edit)

// view
router.route('/add').get(vadd)
router.route('/edit/:id').get(vedit)
router.route('/view/:id').get(vview)

module.exports = router
