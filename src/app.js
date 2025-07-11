const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const compression = require('compression');
const httpStatus = require('http-status');
const routes = require('./routes');
const env = require('./config/env');
const morgan = require('./config/morgan');
const corsConfig = require('./config/cors');
const { authLimiter } = require('./middlewares/rate-limiter');
const { errorConverter, errorHandler } = require('./middlewares/error');
const ApiError = require('./utils/api-error');

const app = express();

if (env.mode !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());
app.use(mongoSanitize());

// gzip compression
app.use(compression());

// enable cors
app.use(corsConfig);
app.options('*', corsConfig);

// limit repeated failed requests to auth endpoints
if (env.mode === 'production') {
  app.use('/api/auth', authLimiter);
}

// root route
app.get('/', (_, res) => {
  res.status(httpStatus.OK).json({ status: 'OK' });
});

// api routes
app.use('/v1', routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'No endpoint found'));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;
