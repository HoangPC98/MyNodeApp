var express = require('express')
const jwt = require('jsonwebtoken')

// import phương thức ROuter từ express
var router = express.Router()

var siteController = require('../app/controllers/SiteController')
var AccController = require('../app/controllers/AccController')

router.get('/home', (req,res, next) => {
    try {
        console.log('cokkie parser ', req.cookies)
        var token = req.cookies.token
        var kq = jwt.verify(token, 'secret')
        if(kq){
            console.log('kq',kq)
            next()
        }
            
    } catch (error) {
        console.log('Loi chua login')
        return res.render('LogForm',{error: 'Bạn cần phải đăng nhập !!'})
    }

}, (req, res, next) => {
    res.render('client/home_body')

}) // app.get/post (path, functionHandler) // path ở đây chỉ có "/" đc hiểu là luôn ping đến trang con sau dấu "/" :[slug], nếu ko có thì ping đến trang hiện tại
router.get('/login' , siteController.GetLogin)
router.post('/login' , siteController.SubmitLogin, siteController.NextWhenLoginSubmitted)
router.get('/signup', siteController.GetSignUp)
router.post('/signup', siteController.SubmitSignUp) //
router.use('/', siteController.homeFunc) // app.get/post (path, functionHandler) // path ở đây chỉ có "/" đc hiểu là luôn ping đến trang con sau dấu "/" :[slug], nếu ko có thì ping đến trang hiện tại

module.exports = router