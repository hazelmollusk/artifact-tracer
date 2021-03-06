// Initializes the `user` service on path `/user`
const createService = require('feathers-mongoose');
const createModel = require('../../models/user.model');
const hooks = require('./user.hooks');

module.exports = function (app) {
  try {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/user', createService(options));
  
  // Get our initialized service so that we can register hooks
  const service = app.service('user');

  service.hooks(hooks);
} catch (OverwriteModelError) {
  console.log('aT: user model already exists.')
}
};
