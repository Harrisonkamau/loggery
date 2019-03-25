const createLogger = require('./createLogger');

module.exports = function logger(options = {}) {
  return createLogger({
    level: options.level || 'info',
  });
};
