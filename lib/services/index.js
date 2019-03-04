
const users = require('./users/users.service.js');
const tags = require('./tags/tags.service.js');
const orgs = require('./org/orgs.service.js');
const groups = require('./groups/groups.service.js');
const locations = require('./location/locations.service.js');
const activities = require('./activities/activities.service.js');
module.exports = function services(app) {
  app.configure(users);
  app.configure(tags);
  app.configure(orgs);
  app.configure(groups);
  app.configure(locations);
  app.configure(activities);
}
