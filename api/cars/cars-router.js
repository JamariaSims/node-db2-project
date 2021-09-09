const express = require("express");
const {
  logger,
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
} = require("./cars-middleware");
const router = express.Router();
const cars = require("./cars-model");

router.get("/", async (req, res, next) => {
  let data = await cars.getAll();
  res.status(200).json(data);
});

router.get("/:id", checkCarId, (req, res, next) => {
  res.status(200).json(req.data);
});

router.post(
  "/",
  logger,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
  async (req, res, next) => {}
);
module.exports = router;
