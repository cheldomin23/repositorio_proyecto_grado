"use strict";

var express = require('express');

module.exports = function (_ref) {
  var userRoutes = _ref.userRoutes;
  var router = express.Router(); //rutas de usuario

  router.use('/user', userRoutes);
  return router;
};