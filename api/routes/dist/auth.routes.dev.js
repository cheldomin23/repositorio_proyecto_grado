"use strict";

var express = require('express');

var _require = require('../middlewares'),
    authMiddleware = _require.authMiddleware;

var _require2 = require('../validators/loginValidationRules'),
    loginValidate = _require2.loginValidate,
    loginValidationRules = _require2.loginValidationRules;

module.exports = function (_ref) {
  var authController = _ref.authController;
  var router = express.Router(); //ruta para autenticar usuario
  //acceso publico

  router.post('/login', loginValidationRules(), loginValidate, authController.login); //acceso seguro

  router.get('/relogin', [authMiddleware], authController.relogin);
  return router;
};