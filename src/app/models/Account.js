// đây là Model cho collection Account

const mongoose = require('mongoose');
var mongooseDelete = require('mongoose-delete');



const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const AccountSchema = new Schema({
    user: {type: String, maxLength: 50 },
    pass: {type: String, maxLength: 50}
}, {timestamps: true})


// Add plugin
AccountSchema.plugin(mongooseDelete, { overrideMethods: 'all' , deletedAt: true});
 
module.exports =  mongoose.model('Account', AccountSchema);  // mongoose.model([Modelname],[SchemaName]) ModelName chính là cái sẽ import để sd ở Module khác
