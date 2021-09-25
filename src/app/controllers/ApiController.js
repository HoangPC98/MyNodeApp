
// const { response } = require('express')
const Product = require('../models/Product')
class ApiController{
    ProductApi (req,res,next){
        Product.find({})
            .then(data => {
                res.json(data)
            })
            .catch(next)
    }
}
module.exports = new ApiController