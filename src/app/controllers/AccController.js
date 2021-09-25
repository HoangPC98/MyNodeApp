
// const { response } = require('express')
const Account = require('../models/Account')
class AccController{
    Registed(req,res,next){
        console.log('đang regggggg')
        Account.findOne({user:req.body.user})
        .then( result => {
            if(result){
                res.json({isDUplicate: true});
            }
            else{
                const formData = req.body
                const storeData = new Account(formData) // tạo ra 1 instance Schema Prodcut mới và đổ data vào Schema
                storeData.save() // lưu lại vào Collection Account 
                console.log('registed',req.body,storeData)
                res.json('OK thêm ACC rồi nhá')
            }
        })
        .catch(err => {
            res.json('Lỗi server')
        })

       
    }
}
module.exports = new AccController