const dotenv = require('dotenv')
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const fileUpload = require('express-fileupload')
const cors = require('cors')

const Product = require('./models/product')
const Schedule = require('./models/schedule')

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

const productRouter = require('./routes/product')
const scheduleRouter = require('./routes/schedule')
const userRouter = require('./routes/user')
const mainRouter = require('./routes/main')

app.set('view engine', 'ejs')

app.use(cors())
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use(fileUpload())

app.use('/product', productRouter)
app.use('/schedule', scheduleRouter)
app.use('/user', userRouter)
app.use('/', mainRouter)

// app.use((req, res) => {
//   res.send('Not Found!')
// })

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    app.listen(port, () => console.log('Success'))
  } catch (error) {
    console.error(error)
  }
}
start()
