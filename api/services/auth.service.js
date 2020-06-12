const { JwtHelper } = require('../helpers');
let _userService = null;
const bcryptjs = require('bcryptjs');

class AuthService{
    constructor({userService}){
      _userService = userService;   
    }

    async login(user){
        const { email } = user;
        const result = await _userService.getUserByEmail(email);
        if(!result){
            return {ok: false, profile: null, token: null, message: "Credencial de usuario invalida"}
        }
        if(!bcryptjs.compareSync(user.password, result.dataValues.password)){
            return {ok:false, profile: null, token: null, message: "Credencial invalida"}
        }
        const userToEncode = {
            firstName: result.dataValues.firstName,
            middlename: result.dataValues.middlename,
            lastname: result.dataValues.lastname,
            lastname2: result.dataValues.lastname2,
            email: result.dataValues.email,
            id: result.dataValues.id,
            avatar: '../../app/public/resources/avatars/0.png'
        }
        const token = JwtHelper(userToEncode);
        return {ok: true, profile: userToEncode, token: token, message: "Bienvenido"}
    }

    async relogin(user){
        const result = await _userService.getUserByEmail(user.email);
        const userToEncode = {
            id: result.dataValues.id,
            firstName: result.dataValues.firstName,
            middlename: result.dataValues.middlename,
            lastname: result.dataValues.lastname,
            lastname2: result.dataValues.lastname2,
            email: result.dataValues.email,
            avatar: '../../app/public/resources/avatars/0.png'
        }
        const token = JwtHelper(userToEncode);
        return {ok: true, profile: userToEncode, token: token, message: "Bienvenido"};
    }

}

module.exports = AuthService;