"use strict";

var _require = require('jsonwebtoken'),
    sign = _require.sign;

var _require2 = require('../config'),
    JWT_SECRET = _require2.JWT_SECRET;

module.exports = function (user) {
  return sign({
    user: user
  }, JWT_SECRET, {
    expiresIn: "4h"
  });
};