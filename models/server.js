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
  // numOfDebators: {
  //   type: Number,
  //   require: false,
  // },
  // creator: {
  //   type: String,
  //   require: true,
  // },
  // viewers: {
  //   type: Number,
  //   require: true,
  // },
});

const Server = mongoose.model("server", serverSchema);
module.exports = Server;
