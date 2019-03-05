const user = require('./user/user.service.js');
const tag = require('./tag/tag.service.js');
const org = require('./org/org.service.js');
const group = require('./ou/ou.service.js');
const location = require('./location/location.service.js');
const address = require('./address/address.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(user);
  app.configure(tag);
  app.configure(org);
  app.configure(group);
  app.configure(location);
  app.configure(address);
};
