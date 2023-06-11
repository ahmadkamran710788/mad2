var mongoose = require('mongoose');

var QuestionSchema = mongoose.Schema({
    title:String,
    description:String,
    code:String,
    tags:[String],
    answers:[{username:String,email:String,answers:String}]
    
})

module.exports = mongoose.model("Question", QuestionSchema);