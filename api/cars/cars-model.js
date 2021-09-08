const Database = require("../../data/db-config");
const getAll = () => {
  // DO YOUR MAGIC
  return Database("cars");
};

const getById = (id) => {
  // DO YOUR MAGIC

};

const create = () => {
  // DO YOUR MAGIC
};
module.exports = {
  getAll,
  getById,
  create,
};
