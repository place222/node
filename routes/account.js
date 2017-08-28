var express = require('express');
var router = express.Router();

router.get('/login', function (req, res) {
    res.render('account/login', { layout: 'account_layout' });
});

router.post('/login', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    
    res.render('home/index');
});

module.exports = router;