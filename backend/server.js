const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { readdirSync } = require("fs");

require("dotenv/config");

const api = process.env.API_URL;

const dbConnect = async () => {
  await mongoose.connect(process.env.CONNECTION_STRING);
  console.log("### Database Connected Successfully ###");
};

dbConnect();

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));

//Routes
readdirSync("./routes").map((r) => app.use(api, require(`./routes/${r}`)));

app.listen(3000, (req, res) => {
  console.log("Server is Running on Port 3000");
});
