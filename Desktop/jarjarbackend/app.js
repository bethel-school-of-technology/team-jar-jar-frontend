var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var models = require('./models');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var sabersRouter = require('./routes/sabers');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

models.sequelize.sync({ alter:true }).then(function () {
    console.log("Mesa sync'd up wit da DADABAAAASE")
});

app.use('/users', usersRouter);
app.use('/sabers', sabersRouter);

module.exports = app;
