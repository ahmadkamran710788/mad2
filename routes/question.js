var express = require('express');
const QuestionModel = require('../Models/QuestionModel');
const UserModel = require('../Models/UserModel');
var router = express.Router();

/* GET users listing. */
router.post('/:id/add', function(req, res, next) {
  QuestionModel.create(req.body).then(data=>
    {
      UserModel.findOneAndUpdate(req.params.id,{$push: { questions: data._id }}).
      then(data1=>res.json({'added':true}))})

});
router.get('/', function(req, res, next) {
  QuestionModel.find({}).then(data=>
      res.json({questions:data})
    )
});
router.get('/:question', function(req, res, next) {
  QuestionModel.find({$or : [{"description": { $regex: '.*' + req.params.question + '.*' } },{"title": { $regex: '.*' + req.params.question + '.*' } }]}).exec().then(
    data=>res.json({questions:data})
  )

});
router.put('/:questionid/answer', function(req, res, next) {
  QuestionModel.findByIdAndUpdate(req.params.questionid,{$push:{answers:req.body}}).then(data=>res.json({added:true}))

});

module.exports = router;
