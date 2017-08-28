var express = require('express');
var router = express.Router();

router.get('/index', function (req, res) {
    if (req.session.test) {
        console.log(req.session.test);
    }
    req.session.test = "123";
    res.render('home/index');
});

module.exports = router;