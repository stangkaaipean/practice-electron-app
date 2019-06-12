import dataModel from '../models/data.model'
const getData = (req, res) => {
    dataModel.list().then((data) => {
        res.json(data)
    })
}

export default {  getData }