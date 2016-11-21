// @NOTE Do synchronouse things like require newrelic before server is started up
const server = require('./server');


//@NOTE: Ensure to only call start if this is the entry point
if(!module.parent) {
  server.start(beforeStart);
}

function beforeStart (app, config, logger) {
  logger.info(`server.beforeStart > : setting up ${config.app.name}`);
  // @NOTE: Write code you want to execute before server starts

  logger.info('server.beforeStart <');
  return Promise.resolve();
}
