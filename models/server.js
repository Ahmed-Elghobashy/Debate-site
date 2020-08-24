const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const serverSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  premise: {
    type: String,
    require: false,
  },
  encrypted: {
    type: Boolean,
    require: true,
  },
  password: {
    type: String,
    require: false,
  },
  messages: {
    type: [{ handle: String, message: String }],
    require: false,
    default: [],
  }
});

const Server = mongoose.model("server", serverSchema);
module.exports = Server;
