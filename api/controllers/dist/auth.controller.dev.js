"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _authService = null;

var AuthController =
/*#__PURE__*/
function () {
  function AuthController(_ref) {
    var authService = _ref.authService;

    _classCallCheck(this, AuthController);

    _authService = authService;
  }

  _createClass(AuthController, [{
    key: "login",
    value: function login(req, res) {
      var user;
      return regeneratorRuntime.async(function login$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              user = req.body;
              _context.t0 = res;
              _context.next = 4;
              return regeneratorRuntime.awrap(_authService.login(user));

            case 4:
              _context.t1 = _context.sent;
              return _context.abrupt("return", _context.t0.send.call(_context.t0, _context.t1));

            case 6:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "relogin",
    value: function relogin(req, res) {
      var user;
      return regeneratorRuntime.async(function relogin$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              user = req.user;
              _context2.t0 = res;
              _context2.next = 4;
              return regeneratorRuntime.awrap(_authService.relogin(user));

            case 4:
              _context2.t1 = _context2.sent;
              return _context2.abrupt("return", _context2.t0.send.call(_context2.t0, _context2.t1));

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }]);

  return AuthController;
}();

module.exports = AuthController;