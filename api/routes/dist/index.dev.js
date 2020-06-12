"use strict";

var express = require('express');

var webpack = require('webpack');

var configW = require('../../webpack.config');

var compiler = webpack(configW);

var path = require('path');

var vhost = require('vhost');

var cors = require('cors');

var helmet = require('helmet');

var compression = require('compression');

var _require = require('process'),
    config = _require.config;

module.exports = function (_ref) {
  var apiRouter = _ref.apiRouter;
  var router = express.Router(); //aplicamos middlewares

  router.use('/public', express["static"](path.join(__dirname, '../../public')));
  router.use(cors()).use(express.json()).use(helmet()).use(compression());

  if (process.env.NODE_ENV !== 'production') {
    router.use(require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath: configW.output.publicPath
    }));
  } //creamos subdomiio


  router.use(vhost('api.*', apiRouter)); //rruta raiz que sirve la aplicación.

  router.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../index.html'));
  });
  return router;
};