"use strict";

module.exports = {
  errorMiddleware: require('./errors.middlewares'),
  notFoundMiddleware: require('./not-found.middlewares'),
  authMiddleware: require('./auth.middleware')
};