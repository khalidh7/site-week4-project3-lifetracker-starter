const express = require("express");
const User = require("../models/user");
const Exercise = require("../models/exercise");
const Sleep = require("../models/sleep");
const router = express.Router();

router.post("/list", async function (req, res, next) {
  try {
    const id = req.body.userid;
    const exercises = await Exercise.listExercisesForUser(id);
    return res.status(201).json({ exercises });
  } catch (err) {
    next(err);
  }
});

router.post("/list/:id", async function (req, res, next) {
  try {
    const id = req.params.id;
    const exercises = await Exercise.fetchExerciseById(req.body.id, id);
    return res.status(201).json({ exercises });
  } catch (err) {
    next(err);
  }
});

router.post("/add", async function (req, res, next) {
  try {
    const exercise = await Exercise.createExercise(req.body);
    return res.status(201).json({ exercise });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
