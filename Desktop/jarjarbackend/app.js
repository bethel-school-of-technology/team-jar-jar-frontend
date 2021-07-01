var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var models = require('./models');
var auth = require('./services/auth');

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
    console.log("Mesa DB Sync'd up")
});


app.use(async (req, res, next) => {
    const header = req.headers.authorization;
    
    if (!header){
        return next();
    }

    const token = header.split(' ')[1];

    const user = await auth.verifyUser(token);
    req.user = user;
    next();
});

app.use('/users', usersRouter);
app.use('/sabers', sabersRouter);

module.exports = app;