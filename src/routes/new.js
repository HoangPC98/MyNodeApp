var express = require('express')
var router = express.Router()

var newController = require('../app/controllers/NewController')

router.get('/:slug',newController.Slug) // app.get/post (path, functionHandler) // path ở đây chỉ có "/" đc hiểu là luôn ping đến trang con sau dấu "/" :[slug], nếu ko có thì ping đến trang hiện tại
router.get('/',newController.newFunc) // app.get/post (path, functionHandler) // path ở đây chỉ có "/" đc hiểu là luôn ping đến trang con sau dấu "/" :[slug], nếu ko có thì ping đến trang hiện tại

module.exports = router