var express = require('express');
var router = express.Router();

router.get('/list', function (req, res) {
    res.render('area/list', {
        layout: false
    });
});

module.exports = router;