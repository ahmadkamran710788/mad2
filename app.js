var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var userRouter = require('./routes/user');
var questionRouter = require('./routes/question');

var app = express();
var mongoDB = 'mongodb+srv://ahmadkamran710788:h71lLNpMHmxQxaHM@cluster0.ieeoda4.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoDB);


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', userRouter);
app.use('/question', questionRouter);


module.exports = app;
