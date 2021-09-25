var express = require('express')

// import phương thức ROuter từ express
var router = express.Router()

var siteController = require('../app/controllers/SiteController')

router.use('/search',siteController.searchFunc) // app.get/post (path, functionHandler) // path ở đây chỉ có "/" đc hiểu là luôn ping đến trang con sau dấu "/" :[slug], nếu ko có thì ping đến trang hiện tại
router.get('/home',siteController.HomeClient) // app.get/post (path, functionHandler) // path ở đây chỉ có "/" đc hiểu là luôn ping đến trang con sau dấu "/" :[slug], nếu ko có thì ping đến trang hiện tại

router.use('/',siteController.homeFunc) // app.get/post (path, functionHandler) // path ở đây chỉ có "/" đc hiểu là luôn ping đến trang con sau dấu "/" :[slug], nếu ko có thì ping đến trang hiện tại

module.exports = router