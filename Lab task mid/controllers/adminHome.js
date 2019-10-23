var express = require('express');
var router = express();

router.get('/',function(req,res){
    if(req.session.username !="")
    {
        var user = {
            name :req.session.username
        }
        res.render('home/index',user);
    }
    else
    {
        res.redirect('/login');
    }
});

module.exports = router;