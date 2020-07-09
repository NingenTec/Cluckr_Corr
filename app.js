const express = require('express')
const logger = require('morgan')
const path = require('path')
const cookieParser = require('cookie-parser')
const app = express()

const homeRouter = require('./routes/index')
const clucksRouter = require('./routes/clucks')

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.static(path.join(__dirname, 'public')))
app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

//middleware
app.use((req, res, next) => {
  console.log('cookies: ', req.cookies)
  const username = req.cookies.username

  res.locals.signInUser = username || ''

  console.log('res.locals: ', res.locals)

  next()
})

app.use('/', homeRouter)
app.use('/clucks', clucksRouter)

const PORT = 3004
const DOMAIN = 'localhost'

app.listen(PORT, DOMAIN, () => {
  console.log(`Express listening on ${DOMAIN}:${PORT}`)
})
