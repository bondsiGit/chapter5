const express = require('express')
const router = express.Router()
const user = require('./user.json')

router.get('/', (req, res) => {
    res.render('landingPage')
})

router.get('/gamesuit', (req, res) => {
    res.render('suitGame')
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/login', (req, res) => {
    const { name, password } = req.body
    let userName = user.find(i => i.user === name)
    let userPassword = user.find(i => i.user === password)
    
})

module.exports = router