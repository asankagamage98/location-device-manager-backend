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

const update = async (id, data) => {
  try {
    // Check if the locationId is provided
    if (!data?.locationId) {
      throw new Error("Location Id is required");
    }

    // Find the device by its ID
    const device = await Device.findById(id);
    if (!device) {
      throw new Error("Device not found");
    }

    // Find the location associated with the provided locationId
    const location = await Location.findById(data?.locationId);
    if (!location) {
      throw new Error("Location not found");
    }

    // Update the device details
    device.serialNumber = data.serialNumber;
    device.type = data.type;
    device.image = data.image;
    device.status = data.status;

    // Save the updated device
    const updatedDevice = await device.save();

    // Remove the device ID from the old location's devices array
    const oldLocation = await Location.findOne({ devices: { $in: [device?._id] } });
    if (oldLocation) {
      oldLocation.devices.pull(device._id);
      await oldLocation.save();
    }

    // Update the new location's devices array
    location.devices.push(device._id);
    await location.save();

    return updatedDevice;
  } catch (error) {
    throw error;
  }
};

const remove = async (id) => {
  const result = await Device.findByIdAndDelete(id);
  return result;
};

const getAll = async ({ search, limit, offset }) => {
  const result = await Device.find();
  return result;
};

const getSingle = async (id) => {
  const device = await Device.findById(id);
  const location = await Location.findOne({ devices: { $in: [id] } });
  return {
    device: device,
    location: location,
  };
};

module.exports = {
  create,
  update,
  remove,
  getAll,
  getSingle,
};
