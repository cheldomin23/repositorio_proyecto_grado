"use strict";

module.exports = function (req, res) {
  return res.status(404).send({
    ok: false,
    message: "Not found"
  });
};