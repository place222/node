/**
 * 模块的依赖
 */
var express = require('express');
var expressStatusMonitor = require('express-status-monitor');
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var passport = require('passport');

/**
 * controller
 */
var accountController = require('./controllers/account');
var homeController = require('./controllers/home');
var areaController = require('./controllers/area');

/**
 * config
 */
var passportConfig = require('./config/passport');
var handlebarsConfig = require('./config/handlebars');

var app = express();

/**
 * 中间件
 */
app.use(express.static('public')); //添加静态资源文件目录
app.use(cookieParser('session_test')); //session 中间件
app.use(session({
  secret: 'session_test',
  resave: true,
  saveUninitialized: true
}));

//passport
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
//handlebars
app.set('views', './views');
app.engine('handlebars', handlebarsConfig.engine);
app.set('view engine', 'handlebars');

//body 解析
app.use(bodyParser());

app.use(expressStatusMonitor());
/**
 * controller route
 */
app.get('/', passportConfig.isAuthenticated, homeController.Index);
app.get('/account/login', accountController.getLogin);
app.get('/account/list', accountController.userList);
app.post('/account/login', accountController.postLogin);
app.get('/account/logout',accountController.Logout);
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});