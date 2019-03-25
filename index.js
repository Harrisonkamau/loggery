const logger = require('./lib/logger');

logger().info('debug log');

module.exports = {
  logger,
};
