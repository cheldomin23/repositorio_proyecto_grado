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
    userRoutes = _require2.userRoutes; //import server


var app = require('.'); //create container


var container = createContainer(); //register

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