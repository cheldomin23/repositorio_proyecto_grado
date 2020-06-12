const { createContainer, asClass, asFunction, asValue } = require('awilix');

//import config
const config = require('../config');

//import router
const router = require('../routes');
//import apiRouter
const apiRouter = require('../routes/api.routes');
//import routes
const { userRoutes,authRoutes } = require('../routes/index.routes');

//import services
const { userService, authService } = require('../services');

//import controllers
const { userController,authController } = require('../controllers');

//import repositor
const { userRepository } = require('../repository');

//import models
const { User } = require('../models');

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
    userRoutes: asFunction(userRoutes).singleton(),
    authRoutes: asFunction(authRoutes).singleton()
}).register({
    userService: asClass(userService).singleton(),
    authService: asClass(authService).singleton()
}).register({
    userController: asClass(userController.bind(userController)).singleton(),
    authController: asClass(authController.bind(authController)).singleton()
}).register({
    userRepository: asClass(userRepository).singleton()
}).register({
    User: asValue(User)
});

module.exports = container;