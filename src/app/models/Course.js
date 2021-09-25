// đây là Model cho collection Course

const mongoose = require('mongoose');
var mongooseDelete = require('mongoose-delete');

var slug = require('mongoose-slug-generator');


const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const CourseSchema = new Schema({
    name: {type: String, maxLength: 50, default: 'Đây là tên mặc định'},
    description: {type: String, maxLength: 255, default:'Đây là mô tả mặc định'},
    img: {type: String, maxLength: 625, default: 'No Img'},
    videoID : {type: String, maxLength:255},
    slug: {type: String, slug: 'name', unique: true}
}, {timestamps: true})


// Add plugin
mongoose.plugin(slug);
CourseSchema.plugin(mongooseDelete, { overrideMethods: 'all' , deletedAt: true});
 
module.exports =  mongoose.model('Course', CourseSchema);  // mongoose.model([Modelname],[SchemaName]) ModelName chính là cái sẽ import để sd ở Module khác
