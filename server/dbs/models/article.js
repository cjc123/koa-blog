const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  content: {
    type: String,
    require: true
  },
  desc: {
    type: String
  }
});

module.exports = mongoose.model("Article", UserSchema);
