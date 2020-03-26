const express = require("express");
const { createUser } = require("./userService");

const router = express.Router();

// GET /user
router
  .route("/")
  .get(async (req, res, next) => {
    try {
      console.log("im getting you info");
    } catch (e) {
      next(e);
    }
  })
  .put(async (req, res, next) => {
    try {
      console.log("im updating user");
    } catch (e) {
      next(e);
    }
  })
  // .post(createUser)
  .delete(async (req, res, next) => {
    try {
      console.log("im deleting a user");
    } catch (err) {
      next(err);
    }
  });

exports.router = router;
