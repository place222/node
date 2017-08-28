var express = require('express');
//引入express-handlerbars
var exphbs = require('express-handlebars');
//路由模块
var account = require('./routes/account');
var home = require('./routes/home');
//解析器
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
//session
var session = require('express-session');

//
var flash = require('connect-flash');
//passport
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var app = express();

//添加静态资源文件目录
app.use(express.static('public'));


//session 中间件
app.use(cookieParser('session_test'));
app.use(session({
  secret: 'session_test',
  resave: true,
  saveUninitialized: true
}));

//passport
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
passport.use('local', new LocalStrategy(
  function (username, password, done) {
      var user = {
          id: '1',
          username: 'admin',
          password: 'pass'
      }; // 可以配置通过数据库方式读取登陆账号

      if (username !== user.username) {
          return done(null, false, { message: 'Incorrect username.' });
      }
      if (password !== user.password) {
          return done(null, false, { message: 'Incorrect password.' });
      }

      return done(null, user);
  }
));
passport.serializeUser(function (user, done) {//保存user对象
  done(null, user);//可以通过数据库方式操作
});

passport.deserializeUser(function (user, done) {//删除user对象
  done(null, user);//可以通过数据库方式操作
});
//模板引擎
var hbs = exphbs.create({
  defaultLayout: 'layout',
  layoutsDir: app.get('views') + '/layouts',
  partialsDir: app.get('views') + '/partials',
  helpers: {
    css: function (str, option) {
      var cssList = this.cssList || [];
      str = str.split(/[,，;；]/);
      // console.log('css: ', str);
      str.forEach(function (item) {
        if (cssList.indexOf(item) < 0) {
          cssList.push(item);
        }
      });
      this.cssList = cssList.concat();
    },
    js: function (str, option) {
      var jsList = this.jsList || [];
      str = str.split(/[,，;；]/);
      // console.log('css: ', str);
      str.forEach(function (item) {
        if (jsList.indexOf(item) < 0) {
          jsList.push(item);
        }
      });
      this.jsList = jsList.concat();
    }
  }
})
app.set('views', './views');
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//body 解析
app.use(bodyParser());
//路由模块
app.get('/', function (req, res) {
  res.render('index');
});
app.use('/account', account);
app.use('/home', home);

var server = app.listen(3000, function () {

  var host = server.address().address;  
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});