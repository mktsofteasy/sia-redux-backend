const express = require("express");
const app = express();
const db = require("./config/db");
const consign = require("consign");
const bodyParser = require("body-parser");

app.use(bodyParser.json({ limit: "200mb", type: "application/json" }));

consign()
  .include("./config/passport.js")
  .then("./config/middlewares.js")
  .then("./api")
  .then("./config/routes.js")
  .into(app);

app.db = db;

var porta = process.env.PORT || 3000;

app.listen(porta, () => {
  console.log("Backend rodando ...");
});
