const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const asycnHandler = require('express-async-handler')
const methodOverride = require('method-override')

const Product = require('./models/product')

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

const productRouter = require('./routes/product')

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.use('/product', productRouter)
app.use('/', async (req, res) => {
  const product = await Product.find()
  res.render('index', { product })
})
app.use((req, res) => {
  res.send('Not Found!')
})

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    app.listen(port, () => console.log('Success'))
  } catch (error) {
    console.error(error)
  }
}
start()
