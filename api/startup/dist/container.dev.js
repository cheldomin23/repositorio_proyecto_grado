"use strict";

var _require = require('awilix'),
    createContainer = _require.createContainer,
    asClass = _require.asClass,
    asFunction = _require.asFunction,
    asValue = _require.asValue; //import config


var config = require('../config'); //import router


var router = require('../routes'); //import apiRouter


var apiRouter = require('../routes/api.routes'); //import routes


var _require2 = require('../routes/index.routes'),
    userRoutes = _require2.userRoutes,
    authRoutes = _require2.authRoutes; //import services


var _require3 = require('../services'),
    userService = _require3.userService,
    authService = _require3.authService; //import controllers


var _require4 = require('../controllers'),
    userController = _require4.userController,
    authController = _require4.authController; //import repositor


var _require5 = require('../repository'),
    userRepository = _require5.userRepository; //import models


var _require6 = require('../models'),
    User = _require6.User; //import server


var app = require('.'); //create container


var container = createContainer(); //register

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