const asyncHandler = require('express-async-handler')
const Product = require('../models/product')
const News = require('../models/news')
const Schedule = require('../models/schedule')

const dashboard = asyncHandler(async (req, res) => {
  const count_product = (await Product.find()).length
  const count_news = (await News.find()).length
  const count_schedule = (await Schedule.find()).length

  res.render('dashboard', { active: 'dashboard', count_product, count_news, count_schedule })
})

module.exports = { dashboard }
