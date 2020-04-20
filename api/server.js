"use strict";
const express = require("express");
const http = require("http");
const Sequelize = require("sequelize");
const auth = require("./middleware/auth");
// utils
const { applyMiddleware } = require("./utils");
// middleware
const middleware = require("./middleware");
// routes
const { router: userRoutes } = require("./routes/user/userRoute");
const { router: appRoutes } = require("./routes/app/appRoute");
const { router: profileRoutes } = require("./routes/profile/profileRoute");
const { router: notificationPreferenceRoutes } = require("./routes/notificationPreference/notificationPreferenceRoute");
const { router: bugRoutes } = require("./routes/bug/bugRoute");
const { router: accountRoutes } = require("./routes/account/accountRoute");
// constants
const { URL, PORT } = require("./constants");

// instantiating express instance
const app = express();

// instantiating sequelize
const sequelize = new Sequelize(URL);

// common middleware for ever route
applyMiddleware(middleware, app);

// routes

// make sure to add auth to every new route you create!
app.use("/user", auth, userRoutes);
app.use("/app", auth, appRoutes);
app.use("/profile", auth, profileRoutes);
app.use("/app", auth, notificationPreferenceRoutes);
app.use("/bug", auth, bugRoutes);
app.use("/account", auth, accountRoutes);

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
