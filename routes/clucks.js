const express = require('express')
const router = express.Router()
// const knex = require('../db/client')
const cookieParser = require('cookie-parser')

router.use(cookieParser())

//  GET new cluck page
router.get('/new', (req, res) => {
  const username = req.cookies.username
  res.render('clucks/new', { username })
})



module.exports = router
