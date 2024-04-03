const { create, update, remove } = require('../controllers/device.controller')

const router = require('express').Router()

router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

module.exports = router