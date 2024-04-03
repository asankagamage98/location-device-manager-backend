const Device = require("../models/device.model");
const Location = require("../models/location.model");

const create = async (data) => {
  try {
    const device = new Device({
      serialNumber: data.serialNumber,
      type: data.type,
      image: data.image,
      status: data.status,
    });

    if (!data?.locationId) {
      throw new Error("Location Id is required");
    }

    const location = await Location.findById(data.locationId);
    if (!location) {
      throw new Error("Location not found");
    }

    const uploaded = await device.save();

    location.devices.push(device._id);

    await location.save();

    return device;
  } catch (error) {
    throw error;
  }
};

const update = (id, data) => {
  const result = Device.findByIdAndUpdate(id, data, { new: true });
  return result;
};

const remove = (id) => {
  const result = Device.findByIdAndDelete(id);
  return result;
};

module.exports = {
  create,
  update,
  remove,
};
