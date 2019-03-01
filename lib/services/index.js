
const tag = require('./tag/tag.service.js');
module.exports = function services(app) {
  app.configure(tag);
}
