let _userService = null;

class UserController {
    constructor({userService}){
        _userService=userService;
    }

    async signup(req,res){
       const user = req.body;
       return res.send(await _userService.create(user));
    }

    async emailValidate(req,res) {
        const {email} = req.params;
        return res.send(await _userService.userExistByEmail(email));
    }
    
    async update(req,res) {
        const id = req.user.id;
        const data = req.user.body;
        return await res.send(_userService.update(id,data));
    }
}

module.exports = UserController;