"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var express = require('express');

var _express = null;
var _config = null;

var Server =
/*#__PURE__*/
function () {
  function Server(_ref) {
    var config = _ref.config,
        router = _ref.router;

    _classCallCheck(this, Server);

    _config = config;
    _express = new express().use(router);
  }

  _createClass(Server, [{
    key: "start",
    value: function start() {
      return new Promise(function (resolve) {
        _express.listen(_config.PORT, function () {
          console.log("Servidor corriendo en puerto ".concat(_config.PORT));
        });

        resolve();
      });
    }
  }]);

  return Server;
}();

module.exports = Server;