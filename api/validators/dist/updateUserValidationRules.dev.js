"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('express-validator'),
    body = _require.body,
    validationResult = _require.validationResult;

var updateUserValidationRules = function updateUserValidationRules() {
  return [body('firstName').isLength({
    min: 4
  }).withMessage('El primer nombre debe tener minimo 4 caracteres'), body('firstName').isLength({
    max: 25
  }).withMessage('El primer nombre debe tener maximo 25 caracteres'), body('firstName').isString().withMessage('El primer nombre no debe contener caracteres numéricos'), body('lastname').isLength({
    min: 4
  }).withMessage('El primer apellido debe tener minimo 4 caracteres'), body('lastname').isLength({
    max: 25
  }).withMessage('El primer apellido debe tener maximo 25 caracteres'), body('lastname').isString().withMessage('El primer apellido no debe contener caracteres numéricos'), body('password').isLength({
    min: 8
  }).withMessage('La contraseña es muy corta, debe tener minimo 8 caracteres'), body('password').isLength({
    max: 30
  }).withMessage('La contraseña es muy larga, debe tener maximo 30 caracteres'), body('email').isEmail().withMessage('Debes ingresar un correo electrónico'), body('email').isLength({
    min: 5
  }).withMessage('Correo electrónico muy corto, debe tener minimo 5 caracteres'), body('email').isLength({
    max: 50
  }).withMessage('Correo electrónico muy largo, debe tener maximo 50 caracteres')];
};

var updateUserValidate = function updateUserValidate(req, res, next) {
  var errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  var extractedErrors = errors.array().map(function (err) {
    return _defineProperty({}, err.param, err.msg);
  });
  return res.status(422).json({
    ok: false,
    errors: extractedErrors
  });
};

module.exports = {
  updateUserValidationRules: updateUserValidationRules,
  updateUserValidate: updateUserValidate
};