"use strict";

module.exports = function (error, req, res, next) {
  var errorStatus = error.status || 500;
  return res.status(errorStatus).send({
    ok: false,
    message: error.message
  });
};