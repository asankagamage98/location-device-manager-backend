const { getAll, getById, create, update, remove } = require('../controllers/location.controller')

const router = require('express').Router()

router.post('/', create)
// router.put('/:id', update)
// router.delete('/:id', remove)
// router.get('/:id', getById)
// router.get('/', getAll)

module.exports = router
