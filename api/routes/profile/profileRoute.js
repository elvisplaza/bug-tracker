const express = require("express");
const { createProfile, getProfile, updateProfile } = require("./profileService");

const router = express.Router();

router
  // GET /profile
  .route("/")
  .post(createProfile);

router.route("/:profileId").get(getProfile).put(updateProfile);

exports.router = router;
