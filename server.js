const container = require('./api/startup/container');
const server = container.resolve('app');
server.start();