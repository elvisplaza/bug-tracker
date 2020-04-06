const express = require("express");
const { createProfile, getProfile } = require("./profileService");

const router = express.Router();

router
  // GET /user
  .route("/")
  .post(createProfile);

router.route("/:id").get(getProfile);

exports.router = router;
