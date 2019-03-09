module.exports = function(app) {

  // const path = require('path');
  // const logger = require('./logger');

  // const feathers = require('@feathersjs/feathers');
  const configuration = require('@feathersjs/configuration');

  const client = require('./client');

  const middleware = require('./middleware');
  const services = require('./services');
  const appHooks = require('./app.hooks');
  const channels = require('./channels');
  const mongoose = require('./mongoose');

  app.configure(configuration());\

  // Add logging
  const morgan = require('morgan');
  app.configure(log(morgan('dev', {
    format: 'dev'
  })));

  app.info("artifactTracer loading...")

  app.configure(mongoose);
  app.configure(middleware);
  app.configure(services);
  app.configure(channels);
  app.hooks(appHooks);

  app.configure(client);
}
