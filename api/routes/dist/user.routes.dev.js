"use strict";

var express = require('express');

module.exports = function () {
  var router = express.Router(); //ruta para crear usuario

  router.post('/', function (req, res) {
    res.send({
      message: "todo salio bien"
    });
  });
  return router;
};