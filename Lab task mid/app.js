var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var expSession = require('express-session');
var mySql = require('mysql');
var login = require('./controllers/login');
var adminhome = require('./controllers/adminHome');
var logout = require('./controllers/logout');
var app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:false}));
app.use(expSession({secret:"my top secret value", saveUninitialized:true, resave:false}));
app.use('/login',login);
app.use('/home',adminhome);
app.use('/logout',logout);

app.listen(3000, function() {
    console.log('server started at 3000...');
});