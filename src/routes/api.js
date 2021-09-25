
var express = require('express')

var router = express.Router()

var ApiController = require('../app/controllers/ApiController')

router.get('/products', ApiController.ProductApi) // app.get/post (path, functionHandler) // path ở đây chỉ có "/" đc hiểu là luôn ping đến trang con sau dấu "/" :[slug], nếu ko có thì ping đến trang hiện tại
// router.use('/',siteController.homeFunc) // app.get/post (path, functionHandler) // path ở đây chỉ có "/" đc hiểu là luôn ping đến trang con sau dấu "/" :[slug], nếu ko có thì ping đến trang hiện tại



module.exports = router