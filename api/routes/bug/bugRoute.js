const express = require("express");
const { createBug } = require("./bugService");

const router = express.Router();

router
  //  /bug
  .route("/")
  .post(createBug);

exports.router = router;
