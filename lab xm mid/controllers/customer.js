var express = require('express');
//var userModel = require('../models/user-model');
var router = express.Router();

router.get('/', function(request, response){
    var data={
        username: request.session.username
    }
    response.render('customer/index', {user:data});
});

module.exports = router;