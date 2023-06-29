const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.post("/login", async function (req, res, next) {
  const { email, password } = req.body;
  const user = await User.fetchUserByEmail({ email, password });

  if (user) {
    const token = await User.generateAuthToken(user);
    res.json({ user, token });
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

module.exports = router;
