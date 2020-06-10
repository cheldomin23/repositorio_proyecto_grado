"use strict";

var express = require('express');

var path = require('path');

var vhost = require('vhost');

var cors = require('cors');

var helmet = require('helmet');

var compression = require('compression');

module.exports = function (_ref) {
  var apiRouter = _ref.apiRouter;
  var router = express.Router(); //aplicamos middlewares

  router.use('/public', express["static"](path.join(__dirname, '../../app/public')));
  router.use(cors()).use(express.json()).use(helmet()).use(compression()); //creamos subdomiio

  router.use(vhost('api.*', apiRouter)); //rruta raiz que sirve la aplicación.

  router.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../app/public/index.html'));
  });
  return router;
};