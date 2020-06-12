const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

module.exports = (req,res,next) => {
    const token = req.headers["authorization"];
    if(!token){
        return res.send({ok:false, profile: null, token: null, message: "El token tiene que ser enviado"});
    }
    jwt.verify(token, JWT_SECRET, function(err,decodedToken){
        if(err){
            return res.send({ok: false, profile: null, token: null, message: "Token invalido"});
        }
        req.user = decodedToken.user;
        next();
    })  
}