const express = require('express')
const router = express.Router()

const { getCompanies } = require('../controller/company')

router.get('/company', getCompanies)

module.exports = router
