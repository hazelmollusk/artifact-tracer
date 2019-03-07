console.log('loading artifactTracer plugin...');

 

function plugin(app) {


  console.log('configuring artifactTracer...');
  const path = require('path');
  const logger = require('./logger');

  const feathers = require('@feathersjs/feathers');
  const configuration = require('@feathersjs/configuration');
  const express = require('@feathersjs/express');
  const socketio = require('@feathersjs/socketio');

  const { client } = require('./client');

  const middleware = require('./middleware');
  const services = require('./services');
  const appHooks = require('./app.hooks');
  const channels = require('./channels');
  const mongoose = require('./mongoose');

  app.configure(configuration());

  app.configure(mongoose);

  app.configure(middleware);
  app.configure(services);
  app.configure(channels);

  app.hooks(appHooks);

  app.configure(client);
}

module.exports = plugin;
