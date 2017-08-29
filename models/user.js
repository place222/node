var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodeapp');

var UserInformation = mongoose.Schema({
    phone: String,
    id: String,
    nickName: String,
    gender: Boolean,
    jobTitle: String,
    duties: String,
    nation: String,
    highestEdu: String,
    graduateSchool: String,
    major: String,
    userLogo: String
});
var UserSchema = mongoose.Schema({
    userName: String,
    passWord: String,
    isActive: Boolean,
    isDelete: Boolean,
    createTime: Date,
    userInfomation: UserInformation
});

var user = mongoose.model('User', UserSchema);

var u = new user({
    userName: 'test',
    passWord: '123',
    isActive: true,
    isDelete: false,
    createTime: Date.now(),
    userInfomation: {
        phone: '1234',
        id: '12332131231',
        nickName: 'sdfsdfsfds'
    }
});
//<!>看看这个里面的嵌套的文档递归怎么自引用
u.save(function (err) {
    console.log(err);
});


module.exports = user;