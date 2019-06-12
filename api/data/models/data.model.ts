import mongoose = require('mongoose')
const Schema = mongoose.Schema

const dataSchema = new Schema({
        product_name: String,
        supplier: String,
        quantity: String,
        unit_cost: String
})

dataSchema.set('toJSON', {
    virtuals: true
});

const data = mongoose.model('data', dataSchema)

const list = () => {
    return new Promise((resolve, reject) => {
        data.find().exec((err, data) => {
            if(err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    }) 
}

export default { list }