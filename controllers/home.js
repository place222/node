/**
 * HomeController
 * 
 */
module.exports.Index = function (req, res) {
    if (req.session.test) {
        console.log(req.session.test);
    }
    req.session.test = "123";
    res.render('home/index');
};