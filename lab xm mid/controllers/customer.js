var express = require('express');
//var userModel = require('../models/user-model');
var router = express.Router();

router.get('/', function(request, response){
    var data={
        username: request.session.username
    }
    response.render('customer/index', {user:data});
});

router.get('*', function(request, response, next){
    if(request.session.username != ""){
		next();
	}else{
		response.redirect('/logout');
	}
});

module.exports = router;