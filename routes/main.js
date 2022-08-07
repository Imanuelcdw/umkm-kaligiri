const express = require('express')
const router = express.Router()

const { getProducts, getProduct, index } = require('../controllers/main')

router.route('/').get(index)
router.route('/products').get(getProducts)
router.route('/detail/:id').get(getProduct)

module.exports = router
