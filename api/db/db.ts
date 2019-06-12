import mongoose = require('mongoose')
import config  from '../config/env.config'
import { MongoError } from 'mongodb';

const port = config.DBPORT
const host = config.DBHOST
const name = config.DBNAME

const connectDb = () => {
    mongoose.connect(`mongodb://${host}:${port}/${name}`, {useNewUrlParser: true}, (err: MongoError ) => {
        if(err) {
            return console.log(err)
        }
        console.log('mongo connect successfully')
    })
}

export default {connectDb}