"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _userService = null;

var UserController =
/*#__PURE__*/
function () {
  function UserController(_ref) {
    var userService = _ref.userService;

    _classCallCheck(this, UserController);

    _userService = userService;
  }

  _createClass(UserController, [{
    key: "signup",
    value: function signup(req, res) {
      var user;
      return regeneratorRuntime.async(function signup$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              user = req.body;
              _context.t0 = res;
              _context.next = 4;
              return regeneratorRuntime.awrap(_userService.create(user));

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
    key: "emailValidate",
    value: function emailValidate(req, res) {
      var email;
      return regeneratorRuntime.async(function emailValidate$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              email = req.params.email;
              _context2.t0 = res;
              _context2.next = 4;
              return regeneratorRuntime.awrap(_userService.userExistByEmail(email));

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
  }, {
    key: "update",
    value: function update(req, res) {
      var id, data;
      return regeneratorRuntime.async(function update$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              id = req.user.id;
              data = req.user.body;
              _context3.next = 4;
              return regeneratorRuntime.awrap(res.send(_userService.update(id, data)));

            case 4:
              return _context3.abrupt("return", _context3.sent);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }]);

  return UserController;
}();

module.exports = UserController;