import dataController from './controllers/data.controllers'
const routes = function (app) {
    app.get('/data', [
        dataController.getData
    ])
}

export default { routes }