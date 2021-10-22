const express = require("express");
require("dotenv/config");

const api = process.env.API_URL;

const app = express();

app.get(`${api}/product`, (req, res) => {
  res.send("Hello Api");
});

app.listen(3000, (req, res) => {
  console.log(`${api}/product`);
  console.log("Server is Running on Port 3000");
});
