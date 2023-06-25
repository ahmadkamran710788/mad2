var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username:String,
    answers:String,
    questions:[{type:mongoose.SchemaTypes.ObjectId,ref:'Question'}],
    reputation:String,
    email:String,
    password:String,
    location:{type:String,default:"Pakistan"},
    memberSince:{type:String,default:Date().toLocaleString().substring(4,15)},

})

module.exports = mongoose.model("User", userSchema);
