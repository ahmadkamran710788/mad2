var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var userRouter = require('./routes/user');
var questionRouter = require('./routes/question');

var app = express();
var mongoDB = 'mongodb+srv://sabih:8QM7ybG4jve7Ivjw@cluster0.gm4it89.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', userRouter);
app.use('/question', questionRouter);


module.exports = app;
