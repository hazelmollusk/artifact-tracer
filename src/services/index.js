// eslint-disable-next-line no-unused-vars
const user = require('./user/user.service.js');
const tag = require('./tag/tag.service.js');
const group = require('./group/group.service.js');
const org = require('./org/org.service.js');
const location = require('./location/location.service.js');
module.exports = function (app) {
  app.configure(user);
  app.configure(tag);
  app.configure(group);
  app.configure(org);
  app.configure(location);
};
