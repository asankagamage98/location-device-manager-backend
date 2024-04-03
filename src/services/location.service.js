const Location = require('../models/location.model')


//create location
const create = async (data) => {
    const location = new Location({
        name: data.name,
        address: data.address,
        phone: data.phone,
        devices: data.devices
      });
    
      try {
        const newLocation = await location.save();
        res.status(201).json(newLocation);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
}


// functions for use in other files
module.exports = {
    create
}
