const dataModel = require('../models/data.model')
exports.getData = (req, res) => {
    dataModel.list().then((data) => {
        res.json(data)
    })
}