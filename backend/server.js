const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { readdirSync } = require("fs");
const cors = require("cors");
require("dotenv/config");
const authJwt = require("./helper/jwt");
const errorHandler = require("./helper/error-handler");

require("dotenv/config");

const api = process.env.API_URL;

const dbConnect = async () => {
  await mongoose.connect(process.env.CONNECTION_STRING);
  console.log("### Database Connected Successfully ###");
};

dbConnect();

const app = express();

// Middleware
app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(authJwt());
app.use("/public/uploads", express.static(__dirname + "/public/uploads"));
app.use(errorHandler);

//Routes
readdirSync("./routes").map((r) => app.use(api, require(`./routes/${r}`)));

app.listen(3000, () => {
  console.log("Server is Running on Port 3000");
});
