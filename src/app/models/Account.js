// đây là Model cho collection Account

const mongoose = require('mongoose');
var mongooseDelete = require('mongoose-delete');



const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const AccountSchema = new Schema({
    username: {type: String, maxLength: 50 },
    email: {type: String, maxLength:50},
    password: {type: String, maxLength: 50}
}, {timestamps: true})


// Add plugin
AccountSchema.plugin(mongooseDelete, { overrideMethods: 'all' , deletedAt: true});
 
module.exports =  mongoose.model('Account', AccountSchema);  // mongoose.model([Modelname],[SchemaName]) ModelName chính là cái sẽ import để sd ở Module khác
