// import Model from "../models/course"
const { response } = require('express')
const Product = require('../models/Product')

class ProductController {
    // [GET]
    Create(req, res, next){
        res.render('server/create.hbs')
    }

    get(req, res,next){
        Product.find({}).lean()
            .then(data=>{
                console.log('admin here')
                // res.redirect('/admin/products')
                res.render('server/products',{data})

            })
            .catch(next)

    }

    Update(req, res, next){
        Product.findOne( {_id: req.params.id}, function(err,data){
            if(!err) 
                res.render('server/update',{data})
            else 
                res.status(400).json({err: 'LOI'})
        }).lean()
    }

    Updated(req, res, next){
        console.log('696969')
        // req.params.id = require từ client(POST) có params là /:id // req.body: formData của POST Method chứa các thông tin POST lên khi ấn nút Submit Form
        Product.updateOne({_id: req.params.id}, req.body , function(err, data) {
            if(!err){
                res.redirect('/admin/products');
                console.log('_id:' + req.params.id +'erq.body:' +req.body)
            }
            else    
                res.send('ERROR', err);
        }).lean()
    
    }
    Saved(req, res, next){
        console.log('Saved')
        const formData = req.body  // req.body là phần Form Data lấy đc khi submit Form
        const storeData = new Product(formData) // tạo ra 1 instance Schema Prodcut mới và đổ data vào Schema
        storeData.save() // lưu lại vào DB
        console.log('req.body:' + req.body)
        res.send('Added Product to Database ')
    }

    Delete(req, res, next){
        console.log('delete')
        Product.delete({_id: req.params.id}).lean()
            .then(() => res.redirect('back'))
            .catch(next)
    }
}

module.exports = new ProductController
