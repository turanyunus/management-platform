const express = require('express')
const router = express.Router()

const { getUsers } = require('../controller/user')

router.get('/user', getUsers)

module.exports = router
