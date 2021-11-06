//import module
const express = require('express')
const app = express()
const port = 5050

//set view engine
app.set('views', './view')
app.set('view engine', 'ejs')

//middleware
const logger =(req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
}

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(logger)
app.use('/asset', express.static('asset'))

//users
const users = [
    { 
        name:"test", 
        password:"123" 
    }
]

app.post('/login', (req, res) => {
    const { name, password } = req.body
    let userName = users.find(i => i.name === name)
    let userPassword = users.find(i => i.password === password)
    
    if (userName && userPassword) {
        res.json(userName)
    } else if (userName && !userPassword) {
        res.json("password salah !!")
    } else {
        res.json("username salah !!")
    }
})

//route
const router = require('./router')
app.use(router)

//error handler
app.use((err, req, res, next) => {
    console.log(`error: ${err}`)
    res.status(500).json({
        status: "fail",
        message: err.message
    })
})

app.use((req, res, next) => {
    res.status(404).json({
        status: "fail",
        message: `${req.url} 404 not found`
    })
    next()
})

//webserver
app.listen(port, () => {
    console.log('server on')
})
