const { assert } = require('chai');
const path = require('path');

describe('server config -- integration', () => {
  context('when calling index', () => {
    const configPath = path.resolve(__dirname, '../../tests/scenarios/server/basic/config');
    let config;
    let logger;

    beforeEach(() => {
      logger = createLogger();
      config = require('./index')(logger, process.env, configPath);
    });

    it(`should return an object with a property server.env equal to '${process.env.NODE_ENV}'`, () => {
      assert.equal(config.env, process.env.NODE_ENV, 'The config did not have the correct environment');
    });
  });
});

function createLogger() {
  return {
    error: () => {},
    warn: () => {},
    info: () => {},
    trace: () => {},
  };
}
