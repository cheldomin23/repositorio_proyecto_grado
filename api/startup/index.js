const express = require('express');
const fs = require('fs');
const http = require('http');
const https = require('https');
let _express = null;
let _config = null;

class Server {
    constructor({config, router}){
       _config = config;
       _express = new express().use(router);
    }

    start(){
        return new Promise((resolve)=>{
            https.createServer({
                key: fs.readFileSync(__dirname + '/../../cert/hey.pem'),
                cert: fs.readFileSync(__dirname + '/../../cert/cert.pem'),
                passphrase: '1234'
            },_express).listen(_config.SECURE_PORT,() => {
                console.log(`Servidor corriendo en puerto ${_config.PORT}`);
            })
            http.createServer(_express).listen(_config.PORT);
           resolve();
        })
    }
}

module.exports = Server;
