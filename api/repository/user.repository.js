const BaseRepository = require('./base.repository');
let _User = null;

class UserRepository extends BaseRepository {
    constructor({User}){
        super(User);
        _User = User;
    }

    async userExistByEmail(email){
        return await _User.findOne({where:{email: email}});
    }

    async getUserByEmail(email){
        return await _User.findOne({where:{email: email}});
    }

   
}

module.exports= UserRepository;