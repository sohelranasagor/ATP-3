var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var expSession = require('express-session');
var login = require('./controllers/login');
var registration = require('./controllers/registration');
var app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(expSession({secret:'my top secret value',saveUninitialized:true,resave:false}));
app.use('/login', login);
app.use('/registration', registration);

app.listen(3000,function(){
    console.log('server started at 3000...');
})