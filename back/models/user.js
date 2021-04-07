const mongoose = require("mongoose");
const Crypto = require("crypto");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      require: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    img: {
      type: String,
      default: null
    },
    salt: {
      type: String
    },
  },
  { collection: "users" }
);


userSchema.pre("save", function (next){
  this.salt = Crypto.randomBytes(20).toString("hex");
  this.password = this.setPassword(this.password);
  next();
});

userSchema.methods.setPassword = function (pass) {
  return Crypto.createHmac("sha1", this.salt).update(pass).digest("hex");
};

userSchema.methods.validatePassword = function(password) {
  return this.setPassword(password) === this.password;
};
const User = mongoose.model("users", userSchema);

module.exports = User;
