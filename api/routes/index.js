const express = require('express');
const webpack = require('webpack');
const configW = require('../../webpack.config');
const compiler = webpack(configW);
const path = require('path');
const vhost = require('vhost');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const { config } = require('process');


module.exports = ({apiRouter}) => {
    const router = express.Router();
    //aplicamos middlewares
    router.use('/public',express.static(path.join(__dirname,'../../public')));
    router.use(cors()).use(express.json()).use(helmet()).use(compression());
    
    if(process.env.NODE_ENV !== 'production') {
        router.use(require('webpack-dev-middleware')(compiler, {
            noInfo: true,
            publicPath: configW.output.publicPath
        }))
    }

    //creamos subdomiio
    router.use(vhost('api.*',apiRouter));
    //rruta raiz que sirve la aplicación.
    router.get('/*', function(req,res){
        res.sendFile(path.join(__dirname,'../../index.html'));
    });

    return router;
}