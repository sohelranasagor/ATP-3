var express = require('express');
var router = express();

router.get('/',function(req,res){
    res.render('login/index');
});

router.post('/',function(req,res){
    if(req.body.submit)
    {
        if(req.body.username != "" && req.body.password !="")
        {
            req.session.username = req.body.username;
            res.redirect('/home');
        }
        else
        {
            res.redirect('/login');
        }
    }
});


module.exports = router;