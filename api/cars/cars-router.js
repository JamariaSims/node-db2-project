const express = require("express");
const { logger, checkCarId } = require("./cars-middleware");
const router = express.Router();
const cars = require("./cars-model");

router.get("/", logger, async (req, res, next) => {
  let data = await cars.getAll();
  res.status(200).json(data);
});
router.get("/:id", logger, checkCarId, (req, res, next) => {
  res.status(200).json(req.data);
});
module.exports = router;
