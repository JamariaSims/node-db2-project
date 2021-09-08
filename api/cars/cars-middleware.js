exports.logger = (req, res, next) => {
  console.log("METHOD: ", req.method);
  next();
};
const checkCarId = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}
