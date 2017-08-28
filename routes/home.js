var express = require('express');
var router = express.Router();

router.get('/index', function (req, res) {
    res.render('home/index');
});

module.exports = router;