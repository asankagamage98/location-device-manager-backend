const { create, update, remove, getSingle, getAll } = require('../controllers/device.controller')

const router = require('express').Router()

// defined device routes
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)
router.get('/:id', getSingle)
router.get('/', getAll)

module.exports = router