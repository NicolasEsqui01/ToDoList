const S = require("sequelize");
const db = require("../config/db");
const Crypto = require("crypto");

class User extends S.Model {}

User.init(
  {
    name: {
      type: S.STRING,
      allowNull: false
    },
    email: {
      type: S.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: S.STRING,
      allowNull: false
    },
    salt: {
      type: S.STRING
    }
  },
  { sequelize: db, modelName: "user" }
);

User.beforeCreate(user => {
  user.salt = Crypto.randomBytes(20).toString("hex");
  user.password = user.hashFunction(user.password);
});

User.prototype.hashFunction = function(password) {
  return Crypto.createHmac("sha1", this.salt)
    .update(password)
    .digest("hex");
};

User.prototype.validatePassword = function(password) {
  return this.hashFunction(password) === this.password;
};

module.exports = User;
