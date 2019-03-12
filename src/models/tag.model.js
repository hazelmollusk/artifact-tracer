// tag-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const tag = new Schema({
    text: { type: String, required: true },
    org: { type: Schema.Type.objectId, ref="org" }
  }, {
    timestamps: true
  });

  return mongooseClient.model('tag', tag);
};
