"use strict";

var jwt = require('jsonwebtoken');

var _require = require('../config'),
    JWT_SECRET = _require.JWT_SECRET;

module.exports = function (req, res, next) {
  var token = req.headers["authorization"];

  if (!token) {
    return res.send({
      ok: false,
      profile: null,
      token: null,
      message: "El token tiene que ser enviado"
    });
  }

  jwt.verify(token, JWT_SECRET, function (err, decodedToken) {
    if (err) {
      return res.send({
        ok: false,
        profile: null,
        token: null,
        message: "Token invalido"
      });
    }

    req.user = decodedToken.user;
    next();
  });
};