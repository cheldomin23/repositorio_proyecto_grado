"use strict";

var express = require('express');

var _require = require('../middlewares'),
    notFoundMiddleware = _require.notFoundMiddleware,
    errorMiddleware = _require.errorMiddleware;

module.exports = function (_ref) {
  var userRoutes = _ref.userRoutes,
      authRoutes = _ref.authRoutes;
  var router = express.Router(); //rutas de usuario

  router.use('/user', userRoutes);
  router.use('/auth', authRoutes); //middlwares

  router.use(errorMiddleware);
  router.use(notFoundMiddleware);
  return router;
};