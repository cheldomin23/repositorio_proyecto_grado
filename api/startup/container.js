const { createContainer, asClass, asFunction, asValue } = require('awilix');

//import config
const config = require('../config');

//import server
const app = require('.');

//create container
const container = createContainer();

//register
container.register({
    config: asValue(config),
    app: asClass(app).singleton()
})

module.exports = container;