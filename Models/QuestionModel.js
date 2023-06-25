var mongoose = require('mongoose');

var QuestionSchema = mongoose.Schema({
    title:String,
    description:String,
    code:String,
    tags:[String],
    answers:[{username:String,email:String,description:String}]
    
},{
  timestamps: true
})

module.exports = mongoose.model("Question", QuestionSchema);
