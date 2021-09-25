var express = require('express')
var router = express.Router()

var CourseController = require('../app/controllers/CourseController')

router.get('/create',CourseController.Create)
router.post('/store',CourseController.store)
router.get('/management',CourseController.Management)
router.get('/recyclebin',CourseController.RecycleBin)

// Để route chứa /:slug | req.param.slug phía dưới để tránh trùng với những cái trên
router.get('/:id/edit',CourseController.Edit)
router.post('/:id',CourseController.EditUpdated)
router.delete('/:id', CourseController.Delete)
router.patch('/:id/restore', CourseController.Restore)
router.delete('/:id/delete-force', CourseController.DeleteForce)


router.get('/:slug',CourseController.Slug) // app.get/post (path, functionHandler) // path ở đây chỉ có "/" đc hiểu là luôn ping đến trang con sau dấu "/" :[slug], nếu ko có thì ping đến trang hiện tại

module.exports = router