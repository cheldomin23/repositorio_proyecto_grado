const { createContainer, asClass, asFunction, asValue } = require('awilix');

//import config
const config = require('../config');

//import router
const router = require('../routes');
//import apiRouter
const apiRouter = require('../routes/api.routes');
//import routes
const { userRoutes } = require('../routes/index.routes');

//import server
const app = require('.');

//create container
const container = createContainer();

//register
container.register({
    router: asFunction(router).singleton(),
    config: asValue(config),
    app: asClass(app).singleton()
}).register({
    apiRouter: asFunction(apiRouter).singleton()
}).register({
    userRoutes: asFunction(userRoutes).singleton()
});

module.exports = container;