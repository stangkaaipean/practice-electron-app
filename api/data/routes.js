const dataController = require('./controllers/data.controllers')
exports.routes = function (app) {
    app.get('/data', [
        dataController.getData
    ])
}