var express = require('express');
var userModel = require('../models/user-model');
var router = express.Router();

router.get('/', function(request, response){
    response.render('login/index');
});

router.post('/', function(request, response){
    if(request.body.submit)
    {
        response.redirect('/registration');
    }
    else if(request.body.login)
    {
        var user = {
            username: request.body.uname,
            password: request.body.password
        };
        userModel.validate(user, function(result){
            if(result)
            {
                request.session.username=request.body.uname;
                if(result.type == 1)
                {
                    response.redirect('/admin');
                }
                else if(result.type == 2)
                {
                    response.redirect('/customer');
                }
                else
                {
                    response.redirect('/login');
                }
            }
        });
    }
    else
    {
        response.redirect('/login');
    }
});

module.exports = router;