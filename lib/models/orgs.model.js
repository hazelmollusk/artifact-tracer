// org-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const org = new Schema({
    name: { type: String, required: true },
    groups: { type: Schema.Types.ObjectId, ref: "groups"},
    locations: { type: Schema.Types.ObjectId, ref: "location"},
  }, {
    timestamps: true
  });

  return mongooseClient.model('org', org);
};
