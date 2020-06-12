const { body, validationResult } = require('express-validator');
const container = require('../startup/container');

const loginValidationRules = () => {
    return [
        body('password').isLength({ min: 8 })
           .withMessage('La contraseña es muy corta, debe tener minimo 8 caracteres'),
        body('password').isLength({ max: 30 })
           .withMessage('La contraseña es muy larga, debe tener maximo 30 caracteres'),
        body('email').isEmail()
            .withMessage('Debes ingresar un correo electrónico'),
        body('email').isLength({ min: 5 })
           .withMessage('Correo electrónico muy corto, debe tener minimo 5 caracteres'),
        body('email').isLength({ max: 50 })
           .withMessage('Correo electrónico muy largo, debe tener maximo 50 caracteres'),
    ]
}

const loginValidate = (req, res, next) => {
    const errors = validationResult(req)
    if(errors.isEmpty()){
        return next()
    }

    const extractedErrors = errors.array().map(
        err => { return { [err.param]: err.msg }}
    )

    return res.status(422).json({
        ok: false,
        errors: extractedErrors,
    })
}

module.exports = {
    loginValidationRules,
    loginValidate
}