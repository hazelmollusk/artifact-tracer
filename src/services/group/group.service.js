// Initializes the `group` service on path `/group`
const createService = require('feathers-mongoose');
const createModel = require('../../models/group.model');
const hooks = require('./group.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/group', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('group');

  service.hooks(hooks);
};
