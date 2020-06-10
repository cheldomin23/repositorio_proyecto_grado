const express = require('express');


module.exports = ({userRoutes}) => {
    const router = express.Router();
    
    //rutas de usuario
    router.use('/user',userRoutes);

    return router;

}