const express = require("express");
const { createApp, getAppById } = require("./appService");

const router = express.Router();

router
  // GET /app
  .route("/")
  .post(createApp);

router.route("/:appId").get(getAppById);
exports.router = router;
