require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cookies = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require('cors');

const db = require("./config/db");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const passport = require("./config/passport");

app.use(cors({ origin: true }));
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

db.sync({ force: false})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Escuchando en el puerto ${PORT}`);
    });
  })
  .catch(console.log);
