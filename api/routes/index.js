const express = require('express');
const path = require('path');
const vhost = require('vhost');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');


module.exports = ({apiRouter}) => {
    const router = express.Router();
    //aplicamos middlewares
    router.use('/public',express.static(path.join(__dirname,'../../app/public')));
    router.use(cors()).use(express.json()).use(helmet()).use(compression());
   
    //creamos subdomiio
    router.use(vhost('api.*',apiRouter));
    //rruta raiz que sirve la aplicación.
    router.get('/*', function(req,res){
        res.sendFile(path.join(__dirname,'../../app/public/index.html'));
    });

    return router;
}