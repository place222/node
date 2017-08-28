var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');
router.get('/login', function (req, res) {
    res.render('account/login', { layout: 'account_layout' });
});

router.post('/login',passport.authenticate('local',{successRedirect:'http://localhost:3000',failureRedirect:'login'}));

module.exports = router;