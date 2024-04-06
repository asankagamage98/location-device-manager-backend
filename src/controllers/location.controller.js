const LocationService = require("../services/location.service");

// Create a new location
const create = async (req, res) => {
  try {
    const result = await LocationService.create(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//get all locations
const getAll = async (req, res) => {
  try {
    const result = await LocationService.getAll(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//get single location by id
const getSingle = async (req, res) => {
  try {
    const result = await LocationService.getSingle(req?.params?.id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// update location
const update = async (req, res) => {
  try {
    const result = await LocationService.update(req?.params?.id, req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// remove location
const remove = async (req, res) => {
  try {
    const result = await LocationService.remove(req?.params?.id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  create,
  getAll,
  getSingle,
  update,
  remove,
};
