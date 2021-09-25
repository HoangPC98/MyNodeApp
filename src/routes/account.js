
var express = require('express')

// import phương thức ROuter từ express
var router = express.Router()

var AccController = require('../app/controllers/AccController')

router.post('/register', AccController.Registed)

module.exports = router