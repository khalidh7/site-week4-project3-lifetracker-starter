const express = require("express");
const User = require("../models/user");
const Exercise = require("../models/exercise");
const Sleep = require("../models/sleep");
const Nutrition = require("../models/nutrition");
const router = express.Router();

router.post("/list", async function (req, res, next) {
  try {
    const id = req.body.userid;
    const nutrition = await Nutrition.listNutritionForUser(id);
    return res.status(201).json({ nutrition });
  } catch (err) {
    next(err);
  }
});

// router.post("/:id", async function (req, res, next) {
//   try {
//     const id = req.params.id;
//     const nutrition = await Nutrition.fetchNutritionById(req.body.id, id);
//     return res.status(201).json({ nutrition });
//   } catch (err) {
//     next(err);
//   }
// });

router.post("/add", async function (req, res, next) {
  try {
    console.log(req.body);
    const nutrition = await Nutrition.createNutrition(req.body);
    return res.status(201).json({ nutrition });
  } catch (err) {
    next(err);
  }
});
module.exports = router;
