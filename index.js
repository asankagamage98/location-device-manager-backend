require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { dbConnect } = require("./src/utils/dbConnection");
const bodyParser = require("body-parser");

dbConnect();

// Import routes
const locationRoute = require("./src/routes/location.routs");
const deviceRoute = require("./src/routes/device.route");

app = express();

app.use(cors());

// Parse JSON bodies with a limit of 50mb
app.use(bodyParser.json({ limit: "50mb" }));

// Define a route for the root URL
app.get("/", (req, res) => {
  res.send("Asanka Gamage - device management Application Service working");
});

// Define routes
app.use("/api/location", locationRoute);
app.use("/api/device", deviceRoute);

//get port env
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.info(`Backend running on http://localhost:${PORT}`);
});
