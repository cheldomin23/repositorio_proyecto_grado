"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BaseService = require('./base.service');

var _userRepository = null;

var UserService =
/*#__PURE__*/
function (_BaseService) {
  _inherits(UserService, _BaseService);

  function UserService(_ref) {
    var _this;

    var userRepository = _ref.userRepository;

    _classCallCheck(this, UserService);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UserService).call(this, userRepository));
    _userRepository = userRepository;
    return _this;
  }

  _createClass(UserService, [{
    key: "userExistByEmail",
    value: function userExistByEmail(email) {
      var user;
      return regeneratorRuntime.async(function userExistByEmail$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(_userRepository.userExistByEmail(email));

            case 2:
              user = _context.sent;

              if (user) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return", {
                ok: true,
                message: "Usuario disponible"
              });

            case 5:
              return _context.abrupt("return", {
                ok: false,
                message: "Usuario no disponible"
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "getUserByEmail",
    value: function getUserByEmail(email) {
      var user;
      return regeneratorRuntime.async(function getUserByEmail$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(_userRepository.getUserByEmail(email));

            case 2:
              user = _context2.sent;
              return _context2.abrupt("return", user);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "updateByEmail",
    value: function updateByEmail(id, data) {
      var user;
      return regeneratorRuntime.async(function updateByEmail$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return regeneratorRuntime.awrap(_userRepository.update(id, data));

            case 2:
              user = _context3.sent;
              return _context3.abrupt("return", user);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }]);

  return UserService;
}(BaseService);

module.exports = UserService;