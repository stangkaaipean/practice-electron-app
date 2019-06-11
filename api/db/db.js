const mongoose = require('mongoose')
const config = require('../config/env.config')

const port = config.DBPORT
const host = config.DBHOST
const name = config.DBNAME

exports.connectDb = () => {
    mongoose.connect(`mongodb://${host}:${port}/${name}`, {useNewUrlParser: true}, (err, db) => {
        if(err) {
            return console.log(err)
        }
        console.log('mongo connect successfully')
    })
}