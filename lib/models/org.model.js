// org-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const org = new Schema({
    name: { type: String, required: true },
    locations: [ { type: Schema.Type.objectId, ref: 'location'} ],
    groups: [ { type: Schema.Type.objectId, ref: 'group'} ],
  }, {
    timestamps: true
  });

  return mongooseClient.model('org', org);
};
