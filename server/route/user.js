const express = require('express')
const router = express.Router()

const {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  getUsersByCompanyId
} = require('../controller/user')

router.get('/user', getUsers)

router.get('/user/:id', getUserById)

router.post('/user', createUser)

router.put('/user/:id', updateUser)

router.get('/userByCompanyId/:companyId', getUsersByCompanyId)

module.exports = router
