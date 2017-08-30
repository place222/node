/**
 * passport config
 */
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
passport.use('local', new LocalStrategy(
    function (username, password, done) {
        console.log(username);
        console.log(password);
        User.findOne({
            userName: username,
            passWord: password
        }, function (err, user) {
            if (err)
                return done(null, false, {
                    message: 'invalid login'
                });
            console.log(user);
            return done(null, user);
        });
    }
));

passport.serializeUser(function (user, done) { //保存user对象
    done(null, user); //可以通过数据库方式操作
});

passport.deserializeUser(function (user, done) { //删除user对象
    done(null, user); //可以通过数据库方式操作
});



exports.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/account/login');
};