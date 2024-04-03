
const LocationService = require('../services/location.service')

// Create a new location
const create = async (req, res) => {
        const location = await LocationService.create(req.body)
        res.status(200).json(location)
}

module.exports = {
    create
}