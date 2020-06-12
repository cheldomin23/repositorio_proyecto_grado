const BaseService = require('./base.service');
let _userRepository = null;

class UserService extends BaseService {
    constructor({userRepository}){
         super(userRepository);
        _userRepository = userRepository;
    }

    async userExistByEmail(email){
       const user = await _userRepository.userExistByEmail(email);
       if(!user){
           return {ok: true, message: "Usuario disponible"};
       }
       return {ok: false, message: "Usuario no disponible"};
    }

    async getUserByEmail(email){
       const user = await _userRepository.getUserByEmail(email);
       return user;
    } 
    
    async updateByEmail(id, data){
        const user = await _userRepository.update(id,data);
        return user;
    }
}

module.exports = UserService;