import mongoose from "mongoose";
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

export default mongoose.model("Article", UserSchema);
