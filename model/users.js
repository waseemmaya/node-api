var mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const Users = mongoose.model("Users", UserSchema);

module.exports = Users;
