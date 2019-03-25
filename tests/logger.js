const createLogger = require('../lib/createLogger');
const { logger } = require('../');
const { expect } = require('./setup');

describe('Logger', () => {
  describe('new logger', () => {
    it('contains the default level', () => {
      expect(logger().level).to.eq('info');
    });
    it('contains the passed level', () => {
      const customLogger = createLogger({
        level: 'debug',
      });

      expect(customLogger.level).to.eq('debug');
    });
  });
});
