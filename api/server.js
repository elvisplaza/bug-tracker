"use strict";
const express = require("express");
const http = require("http");
const Sequelize = require("sequelize");
// utils
const { applyMiddleware } = require("./utils");
// middleware
const middleware = require("./middleware");
// routes
const { router: userRoutes } = require("./routes/user/userRoute");
const { router: appRoutes } = require("./routes/app/appRoute");
const { router: profileRoutes } = require("./routes/profile/profileRoute");
const { router: notificationPreferenceRoutes } = require("./routes/notificationPreference/notificationPreferenceRoute");
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
app.use("/app", appRoutes);
app.use("/profile", profileRoutes);
app.use("/app", notificationPreferenceRoutes);

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
  .catch((err) => {
    console.error("unable to connect to the database:", err);
  });
