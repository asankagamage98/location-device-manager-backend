const { getAll, create, update, remove, getSingle } = require('../controllers/location.controller')

const router = require('express').Router()

// defined location routes
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)
router.get('/:id', getSingle)
router.get('/', getAll)

module.exports = router
