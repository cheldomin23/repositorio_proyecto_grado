let _authService = null;

class AuthController {
    constructor({authService}){
       _authService = authService;
    }
    
    async login(req,res){
       const user = req.body; 
       return res.send(await _authService.login(user));
    }

    async relogin(req,res) {
       const user = req.user;
       return res.send(await _authService.relogin(user));
    }

}

module.exports = AuthController;