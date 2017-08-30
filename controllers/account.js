var user = require('../models/user');
var passport = require('passport');

/**
 * 
 */
module.exports.getLogin = function (req, res) {
    res.render('account/login', {
        layout: 'account_layout'
    });
};

module.exports.postLogin = function (req, res, next) {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            req.flash('errors', info);
            return res.redirect('/account/login');
        }
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            req.flash('success', {
                msg: 'Success! You are logged in.'
            });
            res.redirect(req.session.returnTo || '/');
        });
    })(req, res, next);
};

module.exports.Logout = function (req, res) {

}

module.exports.userList = function (req, res) {
    res.render('account/list',{layout:false});
}