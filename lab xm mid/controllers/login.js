var express = require('express');
//var adminModel = require('../models/user-model');
var router = express.Router();

router.get('/', function(request, response){
    response.render('login/index');
});

router.post('/', function(request, response){
    if(request.body.submit)
    {
        response.redirect('/registration');
    }
    else
    {
        response.redirect('/login');
    }
});

module.exports = router;