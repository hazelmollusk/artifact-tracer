// activities-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const activity = new Schema({
    type: { type: String, required: true },
    tag: { type: Schema.Types.ObjectId, ref="tag", required:true},
    user: { type: Schema.Types.objectId, ref="user", required:true},
    location: { type: Schema.Types.ObjectId, ref="location", required:true},
    org: { type:Schema.Types.ObjectId, ref="org", required:true},
  }, {
    timestamps: true
  });

  return mongooseClient.model('activity', activity);
};
