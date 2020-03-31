const express = require("express");
const { createUser, getUser } = require("./userService");

const router = express.Router();

router
  // GET /user
  .route("/")
  .get(getUser)
  .post(createUser);

// /user/:userId
// router.route("/:userId").get(getUser);

exports.router = router;
