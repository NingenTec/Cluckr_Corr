const express = require('express')
const router = express.Router()
const knex = require('../db/client')
const cookieParser = require('cookie-parser')
const moment = require('moment')

router.use(cookieParser())

//  GET new cluck page
router.get('/new', (req, res) => {
  const username = req.cookies.username
  res.render('clucks/new', { username })
})

router.post('/', (req, res) => {
  const username = req.cookies.username
  const content = req.body.content
  const image_url = req.body.image_url

  knex('clucks')
    .insert({ image_url, content, username })
    .returning('*')
    .then((data) => {
      // TODO:  Change redirect to clucks list once we build it
      res.redirect('welcome')
    })
})

router.get('/list', (req, res) => {
  const username = req.cookies.username

  knex
    .select('*')
    .from('clucks')
    .orderBy('created_at')
    .then((clucks) => {
      res.render('clucks/list', { clucks, moment })
    })
})

module.exports = router
