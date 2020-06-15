const express = require('express');
const { authMiddleware } = require('../middlewares');
const { loginValidate, loginValidationRules } = require('../validators/loginValidationRules');

module.exports = ({authController}) => {
  const router = express.Router();

  //ruta para autenticar usuario
  //acceso publico
  router.post('/login',loginValidationRules(),loginValidate,authController.login);
  //acceso seguro
  router.get('/relogin',[authMiddleware],authController.relogin);

  return router;
}