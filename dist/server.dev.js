"use strict";

var container = require('./api/startup/container');

var server = container.resolve('app');

if (require.main === module) {
  server.start();
} else {
  module.exports = server.start;
}