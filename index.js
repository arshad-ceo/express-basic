const express = require("express");
const app = express();

app.listen(8080);

app.get("/", (req, res) => {
  res.send("Hello Homepage");
});

app.get("*", (req, res) => {
  res.send("Page not found!");
});
