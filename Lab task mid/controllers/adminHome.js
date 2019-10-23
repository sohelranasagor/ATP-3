var express = require('express');
var router = express();

router.get('/',function(req,res){
    if(req.session.username !="")
    {
        res.render('home/index');
    }
    else
    {
        res.redirect('/login');
    }
});

module.exports = router;