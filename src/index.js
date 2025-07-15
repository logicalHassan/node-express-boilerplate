const mongoose = require('mongoose');
const app = require('./app');
const env = require('./config/env');
const logger = require('./config/logger');

let server;

async function startServer() {
  try {
    await mongoose.connect(env.mongoose.url);
    logger.info('Connected to MongoDB');

    server = app.listen(env.port, () => {
      logger.info(`Listening on port ${env.port}`);
    });
  } catch (error) {
    logger.error('Error starting server:', error);
    process.exit(1);
  }
}

startServer();

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});
