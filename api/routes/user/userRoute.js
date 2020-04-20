const express = require("express");
const { createUser, getUser, getOneUser, getUserApps } = require("./userService");
const requireAuth = require("./../../middleware/auth");
const router = express.Router();

router
  // GET /user
  .route("/")
  .get(getUser)
  .post(createUser);

// /user/:userId
router.route("/app/:userId").get(requireAuth, getOneUser);
router.route("/app/:userId/all").get(requireAuth, getUserApps);

exports.router = router;
