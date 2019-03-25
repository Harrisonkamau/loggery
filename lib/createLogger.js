const winston = require('winston');
const chalk = require('chalk');


const { format } = winston;

const { printf, prettyPrint, combine, colorize } = format;

const timestampFormat = () => new Date().toISOString();

const highlight = field => chalk.inverse(field);

function customFormat() {
  return printf(({ level, message, timestamp = timestampFormat() }) => `${timestamp} ${highlight(level)}: ${message}`);
}


const createLogger = ({
  level,
}) => {
  const logger = winston.createLogger({
    level,
    transports: [
      new winston.transports.Console({
        handleExceptions: true,
        format: combine(
          prettyPrint(),
          colorize(),
          customFormat(),
        ),
      }),
    ],
  });

  const derivedLoggerError = logger.error;
  logger.error = (message, object) => {
    if (message instanceof String) {
      message = message.toString(); // eslint-disable-line no-param-reassign
    }
    if (message instanceof Error) {
      return derivedLoggerError.call(logger, message.stack, message);
    }
    if (object instanceof Error) {
      return derivedLoggerError.call(logger, `${message}: ${object.stack}`, object);
    }
    if (typeof message === 'object') {
      return derivedLoggerError.call(logger, '', message);
    }

    return derivedLoggerError.call(logger, message, object);
  };

  return logger;
};

module.exports = createLogger;
