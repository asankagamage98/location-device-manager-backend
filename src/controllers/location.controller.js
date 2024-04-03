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

const getAll = async (req, res) => {
  try {
    const result = await LocationService.getAll(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getSingle = (req, res) => {
  try {
    const result = LocationService.getSingle(req?.params?.id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const update = (req, res) => {
  try {
    const result = LocationService.update(req?.params?.id, req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const remove = (req, res) => {
  try {
    const result = LocationService.remove(req?.params?.id);
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
