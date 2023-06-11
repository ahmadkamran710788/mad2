var express = require('express');
const UserModel = require('../Models/UserModel');
var router = express.Router();

 
router.post('/login1', function(req, res, next) {
  UserModel.findOne({username:req.body.username,password:req.body.password}).then(data=>{
    if(data)res.json({loggedin:true,user:data})
    else res.json({loggedin:false})
    }
    )
});
router.post('/signUp', function(req, res, next) {
  UserModel.create({username:req.body.username,password:req.body.password}).then(data=>{
    if(data)res.json({added:true})
    else res.json({added:false})
    }
    )
});
router.get('/:id', function(req, res, next) {
  UserModel.findById(req.params.id)
  .populate('questions')
  .then(data=>{
    res.json({user:data})
    }
    )
});

module.exports = router;
