"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('../helpers'),
    JwtHelper = _require.JwtHelper;

var _userService = null;

var bcryptjs = require('bcryptjs');

var AuthService =
/*#__PURE__*/
function () {
  function AuthService(_ref) {
    var userService = _ref.userService;

    _classCallCheck(this, AuthService);

    _userService = userService;
  }

  _createClass(AuthService, [{
    key: "login",
    value: function login(user) {
      var email, result, userToEncode, token;
      return regeneratorRuntime.async(function login$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              email = user.email;
              _context.next = 3;
              return regeneratorRuntime.awrap(_userService.getUserByEmail(email));

            case 3:
              result = _context.sent;

              if (result) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", {
                ok: false,
                profile: null,
                token: null,
                message: "Credencial de usuario invalida"
              });

            case 6:
              if (bcryptjs.compareSync(user.password, result.dataValues.password)) {
                _context.next = 8;
                break;
              }

              return _context.abrupt("return", {
                ok: false,
                profile: null,
                token: null,
                message: "Credencial invalida"
              });

            case 8:
              userToEncode = {
                firstName: result.dataValues.firstName,
                middlename: result.dataValues.middlename,
                lastname: result.dataValues.lastname,
                lastname2: result.dataValues.lastname2,
                email: result.dataValues.email,
                id: result.dataValues.id,
                avatar: '../../app/public/resources/avatars/0.png'
              };
              token = JwtHelper(userToEncode);
              return _context.abrupt("return", {
                ok: true,
                profile: userToEncode,
                token: token,
                message: "Bienvenido"
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "relogin",
    value: function relogin(user) {
      var result, userToEncode, token;
      return regeneratorRuntime.async(function relogin$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(_userService.getUserByEmail(user.email));

            case 2:
              result = _context2.sent;
              userToEncode = {
                id: result.dataValues.id,
                firstName: result.dataValues.firstName,
                middlename: result.dataValues.middlename,
                lastname: result.dataValues.lastname,
                lastname2: result.dataValues.lastname2,
                email: result.dataValues.email,
                avatar: '../../app/public/resources/avatars/0.png'
              };
              token = JwtHelper(userToEncode);
              return _context2.abrupt("return", {
                ok: true,
                profile: userToEncode,
                token: token,
                message: "Bienvenido"
              });

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }]);

  return AuthService;
}();

module.exports = AuthService;