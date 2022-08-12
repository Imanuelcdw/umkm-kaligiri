// Library
const dotenv = require('dotenv')
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const session = require('express-session')

// Config
dotenv.config()
const app = express()
const port = process.env.PORT || 3000

// Routes
const productRouter = require('./routes/product')
const scheduleRouter = require('./routes/schedule')
const newsRouter = require('./routes/news')
const userRouter = require('./routes/user')
const mainRouter = require('./routes/main')
const authRouter = require('./routes/auth')
const dashboardRouter = require('./routes/dashboard')

// middlewares
const isLogin = require('./middlewares/auth')
const profile = require('./middlewares/profile')

// set library
app.set('view engine', 'ejs')
app.use(cors())
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use(fileUpload())
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: 'umkmkaligiri',
    name: 'secretName',
    cookie: {
      sameSite: true,
      maxAge: Date.now() + 30 * 86400 * 1000,
    },
  })
)

// Routes
app.use('/product', isLogin, profile, productRouter)
app.use('/schedule', isLogin, profile, scheduleRouter)
app.use('/news', isLogin, profile, newsRouter)
app.use('/user', isLogin, profile, userRouter)
app.use('/dashboard', isLogin, profile, dashboardRouter)
app.use('/auth', authRouter)

app.use('/login', (req, res) => {
  res.redirect('/auth/login')
})
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
