const express = require('express');
const { notFoundMiddleware, errorMiddleware } = require('../middlewares');

module.exports = ({userRoutes,authRoutes}) => {
    const router = express.Router();
    
    //rutas de usuario
    router.use('/user',userRoutes);
    router.use('/auth',authRoutes);
    //middlwares
    router.use(errorMiddleware);
    router.use(notFoundMiddleware);

    return router;

}