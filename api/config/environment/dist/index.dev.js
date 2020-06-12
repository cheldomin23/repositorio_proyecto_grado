"use strict";

var development = require('./development.environment');

var production = require('./production.environment');

var config = development;

if (process.env.NODE_ENV == "production") {
  config = production;
} else {
  config = development;
}

module.exports = config;