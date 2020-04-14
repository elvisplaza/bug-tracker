const express = require("express");
const router = express.Router();

const { getAccount } = require("./accountService");
router
  // GET /account
  .route("/login")
  .post(getAccount);
exports.router = router;
