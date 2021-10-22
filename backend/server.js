const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Api");
});

app.listen(3000, (req, res) => {
  console.log("Server is Running on Port 3000");
});
