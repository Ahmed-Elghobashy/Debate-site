const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;
const userSchema = Schema(
  {
    username: {
      type: String,
      require: [true, "The  username ins required"],
      unique: [true, "The username is already used"],
    },
    email: {
      type: String,
      require: [true, "The  email is required"],
      unique: [true, "The email is already used"],
      lowercase: true,
    },
    password: {
      type: String,
      require: [true, "The  password is required"],
      minlength: [4, "The password should contain at least 4 characters"],
    },
    servers: {
      type: Array,
      require: false,
    },
    role: {
      type: String,
      require: false,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  if (this.username == "Ahmed_694") {
    this.role = "super-admin";
  } else if (this.username == "Mohamed") {
    this.role = "admin";
  } else {
    this.role = "user";
  }
  next();
});

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};

const User = mongoose.model("user", userSchema);
module.exports = User;
