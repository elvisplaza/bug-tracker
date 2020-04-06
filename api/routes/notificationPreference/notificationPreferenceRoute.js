const express = require("express");
const { createNotificationPreference } = require("./notificationPreferenceService");

const router = express.Router();

router
  // GET /user
  .route("/")
  .post(createNotificationPreference);

exports.router = router;
