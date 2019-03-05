// ou-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const group = new Schema({
    name: { type: String, required: true },
    users: [ { type: Schema.Type.objectId, ref: 'user'}],
    parent: { type: Schema.Type.objectId, ref: 'group'},
  }, {
    timestamps: true
  });

  return mongooseClient.model('group', group);
};
