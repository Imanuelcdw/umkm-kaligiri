const express = require('express')
const router = express.Router()

const { getAll, create, get, edit, remove } = require('../controllers/user')

router.route('/').get(getAll).post(create)
router.route('/:id').get(get).patch(edit).delete(remove)

module.exports = router
