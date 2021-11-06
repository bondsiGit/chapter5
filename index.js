//import module
const express = require('express')
const app = express()
const port = 50

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
