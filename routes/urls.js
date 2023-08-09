const express = require('express')
const fetchData = require('../controller/fetch-data.controller')
const router = express.Router()
router.get('/',fetchData)
module.exports = router