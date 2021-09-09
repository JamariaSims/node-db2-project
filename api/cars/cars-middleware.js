const { getById, create } = require("./cars-model");

exports.logger = (req, res, next) => {
  console.log("METHOD: ", req.method);
  next();
};
exports.checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const data = await getById(req.params.id);
    if (!data) {
      next({ status: 404, message: "not found" });
    } else {
      res.data = data;
      next();
    }
  } catch (error) {
    next(error);
  }
};

exports.checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  if (!req.body.vin) {
    return next({
      status: 400,
      message: `vin is missing`,
    });
  } else if (!req.body.make) {
    return next({
      status: 400,
      message: `make is missing`,
    });
  } else if (!req.body.model) {
    return next({
      status: 400,
      message: `model is missing`,
    });
  } else if (!req.body.mileage) {
    return next({
      status: 400,
      message: `mileage is missing`,
    });
  } else {
    next();
  }
};

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
};

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
};
