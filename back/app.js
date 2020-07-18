require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const passport = require("passport");
const cookies = require("cookie-parser");
const session = require("express-session");
const bodyParser = require('body-parser')
const path = require('path');

const db = require("./config/db");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
require('./config/passport');

app.use(express.static(__dirname + "/public"));
app.use(morgan("dev"));
app.use(cookies());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  session({
    secret: "todolist"
  })
);

app.use(passport.initialize());
app.use(passport.session());


app.use("/api", routes);

app.get("/*", (req, res, next) => {
  res.sendFile(__dirname + "/public/" + "index.html");
});


db.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Escuchando en el puerto ${PORT}`);
    });
  })
  .catch(console.log);
