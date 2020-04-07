const express = require("express");
const { createProfile, getProfile, updateProfile } = require("./profileService");

const router = express.Router();

router
  // GET /user
  .route("/")
  .post(createProfile);

router.route("/:id").get(getProfile).put(updateProfile);

exports.router = router;
