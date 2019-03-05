// location-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const location = new Schema({
    name: { type: String, required: true },
    address: { type: Schema.Type.objectId, ref: 'address'},
  }, {
    timestamps: true
  });

  return mongooseClient.model('location', location);
};
