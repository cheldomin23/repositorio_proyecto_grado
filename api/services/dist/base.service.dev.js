"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BaseService =
/*#__PURE__*/
function () {
  function BaseService(userRepository) {
    _classCallCheck(this, BaseService);

    this.userRepository = userRepository;
  }

  _createClass(BaseService, [{
    key: "create",
    value: function create(user) {
      var newUser;
      return regeneratorRuntime.async(function create$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(this.userRepository.create(user));

            case 2:
              newUser = _context.sent;

              if (user) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return", {
                ok: false,
                message: "Error al intentar registrar usuario"
              });

            case 5:
              return _context.abrupt("return", {
                ok: true,
                message: "Usuaro registrado exitosamente"
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }]);

  return BaseService;
}();

module.exports = BaseService;