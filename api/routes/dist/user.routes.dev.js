"use strict";

var express = require('express');

var _require = require('../middlewares'),
    authMiddleware = _require.authMiddleware;

var _require2 = require('../validators/updateUserValidationRules'),
    updateUserValidate = _require2.updateUserValidate,
    updateUserValidationRules = _require2.updateUserValidationRules;

module.exports = function (_ref) {
  var userController = _ref.userController;
  var router = express.Router(); //rutas de acceso publico
  //ruta para crear usuario

  router.post('/', updateUserValidationRules(), updateUserValidate, userController.signup); //ruta para validar correo electrónico

  router.get('/:email', userController.emailValidate); //rutas de acceso privado

  router.put('/:email', [authMiddleware], updateUserValidationRules(), updateUserValidate, userController.update);
  return router;
};