const user = require('./user/user.service.js');
const tag = require('./tag/tag.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(user);
  app.configure(tag);
};
