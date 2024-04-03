const Location = require("../models/location.model");

//create location
const create = async (data) => {
  const location = new Location({
    name: data.name,
    address: data.address,
    phone: data.phone,
  });

  const result = await location.save();
  return result;
};

const getAll = async ({ search, limit, offset }) => {
  const locations = await Location.find().populate("devices");
  return locations;
};

const getSingle = async (id) => {
  const location = await Location.findById(id).populate("devices");
  return location;
};

const update = async (id, data) => {
  const location = await Location.findByIdAndUpdate(id, data);
  return location;
};

const remove = async (id) => {
  const location = await Location.findByIdAndDelete(id);
  return location;
};

// functions for use in other files
module.exports = {
  create,
  getAll,
  getSingle,
  update,
  remove,
};
