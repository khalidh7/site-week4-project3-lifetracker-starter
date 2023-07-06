const express = require("express");
const User = require("../models/user");
const Exercise = require("../models/exercise");
const Sleep = require("../models/sleep");
const router = express.Router();

router.post("/list", async function (req, res, next) {
  try {
    const id = req.body.userid;
    const sleep = await Sleep.listSleepForUser(id);
    return res.status(201).json({ sleep });
  } catch (err) {
    next(err);
  }
});

router.post("/:id", async function (req, res, next) {
  try {
    const id = req.params.id;
    const sleep = await Sleep.fetchSleepById(req.body.id, id);
    return res.status(201).json({ sleep });
  } catch (err) {
    next(err);
  }
});

router.post("/add", async function (req, res, next) {
  try {
    console.log(req.body);
    const sleep = await Sleep.createSleep(req.body);
    return res.status(201).json({ sleep });
  } catch (err) {
    next(err);
  }
});
module.exports = router;
