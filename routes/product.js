const express = require('express')
const router = express.Router()
const multer = require('multer')

const upload = multer()

const { getAll, create, get, edit, remove, update, add } = require('../controllers/product')

router.route('/').get(getAll).post(upload.any(), create)
router.route('/view/:id').get(get)
router.route('/edit/:id').patch(upload.any(), update)
router.route('/delete/:id').delete(remove)

// view
router.route('/add').get(add)
router.route('/edit/:id').get(edit)

module.exports = router
