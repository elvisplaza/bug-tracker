const express = require("express");

const router = express.Router();

router
  // GET /user
  .route("/")
  .post(createUser);

exports.router = router;
