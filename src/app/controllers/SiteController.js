// import ThisCourse from "../models/course"
const Account = require('../models/Account')
const Product = require('../models/Product')

var jwt = require('jsonwebtoken')
class SiteController {

    // [GET] /new/new-child
    Slug(req,res){
        res.send('Show New Slug')
    }
    // [GET] /
    homeFunc(req,res,next){
        console.log('render log form')
        res.render('LogForm')
    }

    HomeClient(req, res,next){
        res.render('client/home_body.hbs')
        next()
    }

    GetLogin(req,res){
        console.log('Get locgin')
        res.render('LogForm')
    }

    SubmitLogin(req, res, next){

        Account.findOne({email: req.body.username, password: req.body.password})
            .then( (data) => {
                if(data){
                    console.log('database',data)
                    var token = jwt.sign({data: data._id}, 'secret')
                    console.log('TOKENNNNNNNNNNNNN',token)
                    res.cookie('tokenjwt', token)
                    .render('client/home_body',{dataDocument:data.username})
                }
                else if(req.body.user == 'admin', req.body.password=='admin123'){
                    res.redirect('/admin/products')
                }
                else{
                    res.render('LogForm',{error:'Đăng nhập thất bại, Tên đăng nhập hoặc mật khẩu không đúng'})
                }
            })
            // .catch((err) => {
            //     res.json({'err SERVER ': err})
            // });

    }

    NextWhenLoginSubmitted(req,res, next){
        console.log('NEXTTTTTTTT')
        return res.render('client/home_body.hbs')
        console.log('NEXT222222222222')

        next()
    }

    GetSignUp(req, res, next){
        res.render('SignInForm')
    }

    SubmitSignUp(req, res, next){
        console.log('đang regggggg')
        Account.findOne({email:req.body.email})
        .then( result => {
            if(result){
                console.log('trùng user ')
                res.render('SignInForm', {error: "Username đã tồn tại, vui lòng điền lại thông tin"})
            }
            else{
                console.log('okok user ')
                const formData = req.body
                const storeData = new Account(formData) // tạo ra 1 instance Schema Prodcut mới và đổ data vào Schema
                storeData.save() // lưu lại vào Collection Account 
                console.log('registed',req.body,storeData)
                res.send('<h2> Đăng kí thành công <a href="/login">   Đăng nhập ngay</a></h2>')
            }
        })
        .catch(err => {
            res.json('Lỗi server')
        })
    }
}

module.exports = new SiteController 