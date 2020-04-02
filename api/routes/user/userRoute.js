const express = require("express");
const { createUser, getUser, getOneUser } = require("./userService");

const router = express.Router();

router
  // GET /user
  .route("/")
  .get(getUser)
  .post(createUser);

// /user/:userId
router.route("/:userId").get(getOneUser);

exports.router = router;
