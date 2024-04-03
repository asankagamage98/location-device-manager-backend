const { Schema, default: mongoose } = require("mongoose");

const locationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },

    devices: [{ type: mongoose.Schema.Types.ObjectId, ref: "Device" }],
  },
  {
    timestamps: true,
  }
);
const Location = mongoose.model("News", locationSchema);
module.exports = Location;
