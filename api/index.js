const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('./config/env.config')
const dataRoutes = require('./data/routes')
const db = require('./db/db')
const mongoose = require('mongoose')

db.connectDb()
   
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DEconstE')
    res.header('Access-Control-Expose-Headers', 'Content-Length')
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range')
    if (req.method === 'OPTIONS') {
        return res.send(200)
    } else {
        return next()
    }
})


app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.json({ message: 'Hello' })
})

dataRoutes.routes(app)

app.listen(config.port, () => {
    console.log(`server up on port ${config.port}`)
})