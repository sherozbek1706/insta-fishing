const mongoose = require("mongoose");

const PhishingUsers = new mongoose.Schema({
  username: String,
  password: String,
})


const Users =   mongoose.model("Users" , PhishingUsers);

module.exports = Users