"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const Sequelize = require("sequelize");
// utils
const { applyMiddleware } = require("./utils");
// middleware
const middleware = require("./middleware");
// routes
const { router: userRoutes } = require("./routes/user/userRoute");
// constants
const { URL, PORT } = require("./constants");

// instantiating express instance
const app = express();

// instantiating sequelize
const sequelize = new Sequelize(URL);

// common middleware for ever route
applyMiddleware(middleware, app);

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
