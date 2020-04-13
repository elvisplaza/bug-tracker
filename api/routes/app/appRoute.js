const express = require("express");
const { createApp, getAppById, getAllAppsByOrg } = require("./appService");

const router = express.Router();

router
  // GET /app
  .route("/")
  .post(createApp);

router.route("/appId/:appId").get(getAppById);

router.route("/:orgId").get(getAllAppsByOrg);

exports.router = router;
