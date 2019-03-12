// location-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const location = new Schema({
    org: { type: Schema.Types.ObjectId, ref:"org" },
    address: { type: String },
    city: { type: String },
    state: { type:String },
    zip:{ type:String }
  }, {
    timestamps: true
  });

  return mongooseClient.model('location', location);
};
