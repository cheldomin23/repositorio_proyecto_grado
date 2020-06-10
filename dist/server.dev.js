"use strict";

var container = require('./api/startup/container');

var server = container.resolve('app');
server.start();