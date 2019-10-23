var express = require('express');
var router = express();

router.get('/',function(req,res){
    res.render('home/index');
});

module.exports = router;