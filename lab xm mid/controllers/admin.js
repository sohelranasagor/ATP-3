var express = require('express');
var adminModel = require('../models/admin-model');
var router = express.Router();

router.get('/', function(request, response){
    var data={
        username: request.session.username
    }
    response.render('admin/index', {user:data});
});

router.get('*', function(request, response, next){
    if(request.session.username != ""){
		next();
	}else{
		response.redirect('/logout');
	}
});

router.get('/addcategory',function(request, response){
    response.render('admin/addproduct');
});

router.post('/addcategory',function(request, response){
    var user = {
		category: request.body.category      
	};

	adminModel.insertCategory(user, function(status){
		
		if(status){
            response.redirect('/addsubcategory');
			
		}else{
			response.redirect('/admin');
		}
	});
});

module.exports = router;