const DeviceService = require("../services/device.sevice");

const create = async (req, res) => {
  try {
    const result = await DeviceService.create(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const update = (req, res) => {
  try {
    const result = DeviceService.update(req.params.id, req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const remove = (req, res) => {
    try {
        const result = DeviceService.remove(req.params.id);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    create,
    update,
    remove,
}