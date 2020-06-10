"use strict";

var _require = require('awilix'),
    createContainer = _require.createContainer,
    asClass = _require.asClass,
    asFunction = _require.asFunction,
    asValue = _require.asValue; //import config


var config = require('../config'); //import server


var app = require('.'); //create container


var container = createContainer(); //register

container.register({
  config: asValue(config),
  app: asClass(app).singleton()
});
module.exports = container;