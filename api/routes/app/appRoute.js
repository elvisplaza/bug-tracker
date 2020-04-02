const express = require("express");
const { createApp } = require("./appService");

const router = express.Router();

router
  // GET /user
  .route("/")
  .post(createApp);

exports.router = router;
