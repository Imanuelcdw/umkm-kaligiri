const express = require('express')
const router = express.Router()

const { getProducts, getProduct, index, getSchedule } = require('../controllers/main')

router.route('/').get(index)
router.route('/products').get(getProducts)
router.route('/detail/product/:id').get(getProduct)
router.route('/detail/schedule/:id').get(getSchedule)

module.exports = router
