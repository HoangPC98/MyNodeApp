var express = require('express')

// import phương thức ROuter từ express
var router = express.Router()

var ProductController = require('../app/controllers/ProductController')

router.get('/products', ProductController.get) // app.get/post (path, functionHandler) // path ở đây chỉ có "/" đc hiểu là luôn ping đến trang con sau dấu "/" :[slug], nếu ko có thì ping đến trang hiện tại
// router.use('/',siteController.homeFunc) // app.get/post (path, functionHandler) // path ở đây chỉ có "/" đc hiểu là luôn ping đến trang con sau dấu "/" :[slug], nếu ko có thì ping đến trang hiện tại

router.get('/products/create',ProductController.Create)
router.get('/products/:id/update',ProductController.Update)
router.put('/products/:id/updated',ProductController.Updated)

router.post('/products/create/saved',ProductController.Saved)

router.delete('/products/:id',ProductController.Delete)

module.exports = router