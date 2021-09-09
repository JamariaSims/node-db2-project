const Database = require("../../data/db-config");
const getAll = () => {
  // DO YOUR MAGIC
  return Database("cars");
};

const getById = (id) => {
  // DO YOUR MAGIC
  return Database("cars").where("id", id).first();
};

const create = (car) => {
  // DO YOUR MAGIC
  return Database("cars")
    .insert(car)
    .then(([id]) => getById(id));
};
const validate = (vin) => {};
module.exports = {
  getAll,
  getById,
  create,
  validate,
};
