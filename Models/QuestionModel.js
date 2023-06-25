var mongoose = require('mongoose');

var QuestionSchema = mongoose.Schema({
    title:String,
    description:String,
    code:String,
    tags:[String],
    answers:[{username:String,email:String,description:String}]
    createdAt:{type:Date,default:Date.now()}   
})

module.exports = mongoose.model("Question", QuestionSchema);
