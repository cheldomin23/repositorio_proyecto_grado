const container = require('./api/startup/container');
const server = container.resolve('app');
if(require.main === module){
  server.start();
} else {
    module.exports = server.start;
}