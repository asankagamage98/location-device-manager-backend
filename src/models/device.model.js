const { Schema, default: mongoose } = require("mongoose");

const deviceSchema = new Schema(
  {
    serialNumber: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["pos", "kiosk", "signage"],
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);
const Device = mongoose.model("Device", deviceSchema);
module.exports = Device;
