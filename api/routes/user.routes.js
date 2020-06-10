const express = require('express');

module.exports = () => {
    const router = express.Router();
    //ruta para crear usuario
    router.post('/',(req,res)=>{
        res.send({message:"todo salio bien"});
    })
    
    return router;
}