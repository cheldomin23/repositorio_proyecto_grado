const express = require('express');
let _express = null;
let _config = null;

class Server {
    constructor({config}){
       _config = config;
       _express = new express();
    }

    start(){
        return new Promise((resolve)=>{
           _express.listen(_config.PORT,() => {
               console.log(`Servidor corriendo en puerto ${_config.PORT}`);
           })
           resolve();
        })
    }
}

module.exports = Server;