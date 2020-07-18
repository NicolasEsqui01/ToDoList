const { User } = require("../models/index");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy({ usernameField: "email" }, function(
    email,
    password,
    done
  ) {
    User.findOne({ where: { email: email } }).then(user => {
      if (!user) {
        return done(null, false, { message: "usuario incorrecto" });
      }
      if (!user.validatePassword(password)) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    });
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findByPk(id).then(function(user) {
    done(null, user);
  });
});

module.exports = passport