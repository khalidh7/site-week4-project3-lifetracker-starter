const express = require("express");
const User = require("../models/user");
const Exercise = require("../models/exercise");
const Sleep = require("../models/sleep");
const router = express.Router();

router.post("/login", async function (req, res, next) {
  const { email, password } = req.body;
  const user = await User.fetchUserByEmail({ email, password });

  if (user) {
    const token = await User.generateAuthToken(user);
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid email/password" });
  }
});

router.post("/register", async function (req, res, next) {
  try {
    const user = await User.register(req.body);
    return res.status(201).json({ user });
  } catch (err) {
    next(err);
  }
});

router.post("/profile", async function (req, res, next) {
  try {
    const userInfo = await User.verifyAuthToken(req.body.token);
    res.json(userInfo);
  } catch (err) {
    next(err);
  }
});

router.post("/stats", async function (req, res, next) {
  try {
    const userStats = await User.fetchUserStats(req.body.userid);
    res.json(userStats);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
