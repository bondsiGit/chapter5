const express = require('express')
const router = express.Router()
// const users = require('./user.json')

router.get('/', (req, res) => {
    res.render('landingPage')
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/gamesuit', (req, res) => {
    res.render('suitGame')
})

module.exports = router