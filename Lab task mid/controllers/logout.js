var express = require('express');
var router = express();

router.get('/',function(req,res){
    req.session.username ="";
    res.redirect('/login');
});

module.exports = router;