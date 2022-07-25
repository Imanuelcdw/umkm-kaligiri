const express = require('express')
const router = express.Router()

const { getAll, create, get, edit, remove } = require('../controllers/product')

router.route('/').get(getAll).post(create)
router.route('/delete/:id').delete(remove)
router.route('/view/:id').get(get)
router.route('/edit/:id').patch(edit)

// view
router.route('/add').get((req, res) => {
  res.render('product/add')
})
router.route('/edit/:id').get((req, res) => {
  res.render('product/edit')
})
router.route('/view/:id').get((req, res) => {
  res.render('product/view')
})

module.exports = router
