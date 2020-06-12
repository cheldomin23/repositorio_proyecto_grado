const development = require('./development.environment');
const production = require('./production.environment');
let config = development;

if(process.env.NODE_ENV == "production"){
  config = production;
}else{
  config = development;
}

module.exports = config;