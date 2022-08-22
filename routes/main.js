const express = require('express')
const router = express.Router()

const { getProducts, getProduct, index, getSchedule, getAllSchedule, getAllNews } = require('../controllers/main')

router.route('/').get(index)
router.route('/products').get(getProducts)
router.route('/detail/product/:id').get(getProduct)
router.route('/detail/schedule/:id').get(getSchedule)
router.route('/allschedule').get(getAllSchedule)
router.route('/allnews').get(getAllNews)

module.exports = router
