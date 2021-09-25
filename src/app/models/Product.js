// đây là Model cho collection Course

const mongoose = require('mongoose');
var mongooseDelete = require('mongoose-delete');

var slug = require('mongoose-slug-generator');


const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
    name: {type: String, maxLength: 50, default: 'Đây là tên mặc định'},
    cate: {type: String, maxLength: 255, default:'Đây là mô tả mặc định'},
    img: {type: String, maxLength: 625, default: 'No Img'},
    quantity : {type: String, maxLength:255},
    price_origin: {type: Number, default:200000000},
    price_saleoff: {type: Number, default:0},
    slug: {type: String, slug: 'name', unique: true}
}, {timestamps: true})


// Add plugin
mongoose.plugin(slug);
ProductSchema.plugin(mongooseDelete, { overrideMethods: 'all' , deletedAt: true});
 
module.exports =  mongoose.model('Product', ProductSchema);  // mongoose.model([Modelname],[SchemaName]) 
// ModelName đc convert để connect đến Collection trong DB ==> tương ứng với tên Collection
// ModelName chính là cái sẽ import để sd ở Module khác
