"use strict";

var express = require('express');

module.exports = function (_ref) {
  var userController = _ref.userController;
  var router = express.Router(); //rutas de acceso publico
  //ruta para crear usuario

  router.post('/', userController.signup); //ruta para validar correo electrónico

  router.get('/:email', userController.emailValidate); //rutas de acceso privado

  router.put('/:email', userController.update);
  return router;
};