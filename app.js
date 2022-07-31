const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const asycnHandler = require('express-async-handler')
const methodOverride = require('method-override')
const fileUpload = require('express-fileupload')

const Product = require('./models/product')

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

const productRouter = require('./routes/product')
const scheduleRouter = require('./routes/schedule')
const articleRouter = require('./routes/article')
const userRouter = require('./routes/user')

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use(fileUpload())

app.use('/product', productRouter)
app.use('/schedule', scheduleRouter)
app.use('/article', articleRouter)
app.use('/user', userRouter)

// main
app.get('/products', async (req, res) => {
  const data = await Product.find()
  res.render('products', { data })
})
app.get('/', async (req, res) => {
  const data = await Product.find()
  res.render('index', { data })
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
