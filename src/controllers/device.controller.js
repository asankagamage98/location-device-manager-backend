const DeviceService = require("../services/device.sevice");

const create = async (req, res) => {
  try {
    const result = await DeviceService.create(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const update = async (req, res) => {
  try {
    const result = await DeviceService.update(req.params.id, req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const remove = async (req, res) => {
    try {
        const result = await DeviceService.remove(req.params.id);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getAll = async (req, res) => {
  try {
    const result = await DeviceService.getAll(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getSingle = async (req, res) => {
  try {
    const result = await DeviceService.getSingle(req?.params?.id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
    create,
    update,
    remove,
    getAll,
    getSingle
}