const express = require('express');
const { authMiddleware } = require('../middlewares');
const { updateUserValidate, updateUserValidationRules } = require('../validators/updateUserValidationRules');

module.exports = ({userController}) => {
    const router = express.Router();
    //rutas de acceso publico
    //ruta para crear usuario
    router.post('/',updateUserValidationRules(), updateUserValidate,userController.signup);
    //ruta para validar correo electrónico
    router.get('/:email', userController.emailValidate);

    //rutas de acceso privado
    router.put('/:email',[ authMiddleware ], updateUserValidationRules(), updateUserValidate ,userController.update);
    
    return router;
}