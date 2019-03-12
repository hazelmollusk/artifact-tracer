require('babel-register')({
  presets: [ 'env' ]
});

const io = require('socket.io-client');
const socketio = require('@feathersjs/socketio-client');

const plugin = function (app) {

  const path = require('path');
  const logger  = require('winston');
  const flog = require('feathers-logger');
  const isClient = app.get('isClient') || false;

  app.configure(flog(logger));
  if (process.env.NODE_ENV !== 'production') {
    logger.add(new logger.transports.Console({
      format: logger.format.simple()
    }));
  }

  app.info("artifactTracer loading...")

  const middleware = require('./middleware');
  const services = require('./services');
  const appHooks = require('./app.hooks');
  const channels = require('./channels');
  const mongoose = require('./mongoose');

  app.configure(services);
  if (isClient) {
    const host = app.get('artifactTracer').server;
    const socket = io(host, { transports: ['websocket'] });
    app.configure(socketio(socket));
  } else {
    app.configure(middleware);
    app.configure(channels);
    app.configure(mongoose);
    app.hooks(appHooks);

  }
  //   if (isClient) {
  //     const client = require('./client');
  //     app.configure(client);
  //   } else {
  //   }
  //   app.configure(middleware);
  //   app.configure(services);
  //   app.configure(channels);
  //   app.hooks(appHooks);


  //   app.set('artifactTracer', plugin);
  // }

  // // plugin.client = require('./client');
  // // plugin.hooks = require('./hooks');
  // // plugin.services = require('./services');
  // // plugin.middleware = require('./middleware');
  // // plugin.models = require('./models');
}
module.exports = plugin;
