"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const Sequelize = require("sequelize");
const cors = require("cors");

// routes
const { router: userRoutes } = require("./routes/user/userRoute");
// constants
const { URL, PORT } = require("./constants");

// instantiating express instance
const app = express();

// instantiating sequelize
const sequelize = new Sequelize("postgres://Plaza:pass@localhost:5432/bug-tracker-app");

// parse the JSON data
// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes

app.use("/user", userRoutes);

// create a server
const server = http.createServer(app);

sequelize
  .authenticate()
  .then(() => {
    console.log("connection has been established successfully with your database - bug-tracker-app!");
    server.listen(PORT, () => {
      console.log(`server is running on PORT: ${PORT}`);
    });
  })
  .catch(err => {
    console.error("unable to connect to the database:", err);
  });
