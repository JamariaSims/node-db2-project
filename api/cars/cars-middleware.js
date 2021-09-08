const Database = require("../../data/db-config");
exports.logger = (req, res, next) => {
  console.log("METHOD: ", req.method);
  next();
};
exports.checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const data = await Database("cars");
    console.log(data[req.params.id - 1]);
    if (data[req.params.id - 1]) {
      req.data = data[req.params.id - 1];
      next();
    } else {
      next({
        status: 404,
        message: `car with id ${req.params.id} is not found`,
      });
    }
  } catch (error) {
    next(error);
  }
};

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
};

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
};

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
};
