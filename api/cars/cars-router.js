const express = require("express");
const { logger } = require("./cars-middleware");
const router = express.Router();
const cars = require("./cars-model");

router.get("/", logger, async (req, res, next) => {
  let data = await cars.getAll();
  console.log(data);
  res.status(200).json(data);
});
module.exports = router;
